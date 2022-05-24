exports.ids = [3];
exports.modules = {

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("39ff4dda", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_59c3b770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_59c3b770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_59c3b770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_59c3b770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_59c3b770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".compact[data-v-59c3b770]{padding:0;color:#f0f8ff!important}[data-v-59c3b770]::-webkit-scrollbar{width:10px}[data-v-59c3b770]::-webkit-scrollbar-track{box-shadow:inset 0 0 10px 10px #025a73;border:3px solid transparent}[data-v-59c3b770]::-webkit-scrollbar-thumb{box-shadow:inset 0 0 10px 10px #fff;border:3px solid transparent}.border[data-v-59c3b770]{border:10px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25)}50%25{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25)}50%25{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image-outset:1}.border[data-v-59c3b770],.border2[data-v-59c3b770]{background-color:transparent;display:flex;justify-content:space-evenly;align-items:center}.border2[data-v-59c3b770]{border:10px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25)}50%25{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25)}50%25{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image-outset:.2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailBuilding.vue?vue&type=template&id=59c3b770&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"height":"calc(100vh - 121px)","overflow":"auto"}},_vm._l((_vm.locations),function(location,index){return _c('v-card',{key:index,staticClass:"border2 my-5 mx-5",staticStyle:{"display":"flex","flex-direction":"column"}},[_c('v-card-subtitle',{staticClass:"compact",staticStyle:{"padding":"0"}},[_vm._v("\n      "+_vm._s(location.name)+"\n    ")]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"compact",staticStyle:{"justify-content":"flex-start"}},[_vm._v("\n      "+_vm._s(location.data)+"\n    ")])],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailBuilding.vue?vue&type=template&id=59c3b770&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailBuilding.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DetailBuildingvue_type_script_lang_js_ = ({
  data() {
    return {
      locations: [{
        name: "Majlis Bandaraya Shah Alam",
        lat: 3.073470377,
        lng: 101.5194574,
        data: ""
      }, {
        name: "Bangunan Darul Ehsan",
        lat: 3.07468931,
        lng: 101.5179259,
        data: ""
      }, {
        name: "Menara MRCB",
        lat: 3.073607999,
        lng: 101.5164143,
        data: ""
      }, {
        name: "Bangunan Umno Selangor",
        lat: 3.073640699,
        lng: 101.5220588,
        data: ""
      }, {
        name: "Jabatan Audit Negara Negeri Selangor",
        lat: 3.073884003,
        lng: 101.5236264,
        data: ""
      }, {
        name: "Wisma PKPS",
        lat: 3.073224293,
        lng: 101.5228737,
        data: ""
      }, {
        name: "Plaza Alam Sentral",
        lat: 3.074076499,
        lng: 101.5171885,
        data: ""
      }, {
        name: "Plaza Anggerik",
        lat: 3.071230625,
        lng: 101.5199999,
        data: ""
      }, {
        name: "SACC Mall",
        lat: 3.071772259,
        lng: 101.5183043,
        data: ""
      }, {
        name: "Kompleks PKNS",
        lat: 3.070678868,
        lng: 101.5172516,
        data: ""
      }, {
        name: "Avisena Specialist Hospital",
        lat: 3.071775229,
        lng: 101.5236945,
        data: ""
      }, {
        name: "Plaza Perangsang",
        lat: 3.072967503,
        lng: 101.5181889,
        data: ""
      }, {
        name: "Affin Bank",
        lat: "3.0729",
        lng: "101.5182",
        data: ""
      }, {
        name: "Maybank",
        lat: "3.0729",
        lng: "101.5182",
        data: ""
      }, {
        name: "Shah Alam Convention Centre",
        lat: 3.069897133,
        lng: 101.5185631,
        data: ""
      }, {
        name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
        lat: 3.078655977,
        lng: 101.5207023,
        data: ""
      }, {
        name: "Mardhiyyah Hotel & Suites",
        lat: 3.073727359,
        lng: 101.5226764,
        data: ""
      }]
    };
  },

  methods: {
    getDataMBSA: function () {
      this.$axios.$get("http://165.232.167.69/api/total/latestMBSA", {}) // .$get("http://68.183.189.84:7777/api/total/latestMBSA", {})
      // .$get("http://localhost:7777/api/total/latestMBSA", {})
      .then(response => {
        // console.log(response.building_id);
        // window.location.reload();
        // for (let i = 0; i < response.length; i++) {
        // console.log(this.locations[response[i].building_id - 1]);
        // this.locations[response[i].building_id - 1].data = response[i].ec;
        console.log(response);
        this.locations[0].data = response[0].total + " KWH, Updated on" + response[0].date; // }
      }).catch(error => {
        console.log(error);
      });
    },
    getData: function () {
      this.$axios.$get("http://68.183.189.84:7777/api/total/latest", {}) // .$get("http://localhost:7777/api/total/latest", {})
      .then(response => {
        // console.log(response.building_id);
        // window.location.reload();
        for (let i = 0; i < response.length; i++) {
          // console.log(this.locations[response[i].building_id - 1]);
          if (response[i].building_id != 1) {
            this.locations[response[i].building_id - 1].data = response[i].ec + " KWH, Updated on " + response[i].date;
          } // console.log(this.locations);

        }
      }).catch(error => {
        console.log(error);
      });
    }
  },

  mounted() {
    this.getData();
    this.getDataMBSA();
  }

});
// CONCATENATED MODULE: ./components/DetailBuilding.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailBuildingvue_type_script_lang_js_ = (DetailBuildingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 3 modules
var VCard = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(17);

// CONCATENATED MODULE: ./components/DetailBuilding.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailBuildingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59c3b770",
  "9e06bb1c"
  
)

/* harmony default export */ var DetailBuilding = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["a" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=detail-building.js.map