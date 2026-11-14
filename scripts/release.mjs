// Publishes a new game version: uploads the installer as a GitHub Release and updates src/data/release.json,
// so every Download button on the site points at it.
//
//   npm run release -- 1.0.3                    (uses ../SketchyBusiness/dist/SketchyBusiness-Setup-1.0.3.exe)
//   npm run release -- 1.0.3 path\to\Setup.exe  (any installer file)
//   npm run release -- 1.0.3 --notes "Fixed the ruler."
//
// Needs the GitHub CLI (gh), logged in. Then commit and push release.json so the site shows the new version number.
// The Download link itself (releases/latest/download/...) switches to the new file as soon as the release is up.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync, writeFileSync, copyFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const notesAt = args.indexOf("--notes");
const notes = notesAt >= 0 ? args.splice(notesAt, 2)[1] : "";
const [version, given] = args;
if (!/^\d+\.\d+\.\d+$/.test(version ?? "")) {
  console.error("usage: npm run release -- <version like 1.0.3> [installer.exe] [--notes \"...\"]");
  process.exit(1);
}
const exe = resolve(given ?? join(root, "..", "SketchyBusiness", "dist", `SketchyBusiness-Setup-${version}.exe`));
if (!existsSync(exe)) {
  console.error(`installer not found: ${exe}\nbuild it first: python tools/make_installer.py ${version}`);
  process.exit(1);
}

const dataFile = join(root, "src", "data", "release.json");
const release = JSON.parse(readFileSync(dataFile, "utf8"));

// The asset always has the same name, so https://github.com/<repo>/releases/latest/download/<asset> never changes.
const staged = join(mkdtempSync(join(tmpdir(), "sb-release-")), release.asset);
copyFileSync(exe, staged);

const tag = `v${version}`;
const body = notes || `Sketchy Business ${version} for Windows 10 & 11.\n\nDownload **${release.asset}** below, run it, and follow the wizard. If Windows shows "Windows protected your PC", click More info, then Run anyway.`;
console.log(`uploading ${exe} as ${release.asset} to ${release.repo} ${tag}...`);
execFileSync("gh", ["release", "create", tag, staged, "--repo", release.repo, "--title", `Sketchy Business ${version}`, "--notes", body, "--latest"], { stdio: "inherit" });

release.version = version;
release.date = new Date().toISOString().slice(0, 10);
release.sizeMB = Math.round(statSync(exe).size / 1024 / 1024);
writeFileSync(dataFile, JSON.stringify(release, null, 2) + "\n");
console.log(`done. release.json -> ${version}. Commit and push it so the site shows the new version.`);
