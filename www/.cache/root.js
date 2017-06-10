"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactRouterScroll = require("react-router-scroll");

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _apiRunnerBrowser = require("./api-runner-browser");

var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);

var _syncRequires = require("./sync-requires");

var _syncRequires2 = _interopRequireDefault(_syncRequires);

var _pages = require("./pages.json");

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

function attachToHistory(history) {
  window.___history = history;

  history.listen(function (location, action) {
    (0, _apiRunnerBrowser2.default)(`onRouteUpdate`, { location, action });
  });
}

function shouldUpdateScroll(prevRouterProps, _ref) {
  var pathname = _ref.location.pathname;

  var results = (0, _apiRunnerBrowser2.default)(`shouldUpdateScroll`, {
    prevRouterProps,
    pathname
  });
  if (results.length > 0) {
    return results[0];
  }

  if (prevRouterProps) {
    var oldPathname = prevRouterProps.location.pathname;

    if (oldPathname === pathname) {
      return false;
    }
  }
  return true;
}

var $ = _react2.default.createElement;

var noMatch = _pages2.default.find(function (r) {
  return r.path === `/dev-404-page/`;
});

var addNotFoundRoute = function addNotFoundRoute() {
  if (noMatch) {
    return (0, _react.createElement)(_reactRouterDom.Route, {
      key: `404-page`,
      component: function component(props) {
        return (0, _react.createElement)(_syncRequires2.default.components[noMatch.componentChunkName], (0, _extends3.default)({}, props, _syncRequires2.default.json[noMatch.jsonName]));
      }
    });
  } else {
    return null;
  }
};

var navigateTo = function navigateTo(pathname) {
  window.___history.push(pathname);
};

window.___navigateTo = navigateTo;

var AltRouter = (0, _apiRunnerBrowser2.default)(`replaceRouterComponent`, { history })[0];
var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: history },
    children
  );
};

// Use default layout if one isn't set.
var layout = void 0;
if (_syncRequires2.default.layouts[`index`]) {
  layout = _syncRequires2.default.layouts[`index`];
} else {
  layout = function layout(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
      "div",
      null,
      children()
    );
  };
}

var Root = function Root() {
  return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_reactRouterScroll.ScrollContext, { shouldUpdateScroll }, (0, _react.createElement)((0, _reactRouterDom.withRouter)(layout), {
    children: function children(layoutProps) {
      return (0, _react.createElement)(_reactRouterDom.Route, {
        render: function render(routeProps) {
          attachToHistory(routeProps.history);

          var props = layoutProps ? layoutProps : routeProps;
          var page = _pages2.default.find(function (page) {
            if (page.matchPath) {
              // Try both the path and matchPath
              return (0, _reactRouterDom.matchPath)(props.location.pathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(props.location.pathname, {
                path: page.matchPath
              });
            } else {
              return (0, _reactRouterDom.matchPath)(props.location.pathname, {
                path: page.path,
                exact: true
              });
            }
          });
          if (page) {
            return (0, _react.createElement)(_syncRequires2.default.components[page.componentChunkName], (0, _extends3.default)({}, props, _syncRequires2.default.json[page.jsonName]));
          } else {
            return addNotFoundRoute();
          }
        }
      });
    }
  }))

  // Let site, plugins wrap the site e.g. for Redux.
  );
};var WrappedRoot = (0, _apiRunnerBrowser2.default)(`wrapRootComponent`, { Root }, Root)[0];

exports.default = WrappedRoot;
//# sourceMappingURL=root.js.map