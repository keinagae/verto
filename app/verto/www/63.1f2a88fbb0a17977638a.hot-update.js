webpackHotUpdate(63,{

/***/ "./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js\");\n/* harmony import */ var _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_ConfigManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/ConfigManager */ \"./src/util/ConfigManager.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'StorageSync',\n  mounted: function mounted() {\n    var _this = this;\n\n    return _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var routerLoaded, call, qr, lastRoute, hasConfig;\n      return _Users_berthony_Documents_Verto_app_node_modules_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('route loaded');\n              sessionStorage.setItem('router_loaded', true);\n              routerLoaded = sessionStorage.getItem('app_started');\n\n              if (!(routerLoaded == null)) {\n                _context.next = 5;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 5:\n              call = localStorage.getItem('call_request');\n              qr = localStorage.getItem('wallet_connect_svg');\n\n              if (!call) {\n                _context.next = 13;\n                break;\n              }\n\n              localStorage.removeItem('call_request');\n              call = JSON.parse(call);\n\n              _this.$router.push({\n                name: 'connectv1',\n                params: {\n                  txObject: call.params[0]\n                }\n              });\n\n              _context.next = 38;\n              break;\n\n            case 13:\n              if (!qr) {\n                _context.next = 18;\n                break;\n              }\n\n              localStorage.removeItem('wallet_connect_svg');\n\n              _this.$router.push({\n                name: 'connectv1',\n                params: {\n                  qr: qr\n                }\n              });\n\n              _context.next = 38;\n              break;\n\n            case 18:\n              if (!localStorage.getItem('sync_data')) {\n                _context.next = 22;\n                break;\n              }\n\n              _this.$router.push({\n                name: 'syncExtensionWallet'\n              });\n\n              _context.next = 38;\n              break;\n\n            case 22:\n              if (true) {\n                _context.next = 38;\n                break;\n              }\n\n              lastRoute = localStorage.getItem('last_route') ? JSON.parse(localStorage.getItem('last_route')) : null;\n\n              if (true) {\n                _context.next = 29;\n                break;\n              }\n\n              console.log('loading existing route ', lastRoute.path);\n\n              _this.$router.push({\n                name: lastRoute.name,\n                query: lastRoute.query,\n                params: lastRoute.params\n              });\n\n              _context.next = 38;\n              break;\n\n            case 29:\n              if (!(_this.$store.state.currentwallet && _this.$store.state.currentwallet.loggedIn === true)) {\n                _context.next = 34;\n                break;\n              }\n\n              console.log('moving to dashboard');\n\n              _this.$router.push({\n                path: '/verto/dashboard'\n              });\n\n              _context.next = 38;\n              break;\n\n            case 34:\n              _context.next = 36;\n              return _util_ConfigManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hasVertoConfig();\n\n            case 36:\n              hasConfig = !!_context.sent;\n\n              if (!hasConfig) {\n                console.log('moving to setup');\n\n                _this.$router.push({\n                  name: 'setup',\n                  params: {\n                    showConfigStep: true\n                  }\n                });\n              } else {\n                console.log('moving to login');\n\n                _this.$router.push({\n                  name: 'login'\n                });\n              }\n\n            case 38:\n              document.querySelector('#preloader').style.display = 'none';\n\n            case 39:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAvbGliL3dlYnBhY2svbG9hZGVyLnRyYW5zZm9ybS1xdWFzYXItaW1wb3J0cy5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZXMvVmVydG8vYmV4L1N0b3JhZ2VTeW5jLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVmVydG8vYmV4L1N0b3JhZ2VTeW5jLnZ1ZT9lNmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCIvVXNlcnMvYmVydGhvbnkvRG9jdW1lbnRzL1ZlcnRvL2FwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9yZWdlbmVyYXRvclwiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lXCI7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tIFwiL1VzZXJzL2JlcnRob255L0RvY3VtZW50cy9WZXJ0by9hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCI7XG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5pbXBvcnQgY29uZmlnTWFuYWdlciBmcm9tICdAL3V0aWwvQ29uZmlnTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTdG9yYWdlU3luYycsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgdmFyIHJvdXRlckxvYWRlZCwgY2FsbCwgcXIsIGxhc3RSb3V0ZSwgaGFzQ29uZmlnO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlIGxvYWRlZCcpO1xuICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyb3V0ZXJfbG9hZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgIHJvdXRlckxvYWRlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FwcF9zdGFydGVkJyk7XG5cbiAgICAgICAgICAgICAgaWYgKCEocm91dGVyTG9hZGVkID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhbGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsbF9yZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgIHFyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dhbGxldF9jb25uZWN0X3N2ZycpO1xuXG4gICAgICAgICAgICAgIGlmICghY2FsbCkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYWxsX3JlcXVlc3QnKTtcbiAgICAgICAgICAgICAgY2FsbCA9IEpTT04ucGFyc2UoY2FsbCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29ubmVjdHYxJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR4T2JqZWN0OiBjYWxsLnBhcmFtc1swXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM4O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgaWYgKCFxcikge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd3YWxsZXRfY29ubmVjdF9zdmcnKTtcblxuICAgICAgICAgICAgICBfdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb25uZWN0djEnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXI6IHFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzeW5jX2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3N5bmNFeHRlbnNpb25XYWxsZXQnXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzODtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIGlmICghZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsYXN0Um91dGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdF9yb3V0ZScpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdF9yb3V0ZScpKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgaWYgKCEoZmFsc2UgJiYgbGFzdFJvdXRlICYmIF90aGlzLiRyb3V0ZS5uYW1lICE9PSBsYXN0Um91dGUubmFtZSAmJiBsYXN0Um91dGUubmFtZSAhPT0gJ3N0b3Jlc3luYycpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgZXhpc3Rpbmcgcm91dGUgJywgbGFzdFJvdXRlLnBhdGgpO1xuXG4gICAgICAgICAgICAgIF90aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbGFzdFJvdXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IGxhc3RSb3V0ZS5xdWVyeSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGxhc3RSb3V0ZS5wYXJhbXNcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM4O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgaWYgKCEoX3RoaXMuJHN0b3JlLnN0YXRlLmN1cnJlbnR3YWxsZXQgJiYgX3RoaXMuJHN0b3JlLnN0YXRlLmN1cnJlbnR3YWxsZXQubG9nZ2VkSW4gPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyB0byBkYXNoYm9hcmQnKTtcblxuICAgICAgICAgICAgICBfdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvdmVydG8vZGFzaGJvYXJkJ1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzY7XG4gICAgICAgICAgICAgIHJldHVybiBjb25maWdNYW5hZ2VyLmhhc1ZlcnRvQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICAgIGhhc0NvbmZpZyA9ICEhX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICBpZiAoIWhhc0NvbmZpZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmcgdG8gc2V0dXAnKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0dXAnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maWdTdGVwOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyB0byBsb2dpbicpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUpO1xuICAgIH0pKSgpO1xuICB9XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Verto/bex/StorageSync.vue?vue&type=script&lang=js&\n");

/***/ })

})