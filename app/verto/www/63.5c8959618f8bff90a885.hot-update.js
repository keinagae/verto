webpackHotUpdate(63,{

/***/ "./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js\");\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_ConfigManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/ConfigManager */ \"./src/util/ConfigManager.js\");\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'StorageSync',\n  mounted: function mounted() {\n    var _this = this;\n\n    return _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var routerLoaded, call, qr, lastRoute, hasConfig;\n      return _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('route loaded');\n              sessionStorage.setItem('router_loaded', true);\n              routerLoaded = sessionStorage.getItem('app_started');\n\n              if (!(routerLoaded == null)) {\n                _context.next = 5;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 5:\n              call = localStorage.getItem('call_request');\n              qr = localStorage.getItem('wallet_connect_svg');\n\n              if (!call) {\n                _context.next = 13;\n                break;\n              }\n\n              localStorage.removeItem('call_request');\n              call = JSON.parse(call);\n\n              _this.$router.push({\n                name: 'connectv1',\n                params: {\n                  txObject: call.params[0]\n                }\n              });\n\n              _context.next = 37;\n              break;\n\n            case 13:\n              if (!qr) {\n                _context.next = 18;\n                break;\n              }\n\n              localStorage.removeItem('wallet_connect_svg');\n\n              _this.$router.push({\n                name: 'connectv1',\n                params: {\n                  qr: qr\n                }\n              });\n\n              _context.next = 37;\n              break;\n\n            case 18:\n              if (!localStorage.getItem('sync_data')) {\n                _context.next = 22;\n                break;\n              }\n\n              _this.$router.push({\n                name: 'syncExtensionWallet'\n              });\n\n              _context.next = 37;\n              break;\n\n            case 22:\n              lastRoute = localStorage.getItem('last_route') ? JSON.parse(localStorage.getItem('last_route')) : null;\n\n              if (!(lastRoute && _this.$route.name !== lastRoute.name && !['connectv1', 'storesync'].includes(lastRoute.name))) {\n                _context.next = 28;\n                break;\n              }\n\n              console.log('loading existing route ', lastRoute.path);\n\n              _this.$router.push({\n                name: lastRoute.name,\n                query: lastRoute.query,\n                params: lastRoute.params\n              });\n\n              _context.next = 37;\n              break;\n\n            case 28:\n              if (!(_this.$store.state.currentwallet && _this.$store.state.currentwallet.loggedIn === true)) {\n                _context.next = 33;\n                break;\n              }\n\n              console.log('moving to dashboard');\n\n              _this.$router.push({\n                path: '/verto/dashboard'\n              });\n\n              _context.next = 37;\n              break;\n\n            case 33:\n              _context.next = 35;\n              return _util_ConfigManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hasVertoConfig();\n\n            case 35:\n              hasConfig = !!_context.sent;\n\n              if (!hasConfig) {\n                console.log('moving to setup');\n\n                _this.$router.push({\n                  name: 'setup',\n                  params: {\n                    showConfigStep: true\n                  }\n                });\n              } else {\n                console.log('moving to login');\n\n                _this.$router.push({\n                  name: 'login'\n                });\n              }\n\n            case 37:\n              document.querySelector('#preloader').style.display = 'none';\n\n            case 38:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAvbGliL3dlYnBhY2svbG9hZGVyLnRyYW5zZm9ybS1xdWFzYXItaW1wb3J0cy5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZXMvVmVydG8vYmV4L1N0b3JhZ2VTeW5jLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVmVydG8vYmV4L1N0b3JhZ2VTeW5jLnZ1ZT9lNmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCIvVXNlcnMvYmVydGhvbnkvRG9jdW1lbnRzL1ZlcnRvL2FwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9yZWdlbmVyYXRvclwiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZVwiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIi9Vc2Vycy9iZXJ0aG9ueS9Eb2N1bWVudHMvVmVydG8vYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiO1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuaW1wb3J0IGNvbmZpZ01hbmFnZXIgZnJvbSAnQC91dGlsL0NvbmZpZ01hbmFnZXInO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU3RvcmFnZVN5bmMnLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciByb3V0ZXJMb2FkZWQsIGNhbGwsIHFyLCBsYXN0Um91dGUsIGhhc0NvbmZpZztcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZSBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncm91dGVyX2xvYWRlZCcsIHRydWUpO1xuICAgICAgICAgICAgICByb3V0ZXJMb2FkZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhcHBfc3RhcnRlZCcpO1xuXG4gICAgICAgICAgICAgIGlmICghKHJvdXRlckxvYWRlZCA9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBjYWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGxfcmVxdWVzdCcpO1xuICAgICAgICAgICAgICBxciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3YWxsZXRfY29ubmVjdF9zdmcnKTtcblxuICAgICAgICAgICAgICBpZiAoIWNhbGwpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FsbF9yZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgIGNhbGwgPSBKU09OLnBhcnNlKGNhbGwpO1xuXG4gICAgICAgICAgICAgIF90aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nvbm5lY3R2MScsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eE9iamVjdDogY2FsbC5wYXJhbXNbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGlmICghcXIpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnd2FsbGV0X2Nvbm5lY3Rfc3ZnJyk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29ubmVjdHYxJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHFyOiBxclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM3O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3luY19kYXRhJykpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzeW5jRXh0ZW5zaW9uV2FsbGV0J1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBsYXN0Um91dGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdF9yb3V0ZScpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdF9yb3V0ZScpKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgaWYgKCEobGFzdFJvdXRlICYmIF90aGlzLiRyb3V0ZS5uYW1lICE9PSBsYXN0Um91dGUubmFtZSAmJiAhWydjb25uZWN0djEnLCAnc3RvcmVzeW5jJ10uaW5jbHVkZXMobGFzdFJvdXRlLm5hbWUpKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGV4aXN0aW5nIHJvdXRlICcsIGxhc3RSb3V0ZS5wYXRoKTtcblxuICAgICAgICAgICAgICBfdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGxhc3RSb3V0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBsYXN0Um91dGUucXVlcnksXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBsYXN0Um91dGUucGFyYW1zXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgIGlmICghKF90aGlzLiRzdG9yZS5zdGF0ZS5jdXJyZW50d2FsbGV0ICYmIF90aGlzLiRzdG9yZS5zdGF0ZS5jdXJyZW50d2FsbGV0LmxvZ2dlZEluID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmcgdG8gZGFzaGJvYXJkJyk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3ZlcnRvL2Rhc2hib2FyZCdcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM3O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM1O1xuICAgICAgICAgICAgICByZXR1cm4gY29uZmlnTWFuYWdlci5oYXNWZXJ0b0NvbmZpZygpO1xuXG4gICAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgICBoYXNDb25maWcgPSAhIV9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKCFoYXNDb25maWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW92aW5nIHRvIHNldHVwJyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3NldHVwJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlnU3RlcDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmcgdG8gbG9naW4nKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlKTtcbiAgICB9KSkoKTtcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js&\n");

/***/ })

})