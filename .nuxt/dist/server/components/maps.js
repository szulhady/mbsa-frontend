exports.ids = [11,4,5];
exports.modules = {

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("402b97cf", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCard.vue?vue&type=template&id=6f71a786&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',{staticClass:"right elevation-10",staticStyle:{"border-radius":"20px"}},[_c('v-card-title',{staticClass:"inner-right"},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_vm._v(" "),_c('v-card-title',{staticClass:"description",staticStyle:{"padding-top":"10 !important"}},[_vm._v("\n      "+_vm._s(_vm.description)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"icon"},[_c('div',{staticClass:"brand-logo",staticStyle:{"z-index":"100, overflow:visible"}},[_c('img',{staticClass:"brand-logo",staticStyle:{"overflow":"visible"},attrs:{"src":__webpack_require__(159)("./" + _vm.icon),"alt":"nex-plex-logo","width":"100%"}})])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailCard.vue?vue&type=template&id=6f71a786&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DetailCardvue_type_script_lang_js_ = ({
  props: ["title", "icon", "description"]
});
// CONCATENATED MODULE: ./components/DetailCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailCardvue_type_script_lang_js_ = (DetailCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 3 modules
var VCard = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(17);

// CONCATENATED MODULE: ./components/DetailCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f71a786",
  "5d1a0064"
  
)

