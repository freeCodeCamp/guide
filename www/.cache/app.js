"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require("react-hot-loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRunner = require(`./api-runner-browser`
// Let the site/plugins run code very early.
);apiRunner(`onClientEntry`);

/**
 * Service Workers are persistent by nature. They stick around,
 * serving a cached version of the site if they aren't removed.
 * This is especially frustrating when you need to test the
 * production build on your local machine.
 *
 * Let's unregister the service workers in development, and tidy up a few errors.
 */
if (`serviceWorker` in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(registrations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var registration = _step.value;

        registration.unregister();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}

var rootElement = document.getElementById(`___gatsby`);

var Root = require(`./root`);
if (Root.default) {
  Root = Root.default;
}

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(Root, null)
), rootElement);

if (module.hot) {
  module.hot.accept(`./root`, function () {
    var NextRoot = require(`./root`);
    if (NextRoot.default) {
      NextRoot = NextRoot.default;
    }
    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextRoot, null)
    ), rootElement);
  });
}
//# sourceMappingURL=app.js.map