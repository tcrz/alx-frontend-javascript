export default function loadBalancer(chinaDownload, USDownload) {
  const result = Promise.any([chinaDownload, USDownload]).then((value) => value);
  return result;
}
