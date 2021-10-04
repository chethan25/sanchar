/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dark-theme.js":
/*!***************************!*\
  !*** ./src/dark-theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleTheme)\n/* harmony export */ });\nfunction toggleTheme() {\n  const body = document.body;\n  const layoutHeader = document.getElementById('layout-header');\n  const logoText = document.getElementById('logo-text');\n  const uploadFilesTitle = document.getElementById('upload-files-title-text');\n  const driveBtn = document.querySelector('.drive-btn');\n  const dropBoxBtn = document.querySelector('.dropbox-btn');\n  const urlBtn = document.querySelector('.url-btn');\n  const layoutFooter = document.getElementById('layout-footer');\n  const githubLink = document.getElementById('github-link');\n  const qrcodeLayoutTitle = document.querySelector('.layout-qr-code-title');\n  const qrcodeLayoutContainer = document.querySelector(\n    '.layout-qr-code-container'\n  );\n  const closeBtn = document.getElementById('close-btn');\n  const btnContainer = document.querySelector('.btn-container');\n\n  body.classList.toggle('body-dark-theme');\n  logoText.classList.toggle('logo-text-dark-theme');\n  layoutHeader.classList.toggle('layout-header-dark-theme');\n  uploadFilesTitle.classList.toggle('upload-files-title-text-dark-theme');\n  driveBtn.classList.toggle('drive-btn-dark-theme');\n  dropBoxBtn.classList.toggle('dropbox-btn-dark-theme');\n  urlBtn.classList.toggle('url-btn-dark-theme');\n  layoutFooter.classList.toggle('layout-footer-dark-theme');\n  githubLink.classList.toggle('github-link-dark-theme');\n  qrcodeLayoutTitle.classList.toggle('layout-qr-code-title-dark-theme');\n  qrcodeLayoutContainer.classList.toggle('layout-qr-code-container-dark-theme');\n  closeBtn.classList.toggle('close-btn-dark-theme');\n  btnContainer.classList.toggle('btn-container-dark-theme');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFyay10aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FuY2hhci8uL3NyYy9kYXJrLXRoZW1lLmpzPzlhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBsYXlvdXRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0LWhlYWRlcicpO1xuICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLXRleHQnKTtcbiAgY29uc3QgdXBsb2FkRmlsZXNUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWQtZmlsZXMtdGl0bGUtdGV4dCcpO1xuICBjb25zdCBkcml2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcml2ZS1idG4nKTtcbiAgY29uc3QgZHJvcEJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wYm94LWJ0bicpO1xuICBjb25zdCB1cmxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJsLWJ0bicpO1xuICBjb25zdCBsYXlvdXRGb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0LWZvb3RlcicpO1xuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1Yi1saW5rJyk7XG4gIGNvbnN0IHFyY29kZUxheW91dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dC1xci1jb2RlLXRpdGxlJyk7XG4gIGNvbnN0IHFyY29kZUxheW91dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5sYXlvdXQtcXItY29kZS1jb250YWluZXInXG4gICk7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJ0bicpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvbnRhaW5lcicpO1xuXG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keS1kYXJrLXRoZW1lJyk7XG4gIGxvZ29UZXh0LmNsYXNzTGlzdC50b2dnbGUoJ2xvZ28tdGV4dC1kYXJrLXRoZW1lJyk7XG4gIGxheW91dEhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdsYXlvdXQtaGVhZGVyLWRhcmstdGhlbWUnKTtcbiAgdXBsb2FkRmlsZXNUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd1cGxvYWQtZmlsZXMtdGl0bGUtdGV4dC1kYXJrLXRoZW1lJyk7XG4gIGRyaXZlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2RyaXZlLWJ0bi1kYXJrLXRoZW1lJyk7XG4gIGRyb3BCb3hCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGJveC1idG4tZGFyay10aGVtZScpO1xuICB1cmxCdG4uY2xhc3NMaXN0LnRvZ2dsZSgndXJsLWJ0bi1kYXJrLXRoZW1lJyk7XG4gIGxheW91dEZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKCdsYXlvdXQtZm9vdGVyLWRhcmstdGhlbWUnKTtcbiAgZ2l0aHViTGluay5jbGFzc0xpc3QudG9nZ2xlKCdnaXRodWItbGluay1kYXJrLXRoZW1lJyk7XG4gIHFyY29kZUxheW91dFRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2xheW91dC1xci1jb2RlLXRpdGxlLWRhcmstdGhlbWUnKTtcbiAgcXJjb2RlTGF5b3V0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2xheW91dC1xci1jb2RlLWNvbnRhaW5lci1kYXJrLXRoZW1lJyk7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlLWJ0bi1kYXJrLXRoZW1lJyk7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdidG4tY29udGFpbmVyLWRhcmstdGhlbWUnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dark-theme.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _dark_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-theme */ \"./src/dark-theme.js\");\n\n\nconst darkThemeToggleBtn = document.getElementById('input-checkbox');\n\ndarkThemeToggleBtn.addEventListener('change', _dark_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUF1Qzs7QUFFdkM7O0FBRUEsOENBQThDLG1EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FuY2hhci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2dnbGVUaGVtZSBmcm9tICcuL2RhcmstdGhlbWUnO1xuXG5jb25zdCBkYXJrVGhlbWVUb2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtY2hlY2tib3gnKTtcblxuZGFya1RoZW1lVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZ2dsZVRoZW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;