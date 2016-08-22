function UUID() {
  var urlObj = window.URL.createObjectURL(new Blob([]));
  var uuid = urlObj.match(/\/\/.*\/(.*)/)[1];
  window.URL.revokeObjectURL(urlObj);
  return uuid;
}
