"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _apiRunnerBrowser = require("./api-runner-browser");

var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require("react-router-dom");

var _reactRouterScroll = require("react-router-scroll");

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _pages = require("./pages.json");

var _pages2 = _interopRequireDefault(_pages);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _asyncRequires = require("./async-requires");

var _asyncRequires2 = _interopRequireDefault(_asyncRequires);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Let the site/plugins run code very early.
(0, _apiRunnerBrowser2.default)(`onClientEntry`);

window.matchPath = _reactRouterDom.matchPath;

// Find page
var findPage = function findPage(pathname) {
  var foundPage = void 0;
  // Array.prototype.find is not supported in IE so we use this somewhat odd
  // work around.
  _pages2.default.some(function (page) {
    if (page.matchPath) {
      // Try both the path and matchPath
      if ((0, _reactRouterDom.matchPath)(pathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(pathname, {
        path: page.matchPath
      })) {
        foundPage = page;
        return true;
      }
    } else {
      if ((0, _reactRouterDom.matchPath)(pathname, {
        path: page.path,
        exact: true
      })) {
        foundPage = page;
        return true;
      }
    }

    return false;
  });

  return foundPage;
};

// Load scripts
var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};
var scriptsCache = {};
var loadScriptsForPath = function loadScriptsForPath(path) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var page = findPage(path);

  var scripts = {
    layout: false,
    component: false,
    pageData: false
  };

  if (!page) {
    return cb(scripts);
  }

  if (scriptsCache[page.path]) {
    return cb(scriptsCache[page.path]);
  }

  var loaded = function loaded() {
    if (scripts.layout !== false && scripts.component !== false && scripts.pageData !== false) {
      scriptsCache[page.path] = scripts;
      cb(scripts);
    }
  };

  // Load layout file.
  if (_asyncRequires2.default.layouts.index) {
    _asyncRequires2.default.layouts.index(function (layout) {
      scripts.layout = preferDefault(layout);
      loaded();
    });
  } else {
    scripts.layout = ``;
    loaded();
  }

  _asyncRequires2.default.components[page.componentChunkName](function (component) {
    scripts.component = preferDefault(component);
    loaded();
  });

  _asyncRequires2.default.json[page.jsonName](function (pageData) {
    scripts.pageData = pageData;
    loaded();
  });
};

var navigateTo = function navigateTo(pathname) {
  loadScriptsForPath(pathname, function () {
    window.___history.push(pathname);
  });
};

window.___loadScriptsForPath = loadScriptsForPath;
window.___navigateTo = navigateTo;

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

// Load 404 page component and scripts
var notFoundScripts = void 0;
loadScriptsForPath(`/404.html`, function (scripts) {
  notFoundScripts = scripts;
});

var renderPage = function renderPage(props) {
  var page = findPage(props.location.pathname);
  if (page) {
    var pageCache = scriptsCache[page.path];

    (0, _invariant2.default)(pageCache, `Page cache miss at ${props.location.pathname} for key ${page.path}. Available keys: ${(0, _keys2.default)(scriptsCache)}`);

    return (0, _react.createElement)(pageCache.component, (0, _extends3.default)({}, props, pageCache.pageData));
  } else if (notFoundScripts) {
    return (0, _react.createElement)(notFoundScripts.component, (0, _extends3.default)({}, props, notFoundScripts.pageData));
  } else {
    return null;
  }
};

var AltRouter = (0, _apiRunnerBrowser2.default)(`replaceRouterComponent`, { history })[0];
var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: history },
    children
  );
};

loadScriptsForPath(window.location.pathname, function (scripts) {
  // Use default layout if one isn't set.
  var layout = void 0;
  if (scripts.layout) {
    layout = scripts.layout;
  } else {
    layout = function layout(props) {
      return _react2.default.createElement(
        "div",
        null,
        props.children()
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
            return renderPage(props);
          }
        });
      }
    })));
  };

  var NewRoot = (0, _apiRunnerBrowser2.default)(`wrapRootComponent`, { Root }, Root)[0];
  _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== `undefined` ? document.getElementById(`___gatsby`) : void 0);
});
//# sourceMappingURL=production-app.js.map