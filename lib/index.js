"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = require("react-dom");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RENDER_CONTAINER_ID = '__REACT_RENDERED_SIZE_CONTAINER__';
var DEFAULT_CONTAINER_ELEMENT = 'div';

var getMainContainer = function getMainContainer(containerId) {
  if (typeof document === 'undefined') {
    return;
  }

  return document.getElementById(containerId) || createMainContainer();
};

var createMainContainer = function createMainContainer() {
  if (typeof document === 'undefined') {
    return;
  }

  var container = document.createElement(DEFAULT_CONTAINER_ELEMENT);
  container.id = RENDER_CONTAINER_ID;
  container.style.left = '-10000px';
  container.style.position = 'absolute';
  container.style.top = '-10000px';
  container.style.visibility = 'hidden';
  document.body.appendChild(container);
  return container;
};

var _default = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var element, containerWidth, _ref$containerElement, containerElementTag, _ref$containerId, containerId, renderContainer, mainContainer, size;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element = _ref.element, containerWidth = _ref.containerWidth, _ref$containerElement = _ref.containerElementTag, containerElementTag = _ref$containerElement === void 0 ? DEFAULT_CONTAINER_ELEMENT : _ref$containerElement, _ref$containerId = _ref.containerId, containerId = _ref$containerId === void 0 ? RENDER_CONTAINER_ID : _ref$containerId;

            if (!(typeof document === 'undefined')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            renderContainer = document.createElement(containerElementTag);
            mainContainer = getMainContainer(containerId);

            if (mainContainer) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            mainContainer.appendChild(renderContainer);
            renderContainer.style.width = "".concat(containerWidth, "px");
            _context.next = 11;
            return new Promise(function (resolve, reject) {
              (0, _reactDom.render)(element, renderContainer, function () {
                setTimeout(function () {
                  var rendered = renderContainer.firstChild;

                  if (rendered) {
                    resolve({
                      height: rendered.offsetHeight,
                      width: rendered.offsetWidth
                    });
                  } else {
                    resolve({});
                  }
                }, 200);
              });
            });

          case 11:
            size = _context.sent;
            mainContainer.removeChild(renderContainer);
            return _context.abrupt("return", size);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;