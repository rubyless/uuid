function UUID() {
    var objectURL = window.URL || window.webkitURL
    var urlObj = objectURL.createObjectURL(new Blob([]));
    var uuid = urlObj.match(/\/\/.*\/(.*)/)[1];
    objectURL.revokeObjectURL(urlObj);
    return uuid;
}
