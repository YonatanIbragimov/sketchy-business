import release from "./release.json";

export { release };
// "latest/download" always points at the newest GitHub Release, so links never go stale.
export const downloadUrl = `https://github.com/${release.repo}/releases/latest/download/${release.asset}`;
export const releasesUrl = `https://github.com/${release.repo}/releases`;
