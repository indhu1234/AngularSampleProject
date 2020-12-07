(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/indium/Documents/Projects/SampleProject/AngularDomo/ProductApp/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HMe5":
/*!*********************************!*\
  !*** ./src/app/nz/nz.module.ts ***!
  \*********************************/
/*! exports provided: NzModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModule", function() { return NzModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/affix */ "4hBO");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "7vlg");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "KAwd");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "Py9c");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "Etcd");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "q0Us");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ "exsu");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/mention */ "WCIo");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/rate */ "L1u3");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/result */ "Mean");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/transfer */ "GuFl");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/tree */ "nxWG");
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ "VXpv");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-zorro-antd/resizable */ "1zMu");



































































class NzModule {
}
NzModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzModule });
NzModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzModule_Factory(t) { return new (t || NzModule)(); }, imports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_62__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_63__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_64__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__["NzResizableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzModule, { exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_62__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_63__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_64__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__["NzResizableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"],
                    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
                    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"],
                    ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"],
                    ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"],
                    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"],
                    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"],
                    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"],
                    ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"],
                    ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"],
                    ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"],
                    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"],
                    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__["NzInputNumberModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__["NzLayoutModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"],
                    ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__["NzMentionModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__["NzMessageModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__["NzModalModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"],
                    ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__["NzNotificationModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__["NzPageHeaderModule"],
                    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__["NzPaginationModule"],
                    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__["NzPopconfirmModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__["NzPopoverModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__["NzProgressModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__["NzRadioModule"],
                    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__["NzRateModule"],
                    ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__["NzResultModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__["NzSelectModule"],
                    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__["NzSkeletonModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__["NzSpinModule"],
                    ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__["NzStatisticModule"],
                    ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__["NzStepsModule"],
                    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__["NzSwitchModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__["NzTableModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__["NzTabsModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__["NzTagModule"],
                    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__["NzTimePickerModule"],
                    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__["NzTimelineModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__["NzToolTipModule"],
                    ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"],
                    ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__["NzTransferModule"],
                    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__["NzTreeModule"],
                    ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_62__["NzTreeSelectModule"],
                    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_63__["NzTypographyModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_64__["NzUploadModule"],
                    ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"],
                    ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__["NzResizableModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "wKPq");



class AppComponent {
    constructor() {
        this.title = 'ProductApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-list");
    } }, directives: [_views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hcHAtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1lbnUtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLDIxLDQxLC4zNSk7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyxwYWRkaW5nIDBzO1xufVxuXG4udHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuXG4uc2lkZWJhci1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsSGVsdmV0aWNhIE5ldWUsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbm56LWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDIxLDQxLC4wOCk7XG59XG5cbm56LWNvbnRlbnQge1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nz_nz_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nz/nz.module */ "HMe5");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "wKPq");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["en_US"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _nz_nz_module__WEBPACK_IMPORTED_MODULE_3__["NzModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__["IconsProviderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _nz_nz_module__WEBPACK_IMPORTED_MODULE_3__["NzModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__["IconsProviderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _nz_nz_module__WEBPACK_IMPORTED_MODULE_3__["NzModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__["IconsProviderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["en_US"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wKPq":
/*!**************************************************************!*\
  !*** ./src/app/views/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductListComponent {
    constructor() {
        this.prodList = [];
        this.columns = ['product_id', 'product', 'units_available', 'unit_cost'];
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        domo.get('/data/v1/ecommerce?fields=product_id,product,units_available,unit_cost&limit=10')
            .then(data => {
            this.prodList = data;
            console.log(this.prodList);
            console.log('Testing');
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 3, vars: 0, consts: [[1, "products"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
    } }, styles: [".products[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%] {\n  padding: 2%;\n  margin-left: 3%;\n  width: 600px;\n}\n\n[_nghost-%COMP%]     .ant-table {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURWOztBQUtBO0VBQ0ksMEJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHNcbntcbiAgICAgIG56LXRhYmxle1xuICAgICAgICAgIHBhZGRpbmc6MiU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgICAgICAgIHdpZHRoOjYwMHB4O1xuICAgIH1cblxufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map