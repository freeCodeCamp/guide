// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/kuriakinzeng/Developer/fcc/guides/.cache/dev-404-page.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/kuriakinzeng/Developer/fcc/guides/.cache/json/dev-404-page.json")
}

exports.layouts = {

}