function UUID() {
  return window.URL.createObjectURL(new Blob([])).match(/\/\/.*\/(.*)/)[1]
}
