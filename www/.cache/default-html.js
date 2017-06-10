"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesStr = void 0;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = _react2.default.createClass({
  displayName: "exports",

  render() {
    var css = void 0;
    if (process.env.NODE_ENV === `production`) {
      css = _react2.default.createElement("style", {
        id: "gatsby-inlined-css",
        dangerouslySetInnerHTML: { __html: stylesStr }
      });
    }
    return _react2.default.createElement(
      "html",
      null,
      _react2.default.createElement(
        "head",
        null,
        _react2.default.createElement("meta", { charSet: "utf-8" }),
        _react2.default.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
        _react2.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }),
        _react2.default.createElement(
          "title",
          null,
          "Gatsby.js"
        ),
        this.props.headComponents,
        css
      ),
      _react2.default.createElement(
        "body",
        null,
        _react2.default.createElement("div", {
          id: "___gatsby",
          dangerouslySetInnerHTML: { __html: this.props.body }
        }),
        this.props.postBodyComponents
      )
    );
  }
});
//# sourceMappingURL=default-html.js.map