"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_demo"]("main",{

/***/ "./src/encryption/abstract_encryption.js":
/*!***********************************************!*\
  !*** ./src/encryption/abstract_encryption.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbstractEncryption: () => (/* binding */ AbstractEncryption)\n/* harmony export */ });\nclass AbstractEncryption {\n  constructor() {\n    this.letters =[...\"abcdefghijklmnopqrstuvwxyz\"]\n    //TODO: Include the puncations and numbers\n    this.numbers = [...\"0123456789\"]\n    this.puncuations = [...\"\"]\n    this.cipher_shift = 3;\n    // console.log(this.letters)\n  }\n\n  decrypt_message(message) {\n\n  }\n\n  encrypt_message(message) {\n\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/encryption/abstract_encryption.js?");

/***/ }),

/***/ "./src/encryption/cipher_encrytion.js":
/*!********************************************!*\
  !*** ./src/encryption/cipher_encrytion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CipherEncryption: () => (/* binding */ CipherEncryption)\n/* harmony export */ });\n/* harmony import */ var _abstract_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_encryption */ \"./src/encryption/abstract_encryption.js\");\n\n\n\nclass CipherEncryption extends _abstract_encryption__WEBPACK_IMPORTED_MODULE_0__.AbstractEncryption{\n  constructor() {\n    super()\n  }\n\n  //Get letter look for its index in the alphabet\n  // add encryption to it ie: 3\n  // and then put the word their or back\n  _cipher_letter(letter) {\n    if (typeof letter !== \"string\") return;\n\n    letter = letter.toLowerCase();\n    // console.log(super.get_letters())\n    let letter_index = this.letters.indexOf(letter);\n    let new_text_index = (letter_index + this.cipher_shift) % 26;\n    let cipher_letter = this.letters[new_text_index]\n    // console.log(`Ciphered text: ${cipher_letter}`)\n    return cipher_letter;\n  }\n\n  _cipher_message(words) {\n    if (typeof words !== \"string\") return;\n    words = [...words]\n    let cipher_words = []\n    for (let [index, letter] of words.entries()) {\n      cipher_words[index] = this._cipher_letter(letter);\n\n    }\n    // console.log(cipher_words)\n    return cipher_words.join(\"\")\n  }\n\n  encrypt(message) {\n    return this._cipher_message(message);\n  }\n\n  decrypt(message) {\n    if (typeof message !== \"string\") return;\n    message = [...message];\n    let decrypted_words = []\n    for (let letter of message) {\n      let letter_index = this.letters.indexOf(letter);\n      let new_letter_index = (letter_index - this.cipher_shift);\n      if (new_letter_index < 0) {\n        new_letter_index = -new_letter_index\n      }\n      let decrypted_letter = this.letters[new_letter_index]\n      decrypted_words.push(decrypted_letter)\n    }\n    return decrypted_words.join(\"\")\n  }\n\n}\n\n//# sourceURL=webpack://webpack-demo/./src/encryption/cipher_encrytion.js?");

/***/ }),

/***/ "./src/encryption/encrypt.js":
/*!***********************************!*\
  !*** ./src/encryption/encrypt.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cipher_encrytion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher_encrytion */ \"./src/encryption/cipher_encrytion.js\");\n\n\n\nlet encryption_form = document.getElementById(\"encryption-form\");\nlet input = document.getElementById(\"cipher\");\n\n\nlet encrypter = new _cipher_encrytion__WEBPACK_IMPORTED_MODULE_0__.CipherEncryption();\n\nencryption_form.onsubmit = (event) => {\n  let encrypted_text = encrypter.encrypt(input.value)\n  let output_div = document.getElementsByClassName(\"encrypted_text\")[0];\n  output_div.innerHTML = encrypted_text\n  console.log(`Decypted words: ${encrypter.decrypt(encrypted_text)}`)\n  event.preventDefault();\n\n}\nencryption_form.oninput = () => {\n  let output_div = document.getElementsByClassName(\"encrypted_text\")[0];\n  let encrypted_text = encrypter.encrypt(input.value)\n  console.log(`Decypted words: ${encrypter.decrypt(encrypted_text)}`)\n  output_div.innerHTML = encrypted_text\n}\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/encryption/encrypt.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _encryption_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryption/encrypt.js */ \"./src/encryption/encrypt.js\");\n\n\n//# sourceURL=webpack://webpack-demo/./src/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d0eb0b13d0af0e6eedd7")
/******/ })();
/******/ 
/******/ }
);