exports.ids = [15,4,5,9,13];
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5202d405", content, true, context)
};

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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineGraph.vue?vue&type=template&id=1ea88728&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+" style=\"width: 100%; height: 320px\" data-v-1ea88728></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LineGraph.vue?vue&type=template&id=1ea88728&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineGraph.vue?vue&type=script&lang=js&
//
//
//
//
//
//
let myChart;
/* harmony default export */ var LineGraphvue_type_script_lang_js_ = ({
  data() {
    return {
      option: {
        grid: {
          y: 100,
          y2: 25
        },
        tooltip: {
          position: function (point, params, dom, rect, size) {
            // fixed at top
            return [point[2], "10%"];
          },
          padding: [20, // up
          50, // right
          20, // down
          50 // left
          ],
          appendToBody: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["LG2", "LG1", "Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7", "Floor 8", "Floor 9", "Floor 10", "Floor 11", "Floor 12", "Floor 13", "Floor 14", "Floor 15", "Floor 16", "Floor 17", "Floor 18", "Floor 19", "Floor 20", "Floor 21", "Floor 22", "Floor 23", "Floor 24", "Floor 25", "Floor 26", "Floor 27", "Floor 28"],
          textStyle: {
            fontSize: 12
          }
        },
        xAxis: {
          name: this.xAxis,
          offset: 15,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom"
          },
          axisPointer: {
            label: {
              margin: 200,
              fontStyle: "italic",
              height: 100,
              formatter: function (params) {
                return "Month  :" + params.value // (params.seriesData.length
                //   ? "：" + params.seriesData[0].data
                //   : "")
                ;
              }
            }
          },
          type: "category",
          data: ["Jan", "Feb", "Mar"]
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12
          },
          name: this.yAxis,
          type: "value",
          min: 0,
          max: this.max,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12
          }
        },
        series: [{
          //min data set
          name: "LG2",
          data: [10, 20, 30],
          type: "line",
          fontSize: 30,
          color: "#ff0000",
          areaStyle: {
            color: "rgba(255, 0, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "LG1",
          data: [20, 10, 30],
          type: "line",
          fontSize: 30,
          color: "#0000ff",
          areaStyle: {
            color: "rgba(0, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 1",
          data: [40, 10, 20],
          type: "line",
          fontSize: 30,
          color: "#8E4585",
          areaStyle: {
            color: "rgba(142, 69, 133, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 2",
          data: [30, 50, 10],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 3",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 4",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 5",
          data: [5, 71, 34],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 6",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#ff0000",
          areaStyle: {
            color: "rgba(255, 0, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 7",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0000ff",
          areaStyle: {
            color: "rgba(0, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 8",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#8E4585",
          areaStyle: {
            color: "rgba(142, 69, 133, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 9",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 10",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 11",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 12",
          data: [5, 71, 34],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 13",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 14",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 15",
          data: [42, 11, 41],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 16",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 17",
          data: [32, 13, 51],
          type: "line",
          fontSize: 30,
          color: "#006B3C",
          areaStyle: {
            color: "rgba(0, 107, 60, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 18",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 19",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 20",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#006B3C",
          areaStyle: {
            color: "rgba(0, 107, 60, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 21",
          data: [43, 12, 41],
          type: "line",
          fontSize: 30,
          color: "#FF00FF",
          areaStyle: {
            color: "rgba(255, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 22",
          data: [21, 12, 12],
          type: "line",
          fontSize: 30,
          color: "#C19A6B",
          areaStyle: {
            color: "rgba(198, 154, 107, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 23",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#FF00FF",
          areaStyle: {
            color: "rgba(255, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 24",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#C19A6B",
          areaStyle: {
            color: "rgba(198, 154, 107, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 25",
          data: [16, 61, 37],
          type: "line",
          fontSize: 30,
          color: "#ff0080",
          areaStyle: {
            color: "rgba(255, 0, 128, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 26",
          data: [61, 12, 43],
          type: "line",
          fontSize: 30,
          color: "#8000ff",
          areaStyle: {
            color: "rgba(128, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 27",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#321414",
          areaStyle: {
            color: "rgba(50, 20, 20, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 28",
          data: [51, 43, 28],
          type: "line",
          fontSize: 30,
          color: "#321414",
          areaStyle: {
            color: "rgba(50, 20, 20, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            },
            emphasis: {
              focus: "series"
            }
          }
        }]
      }
    };
  },

  mounted() {
    setTimeout(() => {
      myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },

  // updated() {
  //   const option = {
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "cross",
  //         crossStyle: {
  //           color: "#999",
  //         },
  //       },
  //     },
  //     // toolbox: {
  //     //   feature: {
  //     //     saveAsImage: { show: true, title: "Save" },
  //     //   },
  //     // },
  //     legend: {
  //       data: ["Min", "Max", "Avg"],
  //       textStyle: {
  //         fontSize: 12,
  //       },
  //     },
  //     xAxis: {
  //       name: this.xAxis,
  //       offset: 20,
  //       nameLocation: "center",
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       axisLabel: {
  //         fontSize: 12,
  //         verticalAlign: "bottom",
  //       },
  //       type: "category",
  //       data: 10,
  //     },
  //     yAxis: {
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       name: this.yAxis,
  //       type: "value",
  //       min: 0,
  //       max: this.max,
  //       axisLabel: {
  //         // formatter: "{value} cm",
  //         fontSize: 12,
  //       },
  //     },
  //     series: [
  //       {
  //         //min data set
  //         name: "Min",
  //         data: [10, 20, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#36c25b",
  //         areaStyle: { color: "rgba(135, 211, 124, 1)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //max data set
  //         name: "Max",
  //         data: [20, 10, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#f52525",
  //         areaStyle: { color: "rgba(246, 36, 89, 0.2)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //average data set
  //         name: "Avg",
  //         data: [40, 10, 20],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#1930fc",
  //         areaStyle: { color: "rgba(137, 196, 244, 0.5)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //     ],
  //   };
  //   // var myChart = this.$echarts.init(document.getElementById(this.id));
  //   myChart.setOption(option, true);
  //   // console.log(this.data)
  // },
  props: ["id"] // props: ["data", "id", "title", "xAxis", "yAxis", "max"],

});
// CONCATENATED MODULE: ./components/LineGraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineGraphvue_type_script_lang_js_ = (LineGraphvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/LineGraph.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineGraphvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ea88728",
  "c69a5406"
  
)

/* harmony default export */ var LineGraph = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-1ea88728]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-1ea88728]{background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MbsaEnergyConsumption.vue?vue&type=template&id=2d3d7304&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',{staticClass:"elevation-10",staticStyle:{"border-radius":"10px","overflow":"hidden"}},[_c('div',{staticStyle:{"display":"flex","align-items":"center"}},[_c('v-card-title',{staticStyle:{"color":"black","background-color":"white"}},[_vm._v("\n        Energy Consumption (kWh) for selected floor per month\n      ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('h1',{staticStyle:{"padding-right":"20px"}},[_vm._v("hello")])],1),_vm._v(" "),_c('LineGraph',{staticClass:"mb-10 pt-5 pb-5 bottom",attrs:{"id":"mbsa"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MbsaEnergyConsumption.vue?vue&type=template&id=2d3d7304&scoped=true&

// EXTERNAL MODULE: ./components/LineGraph.vue + 4 modules
var LineGraph = __webpack_require__(186);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MbsaEnergyConsumption.vue?vue&type=script&lang=js&
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

/* harmony default export */ var MbsaEnergyConsumptionvue_type_script_lang_js_ = ({
  components: {
    LineGraph: LineGraph["default"]
  }
});
// CONCATENATED MODULE: ./components/MbsaEnergyConsumption.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MbsaEnergyConsumptionvue_type_script_lang_js_ = (MbsaEnergyConsumptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 3 modules
var VCard = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(153);

// CONCATENATED MODULE: ./components/MbsaEnergyConsumption.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MbsaEnergyConsumptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d3d7304",
  "81f4675a"
  
)

/* harmony default export */ var MbsaEnergyConsumption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {LineGraph: __webpack_require__(186).default})


/* vuetify-loader */




installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["b" /* VCardTitle */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("12154e8b", content, true, context)
};

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_df0a4b32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_df0a4b32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_df0a4b32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_df0a4b32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_df0a4b32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=df0a4b32&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('DetailCards',{staticClass:"mt-10"}),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-top: 70px\" data-v-df0a4b32>","</div>",[_c('MbsaEnergyConsumption')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=df0a4b32&scoped=true&

// EXTERNAL MODULE: ./components/DetailCards.vue + 4 modules
var DetailCards = __webpack_require__(185);

// EXTERNAL MODULE: ./components/MbsaEnergyConsumption.vue + 4 modules
var MbsaEnergyConsumption = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    DetailCards: DetailCards["default"],
    MbsaEnergyConsumption: MbsaEnergyConsumption["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "df0a4b32",
  "326fbfbe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailCards: __webpack_require__(185).default,MbsaEnergyConsumption: __webpack_require__(204).default})


/***/ })

};;
//# sourceMappingURL=index.js.map