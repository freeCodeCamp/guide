"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// From gatsby-plugin-react-helmet.
exports.onRenderBodyResults = function (_ref, pluginOptions) {
  var headComponents = _ref.headComponents,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ["headComponents"]);

  return (0, _extends3.default)({}, otherProps, {
    headComponents: headComponents.concat([_reactHelmet2.default.title.toComponent(), _reactHelmet2.default.meta.toComponent(), _reactHelmet2.default.link.toComponent()])
  });
};
//# sourceMappingURL=test.js.map