/* harmony default export */ var DetailCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["b" /* VCardTitle */]})


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("63b13b84", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("20c2c1c7", content, true)

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("46f7ed82", content, true)

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CEI.png": 160,
	"./Jersey.ttf": 56,
	"./MBSA.jpg": 161,
	"./MBSA.png": 162,
	"./NETFLOORAREA.png": 163,
	"./NEXPLEX.png": 164,
	"./NOOFFLOOR.png": 165,
	"./NOOFOCCUPANTS.png": 166,
	"./OWNER.png": 167,
	"./SEAIC.png": 59,
	"./SRI.png": 58,
	"./SRI2.jpg": 168,
	"./UITM.png": 57,
	"./bg.jpg": 169,
	"./bg2.svg": 170,
	"./border.png": 61,
	"./frame.png": 171,
	"./frame.svg": 172,
	"./pattern.png": 60,
	"./pin.jpg": 173,
	"./pin2.png": 174,
	"./selangor.svg": 175,
	"./variables.scss": 176
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 159;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/CEI.c6d4241.png";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MBSA.d004b15.jpg";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MBSA.f0d2b8d.png";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NETFLOORAREA.a1ae403.png";

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NEXPLEX.772279d.png";

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NOOFFLOOR.d1dd690.png";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NOOFOCCUPANTS.b1cbd71.png";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/OWNER.60b15c6.png";

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SRI2.c3c02c9.jpg";

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.c0636d0.jpg";

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.661d774.svg";

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frame.acbddbb.png";

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDY3LjAwMDAwMHB0IiBoZWlnaHQ9IjM1MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQ2Ny4wMDAwMDAgMzUwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzUwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTAgMTc1MCBsMCAtMTc1MCAyMzM1IDAgMjMzNSAwIDAgMTc1MCAwIDE3NTAgLTIzMzUgMCAtMjMzNSAwIDAKLTE3NTB6IG0zOTgyIDE2MzEgbDQzIC02MCAyNjMgMCAyNjIgLTEgMCAtNDYzIDAgLTQ2MyAzMCAtMjkgMzAgLTI5IDAgLTQ3MSAwCi00NzIgLTYwIC01NiAtNjAgLTU3IDAgLTU1MCAwIC01NTAgLTY1NyAtMiBjLTM2MiAtMiAtNjc5IC0yIC03MDUgLTEgLTQ2IDIKLTQ5IDAgLTEwMSAtNTcgbC01NCAtNjAgLTk4NSAwIC05ODQgMCAtMjkgMzAgLTI5IDMwIC0zODMgMCAtMzgzIDAgMCAzNzggMAozNzkgLTYwIDU3IC02MCA1NyAwIDIyOCAwIDIyNyAzMCAyOSAzMCAyOSAwIDQ5OCBjMCA0ODUgLTEgNDk5IC0yMCA1MTggLTExCjExIC0yNSAyMCAtMzAgMjAgLTYgMCAtMTAgNzkgLTkgMjE4IGwxIDIxNyA1OCA1MCA1OCA1MCAxIDE1NCAxIDE1NCA1MjMgLTcKNTIyIC03IDM0IDM1IDM1IDM2IDEzMjIgMCAxMzIyIDAgNDQgLTU5eiBtNjQxIC0zMjc2IGM0IC04IDIgLTE3IC0zIC0yMCAtNgotNCAtMTAgMyAtMTAgMTQgMCAyNSA2IDI3IDEzIDZ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin.b414c85.jpg";

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/selangor.ece6b56.svg";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("22618b18", content, true)

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-6f71a786]{padding:10px}.right[data-v-6f71a786]{display:flex;flex-direction:column;align-items:flex-end;min-height:136px;overflow:visible}.inner-right[data-v-6f71a786]{width:68%;justify-content:flex-end;font-size:1rem;white-space:unset!important}.description[data-v-6f71a786]{font-size:1.4rem}.icon[data-v-6f71a786]{position:absolute;top:-30px;left:40px;width:80px;height:80px}@media (max-width:1000px){.icon[data-v-6f71a786]{position:absolute;top:-20px;left:20px;width:60px;height:60px}.inner-right[data-v-6f71a786]{width:100%;justify-content:flex-end;font-size:1rem;white-space:unset!important}}@media (max-width:850px){.icon[data-v-6f71a786]{display:none}.inner-right[data-v-6f71a786]{display:block;width:100%;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}}@media (max-width:660px){.description[data-v-6f71a786]{font-size:1.1rem}}@media (max-width:580px){.description[data-v-6f71a786]{font-size:1.2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group__wrapper[data-v-bd150760]{overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.v-slide-group__wrapper[data-v-bd150760]::-webkit-scrollbar{display:none;width:0;background:transparent}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCards.vue?vue&type=template&id=bd150760&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueSlickCarousel',_vm._b({attrs:{"arrows":true,"dots":true}},'VueSlickCarousel',_vm.settings,false),_vm._l((_vm.details),function(detail,index){return _c('div',{key:index},[_c('DetailCard',{staticClass:"px-5",attrs:{"title":detail.title,"icon":detail.icon,"description":detail.description,"index":index}})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailCards.vue?vue&type=template&id=bd150760&scoped=true&

// EXTERNAL MODULE: ./components/DetailCard.vue + 4 modules
var DetailCard = __webpack_require__(155);

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(132);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(158);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // optional style for arrows & dots


/* harmony default export */ var DetailCardsvue_type_script_lang_js_ = ({
  data() {
    return {
      details: [{
        title: "Building",
        icon: "MBSA.jpg",
        description: "Majlis Bandaraya Shah Alam"
      }, {
        title: "Owner",
        icon: "OWNER.png",
        description: "MBSA"
      }, {
        title: "No. of Floors",
        icon: "NOOFFLOOR.png",
        description: "28"
      }, {
        title: "Net Floor Area",
        icon: "NETFLOORAREA.png",
        description: "64161.85 m²"
      }, {
        title: "No. of Occupants",
        icon: "NOOFOCCUPANTS.png",
        description: "400"
      }, {
        title: "Carbon Emission Intensity",
        icon: "CEI.png",
        description: "97,601.38"
      }],
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        touchThreshold: 5
      }
    };
  },

  components: {
    DetailCard: DetailCard["default"],
    VueSlickCarousel: external_vue_slick_carousel_default.a
  }
});
// CONCATENATED MODULE: ./components/DetailCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailCardsvue_type_script_lang_js_ = (DetailCardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/DetailCards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailCardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bd150760",
  "60989b15"
  
)

/* harmony default export */ var DetailCards = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailCard: __webpack_require__(155).default})


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d9bcb852", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_318aa35b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_318aa35b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_318aa35b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_318aa35b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_318aa35b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".GMap__Wrapper[data-v-318aa35b]{height:90vh!important}.v-btn[data-v-318aa35b]{white-space:normal;padding:10px}.btn-content[data-v-318aa35b]{font-size:.6rem!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps.vue?vue&type=template&id=318aa35b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"overfloe":"hidden"}},[_c('GMap',{ref:"gMap",attrs:{"language":"en","cluster":{ options: { styles: _vm.clusterStyle } },"center":{ lat: _vm.locations[_vm.a].lat, lng: _vm.locations[_vm.a].lng },"options":{ fullscreenControl: false, styles: _vm.mapStyle },"zoom":16}},[_c('div',{key:_vm.num},_vm._l((_vm.categories[_vm.current].locations),function(location,index){return _c('GMapMarker',{key:index,attrs:{"position":{ lat: location.lat, lng: location.lng },"options":{
          icon:
            location === _vm.currentLocation ? _vm.pins.selected : _vm.pins.notSelected,
        }},on:{"click":function($event){_vm.currentLocation = location}}},[_c('GMapInfoWindow',{attrs:{"options":{ maxWidth: 200 }}},[_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px","font-weight":"bold"}},[_vm._v("\n            "+_vm._s(location.name)+"\n          ")]),_vm._v(" "),_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px"}},[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("Status")]),_vm._v(": Online\n          ")]),_vm._v(" "),_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px"}},[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("Location")]),_vm._v(":\n            "+_vm._s(location.lat)+", "+_vm._s(location.lng)+"\n          ")])],1)],1)}),1)]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"\\n      width: 100%;\\n      overflow: hidden;\\n      padding-left: 14px;\\n      padding-right: 14px;\\n      padding-top: 16px;\\n    \" data-v-318aa35b>","</div>",[_c('VueSlickCarousel',_vm._b({attrs:{"arrows":true,"dots":true}},'VueSlickCarousel',_vm.settings,false),_vm._l((_vm.categories),function(location,index){return _c('v-btn',{key:index,staticClass:"btn-content",attrs:{"outlined":"","color":"white"},on:{"click":function($event){return _vm.setCurrent(index)}}},[_vm._v("\n        "+_vm._s(location.category)+"\n      ")])}),1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Maps.vue?vue&type=template&id=318aa35b&scoped=true&

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(132);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(158);

// EXTERNAL MODULE: ./components/DetailCards.vue + 4 modules
var DetailCards = __webpack_require__(185);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // optional style for arrows & dots



/* harmony default export */ var Mapsvue_type_script_lang_js_ = ({
  data() {
    return {
      num: true,
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 5
      },
      a: 0,
      current: 0,
      center: {
        lat: 4.074513033,
        lng: 101.5178721
      },
      // mapStyle: [
      //   {
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#242f3e",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#746855",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#242f3e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.locality",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#263c3f",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#6b9a76",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#38414e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry.stroke",
      //     stylers: [
      //       {
      //         color: "#212a37",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#9ca5b3",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#746855",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry.stroke",
      //     stylers: [
      //       {
      //         color: "#1f2835",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#f3d19c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#2f3948",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit.station",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#17263c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#515c6d",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#17263c",
      //       },
      //     ],
      //   },
      // ],
      mapStyle: [{
        elementType: "geometry",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#8ec3b9"
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1a3646"
        }]
      }, {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4b6878"
        }]
      }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#64779e"
        }]
      }, {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4b6878"
        }]
      }, {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#334e87"
        }]
      }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#283d6a"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6f9ba5"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#3C7680"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#304a7d"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#98a5be"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#2c6675"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#255763"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#b0d5ce"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#98a5be"
        }]
      }, {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [{
          color: "#283d6a"
        }]
      }, {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
          color: "#3a4762"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#0e1626"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#4e6d70"
        }]
      }],
      // mapStyle: [
      //   {
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#212121",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.icon",
      //     stylers: [
      //       {
      //         visibility: "off",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#212121",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.country",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#9e9e9e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.land_parcel",
      //     stylers: [
      //       {
      //         visibility: "off",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.locality",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#bdbdbd",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#181818",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#616161",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#1b1b1b",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry.fill",
      //     stylers: [
      //       {
      //         color: "#2c2c2c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#8a8a8a",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.arterial",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#373737",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#3c3c3c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway.controlled_access",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#4e4e4e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.local",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#616161",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#000000",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#3d3d3d",
      //       },
      //     ],
      //   },
      // ],
      currentLocation: {},
      // circleOptions: {
      //   ...
      // },
      locations: [{
        name: "Majlis Bandaraya Shah Alam",
        lat: 3.073470377,
        lng: 101.5194574
      }, {
        name: "Bangunan Darul Ehsan",
        lat: 3.07468931,
        lng: 101.5179259
      }, {
        name: "Menara MRCB",
        lat: 3.073607999,
        lng: 101.5164143
      }, {
        name: "Bangunan Umno Selangor",
        lat: 3.073640699,
        lng: 101.5220588
      }, {
        name: "Jabatan Audit Negara Negeri Selangor",
        lat: 3.073884003,
        lng: 101.5236264
      }, {
        name: "Wisma PKPS",
        lat: 3.073224293,
        lng: 101.5228737
      }, {
        name: "Plaza Alam Sentral",
        lat: 3.074076499,
        lng: 101.5171885
      }, {
        name: "Plaza Anggerik",
        lat: 3.071230625,
        lng: 101.5199999
      }, {
        name: "SACC Mall",
        lat: 3.071772259,
        lng: 101.5183043
      }, {
        name: "Kompleks PKNS",
        lat: 3.070678868,
        lng: 101.5172516
      }, {
        name: "Avisena Specialist Hospital",
        lat: 3.071775229,
        lng: 101.5236945
      }, {
        name: "Plaza Perangsang",
        lat: 3.072967503,
        lng: 101.5181889
      }, // {
      //   name: "Affin Bank",
      //   lat: "3.0729",
      //   lng: "101.5182",
      // },
      // {
      //   name: "Maybank",
      //   lat: "3.0729",
      //   lng: "101.5182",
      // },
      {
        name: "Shah Alam Convention Centre",
        lat: 3.069897133,
        lng: 101.5185631
      }, {
        name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
        lat: 3.078655977,
        lng: 101.5207023
      }, {
        name: "Mardhiyyah Hotel & Suites",
        lat: 3.073727359,
        lng: 101.5226764
      }],
      categories: [{
        category: "office",
        locations: [{
          name: "Bangunan Darul Ehsan",
          lat: 3.07468931,
          lng: 101.5179259
        }, {
          name: "Menara MRCB",
          lat: 3.073607999,
          lng: 101.5164143
        }, {
          name: "Bangunan Umno Selangor",
          lat: 3.073640699,
          lng: 101.5220588
        }, {
          name: "Jabatan Audit Negara Negeri Selangor",
          lat: 3.073884003,
          lng: 101.5236264
        }, {
          name: "Wisma PKPS",
          lat: 3.073224293,
          lng: 101.5228737
        }]
      }, {
        category: "retail",
        locations: [{
          name: "Plaza Alam Sentral",
          lat: 3.074076499,
          lng: 101.5171885
        }, {
          name: "Plaza Anggerik",
          lat: 3.071230625,
          lng: 101.5199999
        }, {
          name: "SACC Mall",
          lat: 3.071772259,
          lng: 101.5183043
        }, {
          name: "Kompleks PKNS",
          lat: 3.070678868,
          lng: 101.5172516
        }]
      }, {
        category: "healthcare",
        locations: [{
          name: "Avisena Specialist Hospital",
          lat: 3.071775229,
          lng: 101.5236945
        }]
      }, {
        category: "mixed use",
        locations: [{
          name: "Plaza Perangsang",
          lat: 3.072967503,
          lng: 101.5181889
        }]
      }, {
        category: "banking",
        locations: []
      }, {
        category: "entertainment",
        locations: [{
          name: "Shah Alam Convention Centre",
          lat: 3.069897133,
          lng: 101.5185631
        }]
      }, {
        category: "religious",
        locations: [{
          name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
          lat: 3.078655977,
          lng: 101.5207023
        }]
      }, {
        category: "lodging",
        locations: [{
          name: "Mardhiyyah Hotel & Suites",
          lat: 3.073727359,
          lng: 101.5226764
        }]
      }, {
        category: "all",
        locations: [{
          name: "Majlis Bandaraya Shah Alam",
          lat: 3.073470377,
          lng: 101.5194574
        }, {
          name: "Bangunan Darul Ehsan",
          lat: 3.07468931,
          lng: 101.5179259
        }, {
          name: "Menara MRCB",
          lat: 3.073607999,
          lng: 101.5164143
        }, {
          name: "Bangunan Umno Selangor",
          lat: 3.073640699,
          lng: 101.5220588
        }, {
          name: "Jabatan Audit Negara Negeri Selangor",
          lat: 3.073884003,
          lng: 101.5236264
        }, {
          name: "Wisma PKPS",
          lat: 3.073224293,
          lng: 101.5228737
        }, {
          name: "Plaza Alam Sentral",
          lat: 3.074076499,
          lng: 101.5171885
        }, {
          name: "Plaza Anggerik",
          lat: 3.071230625,
          lng: 101.5199999
        }, {
          name: "SACC Mall",
          lat: 3.071772259,
          lng: 101.5183043
        }, {
          name: "Kompleks PKNS",
          lat: 3.070678868,
          lng: 101.5172516
        }, {
          name: "Avisena Specialist Hospital",
          lat: 3.071775229,
          lng: 101.5236945
        }, {
          name: "Plaza Perangsang",
          lat: 3.072967503,
          lng: 101.5181889
        }, // {
        //   name: "Affin Bank",
        //   lat: "3.0729",
        //   lng: "101.5182",
        // },
        // {
        //   name: "Maybank",
        //   lat: "3.0729",
        //   lng: "101.5182",
        // },
        {
          name: "Shah Alam Convention Centre",
          lat: 3.069897133,
          lng: 101.5185631
        }, {
          name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
          lat: 3.078655977,
          lng: 101.5207023
        }, {
          name: "Mardhiyyah Hotel & Suites",
          lat: 3.073727359,
          lng: 101.5226764
        }]
      }],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg==",
        notSelected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg=="
      },
      // mapStyle: [...],
      clusterStyle: [{
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }]
    };
  },

  methods: {
    setCurrent: function (index) {
      // this.num = this.num + 1;
      this.num = !this.num;
      this.current = index; // this.$refs.gMap.initMap();

      setTimeout(() => {
        // if (index == 0) {
        //   this.locations = this.locations.slice(0, 1).concat();
        //   console.log(this.locations);
        // }
        if (this.categories[this.current].locations[0].lat) {
          this.$refs.gMap.map.setCenter({
            lat: this.categories[this.current].locations[0].lat,
            lng: this.categories[this.current].locations[0].lng
          });
        } // });
        //
        // this.$refs.gMap.initMap();
        // this.$refs.gMap.initInfoWindow();


        this.$refs.gMap.initChildren(); // this.$refs.gMap.try();
      }, 1); //
    }
  },
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a,
    DetailCards: DetailCards["default"]
  }
});
// CONCATENATED MODULE: ./components/Maps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapsvue_type_script_lang_js_ = (Mapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(17);

// CONCATENATED MODULE: ./components/Maps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "318aa35b",
  "53c34024"
  
)

/* harmony default export */ var Maps = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCardSubtitle: VCard["a" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=maps.js.map