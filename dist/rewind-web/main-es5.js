function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/chapter/chapter.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/chapter/chapter.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsChapterChapterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'CHAPTERS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"inst_class_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"subject_id\" \r\n                                        (change)=\"getChapters()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SUBJECT' | translate }}</option>\r\n                                            <option *ngFor=\"let subject of subjects\" [ngValue]=\"subject.id\">\r\n                                                {{ subject.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" \r\n                                        *ngIf=\"showAddFeature === false\" [disabled]=\"!this.filterForm.valid\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_CHAPTER' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && chaptersDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"chaptersDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'DESCRIPTION' | translate }}</th>\r\n                                                <th>{{ 'TOPICS' | translate }}</th>\r\n                                                <th>{{ 'NOTES' | translate }}</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let chapter of chapters;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>\r\n                                                    <img [src]=\"_constants.DOMAIN_URL + chapter.thumbnail\" class=\"img-circle img-size-32 mr-2\"\r\n                                                    (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                                                    {{ chapter.name | verifyData }}\r\n                                                </td>\r\n                                                <td>{{ chapter.description | verifyData }}</td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm mr-1 mb-1\"\r\n                                                    (click)=\"navigateToTopics(chapter)\" *ngIf=\"chapter.chapter_details.data.length\">\r\n                                                        <i class=\"pr-1 fa fa-eye\"></i> {{ 'VIEW_TOPICS' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm mb-1\"\r\n                                                    (click)=\"addTopics(chapter)\">\r\n                                                        <i class=\"fa fa-plus\"></i> \r\n                                                        <span *ngIf=\"!chapter.chapter_details.data.length\"> {{ 'ADD_TOPIC' | translate }} </span>\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\" (click)=\"_download.download(chapter.notes)\"\r\n                                                    *ngIf=\"chapter.notes\">\r\n                                                        <i class=\"fa fa-download pr-1\"></i> {{ 'NOTES' | translate }}\r\n                                                    </button>\r\n                                                    <span *ngIf=\"!chapter.notes\">{{ 'NA' | translate }}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\"\r\n                                                    (click)=\"editChapter(chapter)\" data-toggle=\"modal\" [attr.data-target]=\"'#update-chapter'\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> \r\n                                                        {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=7 [errorCode]=\"chaptersDataStatus\" *ngIf=\"chaptersDataStatus === 0 || chaptersDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <app-admin-list-error [errorId]=5 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\">\r\n                            </app-admin-list-error>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"tab\">\r\n                                    <li class=\"nav-item\">\r\n                                        <a class=\"nav-link active\" id=\"chapter-tab\" data-toggle=\"pill\" href=\"#add-chapter\" role=\"tab\" aria-controls=\"add-chapter\" aria-selected=\"true\">\r\n                                            {{ 'CHAPTER' | translate }}\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a class=\"nav-link\" id=\"topic-tab\" data-toggle=\"pill\" href=\"#add-topic\" role=\"tab\" aria-controls=\"add-topic\" aria-selected=\"true\">\r\n                                            {{ 'TOPIC' | translate }}\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"tab-content pt-3\">\r\n                                    <div class=\"col-lg-6 tab-pane fade show active\" id=\"add-chapter\" role=\"tabpanel\">\r\n                                        <form role=\"form\" (ngSubmit)=\"addChapter()\" [formGroup]=\"addChapterForm\" id=\"addChapterForm\">\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'CHAPTER_NAME' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                                placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('name',1)\" [validateNameMinLength]=true></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"description\">{{ 'DESCRIPTION' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"description\" \r\n                                                placeholder=\"{{ 'ENTER_DESCRIPTION' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('description',1)\"></app-form-validator>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"notes\">{{ 'NOTES' | translate }}</label><br/>\r\n                                                <input type=\"file\" (change)=\"onFileChange($event,'notes',1)\" accept=\".pdf\" \r\n                                                required>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"thumbnail\">{{ 'THUMBNAIL' | translate }} *</label><br/>\r\n                                                <input type=\"file\" (change)=\"onFileChange($event,'thumbnail',1)\" accept=\"image/*\" \r\n                                                required>\r\n                                            </div>\r\n                                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                            </button>\r\n                                            <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                                <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                            </button>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 tab-pane fade\" id=\"add-topic\" role=\"tabpanel\">\r\n                                        <form role=\"form\" (ngSubmit)=\"addTopic()\" [formGroup]=\"addTopicForm\" id=\"addTopicForm\">\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'TOPIC_NAME' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                                placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('name',2)\" [validateNameMinLength]=true></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'CHAPTER' | translate }} *</label>\r\n                                                <select class=\"custom-select form-control\" formControlName=\"chapter_id\" \r\n                                                [hidden]=\"chaptersDataStatus != 1\" required>\r\n                                                    <option [value]=null selected disabled>{{ 'SELECT_CHAPTER' | translate }}</option>\r\n                                                    <option *ngFor=\"let chapter of chapters\" [ngValue]=\"chapter.id\">\r\n                                                        {{ chapter.name }}\r\n                                                    </option>\r\n                                                </select>\r\n                                                <div class=\"error-message\" *ngIf=\"chaptersDataStatus === 0\">\r\n                                                    {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('CHAPTER' | translate) } }}\r\n                                                </div>\r\n                                                <div class=\"error-message\" *ngIf=\"chaptersDataStatus === 3\">\r\n                                                    {{ 'STANDARD_ERROR' | translate }}\r\n                                                </div>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('chapter_id',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'KEYWORDS' | translate }}</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"keywords\" \r\n                                                placeholder=\"{{ 'ENTER_KEYWORDS' | translate }}\">\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('keywords',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'RELATED_VIDEOS' | translate }}</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"related_videos\" \r\n                                                placeholder=\"{{ 'ENTER_RELATED_VIDEOS' | translate }}\">\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('related_videos',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'VIDEO_ID' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"video_id\" \r\n                                                placeholder=\"{{ 'VIDEO_ID' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('video_id',2)\"></app-form-validator>\r\n                                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddTopicFeatureForm()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                            </button>\r\n                                            <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                                <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                            </button>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-chapter\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_CHAPTER' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateChapter()\" [formGroup]=\"editChapterForm\" id=\"editChapterForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'CHAPTER_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateForm('name',3)\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"description\">{{ 'DESCRIPTION' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\" \r\n                        placeholder=\"{{ 'ENTER_DESCRIPTION' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateForm('description',3)\"></app-form-validator>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"notes\">{{ 'NOTES' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'notes',3)\" accept=\".pdf\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"thumbnail\">{{ 'THUMBNAIL' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'thumbnail',3)\" accept=\"image/*\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editChapterForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<app-breadcrumb [title]=\"'DASHBOARD'\"></app-breadcrumb>\r\n\t\t<section class=\"content\" *ngIf=\"dashboardDataStatus === 1\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3 col-6\" *ngFor=\"let reportCard of dashboardReportCards\">\r\n\t\t\t\t\t\t<div class=\"small-box\" [ngClass]=\"reportCard.className\">\r\n\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t<h3>{{ reportCard.value | verifyData : 'number' }}</h3>\r\n\t\t\t\t\t\t\t\t<p>{{ reportCard.name | translate }}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"{{ reportCard.icon }}\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a routerLink=\"{{ reportCard.link }}\" class=\"small-box-footer\">{{ 'MORE_INFO' | translate }} <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<app-admin-list-error [errorId]=0 [errorCode]=\"dashboardDataStatus\" *ngIf=\"dashboardDataStatus === 0 || dashboardDataStatus === 3\">\r\n\t\t</app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/department/department.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/department/department.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsDepartmentDepartmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"departmentDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'DEPARTMENTS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title custom-title\">\r\n                                    {{ 'DEPARTMENTS' | translate }}\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let department of departments;let i = index\">\r\n                                                <td>\r\n                                                    {{ i + 1 }}\r\n                                                </td>\r\n                                                <td>\r\n                                                    {{ department.name | verifyData }}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"departmentDataStatus === 0 || departmentDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=1 [errorCode]=\"departmentDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/examination/examination.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/examination/examination.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsExaminationExaminationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'EXAMINATIONS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"inst_class_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"subject_id\" \r\n                                        (change)=\"getExamsList()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SUBJECT' | translate }}</option>\r\n                                            <option *ngFor=\"let subject of subjects\" [ngValue]=\"subject.id\">\r\n                                                {{ subject.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\"\r\n                                        [disabled]=\"!this.filterForm.valid\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_EXAMINATION' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && examDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"examDataStatus === 1\">\r\n                                    <div class=\"row\">\r\n                                        <table class=\"table table-striped\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th>#</th>\r\n                                                    <th>{{ 'NAME' | translate }}</th>\r\n                                                    <th>{{ 'YEAR' | translate }}</th>\r\n                                                    <th></th>\r\n                                                </tr>\r\n                                                <ng-container *ngFor=\"let exam of examsList\">\r\n                                                    <ng-container *ngFor=\"let year of exam | prepareObject\" >\r\n                                                        <tr *ngFor=\"let paper of year.value;let i = index\">\r\n                                                            <td>{{ i + 1 }}</td>\r\n                                                            <td>{{ paper.name | verifyData }}</td>\r\n                                                            <td>{{ paper.year }}</td>\r\n                                                            <td>\r\n                                                                <button class=\"btn btn-theme-primary btn-sm\"\r\n                                                                (click)=\"_download.download(paper.paper, $event)\" *ngIf=\"paper.paper\">\r\n                                                                    <i class=\"pr-1 fa fa-download\"></i> {{ 'DOWNLOAD' | translate }}\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"ml-1 btn btn-danger btn-sm\" (click)=\"deletePaper(paper)\">\r\n                                                                    <i class=\"fa fa-trash\"></i>\r\n                                                                </button>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=8 [errorCode]=\"examDataStatus\" *ngIf=\"examDataStatus === 0 || examDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <app-admin-list-error [errorId]=5 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\" \r\n                            [hidden]=\"showAddFeature === true\">\r\n                            </app-admin-list-error>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <form role=\"form\" (ngSubmit)=\"addExam()\" [formGroup]=\"addDataForm\" id=\"addDataForm\">\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label for=\"name\">{{ 'EXAMINATION_NAME' | translate }} *</label>\r\n                                        <input type=\"text\" class=\"form-control\" \r\n                                        formControlName=\"name\" placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                    </div>\r\n                                    <app-form-validator [data]=\"validateAddFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label for=\"name\">{{ 'SELECT_YEAR' | translate }} *</label>\r\n                                        <select class=\"custom-select form-control\" formControlName=\"year\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_YEAR' | translate }}</option>\r\n                                            <option *ngFor=\"let year of years\" [ngValue]=\"year\">\r\n                                                {{ year }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <app-form-validator [data]=\"validateAddFormValue('year')\"></app-form-validator>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"paper\">{{ 'EXAMINATION_PAPER' | translate }}</label><br/>\r\n                                        <input type=\"file\" (change)=\"onFileChange($event,'paper')\" accept=\".pdf\" required>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                        <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                    </button>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faculties/faculties.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faculties/faculties.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsFacultiesFacultiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'FACULTIES'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-6 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\"\r\n                                        (change)=\"getFaculties()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\"\r\n                                        [disabled]=\"!this.filterForm.valid\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_FACULTIES' | translate }}\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"_download.download('public/storage/faculties.csv')\" *ngIf=\"showAddFeature === true\">\r\n                                            <i class=\"fa fa-download\"></i>&nbsp;{{ 'DOWNLOAD_EXCEL_TEMPLATE' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && facultiesDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"facultiesDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'EMAIL_ADDRESS' | translate }}</th>\r\n                                                <th>{{ 'PHONE_NUMBER' | translate }}</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let faculty of faculties;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>{{ faculty.name | verifyData }}</td>\r\n                                                <td>{{ faculty.email | verifyData }}</td>\r\n                                                <td>{{ faculty.phone_number | verifyData }}</td>\r\n                                                <td>\r\n                                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteFaculty(faculty)\">\r\n                                                        <i class=\"fa fa-trash\"></i>\r\n                                                    </button>\r\n                                                </td>        \r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=2 [errorCode]=\"facultiesDataStatus\" *ngIf=\"facultiesDataStatus === 0 || facultiesDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addFaculties()\" [formGroup]=\"addDataForm\" id=\"addDataForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"faculties\">{{ 'FILE' | translate }}</label><br/>\r\n                                            <input type=\"file\" (change)=\"onFileChange($event,'faculties')\" accept=\".csv\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddFormValue('faculties')\"></app-form-validator>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faq/faq.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faq/faq.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"'FAQS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\">\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control\" required\r\n                                        (change)=\"onTopicChange()\" [(ngModel)] =\"topicId\" [ngModelOptions]=\"{standalone: true}\">\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_TOPIC' | translate }}</option>\r\n                                            <option *ngFor=\"let topic of topics\" [ngValue]=\"topic.id\">\r\n                                                {{ topic.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_FAQ' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && faqsDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"faqsDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>{{ 'FREQUENTLY_ASKED_QUESTIONS' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let faq of faqs;let i = index\">\r\n                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>{{ i + 1 }}.&nbsp;{{ faq.question }}</b><br/>\r\n                                                    {{ faq.answer }}<br/>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"'#editData'\"\r\n                                                    (click)=\"initialiseEditModal(faq)\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-danger mt-2 btn-sm ml-1\" (click)=\"deleteFaq(faq)\">\r\n                                                        <i class=\"pr-1 fa fa-trash\"></i> {{ 'DELETE' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=2 [errorCode]=\"faqsDataStatus\" *ngIf=\"faqsDataStatus === 0 || faqsDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addFaq()\" [formGroup]=\"addDataForm\">\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"question\">{{ 'QUESTION' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"question\" \r\n                                            placeholder=\"{{ 'ENTER_QUESTION' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('question')\" [validateNameMinLength]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"answer\">{{ 'ANSWER' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"answer\" \r\n                                            placeholder=\"{{ 'ENTER_ANSWER' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('answer')\"></app-form-validator>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"editData\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_FAQ' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateFaq()\" [formGroup]=\"editDataForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"question\">{{ 'QUESTION' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"question\" \r\n                        placeholder=\"{{ 'ENTER_QUESTION' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('question')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"answer\">{{ 'ANSWER' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"answer\" \r\n                        placeholder=\"{{ 'ENTER_ANSWER' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('answer')\"></app-form-validator>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableEditFeatureForm()\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/list-error/list-error.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/list-error/list-error.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsListErrorListErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\r\n    <div class=\"text-center no-data-container\">\r\n        <div class=\"swal2-icon swal2-error swal2-icon-show\" style=\"display: flex;\">\r\n            <span class=\"swal2-x-mark\">\r\n                <span class=\"swal2-x-mark-line-left\"></span>\r\n                <span class=\"swal2-x-mark-line-right\"></span>\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 0\"> \r\n            <span *ngIf=\"errorId === 0\">\r\n                {{ 'DASHBOARD_ERROR' | translate }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 1\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('DEPARTMENTS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('DEPARTMENTS' | translate) } }}\r\n            </span> \r\n            <span *ngIf=\"errorId === 2\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('FACULTIES' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('FACULTIES' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 3\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('FAQS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('FAQS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 4\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('STUDENTS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('STUDENTS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 5\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('SUBJECTS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('SUBJECTS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 6\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('TOPICS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('TOPICS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 7\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('CHAPTERS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('CHAPTERS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 8\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('EXAMINATION' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('EXAMINATION' | translate) } }}\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 3\"> \r\n            <span>\r\n                {{ 'STANDARD_ERROR' | translate }}\r\n            </span> \r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/mcq/mcq.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/mcq/mcq.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsMcqMcqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/sidebar/sidebar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/sidebar/sidebar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-light-primary elevation-4 sidebar-custom\">\r\n    <a class=\"brand-link\">\r\n        <img src=\"assets/images/logo.png\" class=\"brand-image\">\r\n        <span class=\"brand-text\">{{ 'APP_NAME' | translate }}</span>\r\n    </a>\r\n    <div class=\"sidebar\">\r\n        <div class=\"user-panel mt-3 pb-3 d-flex\">\r\n            <div class=\"image\">\r\n                <img [src]=\"this._constants.DOMAIN_URL + userDetails.inst_logo\" class=\"img-circle elevation-2\"\r\n                (error)=\"_miscellaneous.setDefaultInstituteLogo($event)\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <a class=\"d-block\">{{ userDetails.inst_name }}</a>\r\n            </div>\r\n        </div>\r\n        <nav>\r\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n                <li class=\"nav-item\" *ngFor=\"let sidemenu of sidemenus\">\r\n                    <a *ngIf=\"sidemenu.out_side !== 'yes'\" routerLink=\"{{ sidemenu.link }}\" routerLinkActive=\"active\" class=\"nav-link\" (click)=\"minimizeSidemenu()\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n\r\n                    <a *ngIf=\"sidemenu.out_side === 'yes'\" href=\"{{ sidemenu.link }}\" target=\"_blank\"   class=\"nav-link\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</aside>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/students/students.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/students/students.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsStudentsStudentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'STUDENTS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\"\r\n                                        (change)=\"getStudentsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"inst_class_id\"\r\n                                        (change)=\"getStudentsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_STUDENTS' | translate }}\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"_download.download('public/storage/student.csv')\" *ngIf=\"showAddFeature === true\">\r\n                                            <i class=\"fa fa-download\"></i>&nbsp;{{ 'DOWNLOAD_EXCEL_TEMPLATE' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && studentsDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"studentsDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'USN' | translate }}</th>\r\n                                                <th>{{ 'EMAIL_ADDRESS' | translate }}</th>\r\n                                                <th>{{ 'PHONE_NUMBER' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let student of students;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>{{ student.name | verifyData }}</td>\r\n                                                <td>{{ student.usn | verifyData }}</td>\r\n                                                <td>{{ student.email | verifyData }}</td>\r\n                                                <td>{{ student.phone_number | verifyData }}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=2 [errorCode]=\"studentsDataStatus\" *ngIf=\"studentsDataStatus === 0 || studentsDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addStudents()\" [formGroup]=\"addDataForm\" id=\"addDataForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"students\">{{ 'FILE' | translate }}</label><br/>\r\n                                            <input type=\"file\" (change)=\"onFileChange($event,'students')\" accept=\".csv\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddFormValue('students')\"></app-form-validator>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/subjects/subjects.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/subjects/subjects.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsSubjectsSubjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"'SUBJECTS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control select2\" id=\"department_id\" formControlName=\"department_id\" required\r\n                                        (change)=\"getSubjectsData()\" *ngIf=\"filterDataStatus\">\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control select2\" id=\"inst_class_id\" formControlName=\"inst_class_id\" required\r\n                                        (change)=\"getSubjectsData()\" *ngIf=\"filterDataStatus\">\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_DEPARTMENTS_AND_SUBJECTS' | translate }}\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"downloadService.download('public/storage/subjects.csv')\" *ngIf=\"showAddFeature === true\">\r\n                                            <i class=\"fa fa-download\"></i>&nbsp;{{ 'DOWNLOAD_EXCEL_TEMPLATE' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && subjectsDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"subjectsDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'SUBJECT_CODE' | translate }}</th>\r\n                                                <th>{{ 'FACULTY' | translate }}</th>\r\n                                                <th>{{ 'SYLLABUS' | translate }}</th>\r\n                                                <th>{{ 'THUMBNAIL' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let subject of subjects;let i = index\">\r\n                                                <td>\r\n                                                    {{ i + 1 }}\r\n                                                </td>\r\n                                                <td>\r\n                                                    {{ subject.name | verifyData }}\r\n                                                </td>\r\n                                                <td>\r\n                                                    {{ subject.code | verifyData }}\r\n                                                </td>\r\n                                                <td *ngIf=\"subject.faculty\">\r\n                                                    {{ subject.faculty }}\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm ml-1\" data-toggle=\"modal\" [attr.data-target]=\"'#assign-faculty'\"\r\n                                                    (click)=\"initialiseAssignModal(subject,1)\">\r\n                                                        <i class=\"fas fa-pen\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td *ngIf=\"!subject.faculty\">\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"'#assign-faculty'\"\r\n                                                    (click)=\"initialiseAssignModal(subject,0)\">\r\n                                                        <i class=\"fas fa-user-plus\"></i> {{ 'ASSIGN' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td *ngIf=\"subject.syllabus\">\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\" (click)=\"downloadService.download(subject.syllabus)\">\r\n                                                        <i class=\"fa fa-download\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm ml-1\" data-toggle=\"modal\" [attr.data-target]=\"'#upload-files'\"\r\n                                                    (click)=\"initialiseModal(0,subject)\">\r\n                                                        <i class=\"fas fa-pen\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td *ngIf=\"!subject.syllabus\">\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"'#upload-files'\"\r\n                                                    (click)=\"initialiseModal(0,subject)\">\r\n                                                        <i class=\"pr-1 fa fa-upload\"></i> {{ 'UPLOAD' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td *ngIf=\"subject.bg_image\">\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\" (click)=\"downloadService.download(subject.bg_image)\">\r\n                                                        <i class=\"fa fa-download\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm ml-1\" data-toggle=\"modal\" [attr.data-target]=\"'#upload-files'\"\r\n                                                    (click)=\"initialiseModal(1,subject)\">\r\n                                                        <i class=\"fas fa-pen\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td *ngIf=\"!subject.bg_image\">\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"'#upload-files'\"\r\n                                                    (click)=\"initialiseModal(1,subject)\">\r\n                                                        <i class=\"pr-1 fa fa-upload\"></i> {{ 'UPLOAD' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=5 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <app-admin-list-error [errorId]=5 [errorCode]=\"filterDataStatus\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\" [hidden]=\"showAddFeature === true\">\r\n                            </app-admin-list-error>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addSubjects()\" [formGroup]=\"addSubjectsForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"subjects\">{{ 'FILE' | translate }}</label><br/>\r\n                                            <input type=\"file\" (change)=\"onFileChange($event,'subjects',1)\"\r\n                                            accept=\".csv\">\r\n                                        </div>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"upload-files\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" *ngIf=\"fileType === 0\">{{ 'UPLOAD_SYLLABUS' | translate }}</h4>\r\n                <h4 class=\"modal-title\" *ngIf=\"fileType === 1\">{{ 'UPLOAD_THUMBNAIL' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"uploadSubjectAttachment()\" [formGroup]=\"addAttachmentForm\"\r\n                id=\"addAttachmentForm\">\r\n                    <div class=\"form-group mb-4 mt-2\">\r\n                        <label for=\"attachment\" *ngIf=\"fileType === 0\">{{ 'SYLLABUS_FILE' | translate }}</label>\r\n                        <label for=\"attachment\" *ngIf=\"fileType === 1\">{{ 'THUMBNAIL' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'attachment',2)\"\r\n                        [accept]=\"(fileType === 0)?'.pdf':'image/*'\">\r\n                    </div>\r\n                    <button class=\"btn btn-theme-primary\"\r\n                    [disabled]=\"!this.addAttachmentForm.valid\">\r\n                        <i class=\"pr-1 fa fa-upload\"></i> {{ 'UPLOAD' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"assign-faculty\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'ASSIGN_FACULTY' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"assignFaculties()\" [formGroup]=\"assignFacultyForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'FACULTY' | translate }} *</label>\r\n                        <select class=\"custom-select form-control select2\" id=\"faculty_id\" formControlName=\"faculty_id\" [hidden]=\"facultiesDataStatus != 1\" required>\r\n                            <option [value]=null selected disabled>{{ 'SELECT_FACULTY' | translate }}</option>\r\n                            <option *ngFor=\"let faculty of faculties\" [ngValue]=\"faculty.id\">\r\n                                {{ faculty.name }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"error-message\" *ngIf=\"facultiesDataStatus === 0\">\r\n                            {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('DEPARTMENTS' | translate) } }}\r\n                        </div>\r\n                        <div class=\"error-message\" *ngIf=\"facultiesDataStatus === 3\">\r\n                            {{ 'STANDARD_ERROR' | translate }}\r\n                        </div>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateAssignFacultyFormValue('faculty_id')\"></app-form-validator>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!assignFacultyForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ (assignFacultyType ? ('UPDATE' | translate) : ('SUBMIT' | translate)) }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/topic/topic.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/topic/topic.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTopicTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-admin-sidebar></app-admin-sidebar>\r\n    <div class=\"content-wrapper\" [hidden]=\"topicsDataStatus !== 1\">\r\n        <app-breadcrumb [title]=\"'TOPICS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-body row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div id=\"vimeo-player\"></div>\r\n                                    <div class=\"pt-2\">\r\n                                        <div class=\"topic-title mb-2\">\r\n                                            <b>{{ selectedTopic.name }}</b>\r\n                                        </div>\r\n                                        {{ 'RELATED_VIDEOS' | translate }} :\r\n                                        <a href='{{ selectedTopic.related_videos[0] }}' target=\"_blank\">\r\n                                            {{ selectedTopic.related_videos[0] | verifyData }}\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6 topics-list p-0\">\r\n                                    <table class=\"table table-striped mb-0\">\r\n                                        <tbody>\r\n                                            <tr class=\"bg-theme\">\r\n                                                <th>{{ 'TOPIC' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let topic of topics;let i = index\">\r\n                                                <td>\r\n                                                    <b>{{ i + 1 }}.{{ topic.name | verifyData }}</b><br/>\r\n                                                    {{ 'KEYWORDS' | translate }} : {{ topic.keywords | verifyData }}<br/>\r\n                                                    {{ 'RELATED_VIDEOS' | translate }} : \r\n                                                    <a href=\"{{ topic.related_videos }}\" target=\"_blank\">\r\n                                                        {{ topic.related_videos | verifyData }}\r\n                                                    </a><br/>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm mr-1\" (click)=\"selectTopic(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-play-circle\"></i> {{ 'PLAY' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm mr-1\" data-toggle=\"modal\" [attr.data-target]=\"'#update-topic'\"\r\n                                                    (click)=\"editTopic(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-danger mt-2 btn-sm mr-1\" (click)=\"deleteTopic(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-trash\"></i> {{ 'DELETE' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm\" (click)=\"navigateToFaqs(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-eye\"></i> {{ 'FAQS' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"topicsDataStatus === 0 || topicsDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=6 [errorCode]=\"topicsDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-topic\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_TOPIC' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateTopic()\" [formGroup]=\"editTopicForm\" id=\"editTopicForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'TOPIC_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'KEYWORDS' | translate }}</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"keywords\" \r\n                        placeholder=\"{{ 'ENTER_KEYWORDS' | translate }}\">\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('keywords')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'RELATED_VIDEOS' | translate }}</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"related_videos\" \r\n                        placeholder=\"{{ 'ENTER_RELATED_VIDEOS' | translate }}\">\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('related_videos')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'VIDEO_ID' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"video_id\" \r\n                        placeholder=\"{{ 'VIDEO_ID' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('video_id')\"></app-form-validator>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editTopicForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-spinner\r\n    bdColor = \"rgba(0,0,0,.5)\" size = \"small\" color = \"transperant\" class=\"custom-spinner\" [fullScreen] = \"true\">\r\n    <img src='assets/images/logo.png' />\r\n</ngx-spinner>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/chapter/chapter.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/chapter/chapter.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsChapterChapterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'CHAPTERS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"inst_class_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"subject_id\" \r\n                                        (change)=\"getChapters()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SUBJECT' | translate }}</option>\r\n                                            <option *ngFor=\"let subject of subjects\" [ngValue]=\"subject.id\">\r\n                                                {{ subject.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" \r\n                                        *ngIf=\"showAddFeature === false\" [disabled]=\"!this.filterForm.valid\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_CHAPTER' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && chaptersDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"chaptersDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'DESCRIPTION' | translate }}</th>\r\n                                                <th>{{ 'TOPICS' | translate }}</th>\r\n                                                <th>{{ 'NOTES' | translate }}</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let chapter of chapters;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>\r\n                                                    <img [src]=\"_constants.DOMAIN_URL + chapter.thumbnail\" class=\"img-circle img-size-32 mr-2\"\r\n                                                    (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                                                    {{ chapter.name | verifyData }}\r\n                                                </td>\r\n                                                <td>{{ chapter.description | verifyData }}</td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm mr-1 mb-1\"\r\n                                                    (click)=\"navigateToTopics(chapter)\" *ngIf=\"chapter.chapter_details.data.length\">\r\n                                                        <i class=\"pr-1 fa fa-eye\"></i> {{ 'VIEW_TOPICS' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm mb-1\"\r\n                                                    (click)=\"addTopics(chapter)\">\r\n                                                        <i class=\"fa fa-plus\"></i> \r\n                                                        <span *ngIf=\"!chapter.chapter_details.data.length\"> {{ 'ADD_TOPIC' | translate }} </span>\r\n                                                    </button>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\" (click)=\"_download.download(chapter.notes)\"\r\n                                                    *ngIf=\"chapter.notes\">\r\n                                                        <i class=\"fa fa-download pr-1\"></i> {{ 'NOTES' | translate }}\r\n                                                    </button>\r\n                                                    <span *ngIf=\"!chapter.notes\">{{ 'NA' | translate }}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button class=\"btn btn-theme-primary btn-sm\"\r\n                                                    (click)=\"editChapter(chapter)\" data-toggle=\"modal\" [attr.data-target]=\"'#update-chapter'\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> \r\n                                                        {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-faculty-list-error [errorId]=7 [errorCode]=\"chaptersDataStatus\" *ngIf=\"chaptersDataStatus === 0 || chaptersDataStatus === 3\">\r\n                                </app-faculty-list-error>\r\n                            </div>\r\n                            <app-faculty-list-error [errorId]=5 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\">\r\n                            </app-faculty-list-error>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"tab\">\r\n                                    <li class=\"nav-item\">\r\n                                        <a class=\"nav-link active\" id=\"chapter-tab\" data-toggle=\"pill\" href=\"#add-chapter\" role=\"tab\" aria-controls=\"add-chapter\" aria-selected=\"true\">\r\n                                            {{ 'CHAPTER' | translate }}\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a class=\"nav-link\" id=\"topic-tab\" data-toggle=\"pill\" href=\"#add-topic\" role=\"tab\" aria-controls=\"add-topic\" aria-selected=\"true\">\r\n                                            {{ 'TOPIC' | translate }}\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"tab-content pt-3\">\r\n                                    <div class=\"col-lg-6 tab-pane fade show active\" id=\"add-chapter\" role=\"tabpanel\">\r\n                                        <form role=\"form\" (ngSubmit)=\"addChapter()\" [formGroup]=\"addChapterForm\" id=\"addChapterForm\">\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'CHAPTER_NAME' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                                placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('name',1)\" [validateNameMinLength]=true></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"description\">{{ 'DESCRIPTION' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"description\" \r\n                                                placeholder=\"{{ 'ENTER_DESCRIPTION' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('description',1)\"></app-form-validator>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"notes\">{{ 'NOTES' | translate }}</label><br/>\r\n                                                <input type=\"file\" (change)=\"onFileChange($event,'notes',1)\" accept=\".pdf\" \r\n                                                required>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"thumbnail\">{{ 'THUMBNAIL' | translate }} *</label><br/>\r\n                                                <input type=\"file\" (change)=\"onFileChange($event,'thumbnail',1)\" accept=\"image/*\" \r\n                                                required>\r\n                                            </div>\r\n                                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                            </button>\r\n                                            <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                                <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                            </button>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 tab-pane fade\" id=\"add-topic\" role=\"tabpanel\">\r\n                                        <form role=\"form\" (ngSubmit)=\"addTopic()\" [formGroup]=\"addTopicForm\" id=\"addTopicForm\">\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'TOPIC_NAME' | translate }} *</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                                placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('name',2)\" [validateNameMinLength]=true></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'CHAPTER' | translate }} *</label>\r\n                                                <select class=\"custom-select form-control\" formControlName=\"chapter_id\" \r\n                                                [hidden]=\"chaptersDataStatus != 1\" required>\r\n                                                    <option [value]=null selected disabled>{{ 'SELECT_CHAPTER' | translate }}</option>\r\n                                                    <option *ngFor=\"let chapter of chapters\" [ngValue]=\"chapter.id\">\r\n                                                        {{ chapter.name }}\r\n                                                    </option>\r\n                                                </select>\r\n                                                <div class=\"error-message\" *ngIf=\"chaptersDataStatus === 0\">\r\n                                                    {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('CHAPTER' | translate) } }}\r\n                                                </div>\r\n                                                <div class=\"error-message\" *ngIf=\"chaptersDataStatus === 3\">\r\n                                                    {{ 'STANDARD_ERROR' | translate }}\r\n                                                </div>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('chapter_id',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'KEYWORDS' | translate }}</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"keywords\" \r\n                                                placeholder=\"{{ 'ENTER_KEYWORDS' | translate }}\">\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('keywords',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'RELATED_VIDEOS' | translate }}</label>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"related_videos\" \r\n                                                placeholder=\"{{ 'ENTER_RELATED_VIDEOS' | translate }}\">\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('related_videos',2)\"></app-form-validator>\r\n                                            <div class=\"form-group mb-0\">\r\n                                                <label for=\"name\">{{ 'VIDEO_ID' | translate }} *</label>\r\n                                                <div>\r\n                                                <input style=\"float:left;width: 80% !important;\" type=\"text\" class=\"form-control\" formControlName=\"video_id\" \r\n                                                placeholder=\"{{ 'VIDEO_ID' | translate }}\" required>\r\n                                                <button type=\"button\" style=\"margin-left:1%;margin-top:1%;\" class=\"btn btn-theme-primary btn-sm\"\r\n                                                    (click)=\"previewVedio()\" data-toggle=\"modal\" [attr.data-target]=\"'#preview-vedio'\">\r\n                                                        {{ 'Preview' | translate }}\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <app-form-validator [data]=\"validateForm('video_id',2)\"></app-form-validator>\r\n                                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddTopicFeatureForm()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                            </button>\r\n                                            <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                                <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                            </button>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-faculty-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-faculty-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-chapter\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_CHAPTER' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateChapter()\" [formGroup]=\"editChapterForm\" id=\"editChapterForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'CHAPTER_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateForm('name',3)\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"description\">{{ 'DESCRIPTION' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\" \r\n                        placeholder=\"{{ 'ENTER_DESCRIPTION' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateForm('description',3)\"></app-form-validator>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"notes\">{{ 'NOTES' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'notes',3)\" accept=\".pdf\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"thumbnail\">{{ 'THUMBNAIL' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'thumbnail',3)\" accept=\"image/*\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editChapterForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"preview-vedio\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'Preview' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-lg-12 pr-0\">\r\n                    <div id=\"vimeo-player\"></div> \r\n                </div>\r\n                <div *ngIf=\"showPreviewError\" style=\"color: red;font-size: 14px;text-align: center;\">No Vedio Found</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/dashboard/dashboard.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/dashboard/dashboard.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<app-breadcrumb [title]=\"'DASHBOARD'\"></app-breadcrumb>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/examination/examination.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/examination/examination.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsExaminationExaminationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 1\">\r\n        <app-breadcrumb [title]=\"'EXAMINATIONS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\" [formGroup]=\"filterForm\">\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"department_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_DEPARTMENT' | translate }}</option>\r\n                                            <option *ngFor=\"let department of departments\" [ngValue]=\"department.id\">\r\n                                                {{ department.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"inst_class_id\" \r\n                                        (change)=\"getSubjectsData()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1\">\r\n                                        <select class=\"custom-select form-control\" formControlName=\"subject_id\" \r\n                                        (change)=\"getExamsList()\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_SUBJECT' | translate }}</option>\r\n                                            <option *ngFor=\"let subject of subjects\" [ngValue]=\"subject.id\">\r\n                                                {{ subject.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\"\r\n                                        [disabled]=\"!this.filterForm.valid\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_EXAMINATION' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && examDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"examDataStatus === 1\">\r\n                                    <div class=\"row\">\r\n                                        <table class=\"table table-striped\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th>#</th>\r\n                                                    <th>{{ 'NAME' | translate }}</th>\r\n                                                    <th>{{ 'YEAR' | translate }}</th>\r\n                                                    <th></th>\r\n                                                </tr>\r\n                                                <ng-container *ngFor=\"let exam of examsList\">\r\n                                                    <ng-container *ngFor=\"let year of exam | prepareObject\" >\r\n                                                        <tr *ngFor=\"let paper of year.value;let i = index\">\r\n                                                            <td>{{ i + 1 }}</td>\r\n                                                            <td>{{ paper.name | verifyData }}</td>\r\n                                                            <td>{{ paper.year }}</td>\r\n                                                            <td>\r\n                                                                <button class=\"btn btn-theme-primary btn-sm\"\r\n                                                                (click)=\"_download.download(paper.paper, $event)\" *ngIf=\"paper.paper\">\r\n                                                                    <i class=\"pr-1 fa fa-download\"></i> {{ 'DOWNLOAD' | translate }}\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"ml-1 btn btn-danger btn-sm\" (click)=\"deletePaper(paper)\">\r\n                                                                    <i class=\"fa fa-trash\"></i>\r\n                                                                </button>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <app-faculty-list-error [errorId]=8 [errorCode]=\"examDataStatus\" *ngIf=\"examDataStatus === 0 || examDataStatus === 3\">\r\n                                </app-faculty-list-error>\r\n                            </div>\r\n                            <app-faculty-list-error [errorId]=5 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\" \r\n                            [hidden]=\"showAddFeature === true\">\r\n                            </app-faculty-list-error>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <form role=\"form\" (ngSubmit)=\"addExam()\" [formGroup]=\"addDataForm\" id=\"addDataForm\">\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label for=\"name\">{{ 'EXAMINATION_NAME' | translate }} *</label>\r\n                                        <input type=\"text\" class=\"form-control\" \r\n                                        formControlName=\"name\" placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                    </div>\r\n                                    <app-form-validator [data]=\"validateAddFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label for=\"name\">{{ 'SELECT_YEAR' | translate }} *</label>\r\n                                        <select class=\"custom-select form-control\" formControlName=\"year\" required>\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_YEAR' | translate }}</option>\r\n                                            <option *ngFor=\"let year of years\" [ngValue]=\"year\">\r\n                                                {{ year }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <app-form-validator [data]=\"validateAddFormValue('year')\"></app-form-validator>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"paper\">{{ 'EXAMINATION_PAPER' | translate }}</label><br/>\r\n                                        <input type=\"file\" (change)=\"onFileChange($event,'paper')\" accept=\".pdf\" required>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                        <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                    </button>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"filterDataStatus === 0 || filterDataStatus === 3\">\r\n        <app-faculty-list-error [errorId]=1 [errorCode]=\"filterDataStatus\">\r\n        </app-faculty-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/faq/faq.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/faq/faq.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"'FAQS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <form class=\"col-lg-12 row\" role=\"form\">\r\n                                    <div class=\"col-lg-4 p-1\">\r\n                                        <select class=\"custom-select form-control\" required\r\n                                        (change)=\"onTopicChange()\" [(ngModel)] =\"topicId\" [ngModelOptions]=\"{standalone: true}\">\r\n                                            <option [value]=null selected disabled>{{ 'SELECT_TOPIC' | translate }}</option>\r\n                                            <option *ngFor=\"let topic of topics\" [ngValue]=\"topic.id\">\r\n                                                {{ topic.name }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8 p-1 text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                            <i class=\"fa fa-plus\"></i> {{ 'ADD_FAQ' | translate }}\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && faqsDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"faqsDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>{{ 'FREQUENTLY_ASKED_QUESTIONS' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let faq of faqs;let i = index\">\r\n                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>{{ i + 1 }}.&nbsp;{{ faq.question }}</b><br/>\r\n                                                    {{ faq.answer }}<br/>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"'#editData'\"\r\n                                                    (click)=\"initialiseEditModal(faq)\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-danger mt-2 btn-sm ml-1\" (click)=\"deleteFaq(faq)\">\r\n                                                        <i class=\"pr-1 fa fa-trash\"></i> {{ 'DELETE' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-admin-list-error [errorId]=2 [errorCode]=\"faqsDataStatus\" *ngIf=\"faqsDataStatus === 0 || faqsDataStatus === 3\">\r\n                                </app-admin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addFaq()\" [formGroup]=\"addDataForm\">\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"question\">{{ 'QUESTION' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"question\" \r\n                                            placeholder=\"{{ 'ENTER_QUESTION' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('question')\" [validateNameMinLength]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"answer\">{{ 'ANSWER' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"answer\" \r\n                                            placeholder=\"{{ 'ENTER_ANSWER' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('answer')\"></app-form-validator>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"editData\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_FAQ' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateFaq()\" [formGroup]=\"editDataForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"question\">{{ 'QUESTION' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"question\" \r\n                        placeholder=\"{{ 'ENTER_QUESTION' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('question')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"answer\">{{ 'ANSWER' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"answer\" \r\n                        placeholder=\"{{ 'ENTER_ANSWER' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('answer')\"></app-form-validator>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableEditFeatureForm()\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/list-error/list-error.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/list-error/list-error.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsListErrorListErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\r\n    <div class=\"text-center no-data-container\">\r\n        <div class=\"swal2-icon swal2-error swal2-icon-show\" style=\"display: flex;\">\r\n            <span class=\"swal2-x-mark\">\r\n                <span class=\"swal2-x-mark-line-left\"></span>\r\n                <span class=\"swal2-x-mark-line-right\"></span>\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 0\"> \r\n           <span *ngIf=\"errorId === 0\">\r\n                {{ 'NO_SUBJECTS_FOUND_MESSAGE' | translate }}\r\n           </span> \r\n           <span *ngIf=\"errorId === 1\">\r\n                {{ 'NO_QUESTIONS_FOUND_MESSAGE' | translate }}\r\n           </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 3\"> \r\n            <span>\r\n                {{ 'STANDARD_ERROR' | translate }}\r\n            </span> \r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/mcq/mcq.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/mcq/mcq.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsMcqMcqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/questions/questions.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/questions/questions.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsQuestionsQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"col-md-12 pt-4\">\r\n            <section class=\"faculty-questions-list\" *ngIf=\"questionsListStatus === 1\">\r\n                <div *ngFor=\"let question of questionsList; let i = index\">\r\n                    <div class=\"card mb-2\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title text-bold\">{{ 'QUESTION' | translate }} {{ i+1 }}</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"direct-chat-messages\">\r\n                                <div class=\"direct-chat-msg\">\r\n                                    <div class=\"direct-chat-infos clearfix\">\r\n                                        <span class=\"direct-chat-name float-left\">\r\n                                            {{ question.usn }}\r\n                                        </span>\r\n                                    </div>\r\n                                    <img class=\"direct-chat-img\" [src]=\"question.profile_pic\"\r\n                                    (error)=\"_miscellaneous.setDefaultStudentLogo($event)\">\r\n                                    <div class=\"direct-chat-text\">\r\n                                        {{ question.question }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"direct-chat-msg right\" *ngIf=\"question.answer\">\r\n                                    <div class=\"direct-chat-infos clearfix\">\r\n                                        <span class=\"direct-chat-name float-right\">{{ 'YOU' | translate }}</span>\r\n                                    </div>\r\n                                    <img class=\"direct-chat-img\" src=\"assets/images/default_usericon.png\"\r\n                                    (error)=\"_miscellaneous.setDefaultAdminLogo($event)\">\r\n                                    <div class=\"direct-chat-text\">\r\n                                        {{ question.answer }}\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"!question.answer\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>{{ 'REPLAY' | translate }}</label>\r\n                                        <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{ 'REPLAY' | translate }}\"\r\n                                        [(ngModel)]=\"question.replay\"></textarea>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!question.replay\" (click)=\"submitReplay(question)\">\r\n                                        {{ 'SUBMIT' | translate }}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <app-faculty-list-error [errorId]=1 [errorCode]=\"questionsListStatus\" *ngIf=\"questionsListStatus === 0 || questionsListStatus === 3\">\r\n            </app-faculty-list-error>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/sidebar/sidebar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/sidebar/sidebar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-light-primary elevation-4 sidebar-custom\">\r\n    <a class=\"brand-link\">\r\n        <img src=\"assets/images/logo.png\" class=\"brand-image\">\r\n        <span class=\"brand-text\">{{ 'APP_NAME' | translate }}</span>\r\n    </a>\r\n    <div class=\"sidebar\">\r\n        <div class=\"user-panel mt-3 pb-3 d-flex\">\r\n            <div class=\"image\">\r\n                <img [src]=\"_constants.DOMAIN_URL + userDetails.inst_logo\" class=\"img-circle elevation-2\"\r\n                (error)=\"_miscellaneous.setDefaultInstituteLogo($event)\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <a class=\"d-block\">{{ userDetails.inst_name }}</a>\r\n            </div>\r\n        </div>\r\n        <nav>\r\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n                <li class=\"nav-item\" *ngFor=\"let sidemenu of sidemenus\">\r\n                    <a *ngIf=\"sidemenu.out_side !== 'yes'\" routerLink=\"{{ sidemenu.link }}\" routerLinkActive=\"active\" class=\"nav-link\" (click)=\"minimizeSidemenu()\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n                    <a *ngIf=\"sidemenu.out_side === 'yes'\" href=\"{{ sidemenu.link }}\" target=\"_blank\" class=\"nav-link\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</aside>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/subjects/subjects.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/subjects/subjects.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsSubjectsSubjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<section class=\"content\">\r\n          \t<div class=\"col-md-12 pt-4\">\r\n\t\t\t\t<section class=\"row\" *ngIf=\"subjectsListStatus === 1\">\r\n                    <div class=\"col-lg-3 col-12 mt-1\" *ngFor=\"let subject of subjectsList\">\r\n                        <div class=\"card card-widget mb-3 custom-card\" (click)=\"onSubjectSelection(subject)\">\r\n                            <div class=\"card-body p-2\">\r\n                                <div class=\"img-container\">\r\n                                    <img class=\"img-fluid br-4\" [src]='_constants.DOMAIN_URL + subject.bg_image' \r\n                                    (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                                </div>\r\n                                <div class=\"card-header-portion\">\r\n                                    {{ subject.code }}\r\n                                    <button class=\"btn btn-theme-primary float-right btn-sm\"\r\n                                    (click)=\"_download.download(subject.sylabus_copy, $event)\" *ngIf=\"subject.sylabus_copy\">\r\n                                        <i class=\"pr-1 fa fa-download\"></i> {{ 'SYLLABUS' | translate }}\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"card-header-title\">\r\n                                    {{ subject.name }}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <app-faculty-list-error [errorId]=0 [errorCode]=\"subjectsListStatus\" *ngIf=\"subjectsListStatus === 0 || subjectsListStatus === 3\">\r\n                </app-faculty-list-error>\r\n          \t</div>\r\n\t\t</section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/topic/topic.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/topic/topic.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyComponentsTopicTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-faculty-sidebar></app-faculty-sidebar>\r\n    <div class=\"content-wrapper\" [hidden]=\"topicsDataStatus !== 1\">\r\n        <app-breadcrumb [title]=\"'TOPICS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-body row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div id=\"vimeo-player\"></div>\r\n                                    <div class=\"pt-2\">\r\n                                        <div class=\"topic-title mb-2\">\r\n                                            <b>{{ selectedTopic.name }}</b>\r\n                                        </div>\r\n                                        {{ 'RELATED_VIDEOS' | translate }} :\r\n                                        <a href='{{ selectedTopic.related_videos[0] }}' target=\"_blank\">\r\n                                            {{ selectedTopic.related_videos[0] | verifyData }}\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6 topics-list p-0\">\r\n                                    <table class=\"table table-striped mb-0\">\r\n                                        <tbody>\r\n                                            <tr class=\"bg-theme\">\r\n                                                <th>{{ 'TOPIC' | translate }}</th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let topic of topics;let i = index\">\r\n                                                <td>\r\n                                                    <b>{{ i + 1 }}.{{ topic.name | verifyData }}</b><br/>\r\n                                                    {{ 'KEYWORDS' | translate }} : {{ topic.keywords | verifyData }}<br/>\r\n                                                    {{ 'RELATED_VIDEOS' | translate }} : \r\n                                                    <a href=\"{{ topic.related_videos }}\" target=\"_blank\">\r\n                                                        {{ topic.related_videos | verifyData }}\r\n                                                    </a><br/>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm mr-1\" (click)=\"selectTopic(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-play-circle\"></i> {{ 'PLAY' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm mr-1\" data-toggle=\"modal\" [attr.data-target]=\"'#update-topic'\"\r\n                                                    (click)=\"editTopic(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-pen\"></i> {{ 'EDIT' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-danger mt-2 btn-sm mr-1\">\r\n                                                        <i class=\"pr-1 fa fa-trash\"></i> {{ 'DELETE' | translate }}\r\n                                                    </button>\r\n                                                    <button class=\"btn btn-theme-primary mt-2 btn-sm\" (click)=\"navigateToFaqs(topic)\">\r\n                                                        <i class=\"pr-1 fa fa-eye\"></i> {{ 'FAQS' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"content-wrapper\" *ngIf=\"topicsDataStatus === 0 || topicsDataStatus === 3\">\r\n        <app-admin-list-error [errorId]=6 [errorCode]=\"topicsDataStatus\">\r\n        </app-admin-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-topic\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_TOPIC' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateTopic()\" [formGroup]=\"editTopicForm\" id=\"editTopicForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'TOPIC_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'KEYWORDS' | translate }}</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"keywords\" \r\n                        placeholder=\"{{ 'ENTER_KEYWORDS' | translate }}\">\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('keywords')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'RELATED_VIDEOS' | translate }}</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"related_videos\" \r\n                        placeholder=\"{{ 'ENTER_RELATED_VIDEOS' | translate }}\">\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('related_videos')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'VIDEO_ID' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"video_id\" \r\n                        placeholder=\"{{ 'VIDEO_ID' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateUpdateTopicFormValue('video_id')\"></app-form-validator>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editTopicForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">{{ title | translate }}</h1>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <ol class=\"breadcrumb float-sm-right\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"#\">{{ 'DASHBOARD' | translate }}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{ title | translate }}</li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"main-footer\">\r\n    <strong>{{ 'COPYRIGHT' | translate }} &copy; 2021 {{ 'APP_NAME' | translate }}.</strong>\r\n    {{ 'ALL_RIGHTS_RESERVED' | translate }}\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/formValidator/formValidator.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/formValidator/formValidator.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFormValidatorFormValidatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-error-container\">\r\n    <div *ngIf=\"data.invalid && (data.dirty || data.touched)\">\r\n        <span class=\"form-input-error\" *ngIf=\"validateRequired && data.errors.required\">\r\n            {{ 'INPUT_MANDATORY_ERROR' | translate }}\r\n        </span>\r\n        <span class=\"form-input-error\" *ngIf=\"validateEmail && data.errors.email\">\r\n            {{ 'EMAIL_ADDRESS_ERROR' | translate }}\r\n        </span>\r\n        <span class=\"form-input-error\" *ngIf=\"validatePasswordLength && data.errors.minlength\">\r\n            {{ 'PASSWORD_ERROR' | translate }}\r\n        </span>\r\n        <span class=\"form-input-error\" *ngIf=\"validateNameMinLength && data.errors.minlength\">\r\n            {{ 'NAME_ERROR' | translate }}\r\n        </span>\r\n        <span class=\"form-input-error\" *ngIf=\"validatePhoneNoMinLength && data.errors.minlength\">\r\n            {{ 'PHONE_NO_ERROR' | translate }}\r\n        </span>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 basic-form\">\r\n    <div class=\"col-lg-8 m-auto align-center\">\r\n        <div class=\"card mb-0 bg-theme-light\">\r\n            <div class=\"col-lg-12 row m-0 p-0\">\r\n                <div class=\"col-lg-6 p-4 pb-5 bg-white login-form\">\r\n                    <p class=\"text-center mb-2\">\r\n                        <img class=\"app-logo\" src=\"assets/images/form_logo.png\">\r\n                    </p>\r\n                    <h2 class=\"text-center pb-4\">{{ 'WELCOME_TITLE' | translate }}</h2>\r\n                    <form (ngSubmit)=\"doLogin()\" [formGroup]=\"loginForm\" class=\"mt-5\">\r\n                        <div class=\"form-group mb-0\">\r\n                            <label for=\"email\">{{ (loginType === 'student') ? ('USN' | translate) : ('EMAIL_ADDRESS' | translate) }} *</label>\r\n                            <input type=\"email\" class=\"form-control br-basic-form\" formControlName=\"email\" \r\n                            placeholder=\"{{ (loginType === 'student') ? ('ENTER_USN' | translate) : ('EMAIL_ADDRESS' | translate) }}\" required>\r\n                        </div>\r\n                        <app-form-validator [data]=\"validateLoginForm('email')\" [validateEmail]=true></app-form-validator>\r\n                        <div class=\"form-group mb-0 mt-1\">\r\n                            <label for=\"password\">{{ 'PASSWORD' | translate }} *</label>\r\n                            <div class=\"input-group\">\r\n                                <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control br-basic-form\" \r\n                                formControlName=\"password\" placeholder=\"{{ 'PASSWORD' | translate }}\" required>\r\n                                <div class=\"input-group-append\" (click)=\"togglePassword()\">\r\n                                    <div class=\"input-group-text br-basic-form bg-white cursor-ponter\" type=\"button\">\r\n                                        <i *ngIf=\"showPassword\" class=\"fa fa-eye-slash\"></i>\r\n                                        <i *ngIf=\"!showPassword\" class=\"fa fa-eye\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <app-form-validator [data]=\"validateLoginForm('password')\" [validatePasswordLength]=true></app-form-validator>\r\n                        <div class=\"row mt-1\">\r\n                            <div class=\"col-lg-12\">\r\n                                <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-block br-basic-form\">{{ 'SIGNIN' | translate }}</button>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"mt-1\">\r\n                            <a  *ngIf=\"loginType === 'student'\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">{{ 'FORGOT_PASSWORD_LINK' | translate }}</a>\r\n                            <a  *ngIf=\"loginType !== 'student'\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModalAdmin\">{{ 'FORGOT_PASSWORD_LINK' | translate }}</a>\r\n\r\n                        </p>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-lg-6 basic-form-image p-2 mt-3\">\r\n                    <div class=\"app-message m-auto text-center\">\r\n                        {{ 'APP_MESSAGE' | translate }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Forgot Password</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form role=\"form\" (ngSubmit)=\"forgotPassword()\" [formGroup]=\"forgotPasswordForm\" id=\"forgotPasswordForm\">\r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                    <input type=\"email\" class=\"form-control br-basic-form\" name=\"email\" \r\n                    formControlName=\"email\" [email]=\"true\" placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateForgotPasswordFormValue('email')\" [validateEmail]=true></app-form-validator> \r\n                <div class=\"form-group mb-0 mt-1\">\r\n                    <label for=\"uan\">{{ 'UAN' | translate }} *</label>\r\n                    <input type=\"text\" class=\"form-control br-basic-form\" name=\"uan\" \r\n                    formControlName=\"usn\"  placeholder=\"{{ 'USN' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateForgotPasswordFormValue('usn')\" [validateUsn]=true></app-form-validator>\r\n\r\n                <button type=\"submit\" [disabled]=\"!forgotPasswordForm.valid\" class=\"btn btn-theme-primary\">\r\n                   {{ 'Send' | translate }}\r\n                </button>\r\n                </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <!-- Admin Modal -->\r\n  <div class=\"modal fade\" id=\"myModalAdmin\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Forgot Password</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form role=\"form\" (ngSubmit)=\"adminForgotPassword()\" [formGroup]=\"adminForgotPasswordForm\" id=\"adminForgotPasswordForm\">\r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                    <input type=\"email\" class=\"form-control br-basic-form\" name=\"email\" \r\n                    formControlName=\"email\" [email]=\"true\" placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateAdminForgotPasswordFormValue('email')\" [validateEmail]=true></app-form-validator> \r\n\r\n                <button type=\"submit\" [disabled]=\"!adminForgotPasswordForm.valid\" class=\"btn btn-theme-primary\">\r\n                   {{ 'Send' | translate }}\r\n                </button>\r\n                </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"main-header navbar navbar-expand navbar-light navbar-white\">\r\n    <ul class=\"navbar-nav\">\r\n      \t<li class=\"nav-item\">\r\n        \t<a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\">\r\n\t\t\t\t<i class=\"fas fa-bars\"></i>\r\n\t\t\t</a>\r\n      \t</li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n\t\t<li class=\"nav-item dropdown user-menu cursor-pointer\">\r\n\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t  <img [src]='_constants.DOMAIN_URL + userDetails.profile_pic' class=\"user-image img-circle elevation-2\"\r\n\t\t\t  (error)=\"_miscellaneous.setDefaultAdminLogo($event)\">\r\n\t\t\t  <span class=\"d-none d-md-inline\">{{ userDetails.name | verifyData }}</span>\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n\t\t\t  \t<li class=\"user-header\">\r\n\t\t\t\t\t<img [src]='_constants.DOMAIN_URL + userDetails.profile_pic' class=\"img-circle elevation-2\"\r\n\t\t\t\t\t(error)=\"_miscellaneous.setDefaultAdminLogo($event)\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<b>{{ userDetails.name | verifyData }}</b>\r\n\t\t\t\t\t\t<small>{{ userDetails.email }}</small>\r\n\t\t\t\t\t</p>\r\n\t\t\t  \t</li>\r\n\t\t\t  \t<li class=\"user-footer\">\r\n\t\t\t\t\t<a class=\"btn btn-theme-light btn-flat float-right\" (click)=\"logout()\">{{ 'LOGOUT' | translate }}</a>\r\n\t\t\t  \t</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pageNotFound/pageNotFound.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pageNotFound/pageNotFound.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/chapter/chapter.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/chapter/chapter.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsChapterChapterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<section class=\"content col-12 row p-4\" *ngIf=\"chaptersDataStatus === 1\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-12 mt-1\" *ngFor=\"let chapter of chapters\">\r\n        <div class=\"card card-widget mb-3 custom-card\">\r\n            <div class=\"card-body p-2\" (click)=\"navigateToTopics(chapter)\">\r\n                <div class=\"img-container ctmimg-wdt\">\r\n                    <img class=\"img-fluid br-4\" [src]='this._constants.DOMAIN_URL + chapter.thumbnail' \r\n                    (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                </div>\r\n                <div class=\"card-header-portion\">\r\n                    {{ subjectDetails.code | verifyData }}\r\n                    <button class=\"btn btn-theme-primary float-right btn-sm\"\r\n                    (click)=\"_download.download(chapter.notes, $event)\" *ngIf=\"chapter.notes\">\r\n                        <i class=\"pr-1 fa fa-download\"></i> {{ 'NOTES' | translate }}\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-header-title\">\r\n                    {{ chapter.name | verifyData }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<app-student-list-error [errorId]=1 [errorCode]=\"chaptersDataStatus\" \r\n*ngIf=\"chaptersDataStatus === 0 || chaptersDataStatus === 3\">\r\n</app-student-list-error>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/content/content.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/content/content.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"w-100\" *ngIf=\"subjectDetailsDataStatus === 1\">\r\n            <div class=\"card mb-2\">\r\n                <div class=\"card-body bg-light-black\">\r\n                    <div class=\"col-12 row p-3\">\r\n                        <div class=\"col-md-4 col-12 bg-white p-0 br-4 position-relative\">\r\n                            <div class=\"img-container sbt-wdt\">\r\n                                <img class=\"img-fluid br-4 p-2\" [src]='this._constants.DOMAIN_URL + subjectDetails.bg_image' \r\n                                (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 col-12 pl-3\">\r\n                            <h4 class=\"text-bold\">{{ 'SUBJECT' | translate }} : {{ subjectDetails.name | verifyData }}({{ subjectDetails.code | verifyData }})</h4>\r\n                            <div>{{ 'FACULTY_NAME' | translate }} : {{ subjectDetails.faculty | verifyData }}</div>\r\n                            <button class=\"btn btn-theme-primary mt-3 br-20\" (click)=\"_download.download(subjectDetails.syllabus)\">\r\n                                <i class=\"pr-1 fa fa-download\"></i> {{ 'DOWNLOAD_SYLLABUS' | translate }}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"bg-white text-center p-2\">\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"updateNavigation(1)\" \r\n                        [ngClass]=\"{'btn-theme-primary' : contentType === 1,'btn-theme-outline-primary' : contentType === 2}\">\r\n                            {{ 'CHAPTERS' | translate }}\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn\" (click)=\"updateNavigation(2)\" \r\n                        [ngClass]=\"{'btn-theme-primary' : contentType === 2,'btn-theme-outline-primary' : contentType === 1}\">\r\n                            {{ 'EXAMINATIONS' | translate }}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"contentType === 1\">\r\n                <app-student-chapter [subjectId]=\"subjectId\" [subjectDetails]=\"subjectDetails\"></app-student-chapter>\r\n            </div>\r\n            <div *ngIf=\"contentType === 2\">\r\n                <app-student-examination [subjectId]=\"subjectId\"></app-student-examination>\r\n            </div>\r\n        </div>\r\n        <app-student-list-error [errorId]=6 [errorCode]=\"subjectDetailsDataStatus\" \r\n        *ngIf=\"subjectDetailsDataStatus === 0 || subjectDetailsDataStatus === 3\">\r\n        </app-student-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/examination/examination.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/examination/examination.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsExaminationExaminationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"col-md-12 pt-2\" *ngIf=\"examDataStatus === 1\">\r\n    <div class=\"card mb-4\" *ngFor=\"let exam of examsList\">\r\n        <div *ngFor=\"let year of exam | prepareObject\">\r\n            <div class=\"card-header\">\r\n                <h5 class=\"mb-2\">{{ year.key }} {{ 'EXAMINATION_PAPER' | translate }}</h5>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-sm-6 col-12\" *ngFor=\"let paper of year.value\" \r\n                    (click)=\"_download.download(paper.paper)\">\r\n                        <div class=\"info-box filter-boxes\">\r\n                            <div class=\"info-box-content\">\r\n                                <span class=\"info-box-text\">{{ paper.name | verifyData }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-student-list-error [errorId]=2 [errorCode]=\"examDataStatus\" \r\n*ngIf=\"examDataStatus === 0 || examDataStatus === 3\">\r\n</app-student-list-error>\r\n\t\t";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/faq/faq.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/faq/faq.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div *ngIf=\"faqsDataStatus === 1\">\r\n    <dl *ngFor=\"let faq of faqs;let i = index\">\r\n        <dt>{{ i+1 }}.&nbsp;{{ faq.question }}</dt>\r\n        <dd>{{ faq.answer }}</dd>\r\n    </dl>\r\n</div>\r\n<div *ngIf=\"faqsDataStatus === 0\">\r\n    {{ 'NA' | translate }}\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/feedback/feedback.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/feedback/feedback.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<app-breadcrumb [title]=\"'FEEDBACK'\"></app-breadcrumb>\r\n      \r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/help/help.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/help/help.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsHelpHelpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<app-breadcrumb [title]=\"'HELP'\"></app-breadcrumb>\r\n      \r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/list-error/list-error.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/list-error/list-error.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsListErrorListErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\r\n    <div class=\"text-center no-data-container\">\r\n        <div class=\"swal2-icon swal2-error swal2-icon-show\" style=\"display: flex;\">\r\n            <span class=\"swal2-x-mark\">\r\n                <span class=\"swal2-x-mark-line-left\"></span>\r\n                <span class=\"swal2-x-mark-line-right\"></span>\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 0\"> \r\n            <span *ngIf=\"errorId === 0\">\r\n                {{ 'NO_SUBJECTS_FOUND_STUDENT' | translate }}\r\n            </span> \r\n            <span *ngIf=\"errorId === 1\">\r\n                {{ 'NO_CHAPTERS_FOUND_STUDENT' | translate }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 2\">\r\n                {{ 'NO_EXAMINATIONS_FOUND_STUDENT' | translate }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 3\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('WISHLISTS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 4\">\r\n                {{ 'NO_TOPICS_FOUND_STUDENT' | translate }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 5\">\r\n                {{ 'NO_SEARCH_RESULTS_FOUND_STUDENT' | translate }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 6\">\r\n                {{ 'SUBJECT_DETAILS_NOT_FOUND_STUDENT' | translate }}\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 3\"> \r\n            <span>\r\n                {{ 'STANDARD_ERROR' | translate }}\r\n            </span> \r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/mcq/mcq.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/mcq/mcq.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsMcqMcqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/navbar/navbar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/navbar/navbar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"main-header navbar navbar-expand navbar-light navbar-white\">\r\n    <ul class=\"navbar-nav\">\r\n      \t<li class=\"nav-item\">\r\n        \t<a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\">\r\n\t\t\t\t<i class=\"fas fa-bars\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item search-icon\" (click)=\"navigateToSearch()\">\r\n        \t<a class=\"nav-link\" role=\"button\">\r\n\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item custom-search-navbar ml-lg-5\">\r\n\t\t\t<div class=\"input-group\" *ngIf=\"showSearhBar\">\r\n\t\t\t\t<form name=\"searchForm\" class=\"w-100\" (submit)=\"navigateToSearch()\">\r\n\t\t\t\t\t<input type=\"search\" [(ngModel)]=\"searchString\" [ngModelOptions]=\"{ standalone: true }\" \r\n\t\t\t\t\tclass=\"form-control\" placeholder=\"{{ 'SEARCH_MESSAGE' | translate }}\">\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<form class=\"form-inline ml-lg-3 mt-1 mt-lg-0\" *ngIf=\"showSemesterDropdown && semestersDataStatus === 1\">\r\n\t\t\t\t<div class=\"form-group mb-0\">\r\n\t\t\t\t\t<select class=\"custom-select selector-medium sem-dropdown\" [(ngModel)] =\"selectSemesterId\" \r\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" (change)=\"onSemesterSelection(selectSemesterId)\">\r\n\t\t\t\t\t\t<option *ngFor=\"let semester of semesters\" [value]=\"semester.id\">{{ 'SEMESTER' | translate }} {{ semester.name }}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item dropdown user-menu cursor-pointer\">\r\n\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t  <img [src]='_constants.DOMAIN_URL + userDetails.profile_pic' class=\"user-image img-circle elevation-2\"\r\n\t\t\t  (error)=\"_miscellaneous.setDefaultStudentLogo($event)\">\r\n\t\t\t  <span class=\"d-none d-md-inline\">{{ userDetails.name | verifyData }}</span>\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n\t\t\t  \t<li class=\"user-header\">\r\n\t\t\t\t\t<img [src]='_constants.DOMAIN_URL + userDetails.profile_pic' class=\"img-circle elevation-2\"\r\n\t\t\t\t\t(error)=\"_miscellaneous.setDefaultStudentLogo($event)\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<b>{{ userDetails.name | verifyData }}</b>\r\n\t\t\t\t\t\t<small>{{ userDetails.email }}</small>\r\n\t\t\t\t\t</p>\r\n\t\t\t  \t</li>\r\n\t\t\t  \t<li class=\"user-footer\">\r\n\t\t\t\t\t<a class=\"btn btn-theme-light btn-flat\" (click)=\"navigteToProfile()\">{{ 'PROFILE' | translate }}</a>\r\n\t\t\t\t\t<a class=\"btn btn-theme-light btn-flat float-right\" (click)=\"logout()\">{{ 'LOGOUT' | translate }}</a>\r\n\t\t\t  \t</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n    </ul>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/create-profile/create-profile.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/create-profile/create-profile.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsProfileCreateProfileCreateProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 basic-form\">\r\n    <div class=\"col-lg-8 m-auto align-center\">\r\n        <div class=\"card mb-0 bg-theme-light\">\r\n            <div class=\"col-lg-12 row m-0 p-0\">\r\n                <div class=\"col-lg-6 p-4 pb-5 bg-white login-form\">\r\n                    <p class=\"text-center mb-2\">\r\n                        <img class=\"app-logo\" src=\"assets/images/form_logo.png\">\r\n                    </p>\r\n                    <ng-container *ngIf=\"createProfileIndex === 1\">\r\n                        <form [formGroup]=\"createProfileForm1\">\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"name\">{{ 'NAME' | translate }} *</label>\r\n                                <input type=\"text\" class=\"form-control br-basic-form\" formControlName=\"name\" \r\n                                placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm1('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                                <input type=\"email\" class=\"form-control br-basic-form\" formControlName=\"email\" \r\n                                placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm1('email')\" [validateEmail]=true></app-form-validator>\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"name\">{{ 'SEMESTER' | translate }} *</label>\r\n                                <select class=\"custom-select form-control br-basic-form\" formControlName=\"semesterId\" \r\n                                [hidden]=\"semestersDataStatus != 1\" required>\r\n                                    <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                                    <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                        {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                                    </option>\r\n                                </select>\r\n                                <div class=\"error-message\" *ngIf=\"semestersDataStatus === 0\">\r\n                                    {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('SEMESTER' | translate) } }}\r\n                                </div>\r\n                                <div class=\"error-message\" *ngIf=\"semestersDataStatus === 3\">\r\n                                    {{ 'STANDARD_ERROR' | translate }}\r\n                                </div>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm1('semesterId')\"></app-form-validator>\r\n                            <div class=\"form-group mb-3\">\r\n                                <label for=\"profile_pic\">{{ 'PROFILE_PICTURE' | translate }}</label><br/>\r\n                                <input type=\"file\" (change)=\"onFileChange($event,'profile_pic')\" accept=\"image/*\" >\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!this.createProfileForm1.valid\"\r\n                            (click)=\"navigate(2)\">\r\n                                {{ 'NEXT' | translate }}\r\n                            </button>\r\n                        </form>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"createProfileIndex === 2\">\r\n                        <form [formGroup]=\"createProfileForm2\" (submit)=\"verifyOTP()\">\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"password\">{{ 'PASSWORD' | translate }} *</label>\r\n                                <div class=\"input-group\">\r\n                                    <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control br-basic-form\" \r\n                                    formControlName=\"password\" placeholder=\"{{ 'PASSWORD' | translate }}\" required>\r\n                                    <div class=\"input-group-append\" (click)=\"togglePassword()\">\r\n                                        <div class=\"input-group-text br-basic-form bg-white cursor-ponter\" type=\"button\">\r\n                                            <i *ngIf=\"showPassword\" class=\"fa fa-eye-slash\"></i>\r\n                                            <i *ngIf=\"!showPassword\" class=\"fa fa-eye\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm2('password')\" [validatePasswordLength]=true></app-form-validator>\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"password\">{{ 'CONFIRM_PASSWORD' | translate }} *</label>\r\n                                <div class=\"input-group\">\r\n                                    <input [type]=\"showConfirmPassword ? 'text' : 'password'\" class=\"form-control br-basic-form\" \r\n                                    formControlName=\"confirmPassword\" placeholder=\"{{ 'PASSWORD' | translate }}\" required>\r\n                                    <div class=\"input-group-append\" (click)=\"toggleConfirmPassword()\">\r\n                                        <div class=\"input-group-text br-basic-form bg-white cursor-ponter\" type=\"button\">\r\n                                            <i *ngIf=\"showConfirmPassword\" class=\"fa fa-eye-slash\"></i>\r\n                                            <i *ngIf=\"!showConfirmPassword\" class=\"fa fa-eye\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-error-container\">\r\n                                <span class=\"form-input-error\" *ngIf=\"createProfileForm2.hasError('passwordNotSame') && createProfileForm2.get('confirmPassword').dirty\">\r\n                                    {{ 'PASSWORD_DOES_NOT_MATCH' | translate }}\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"form-group mb-0\">\r\n                                <label for=\"name\">{{ 'PHONE_NUMBER' | translate }} *</label>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"number\" class=\"form-control br-basic-form\" \r\n                                    formControlName=\"phone_number\" placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\r\n                                    <div class=\"input-group-append\" (click)=\"sendOTP()\">\r\n                                        <div class=\"input-group-text br-basic-form bg-white cursor-ponter\" type=\"button\">\r\n                                            <span *ngIf=\"otpSent\">{{ 'RESEND_OTP' | translate }}</span>\r\n                                            <span *ngIf=\"!otpSent\">{{ 'SEND_OTP' | translate }}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm2('phone_number')\"></app-form-validator>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">{{ 'OTP' | translate }} *</label>\r\n                                <input type=\"number\" class=\"form-control br-basic-form\"\r\n                                formControlName=\"otp\" placeholder=\"{{ 'OTP' | translate }}\" required>\r\n                            </div>\r\n                            <app-form-validator [data]=\"validateCreateProfileForm2('otp')\"></app-form-validator>\r\n                            <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!this.createProfileForm2.valid\">\r\n                                <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                            </button>\r\n                            <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"navigate(1)\">\r\n                                <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                            </button>\r\n                        </form>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-lg-6 basic-form-image p-2 mt-3\">\r\n                    <div class=\"app-message m-auto text-center\">\r\n                        {{ 'APP_MESSAGE' | translate }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/profile.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/profile.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <section class=\"content col-lg-12 row p-4\" *ngIf=\"profileDetailsStatus === 1\">\r\n            <div class=\"card col-lg-6 card-primary card-outline\">\r\n                <div class=\"card-body box-profile\">\r\n                    <div class=\"text-center\">\r\n                        <img class=\"profile-user-img img-fluid img-circle\" [src]='this.constants.DOMAIN_URL + profileDetails.profile_pic'\r\n                        (error)=\"miscellaneousService.setDefaultStudentLogo($event)\">\r\n                    </div>\r\n                    <h3 class=\"profile-username text-center\">{{ profileDetails.name }}</h3>\r\n                    <p class=\"text-muted text-center\">{{ profileDetails.usn }}</p>\r\n                    <ul class=\"list-group list-group-unbordered mb-3\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>{{ 'PHONE_NUMBER' | translate }}</b> <a class=\"float-right\">{{ profileDetails.phone_number }}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>{{ 'EMAIL_ADDRESS' | translate }}</b> <a class=\"float-right\">{{ profileDetails.email }}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>{{ 'INSTITUTE_NAME' | translate }}</b> <a class=\"float-right\">{{ profileDetails.inst_name }}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>{{ 'DEPARTMENT' | translate }}</b> <a class=\"float-right\">{{ profileDetails.department_name }}</a>\r\n                        </li>\r\n                    </ul>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary float-right\" (click)=\"initiateEditModal()\"\r\n                    data-toggle=\"modal\" [attr.data-target]=\"'#update-profile'\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"update-profile\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_PROFILE' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateProfile()\" [formGroup]=\"editProfileForm\" id=\"editProfileForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" \r\n                        formControlName=\"name\" placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateProfileEditFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" \r\n                        formControlName=\"email\" placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateProfileEditFormValue('email')\" [validateEmail]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'PHONE_NUMBER' | translate }} *</label>\r\n                        <input type=\"number\" class=\"form-control\"\r\n                        formControlName=\"phone_number\" placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateProfileEditFormValue('phone_number')\"></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'SEMESTER' | translate }} *</label>\r\n                        <select class=\"custom-select form-control\" formControlName=\"semester_id\" \r\n                        [hidden]=\"semestersDataStatus != 1\" required>\r\n                            <option [value]=null selected disabled>{{ 'SELECT_SEMESTER' | translate }}</option>\r\n                            <option *ngFor=\"let semester of semesters\" [ngValue]=\"semester.id\">\r\n                                {{ 'SEMESTER' | translate }} {{ semester.name }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"error-message\" *ngIf=\"semestersDataStatus === 0\">\r\n                            {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('SEMESTER' | translate) } }}\r\n                        </div>\r\n                        <div class=\"error-message\" *ngIf=\"semestersDataStatus === 3\">\r\n                            {{ 'STANDARD_ERROR' | translate }}\r\n                        </div>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateProfileEditFormValue('semester_id')\"></app-form-validator>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">{{ 'PASSWORD' | translate }}</label>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" \r\n                        formControlName=\"password\" placeholder=\"{{ 'PASSWORD' | translate }}\">\r\n                    </div>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"password\">{{ 'CONFIRM_PASSWORD' | translate }}</label>\r\n                        <input type=\"password\" class=\"form-control\" name=\"confirm_password\" \r\n                        formControlName=\"confirm_password\" placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\r\n                    </div>\r\n                    <div class=\"form-error-container\">\r\n                        <span class=\"form-input-error\" *ngIf=\"editProfileForm.hasError('passwordNotSame') && editProfileForm.get('confirm_password').dirty\">\r\n                            {{ 'PASSWORD_DOES_NOT_MATCH' | translate }}\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"profile_pic\">{{ 'PROFILE_PICTURE' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'profile_pic')\"\r\n                        accept=\"image/*\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editProfileForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/questions/questions.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/questions/questions.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsQuestionsQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form role=\"form\" (ngSubmit)=\"addQuestion()\" [formGroup]=\"addDataForm\">\r\n    <div class=\"form-group\">\r\n        <label>{{ 'QUESTION' | translate }} *</label>\r\n        <textarea class=\"form-control\" formControlName=\"question\" \r\n        placeholder=\"{{ 'ENTER_QUESTION' | translate }}\" required></textarea>\r\n    </div>\r\n    <app-form-validator [data]=\"validateAddFormValue('question')\" [validateNameMinLength]=true></app-form-validator>\r\n    <button type=\"submit\" class=\"btn btn-theme-primary mb-3\" [disabled]=\"disableAddFeatureForm()\">\r\n        <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n    </button>\r\n</form>\r\n<div *ngIf=\"questionsDataStatus === 1\" class=\"questions-list\">\r\n    <b>{{ 'QUESTIONS' | translate }}</b><br/><br/>\r\n    <div *ngFor=\"let question of questions\">\r\n        <div class=\"callout callout-info\">\r\n            <b>{{ question.question }}</b>\r\n            <p>{{ question.answer| verifyData }}</p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/recent-videos/recent-videos.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/recent-videos/recent-videos.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsRecentVideosRecentVideosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 mt-3\" *ngIf=\"recentVideosDataStatus === 1\">\r\n    <section class=\"content recent-videos\">\r\n        <div class=\"col-md-12\">\r\n            <h3 class=\"pb-2 text-dark\">{{ 'RECENT_VIDEOS' | translate }}</h3>\r\n            <section class=\"row\">\r\n                <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 mt-1\" *ngFor=\"let video of recentVideos\">\r\n                    <div class=\"card card-widget mb-3 custom-card\" (click)=\"navigateToTopics(video)\">\r\n                        <div class=\"card-body p-2\">\r\n                            <div class=\"img-container\">\r\n                                <img class=\"img-fluid br-4\" [src]='_constants.DOMAIN_URL + video.thumbnail' \r\n                                (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                            </div>\r\n                            <div class=\"card-header-title\">\r\n                                {{ video.name }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </section>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/search/search.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/search/search.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content col-lg-12 p-4\">\r\n            <form name=\"searchForm\" class=\"col-lg-8 col-12 m-auto\" (submit)=\"getSearchResults()\">\r\n                <input type=\"search\" [(ngModel)]=\"searchString\" [ngModelOptions]=\"{ standalone: true }\" \r\n                class=\"form-control custom-search-input\" placeholder=\"{{ 'SEARCH_MESSAGE' | translate }}\">\r\n            </form>\r\n        </div>\r\n        <section class=\"content col-lg-12 row p-4\" *ngIf=\"searchResultsDataStatus === 1\">\r\n            <div class=\"col-lg-3 col-md-4 col-12 mt-1\" *ngFor=\"let result of searchResults\">\r\n                <div class=\"card card-widget mb-3 custom-card\" (click)=\"navigateToTopics(result)\">\r\n                    <div class=\"card-body p-2\">\r\n                        <div class=\"img-container\">\r\n                            <img class=\"img-fluid br-4\" [src]='_constants.DOMAIN_URL + result.thumbnail' \r\n                            (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                        </div>\r\n                        <div class=\"card-header-title\">\r\n                            {{ result.name }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <app-student-list-error [errorId]=5 [errorCode]=\"searchResultsDataStatus\" *ngIf=\"searchResultsDataStatus === 0 || searchResultsDataStatus === 3\">\r\n        </app-student-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/sidebar/sidebar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/sidebar/sidebar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-light-primary elevation-4 sidebar-custom\">\r\n    <a class=\"brand-link\">\r\n        <img src=\"assets/images/logo.png\" class=\"brand-image\">\r\n        <span class=\"brand-text\">{{ 'APP_NAME' | translate }}</span>\r\n    </a>\r\n    <div class=\"sidebar\">\r\n        <div class=\"user-panel mt-3 pb-3 d-flex\">\r\n            <div class=\"image\">\r\n                <img [src]=\"_constants.DOMAIN_URL + userDetails.inst_logo\" class=\"img-circle elevation-2\"\r\n                (error)=\"_miscellaneous.setDefaultInstituteLogo($event)\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <a class=\"d-block\">{{ userDetails.inst_name | verifyData }}</a>\r\n            </div>\r\n        </div>\r\n        <nav>\r\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n                <li class=\"nav-item\" *ngFor=\"let sidemenu of sidemenus\">\r\n                    <a *ngIf=\"sidemenu.out_side !== 'yes'\" routerLink=\"{{ sidemenu.link }}\" routerLinkActive=\"active\" class=\"nav-link\" (click)=\"minimizeSidemenu()\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n\r\n                    <a *ngIf=\"sidemenu.out_side === 'yes'\" href=\"{{ sidemenu.link }}\" target=\"_blank\" class=\"nav-link\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</aside>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/subject/subject.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/subject/subject.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsSubjectSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar (semesterChanged)=\"onSemesterSelection($event)\"></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"(featureType === 1)?'HOME':'EXAMINATION'\"></app-breadcrumb>\r\n      \t<section class=\"content\">\r\n          \t<div class=\"col-md-12\">\r\n\t\t\t\t<section class=\"row\" *ngIf=\"subjectsDataStatus === 1\">\r\n                    <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 mt-1\" *ngFor=\"let subject of subjects\">\r\n                        <div class=\"card card-widget mb-3 custom-card\" (click)=\"onSubjectSelection(subject)\">\r\n                            <div class=\"card-body p-2\">\r\n                                <div class=\"img-container\">\r\n                                    <img class=\"img-fluid br-4\" [src]='_constants.DOMAIN_URL + subject.bg_image' \r\n                                    (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                                </div>\r\n                                <div class=\"card-header-portion\">\r\n                                    {{ subject.code }}\r\n                                    <button class=\"btn btn-theme-primary float-right btn-sm\"\r\n                                    (click)=\"_download.download(subject.syllabus, $event)\" *ngIf=\"subject.syllabus\">\r\n                                        <i class=\"pr-1 fa fa-download\"></i> {{ 'SYLLABUS' | translate }}\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"card-header-title\">\r\n                                    {{ subject.name }}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <app-student-list-error [errorId]=0 [errorCode]=\"subjectsDataStatus\" *ngIf=\"subjectsDataStatus === 0 || subjectsDataStatus === 3\">\r\n                </app-student-list-error>\r\n          \t</div>\r\n        </section>\r\n        <app-student-recent-videos *ngIf=\"featureType === 1\"></app-student-recent-videos>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Verify Your Account</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form role=\"form\" (ngSubmit)=\"verifyAccount()\" [formGroup]=\"verifyForm\" id=\"verifyForm\">\r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"name\">{{ 'NAME' | translate }} *</label>\r\n                    <input type=\"text\"  class=\"form-control\" name=\"name\" \r\n                    formControlName=\"name\" placeholder=\"{{ 'NAME' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateVerifyFormValue('name')\" [validateNameMinLength]=true></app-form-validator> \r\n\r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" \r\n                    formControlName=\"email\" [email]=\"true\" placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateVerifyFormValue('email')\" [validateEmail]=true></app-form-validator> \r\n            \r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"phone_number\">{{ 'PHONE_NUMBER' | translate }} *</label>\r\n                    <input type=\"text\"  class=\"form-control\" name=\"phone_number\" \r\n                    formControlName=\"phone_number\" placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateVerifyFormValue('phone_number')\"  [validatePhoneNoMinLength]=true></app-form-validator> \r\n                \r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"department_name\">{{ 'DEPARTMENT' | translate }} *</label>\r\n                    <input type=\"text\"  class=\"form-control\" name=\"department_name\" \r\n                    formControlName=\"department_name\" placeholder=\"{{ 'DEPARTMENT' | translate }}\" readonly required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateVerifyFormValue('department_name')\" ></app-form-validator> \r\n\r\n                <div class=\"form-group mb-0\">\r\n                    <label for=\"usn\">{{ 'USN' | translate }} *</label>\r\n                    <input type=\"text\"  class=\"form-control\" name=\"usn\" \r\n                    formControlName=\"usn\" placeholder=\"{{ 'USN' | translate }}\" readonly required>\r\n                </div>\r\n                <app-form-validator [data]=\"validateVerifyFormValue('usn')\" ></app-form-validator> \r\n                \r\n                  \r\n                <button type=\"submit\"  [disabled]=\"!verifyForm.valid\" class=\"btn btn-theme-primary\">\r\n                   {{ 'Verify' | translate }}\r\n                </button>\r\n                </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/topic/topic.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/topic/topic.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsTopicTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"w-100 pt-4\" [hidden]=\"topicsDataStatus !== 1\">\r\n                    <div class=\"card card-primary card-outline\">\r\n                        <div class=\"col-lg-12 row card-body\">\r\n                            <div class=\"col-lg-8 pr-0\">\r\n                                <div id=\"vimeo-player\"></div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 pl-0\">\r\n                                <div class=\"topics-list\">\r\n                                    <table class=\"table table-bordered table-head-fixed text-nowrap m-0\">\r\n                                        <tbody>\r\n                                            <tr class=\"bg-theme\"><td><b>{{ 'COURSE_CONTENT' | translate }}</b></td></tr>\r\n                                            <tr class=\"bg-white\" *ngFor=\"let topic of topics\" (click)=\"selectTopic(topic)\"\r\n                                            [ngClass]=\"{'active-topic': topic.id === selectedTopic.id}\">\r\n                                                <td><span class=\"topic-heading\">{{ topic.name }}</span><i class=\"fas fa-play-circle pr-1 text-muted float-right\"></i></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <div class=\"pt-2\">\r\n                                    <div class=\"topic-title mb-2\"><b>{{ selectedTopic.name }}</b>\r\n                                        <div class=\"cursor-pointer d-inline-block float-right\" *ngIf=\"!selectedTopic.is_wishlist\">\r\n                                            <button class=\"btn btn-theme-primary\" (click)=\"updateTopicWishlist(1)\">\r\n                                                <i class=\"fa fa-plus\"></i>\r\n                                                {{ 'ADD_TO_WISHLIST' | translate }}\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"cursor-pointer d-inline-block float-right\" *ngIf=\"selectedTopic.is_wishlist\">\r\n                                            <button class=\"btn btn-theme-primary\" (click)=\"updateTopicWishlist(0)\">\r\n                                                <i class=\"fa fa-check\"></i>\r\n                                                {{ 'WISHLISTED' | translate }}\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    {{ 'RELATED_VIDEOS' | translate }} :\r\n                                    <a href=\"{{ selectedTopic.related_videos }}\" target=\"_blank\">\r\n                                        {{ selectedTopic.related_videos | verifyData }}\r\n                                    </a>\r\n                                    <br/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12\">\r\n                                <hr/> \r\n                                <div class=\"card card-primary card-outline card-outline-tabs\">\r\n                                    <div class=\"card-header p-0 border-bottom-0\">\r\n                                        <ul class=\"nav nav-tabs\" id=\"custom-tabs-four-tab\" role=\"tablist\">\r\n                                            <li class=\"nav-item\">\r\n                                                <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#tab-details\" role=\"tab\" aria-controls=\"tab-details\" aria-selected=\"true\">\r\n                                                   {{ 'CHAPTER_DETAILS' | translate }}\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"nav-item\">\r\n                                                <a class=\"nav-link\" data-toggle=\"pill\" href=\"#comments\" role=\"tab\" aria-controls=\"comments\" aria-selected=\"false\">\r\n                                                    {{ 'DOUBTS' | translate }}\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"nav-item\">\r\n                                                <a class=\"nav-link\" data-toggle=\"pill\" href=\"#faqs\" role=\"tab\" aria-controls=\"faqs\" aria-selected=\"false\">\r\n                                                    {{ 'FAQS' | translate }}\r\n                                                </a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                        <div class=\"tab-content\">\r\n                                            <div class=\"tab-pane fade show active\" id=\"tab-details\" role=\"tabpanel\" aria-labelledby=\"tab-details\">\r\n                                                <b>{{ 'NAME' | translate }}</b> : {{ chapterDetails.name }} <br/>\r\n                                                <b>{{ 'DESCRIPTION' | translate }}</b> : {{ chapterDetails.description }} <br/>\r\n                                                <b>{{ 'FACULTY' | translate }}</b> : {{ chapterDetails.faculty }}<br/>\r\n                                                <button class=\"btn btn-theme-primary mt-2\" (click)=\"_download.download(chapterDetails.notes)\">\r\n                                                    <i class=\"pr-1 fa fa-download\"></i> {{ 'DOWNLOAD_NOTES' | translate }}\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"tab-pane fade\" id=\"comments\" role=\"tabpanel\" aria-labelledby=\"comments\">\r\n                                                <app-student-questions [topicId]=\"selectedTopic.id\"></app-student-questions>\r\n                                            </div>\r\n                                            <div class=\"tab-pane fade\" id=\"faqs\" role=\"tabpanel\" aria-labelledby=\"faqs\">\r\n                                                <app-student-faq [topicId]=\"selectedTopic.id\"></app-student-faq>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <app-student-list-error [errorId]=4 [errorCode]=\"topicsDataStatus\" *ngIf=\"topicsDataStatus === 0 || topicsDataStatus === 3\">\r\n                </app-student-list-error>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/wishlist/wishlist.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/wishlist/wishlist.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentComponentsWishlistWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-student-navbar></app-student-navbar>\r\n    <app-student-sidebar></app-student-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <section class=\"content col-12 row p-4\" *ngIf=\"wishlistDataStatus === 1\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 mt-1\" *ngFor=\"let wishlist of wishlists\">\r\n                <div class=\"card card-widget mb-3 custom-card\" (click)=\"navigateToTopics(wishlist.chapter_details.data[0])\">\r\n                    <div class=\"card-body p-2\">\r\n                        <div class=\"img-container\">\r\n                            <img class=\"img-fluid br-4\" [src]='_constants.DOMAIN_URL + wishlist.chapter_details.data[0].thumbnail' \r\n                            (error)=\"_miscellaneous.setDefaultThumbnailImage($event)\">\r\n                        </div>\r\n                        <div class=\"card-header-title\">\r\n                            {{ wishlist.chapter_details.data[0].name }}\r\n                        </div>\r\n                        <div class=\"cursor-pointer mt-2\">\r\n                            <button class=\"btn btn-theme-primary btn-sm\" (click)=\"updateTopicWishlist(wishlist, $event)\">\r\n                                <i class=\"fa fa-check\"></i>\r\n                                {{ 'WISHLISTED' | translate }}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <app-student-list-error [errorId]=3 [errorCode]=\"wishlistDataStatus\" *ngIf=\"wishlistDataStatus === 0 || wishlistDataStatus === 3\">\r\n        </app-student-list-error>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/admins/admins.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/admins/admins.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsAdminsAdminsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-super-admin-sidebar></app-super-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"'ADMINS'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title custom-title\">{{ 'ADMINS' | translate }}</h3>\r\n                                <div class=\"col-lg-7 card-tools text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-theme-primary\" \r\n                                    (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                        <i class=\"fa fa-plus\"></i> {{ 'ADD_ADMIN' | translate }}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && adminDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"adminDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'EMAIL_ADDRESS' | translate }}</th>\r\n                                                <th>{{ 'INSTITUTE_NAME' | translate }}</th>\r\n                                                <th>{{ 'STATUS' | translate }}</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let admin of admins;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>{{ admin.name | verifyData }}</td>\r\n                                                <td>{{ admin.email | verifyData }}</td>\r\n                                                <td>{{ admin.inst_name | verifyData }}</td>\r\n                                                <td>\r\n                                                    <span class=\"badge bg-danger mr-1\">{{ 'INACTIVE' | translate }}</span>\r\n                                                    <div class=\"custom-control custom-switch d-inline-block\">\r\n                                                        <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"admin.status\" id=\"{{ admin.name }}\" (change)=\"updateStatus(admin)\">\r\n                                                        <label class=\"custom-control-label\" for=\"{{ admin.name }}\">\r\n                                                            <span class=\"badge bg-success\">{{ 'ACTIVE' | translate }}</span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm ml-1\" \r\n                                                    data-toggle=\"modal\" [attr.data-target]=\"'#update-admin'\"\r\n                                                    (click)=\"initiateEditModal(admin)\">\r\n                                                        <i class=\"fas fa-pen pr-1\"></i> {{ 'UPDATE' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-sAdmin-list-error [errorId]=1 [errorCode]=\"adminDataStatus\" *ngIf=\"adminDataStatus === 0 || adminDataStatus === 3\">\r\n                                </app-sAdmin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addAdmin()\" [formGroup]=\"addAdminForm\">\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"name\">{{ 'ADMIN_NAME' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                            placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddAdminFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" \r\n                                            placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddAdminFormValue('email')\" [validateEmail]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"password\">{{ 'PASSWORD' | translate }} *</label>\r\n                                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" \r\n                                            placeholder=\"{{ 'PASSWORD' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddAdminFormValue('password')\" [validatePasswordLength]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label>{{ 'INSTITUTE_NAME' | translate }} *</label>\r\n                                            <select class=\"custom-select\" formControlName=\"inst_id\" [hidden]=\"instituteDataStatus != 1\" required>\r\n                                                <option [value]=null selected disabled>{{ 'SELECT_INSTITUTE' | translate }}</option>\r\n                                                <option *ngFor=\"let institute of institutes\" [ngValue]=\"institute.id\">\r\n                                                    {{ institute.name }}\r\n                                                </option>\r\n                                            </select>\r\n                                            <div class=\"error-message\" *ngIf=\"instituteDataStatus === 0\">\r\n                                                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('INSTITUTE' | translate) } }}\r\n                                            </div>\r\n                                            <div class=\"error-message\" *ngIf=\"instituteDataStatus === 3\">\r\n                                                {{ 'STANDARD_ERROR' | translate }}\r\n                                            </div>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddAdminFormValue('inst_id')\"></app-form-validator>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-admin\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_ADMIN' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateAdmin()\" [formGroup]=\"editForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'ADMIN_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"email\">{{ 'EMAIL_ADDRESS' | translate }} *</label>\r\n                        <input type=\"email\" class=\"form-control\" \r\n                        formControlName=\"email\" placeholder=\"{{ 'EMAIL_ADDRESS' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditFormValue('email')\" [validateEmail]=true></app-form-validator>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">{{ 'PASSWORD' | translate }}</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" \r\n                        placeholder=\"{{ 'PASSWORD' | translate }}\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/dashboard/dashboard.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/dashboard/dashboard.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-super-admin-sidebar></app-super-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n      \t<app-breadcrumb [title]=\"'DASHBOARD'\"></app-breadcrumb>\r\n\t\t  \t<section class=\"content\" *ngIf=\"dashboardDataStatus === 1\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-3 col-6\" *ngFor=\"let reportCard of dashboardReportCards\">\r\n\t\t\t\t\t\t\t<div class=\"small-box\" [ngClass]=\"reportCard.className\">\r\n\t\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t\t<h3>{{ reportCard.value | verifyData : 'number' }}</h3>\r\n\t\t\t\t\t\t\t\t\t<p>{{ reportCard.name | translate }}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"{{ reportCard.icon }}\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t  \t</section>\r\n\t\t\t<app-sAdmin-list-error [errorId]=2 [errorCode]=\"dashboardDataStatus\" *ngIf=\"dashboardDataStatus === 0 || dashboardDataStatus === 3\">\r\n\t\t\t</app-sAdmin-list-error>\r\n    \t</div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/institutes/institutes.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/institutes/institutes.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsInstitutesInstitutesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-super-admin-sidebar></app-super-admin-sidebar>\r\n    <div class=\"content-wrapper\">\r\n        <app-breadcrumb [title]=\"'INSTITUTES'\"></app-breadcrumb>\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\"> \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-primary card-outline\">\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title custom-title\">{{ 'INSTITUTES' | translate }}</h3>\r\n                                <div class=\"col-lg-7 card-tools text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-theme-primary\" (click)=\"showAddFeatureView(true)\" *ngIf=\"showAddFeature === false\">\r\n                                        <i class=\"fa fa-plus\"></i> {{ 'ADD_INSTITUTE' | translate }}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body scroll-x-auto\" *ngIf=\"showAddFeature === false && instituteDataStatus != 2\">\r\n                                <div class=\"col-lg-12\" *ngIf=\"instituteDataStatus === 1\">\r\n                                    <table class=\"table table-striped\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>{{ 'NAME' | translate }}</th>\r\n                                                <th>{{ 'PHONE_NUMBER' | translate }}</th>\r\n                                                <th>{{ 'ADDRESS' | translate }}</th>\r\n                                                <th>{{ 'STATUS' | translate }}</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let institute of institutes;let i = index\">\r\n                                                <td>{{ i + 1 }}</td>\r\n                                                <td>\r\n                                                    <img [src]=\"_constants.DOMAIN_URL + institute.logo\" class=\"img-circle img-size-32 mr-2\"\r\n                                                    (error)=\"_miscellaneous.setDefaultInstituteLogo($event)\">\r\n                                                    {{ institute.name | verifyData }}\r\n                                                </td>\r\n                                                <td>{{ institute.phone_number | verifyData }}</td>\r\n                                                <td>{{ institute.address | verifyData }}</td>\r\n                                                <td>\r\n                                                    <span class=\"badge bg-danger mr-1\">{{ 'INACTIVE' | translate }}</span>\r\n                                                    <div class=\"custom-control custom-switch d-inline-block\">\r\n                                                        <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"institute.status\" id=\"{{ institute.name }}\" (change)=\"updateStatus(institute)\">\r\n                                                        <label class=\"custom-control-label\" for=\"{{ institute.name }}\">\r\n                                                            <span class=\"badge bg-success\">{{ 'ACTIVE' | translate }}</span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button type=\"button\" class=\"btn btn-theme-primary btn-sm ml-1\" \r\n                                                    data-toggle=\"modal\" [attr.data-target]=\"'#update-institute'\"\r\n                                                    (click)=\"initiateEditModal(institute)\">\r\n                                                        <i class=\"fas fa-pen pr-1\"></i> {{ 'UPDATE' | translate }}\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <app-sAdmin-list-error [errorId]=0 [errorCode]=\"instituteDataStatus\" *ngIf=\"instituteDataStatus === 0 || instituteDataStatus === 3\">\r\n                                </app-sAdmin-list-error>\r\n                            </div>\r\n                            <div class=\"card-body\" [hidden]=\"showAddFeature === false\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <form role=\"form\" (ngSubmit)=\"addInstitute()\" [formGroup]=\"addDataForm\" id=\"addDataForm\">\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"name\">{{ 'INSTITUTE_NAME' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                                            placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"address\">{{ 'ADDRESS' | translate }} *</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"address\" \r\n                                            placeholder=\"{{ 'ENTER_ADDRESS' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('address')\"></app-form-validator>\r\n                                        <div class=\"form-group mb-0\">\r\n                                            <label for=\"name\">{{ 'PHONE_NUMBER' | translate }} *</label>\r\n                                            <input type=\"number\" class=\"form-control\" formControlName=\"phone_number\" \r\n                                            placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\r\n                                        </div>\r\n                                        <app-form-validator [data]=\"validateAddDataFormValue('phone_number')\"></app-form-validator>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"logo\">{{ 'LOGO' | translate }} *</label><br/>\r\n                                            <input type=\"file\" (change)=\"onFileChange($event,'logo',1)\" accept=\"image/*\" \r\n                                            required>\r\n                                        </div>\r\n                                        <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"disableAddFeatureForm()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> {{ 'SUBMIT' | translate }}\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger ml-2\" type=\"button\" (click)=\"showAddFeatureView(false)\">\r\n                                            <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                                        </button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n<div class=\"modal fade\" id=\"update-institute\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{ 'UPDATE_INSTITUTE' | translate }}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\" (ngSubmit)=\"updateInstitute()\" [formGroup]=\"editDataForm\" id=\"editDataForm\">\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'INSTITUTE_NAME' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" \r\n                        placeholder=\"{{ 'ENTER_NAME' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('name')\" [validateNameMinLength]=true></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"address\">{{ 'ADDRESS' | translate }} *</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\" \r\n                        placeholder=\"{{ 'ENTER_ADDRESS' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('address')\"></app-form-validator>\r\n                    <div class=\"form-group mb-0\">\r\n                        <label for=\"name\">{{ 'PHONE_NUMBER' | translate }} *</label>\r\n                        <input type=\"number\" class=\"form-control\" formControlName=\"phone_number\" \r\n                        placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\r\n                    </div>\r\n                    <app-form-validator [data]=\"validateEditDataFormValue('phone_number')\"></app-form-validator>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"logo\">{{ 'LOGO' | translate }}</label><br/>\r\n                        <input type=\"file\" (change)=\"onFileChange($event,'logo',2)\" accept=\"image/*\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-theme-primary\" [disabled]=\"!editDataForm.valid\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{ 'UPDATE' | translate }}\r\n                    </button>\r\n                    <button class=\"btn btn-danger ml-2\" type=\"button\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-reply\"></i> {{ 'BACK' | translate }}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/list-error/list-error.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/list-error/list-error.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsListErrorListErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\r\n    <div class=\"text-center no-data-container\">\r\n        <div class=\"swal2-icon swal2-error swal2-icon-show\" style=\"display: flex;\">\r\n            <span class=\"swal2-x-mark\">\r\n                <span class=\"swal2-x-mark-line-left\"></span>\r\n                <span class=\"swal2-x-mark-line-right\"></span>\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 0\"> \r\n            <span *ngIf=\"errorId === 0\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('INSTITUTES' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('INSTITUTES' | translate) } }}\r\n            </span> \r\n            <span *ngIf=\"errorId === 1\">\r\n                {{ 'NO_DATA_FOUND_MESSAGE1' | translate: { value : ('ADMINS' | translate) } }}<br/> \r\n                {{ 'PLEASE_ADD_FEATURE_TO_CONTINUE' | translate: { value : ('ADMINS' | translate) } }}\r\n            </span>\r\n            <span *ngIf=\"errorId === 2\">\r\n                {{ 'DASHBOARD_ERROR' | translate }}\r\n            </span>\r\n        </div>\r\n        <div class=\"message\" *ngIf=\"errorCode === 3\"> \r\n            <span>\r\n                {{ 'STANDARD_ERROR' | translate }}\r\n            </span> \r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/mcq/mcq.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/mcq/mcq.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsMcqMcqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n    <app-super-admin-sidebar></app-super-admin-sidebar>\r\n    \r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/sidebar/sidebar.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/sidebar/sidebar.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-light-primary elevation-4 sidebar-custom\">\r\n    <a class=\"brand-link\">\r\n        <img src=\"assets/images/logo.png\" class=\"brand-image\">\r\n        <span class=\"brand-text\">{{ 'APP_NAME' | translate }}</span>\r\n    </a>\r\n    <div class=\"sidebar\">\r\n        <div class=\"user-panel mt-3 pb-3 d-flex\">\r\n            <div class=\"image\">\r\n                <img src=\"assets/images/default_usericon.png\" class=\"img-circle elevation-2\">\r\n            </div>\r\n            <div class=\"info\">\r\n                <a class=\"d-block\">{{ userDetails.name }}</a>\r\n            </div>\r\n        </div>\r\n        <nav>\r\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n                <li class=\"nav-item\" *ngFor=\"let sidemenu of sidemenus\">\r\n                    <a routerLink=\"{{ sidemenu.link }}\" routerLinkActive=\"active\" class=\"nav-link\" (click)=\"minimizeSidemenu()\">\r\n                        <i class=\"nav-icon\" [ngClass]=\"sidemenu.icon\"></i>&nbsp;\r\n                        <p>{{ sidemenu.name | translate }}</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</aside>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/components/chapter/chapter.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/components/chapter/chapter.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsChapterChapterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY2hhcHRlci9jaGFwdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/chapter/chapter.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/components/chapter/chapter.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdminChapterComponent */

  /***/
  function srcAppAdminComponentsChapterChapterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminChapterComponent", function () {
      return AdminChapterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _adminServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @adminServices/chapter/chapter.service */
    "./src/app/admin/services/chapter/chapter.service.ts");
    /* harmony import */


    var _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @adminServices/subjects/subjects.service */
    "./src/app/admin/services/subjects/subjects.service.ts");

    var AdminChapterComponent = /*#__PURE__*/function () {
      function AdminChapterComponent(_constants, _download, _miscellaneous, _translate, _toaster, _loader, _router, _chapter, _department, _subjects) {
        _classCallCheck(this, AdminChapterComponent);

        this._constants = _constants;
        this._download = _download;
        this._miscellaneous = _miscellaneous;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._router = _router;
        this._chapter = _chapter;
        this._department = _department;
        this._subjects = _subjects;
        this.departments = [];
        this.semesters = [];
        this.chapters = [];
        this.subjects = [];
        this.availableForms = ["filterForm", "addChapterForm", "addTopicForm", "editChapterForm"];
        this.filterDataStatus = 2;
        this.chaptersDataStatus = 2;
        this.subjectsDataStatus = 2;
        this.showAddFeature = false;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'subject_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addChapterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'notes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'thumbnail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.addTopicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'chapter_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'video_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'related_videos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
        this.editChapterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'chapter_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'notes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'thumbnail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(AdminChapterComponent, [{
        key: "validateForm",
        value: function validateForm(formName, formIndex) {
          return this[this.availableForms[formIndex]].get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFiltersList();
        }
      }, {
        key: "resetFiltersList",
        value: function resetFiltersList() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFiltersList",
        value: function getFiltersList() {
          var _this = this;

          this.resetFiltersList();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this._loader.hideLoader();

            _this.filterDataStatus = 1;
            _this.departments = response.departments;
            _this.semesters = response.inst_class;
          }, function (errorCode) {
            _this._loader.hideLoader();

            _this.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getSubjectsData",
        value: function getSubjectsData() {
          this.resetChapters();
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getSubjects(data);
          }
        }
      }, {
        key: "resetFormValue",
        value: function resetFormValue(formIndex, key) {
          var formName = this.availableForms[formIndex];
          this[formName].get(key).patchValue(null);
        }
      }, {
        key: "resetSubjects",
        value: function resetSubjects() {
          this.subjectsDataStatus = 2;
          this.subjects = [];

          this._loader.showLoader();

          this.resetFormValue(0, 'subject_id');
          this.resetFormValue(2, 'chapter_id');
        }
      }, {
        key: "getSubjects",
        value: function getSubjects(data) {
          var _this2 = this;

          this.resetSubjects();

          this._subjects.getSubjects(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this2._loader.hideLoader();

            _this2.subjectsDataStatus = 1;
            _this2.subjects = response;
          }, function (errorCode) {
            _this2._loader.hideLoader();

            _this2.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "resetChapters",
        value: function resetChapters() {
          this.chaptersDataStatus = 2;
          this.chapters = [];
          this.resetFormValue(3, 'chapter_id');
        }
      }, {
        key: "getChapters",
        value: function getChapters() {
          var _this3 = this;

          this.resetChapters();

          this._loader.showLoader();

          this._chapter.getChapters(this.filterForm.value).subscribe(function (response) {
            _this3._loader.hideLoader();

            _this3.chaptersDataStatus = 1;
            _this3.chapters = response;
          }, function (errorCode) {
            _this3._loader.hideLoader();

            _this3.chaptersDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addChapterForm')[0].reset();
            this.addChapterForm.reset();
            $('#addTopicForm')[0].reset();
            this.addTopicForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addChapterForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "disableAddTopicFeatureForm",
        value: function disableAddTopicFeatureForm() {
          return this.addTopicForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget, formIndex) {
          var formName = this.availableForms[formIndex];
          this[formName].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this[formName].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addChapter",
        value: function addChapter() {
          var _this4 = this;

          this._loader.showLoader();

          this._chapter.addChapter(this.filterForm.value, this.addChapterForm.value).subscribe(function () {
            _this4._loader.hideLoader();

            _this4.showAddFeatureView(false);

            _this4.getChapters();

            _this4._toaster.showSuccess(_this4._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this4._translate.instant("CHAPTERS")
            }));
          }, function () {
            _this4._loader.hideLoader();
          });
        }
      }, {
        key: "addTopic",
        value: function addTopic() {
          var _this5 = this;

          this._loader.showLoader();

          this._chapter.addTopic(this.addTopicForm.value).subscribe(function () {
            _this5._loader.hideLoader();

            _this5.showAddFeatureView(false);

            _this5.getChapters();

            _this5._toaster.showSuccess(_this5._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this5._translate.instant("TOPIC")
            }));
          }, function () {
            _this5._loader.hideLoader();
          });
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(chapter) {
          this._router.navigate(['admin/topics', chapter.id]);
        }
      }, {
        key: "addTopics",
        value: function addTopics(chapter) {
          this.showAddFeatureView(true);
          this.addTopicForm.get('chapter_id').patchValue(chapter.id);
          $('#topic-tab').click();
        }
      }, {
        key: "editChapter",
        value: function editChapter(chapter) {
          $('#editChapterForm')[0].reset();
          this.editChapterForm.reset();
          this.editChapterForm.patchValue({
            name: chapter.name,
            chapter_id: chapter.id,
            description: chapter.description
          });
        }
      }, {
        key: "updateChapter",
        value: function updateChapter() {
          var _this6 = this;

          this._loader.showLoader();

          this._chapter.updateChapter(this.editChapterForm.value).subscribe(function () {
            _this6._loader.hideLoader();

            $('#update-chapter').modal('hide');

            _this6.getChapters();

            _this6._toaster.showSuccess(_this6._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this6._translate.instant("CHAPTER")
            }));
          }, function () {
            _this6._loader.hideLoader();
          });
        }
      }]);

      return AdminChapterComponent;
    }();

    AdminChapterComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"]
      }, {
        type: _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__["MiscellaneousService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _adminServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_11__["AdminChapterService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_10__["AdminDepartmentService"]
      }, {
        type: _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_12__["AdminSubjectsService"]
      }];
    };

    AdminChapterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-chapter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chapter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/chapter/chapter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chapter.component.scss */
      "./src/app/admin/components/chapter/chapter.component.scss"))["default"]]
    })], AdminChapterComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/dashboard/dashboard.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/components/dashboard/dashboard.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @adminServices/dashboard/dashboard.service */
    "./src/app/admin/services/dashboard/dashboard.service.ts");

    var AdminDashboardComponent = /*#__PURE__*/function () {
      function AdminDashboardComponent(_loader, _dashboard) {
        _classCallCheck(this, AdminDashboardComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this.dashboardReportCards = [];
        this.dashboardDataStatus = 2;
        this.dashboardData = {};
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDashboardData();
        }
      }, {
        key: "resetDashboardData",
        value: function resetDashboardData() {
          this.dashboardDataStatus = 2;
          this.dashboardData = {};

          this._loader.showLoader();
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData() {
          var _this7 = this;

          this.resetDashboardData();

          this._dashboard.getDashboardData().subscribe(function (response) {
            _this7._loader.hideLoader();

            _this7.dashboardDataStatus = 1;
            _this7.dashboardData = response;

            _this7.prepareDashboardReportCards();
          }, function (errorCode) {
            _this7._loader.hideLoader();

            _this7.dashboardDataStatus = errorCode;
          });
        }
      }, {
        key: "prepareDashboardReportCards",
        value: function prepareDashboardReportCards() {
          this.dashboardReportCards = [{
            name: "DEPARTMENTS",
            link: '/admin/departments',
            className: 'bg-red',
            icon: 'fas fa-university',
            value: this.dashboardData.depts_count
          }, {
            name: "SUBJECTS",
            link: '/admin/subjects',
            className: 'bg-success',
            icon: 'fas fa-book-open',
            value: this.dashboardData.subjects_count
          }, {
            name: "STUDENTS",
            link: '/admin/students',
            className: 'bg-info',
            icon: 'fas fa-graduation-cap',
            value: this.dashboardData.student_count
          }, {
            name: "FACULTIES",
            link: '/admin/faculties',
            className: 'bg-warning',
            icon: 'fas fa-chalkboard-teacher',
            value: this.dashboardData.faculties_count
          }];
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _adminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardService"]
      }];
    };

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/admin/components/dashboard/dashboard.component.scss"))["default"]]
    })], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/department/department.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/department/department.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsDepartmentDepartmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/department/department.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/components/department/department.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminDepartmentComponent */

  /***/
  function srcAppAdminComponentsDepartmentDepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDepartmentComponent", function () {
      return AdminDepartmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");

    var AdminDepartmentComponent = /*#__PURE__*/function () {
      function AdminDepartmentComponent(_loader, _department) {
        _classCallCheck(this, AdminDepartmentComponent);

        this._loader = _loader;
        this._department = _department;
        this.departments = [];
        this.departmentDataStatus = 2;
      }

      _createClass(AdminDepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartments();
        }
      }, {
        key: "resetDepartmentsAndSections",
        value: function resetDepartmentsAndSections() {
          this.departmentDataStatus = 2;
          this.departments = [];

          this._loader.showLoader();
        }
      }, {
        key: "getDepartments",
        value: function getDepartments() {
          var _this8 = this;

          this.resetDepartmentsAndSections();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this8._loader.hideLoader();

            _this8.departmentDataStatus = 1;
            _this8.departments = response.departments;
          }, function (errorCode) {
            _this8._loader.hideLoader();

            _this8.departmentDataStatus = errorCode;
          });
        }
      }]);

      return AdminDepartmentComponent;
    }();

    AdminDepartmentComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_3__["AdminDepartmentService"]
      }];
    };

    AdminDepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-department',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./department.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/department/department.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./department.component.scss */
      "./src/app/admin/components/department/department.component.scss"))["default"]]
    })], AdminDepartmentComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/examination/examination.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/components/examination/examination.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsExaminationExaminationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZXhhbWluYXRpb24vZXhhbWluYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/examination/examination.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/examination/examination.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminExaminationComponent */

  /***/
  function srcAppAdminComponentsExaminationExaminationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExaminationComponent", function () {
      return AdminExaminationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adminServices/subjects/subjects.service */
    "./src/app/admin/services/subjects/subjects.service.ts");
    /* harmony import */


    var _adminServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adminServices/examination/examination.service */
    "./src/app/admin/services/examination/examination.service.ts");

    var AdminExaminationComponent = /*#__PURE__*/function () {
      function AdminExaminationComponent(_download, _translate, _toaster, _loader, _department, _examination, _subjects) {
        _classCallCheck(this, AdminExaminationComponent);

        this._download = _download;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._department = _department;
        this._examination = _examination;
        this._subjects = _subjects;
        this.departments = [];
        this.semesters = [];
        this.subjects = [];
        this.examsList = [];
        this.filterDataStatus = 2;
        this.subjectsDataStatus = 2;
        this.examDataStatus = 2;
        this.showAddFeature = false;
        this.years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'subject_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'paper': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(AdminExaminationComponent, [{
        key: "validateAddFormValue",
        value: function validateAddFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "resetFormValue",
        value: function resetFormValue(formName, key) {
          this[formName].get(key).patchValue(null);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartmentsAndSectionsList();
        }
      }, {
        key: "resetDepartmentsAndSections",
        value: function resetDepartmentsAndSections() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getDepartmentsAndSectionsList",
        value: function getDepartmentsAndSectionsList() {
          var _this9 = this;

          this.resetDepartmentsAndSections();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this9._loader.hideLoader();

            _this9.filterDataStatus = 1;
            _this9.departments = response.departments;
            _this9.semesters = response.inst_class;
          }, function (errorCode) {
            _this9._loader.hideLoader();

            _this9.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getSubjectsData",
        value: function getSubjectsData() {
          this.resetExamsList();
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getSubjects(data);
          }
        }
      }, {
        key: "resetSubjects",
        value: function resetSubjects() {
          this.subjectsDataStatus = 2;
          this.subjects = [];

          this._loader.showLoader();

          this.resetFormValue('filterForm', 'subject_id');
        }
      }, {
        key: "getSubjects",
        value: function getSubjects(data) {
          var _this10 = this;

          this.resetSubjects();

          this._subjects.getSubjects(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this10._loader.hideLoader();

            _this10.subjectsDataStatus = 1;
            _this10.subjects = response;
          }, function (errorCode) {
            _this10._loader.hideLoader();

            _this10.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "resetExamsList",
        value: function resetExamsList() {
          this.examDataStatus = 2;
          this.examsList = [];
        }
      }, {
        key: "getExamsList",
        value: function getExamsList() {
          var _this11 = this;

          this.resetExamsList();

          this._loader.showLoader();

          this._examination.getExamsList(this.filterForm.value).subscribe(function (response) {
            _this11._loader.hideLoader();

            _this11.examDataStatus = 1;
            _this11.examsList = response;
          }, function (errorCode) {
            _this11._loader.hideLoader();

            _this11.examDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addDataForm')[0].reset();
            this.addDataForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["addDataForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["addDataForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addExam",
        value: function addExam() {
          var _this12 = this;

          this._loader.showLoader();

          this._examination.addExamination(this.filterForm.value, this.addDataForm.value).subscribe(function () {
            _this12._loader.hideLoader();

            _this12.showAddFeatureView(false);

            _this12.getExamsList();

            _this12._toaster.showSuccess(_this12._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this12._translate.instant("EXAMINATION")
            }));
          }, function () {
            _this12._loader.hideLoader();
          });
        }
      }, {
        key: "deletePaper",
        value: function deletePaper(paper) {
          var _this13 = this;

          this._loader.showLoader();

          this._examination.deleteExamPaper(paper).subscribe(function () {
            _this13._loader.hideLoader();

            _this13.getExamsList();

            _this13._toaster.showSuccess(_this13._translate.instant("FEATURE_DELETED_SUCCESSFULLY", {
              value: _this13._translate.instant("EXAMINATION")
            }));
          }, function () {
            _this13._loader.hideLoader();
          });
        }
      }]);

      return AdminExaminationComponent;
    }();

    AdminExaminationComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__["AdminDepartmentService"]
      }, {
        type: _adminServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_9__["AdminExaminationService"]
      }, {
        type: _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubjectsService"]
      }];
    };

    AdminExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-examination',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/examination/examination.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examination.component.scss */
      "./src/app/admin/components/examination/examination.component.scss"))["default"]]
    })], AdminExaminationComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/faculties/faculties.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/components/faculties/faculties.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsFacultiesFacultiesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZmFjdWx0aWVzL2ZhY3VsdGllcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/faculties/faculties.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/faculties/faculties.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AdminFacultiesComponent */

  /***/
  function srcAppAdminComponentsFacultiesFacultiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFacultiesComponent", function () {
      return AdminFacultiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_faculties_faculties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/faculties/faculties.service */
    "./src/app/admin/services/faculties/faculties.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");

    var AdminFacultiesComponent = /*#__PURE__*/function () {
      function AdminFacultiesComponent(_constants, _download, _translate, _toaster, _loader, _faculty, _department) {
        _classCallCheck(this, AdminFacultiesComponent);

        this._constants = _constants;
        this._download = _download;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._faculty = _faculty;
        this._department = _department;
        this.faculties = [];
        this.departments = [];
        this.facultiesDataStatus = 2;
        this.filterDataStatus = 2;
        this.showAddFeature = false;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'faculties': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(AdminFacultiesComponent, [{
        key: "validateAddFormValue",
        value: function validateAddFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartmentsList();
        }
      }, {
        key: "resetDepartmentsDetails",
        value: function resetDepartmentsDetails() {
          this.filterDataStatus = 2;
          this.departments = [];

          this._loader.showLoader();
        }
      }, {
        key: "getDepartmentsList",
        value: function getDepartmentsList() {
          var _this14 = this;

          this.resetDepartmentsDetails();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this14._loader.hideLoader();

            _this14.filterDataStatus = 1;
            _this14.departments = response.departments;
          }, function (errorCode) {
            _this14._loader.hideLoader();

            _this14.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "resetFaculties",
        value: function resetFaculties() {
          this.facultiesDataStatus = 2;
          this.faculties = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFaculties",
        value: function getFaculties() {
          var _this15 = this;

          this.resetFaculties();
          var data = this.filterForm.value;

          this._faculty.getFaculties(data).subscribe(function (response) {
            _this15._loader.hideLoader();

            _this15.facultiesDataStatus = 1;
            _this15.faculties = response;
          }, function (errorCode) {
            _this15._loader.hideLoader();

            _this15.facultiesDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addDataForm')[0].reset();
            this.addDataForm.reset();
          } else {
            this.getFaculties();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["addDataForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["addDataForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addFaculties",
        value: function addFaculties() {
          var _this16 = this;

          this._loader.showLoader();

          this._faculty.addFaculties(this.filterForm.value, this.addDataForm.value).subscribe(function (response) {
            _this16._loader.hideLoader();

            _this16._download.downloadAsCsv(response.data, _this16._constants.FACULTY_CSV_CONTENTS, 'faculties_list.csv');

            _this16.showAddFeatureView(false);

            _this16.getFaculties();

            _this16._toaster.showSuccess(_this16._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this16._translate.instant("FACULTIES")
            }));
          }, function () {
            _this16._loader.hideLoader();
          });
        }
      }, {
        key: "deleteFaculty",
        value: function deleteFaculty(faculty) {
          var _this17 = this;

          if (confirm("Are you sure you want to delete?")) {
            this._loader.showLoader();

            this._faculty.deleteFaculty(faculty).subscribe(function () {
              _this17._loader.hideLoader();

              _this17.getFaculties();

              _this17._toaster.showSuccess(_this17._translate.instant("FEATURE_DELETED_SUCCESSFULLY", {
                value: _this17._translate.instant("FACULTY")
              }));
            }, function () {
              _this17._loader.hideLoader();
            });
          }
        }
      }]);

      return AdminFacultiesComponent;
    }();

    AdminFacultiesComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _adminServices_faculties_faculties_service__WEBPACK_IMPORTED_MODULE_7__["AdminFacultiesService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_8__["AdminDepartmentService"]
      }];
    };

    AdminFacultiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-faculties',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faculties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faculties/faculties.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faculties.component.scss */
      "./src/app/admin/components/faculties/faculties.component.scss"))["default"]]
    })], AdminFacultiesComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/faq/faq.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/components/faq/faq.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/faq/faq.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/components/faq/faq.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminFaqComponent */

  /***/
  function srcAppAdminComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFaqComponent", function () {
      return AdminFaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/topic/topic.service */
    "./src/app/admin/services/topic/topic.service.ts");
    /* harmony import */


    var _adminServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adminServices/faq/faq.service */
    "./src/app/admin/services/faq/faq.service.ts");

    var AdminFaqComponent = /*#__PURE__*/function () {
      function AdminFaqComponent(_translate, _loader, _route, _router, _toaster, _faq, _topic) {
        var _this18 = this;

        _classCallCheck(this, AdminFaqComponent);

        this._translate = _translate;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._toaster = _toaster;
        this._faq = _faq;
        this._topic = _topic;
        this.topicsDataStatus = 2;
        this.topics = [];
        this.faqsDataStatus = 2;
        this.faqs = [];
        this.queryParams = {};
        this.showAddFeature = false;
        this.selectedFaq = {};

        this._route.params.subscribe(function (params) {
          _this18.chapterId = params['chapterId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this18.queryParams = queryParams;
        });

        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
          'answer': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [])
        });
        this.editDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
          'answer': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [])
        });
      }

      _createClass(AdminFaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicsList();
        }
      }, {
        key: "validateAddDataFormValue",
        value: function validateAddDataFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "validateEditDataFormValue",
        value: function validateEditDataFormValue(formName) {
          return this.editDataForm.get(formName);
        }
      }, {
        key: "resetTopicsList",
        value: function resetTopicsList() {
          this.topicsDataStatus = 2;
          this.topics = [];

          this._loader.showLoader();
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList() {
          var _this19 = this;

          this.resetTopicsList();

          this._topic.getTopicsList(this.chapterId).subscribe(function (response) {
            _this19._loader.hideLoader();

            _this19.topicsDataStatus = 1;
            _this19.topics = response.chapter_details.data;
            _this19.topicId = parseInt(_this19.queryParams.topicId);

            _this19.onTopicChange();
          }, function (errorCode) {
            _this19._loader.hideLoader();

            _this19.topicsDataStatus = errorCode;
          });
        }
      }, {
        key: "onTopicChange",
        value: function onTopicChange() {
          this.changeRouteParams();
          this.getFaqsList();
        }
      }, {
        key: "resetFaqsList",
        value: function resetFaqsList() {
          this.faqsDataStatus = 2;
          this.faqs = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFaqsList",
        value: function getFaqsList() {
          var _this20 = this;

          this.resetFaqsList();

          this._faq.getFaqsList(this.topicId).subscribe(function (response) {
            _this20._loader.hideLoader();

            _this20.faqsDataStatus = 1;
            _this20.faqs = response.reverse();
          }, function (errorCode) {
            _this20._loader.hideLoader();

            _this20.faqsDataStatus = errorCode;
          });
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          var data = {};
          data['topicId'] = this.topicId;

          this._router.navigate(['admin/faqs', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            this.addDataForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid ? false : true;
        }
      }, {
        key: "disableEditFeatureForm",
        value: function disableEditFeatureForm() {
          return this.editDataForm.valid ? false : true;
        }
      }, {
        key: "addFaq",
        value: function addFaq() {
          var _this21 = this;

          this._loader.showLoader();

          this._faq.addFaq(this.addDataForm.value, this.topicId).subscribe(function () {
            _this21._loader.hideLoader();

            _this21.showAddFeatureView(false);

            _this21.getFaqsList();

            _this21._toaster.showSuccess(_this21._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this21._translate.instant("FAQ")
            }));
          }, function () {
            _this21._loader.hideLoader();
          });
        }
      }, {
        key: "initialiseEditModal",
        value: function initialiseEditModal(faq) {
          this.selectedFaq = faq;
          this.editDataForm.reset();
          this.editDataForm.get('question').patchValue(this.selectedFaq.question);
          this.editDataForm.get('answer').patchValue(this.selectedFaq.answer);
        }
      }, {
        key: "updateFaq",
        value: function updateFaq() {
          var _this22 = this;

          this._loader.showLoader();

          this._faq.updateFaq(this.editDataForm.value, this.selectedFaq.id).subscribe(function () {
            _this22._loader.hideLoader();

            _this22.getFaqsList();

            $('#editData').modal('hide');

            _this22._toaster.showSuccess(_this22._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this22._translate.instant("FAQ")
            }));
          }, function () {
            _this22._loader.hideLoader();
          });
        }
      }, {
        key: "deleteFaq",
        value: function deleteFaq(faq) {
          var _this23 = this;

          this._loader.showLoader();

          this._faq.deleteFaq(faq.id).subscribe(function () {
            _this23._loader.hideLoader();

            _this23.getFaqsList();

            _this23._toaster.showSuccess(_this23._translate.instant("FEATURE_DELETED_SUCCESSFULLY", {
              value: _this23._translate.instant("FAQ")
            }));
          }, function () {
            _this23._loader.hideLoader();
          });
        }
      }]);

      return AdminFaqComponent;
    }();

    AdminFaqComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _adminServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_8__["AdminFaqService"]
      }, {
        type: _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_7__["AdminTopicService"]
      }];
    };

    AdminFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/admin/components/faq/faq.component.scss"))["default"]]
    })], AdminFaqComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/list-error/list-error.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/list-error/list-error.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsListErrorListErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbGlzdC1lcnJvci9saXN0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/list-error/list-error.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/components/list-error/list-error.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminListErrorComponent */

  /***/
  function srcAppAdminComponentsListErrorListErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminListErrorComponent", function () {
      return AdminListErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminListErrorComponent = function AdminListErrorComponent() {
      _classCallCheck(this, AdminListErrorComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminListErrorComponent.prototype, "errorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminListErrorComponent.prototype, "errorCode", void 0);
    AdminListErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-list-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/list-error/list-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-error.component.scss */
      "./src/app/admin/components/list-error/list-error.component.scss"))["default"]]
    })], AdminListErrorComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/mcq/mcq.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/components/mcq/mcq.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsMcqMcqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbWNxL21jcS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/mcq/mcq.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/components/mcq/mcq.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminMcqComponent */

  /***/
  function srcAppAdminComponentsMcqMcqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMcqComponent", function () {
      return AdminMcqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @superAdminServices/dashboard/dashboard.service */
    "./src/app/superAdmin/services/dashboard/dashboard.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminMcqComponent = /*#__PURE__*/function () {
      function AdminMcqComponent(_loader, _dashboard, _router) {
        _classCallCheck(this, AdminMcqComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this._router = _router;
      }

      _createClass(AdminMcqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loader.showLoader();

          this.getDirectLoginUrl();
        }
      }, {
        key: "getDirectLoginUrl",
        value: function getDirectLoginUrl() {
          var _this24 = this;

          this._dashboard.getDirectLoginUrl().subscribe(function (response) {
            _this24._router.navigate(['admin/dashboard']);

            if (response && response.mcq_url) {
              window.open(response.mcq_url, '_blank');
            }

            _this24._loader.hideLoader();
          }, function (errorCode) {
            _this24._loader.hideLoader();
          });
        }
      }]);

      return AdminMcqComponent;
    }();

    AdminMcqComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["SuperAdminDashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdminMcqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mcq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/mcq/mcq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq.component.scss */
      "./src/app/admin/components/mcq/mcq.component.scss"))["default"]]
    })], AdminMcqComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/sidebar/sidebar.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/components/sidebar/sidebar.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/sidebar/sidebar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/components/sidebar/sidebar.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdminSidebarComponent */

  /***/
  function srcAppAdminComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function () {
      return AdminSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");

    var AdminSidebarComponent = /*#__PURE__*/function () {
      function AdminSidebarComponent(_constants, _storage, _miscellaneous) {
        _classCallCheck(this, AdminSidebarComponent);

        this._constants = _constants;
        this._storage = _storage;
        this._miscellaneous = _miscellaneous;
        this.sidemenus = [];
        this.userDetails = {};
        this.width = window.innerWidth;
      }

      _createClass(AdminSidebarComponent, [{
        key: "onResize",
        value: function onResize() {
          this.width = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userType = this._constants.ADMIN;
          this.userDetails = this._storage.getData("userDetails");
          this.sidemenus = [{
            name: "DASHBOARD",
            icon: "fa fa-home",
            link: '/' + this.userType + '/dashboard'
          }, {
            name: "DEPARTMENTS",
            icon: "fas fa-university",
            link: '/' + this.userType + "/departments"
          }, {
            name: "SUBJECTS",
            icon: "fas fa-book-open",
            link: '/' + this.userType + "/subjects"
          }, {
            name: "CHAPTERS",
            icon: "fas fa-pen",
            link: '/' + this.userType + "/chapters"
          }, {
            name: "EXAMINATIONS",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/examination"
          }, {
            name: "STUDENTS",
            icon: "fas fa-graduation-cap",
            link: '/' + this.userType + "/students"
          }, {
            name: "FACULTIES",
            icon: "fas fa-chalkboard-teacher",
            link: '/' + this.userType + "/faculties"
          }, {
            name: "TEST",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/mcq"
          }];
        }
      }, {
        key: "minimizeSidemenu",
        value: function minimizeSidemenu() {
          if (this.width <= 768) {
            $('body').removeClass('sidebar-open');
            $('body').addClass('sidebar-collapse');
          }
        }
      }]);

      return AdminSidebarComponent;
    }();

    AdminSidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], AdminSidebarComponent.prototype, "onResize", null);
    AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/admin/components/sidebar/sidebar.component.scss"))["default"]]
    })], AdminSidebarComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/students/students.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/students/students.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsStudentsStudentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/students/students.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/components/students/students.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminStudentsComponent */

  /***/
  function srcAppAdminComponentsStudentsStudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminStudentsComponent", function () {
      return AdminStudentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _adminServices_students_students_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adminServices/students/students.service */
    "./src/app/admin/services/students/students.service.ts");

    var AdminStudentsComponent = /*#__PURE__*/function () {
      function AdminStudentsComponent(_constants, _download, _translate, _toaster, _loader, _students, _department) {
        _classCallCheck(this, AdminStudentsComponent);

        this._constants = _constants;
        this._download = _download;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._students = _students;
        this._department = _department;
        this.students = [];
        this.studentsDataStatus = 2;
        this.showAddFeature = false;
        this.departments = [];
        this.semesters = [];
        this.filterDataStatus = 2;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'students': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(AdminStudentsComponent, [{
        key: "validateAddFormValue",
        value: function validateAddFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartmentsAndSectionsList();
        }
      }, {
        key: "resetDepartmentsAndSections",
        value: function resetDepartmentsAndSections() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getDepartmentsAndSectionsList",
        value: function getDepartmentsAndSectionsList() {
          var _this25 = this;

          this.resetDepartmentsAndSections();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this25._loader.hideLoader();

            _this25.filterDataStatus = 1;
            _this25.departments = response.departments;
            _this25.semesters = response.inst_class;
          }, function (errorCode) {
            _this25._loader.hideLoader();

            _this25.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getStudentsData",
        value: function getStudentsData() {
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getStudents(data);
          }
        }
      }, {
        key: "resetStudents",
        value: function resetStudents() {
          this.studentsDataStatus = 2;
          this.students = [];

          this._loader.showLoader();
        }
      }, {
        key: "getStudents",
        value: function getStudents(data) {
          var _this26 = this;

          this.resetStudents();

          this._students.getStudents(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this26._loader.hideLoader();

            _this26.studentsDataStatus = 1;
            _this26.students = response;
          }, function (errorCode) {
            _this26._loader.hideLoader();

            _this26.studentsDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            this.addDataForm.reset();
            $('#addDataForm')[0].reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["addDataForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["addDataForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addStudents",
        value: function addStudents() {
          var _this27 = this;

          this._loader.showLoader();

          this._students.addStudents(this.filterForm.value, this.addDataForm.value).subscribe(function (response) {
            _this27._loader.hideLoader();

            _this27.showAddFeatureView(false);

            _this27._download.downloadAsCsv(response.data, _this27._constants.STUDENT_CSV_CONTENTS, 'students_list.csv');

            _this27.getStudents(_this27.filterForm.value);

            _this27._toaster.showSuccess(_this27._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this27._translate.instant("STUDENTS")
            }));
          }, function () {
            _this27._loader.hideLoader();
          });
        }
      }]);

      return AdminStudentsComponent;
    }();

    AdminStudentsComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_8__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _adminServices_students_students_service__WEBPACK_IMPORTED_MODULE_9__["AdminStudentsService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__["AdminDepartmentService"]
      }];
    };

    AdminStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-students',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/students/students.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students.component.scss */
      "./src/app/admin/components/students/students.component.scss"))["default"]]
    })], AdminStudentsComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/subjects/subjects.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/subjects/subjects.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsSubjectsSubjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvc3ViamVjdHMvc3ViamVjdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/subjects/subjects.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/components/subjects/subjects.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminSubjectsComponent */

  /***/
  function srcAppAdminComponentsSubjectsSubjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSubjectsComponent", function () {
      return AdminSubjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adminServices/subjects/subjects.service */
    "./src/app/admin/services/subjects/subjects.service.ts");
    /* harmony import */


    var _adminServices_faculties_faculties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminServices/faculties/faculties.service */
    "./src/app/admin/services/faculties/faculties.service.ts");

    var AdminSubjectsComponent = /*#__PURE__*/function () {
      function AdminSubjectsComponent(constants, downloadService, translate, toaster, loader, subjectsService, departmentService, facultyService) {
        _classCallCheck(this, AdminSubjectsComponent);

        this.constants = constants;
        this.downloadService = downloadService;
        this.translate = translate;
        this.toaster = toaster;
        this.loader = loader;
        this.subjectsService = subjectsService;
        this.departmentService = departmentService;
        this.facultyService = facultyService;
        this.departments = [];
        this.semesters = [];
        this.subjects = [];
        this.faculties = [];
        this.filterDataStatus = 2;
        this.subjectsDataStatus = 2;
        this.facultiesDataStatus = 2;
        this.showAddFeature = false;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addSubjectsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'subjects': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.addAttachmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'attachment': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.assignFacultyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'faculty_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
      }

      _createClass(AdminSubjectsComponent, [{
        key: "validateAddSubjectsFormValue",
        value: function validateAddSubjectsFormValue(formName) {
          return this.addSubjectsForm.get(formName);
        }
      }, {
        key: "validateAssignFacultyFormValue",
        value: function validateAssignFacultyFormValue(formName) {
          return this.assignFacultyForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartmentsAndSectionsList();
        }
      }, {
        key: "resetFaculties",
        value: function resetFaculties() {
          this.facultiesDataStatus = 2;
          this.faculties = [];
          this.loader.showLoader();
        }
      }, {
        key: "getFaculties",
        value: function getFaculties() {
          var _this28 = this;

          this.resetFaculties();
          var data = this.filterForm.value;
          this.facultyService.getFaculties(data).subscribe(function (response) {
            _this28.loader.hideLoader();

            _this28.facultiesDataStatus = 1;
            _this28.faculties = response;
          }, function (errorCode) {
            _this28.loader.hideLoader();

            _this28.facultiesDataStatus = errorCode;
          });
        }
      }, {
        key: "resetDepartmentsAndSections",
        value: function resetDepartmentsAndSections() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];
          this.loader.showLoader();
        }
      }, {
        key: "getDepartmentsAndSectionsList",
        value: function getDepartmentsAndSectionsList() {
          var _this29 = this;

          this.resetDepartmentsAndSections();
          this.departmentService.getDepartmentsAndSections().subscribe(function (response) {
            _this29.loader.hideLoader();

            _this29.filterDataStatus = 1;
            _this29.departments = response.departments;
            _this29.semesters = response.inst_class;
          }, function (errorCode) {
            _this29.loader.hideLoader();

            _this29.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getSubjectsData",
        value: function getSubjectsData() {
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getSubjects(data);
            this.getFaculties();
          }
        }
      }, {
        key: "resetSubjects",
        value: function resetSubjects() {
          this.subjectsDataStatus = 2;
          this.subjects = [];
          this.loader.showLoader();
        }
      }, {
        key: "getSubjects",
        value: function getSubjects(data) {
          var _this30 = this;

          this.resetSubjects();
          this.subjectsService.getSubjects(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this30.loader.hideLoader();

            _this30.subjectsDataStatus = 1;
            _this30.subjects = response;
          }, function (errorCode) {
            _this30.loader.hideLoader();

            _this30.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            this.addSubjectsForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addSubjectsForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget, formType) {
          var formName = formType === 1 ? 'addSubjectsForm' : 'addAttachmentForm';
          this[formName].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this[formName].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addSubjects",
        value: function addSubjects() {
          var _this31 = this;

          this.loader.showLoader();
          this.subjectsService.addSubjects(this.addSubjectsForm.value).subscribe(function () {
            _this31.loader.hideLoader();

            _this31.showAddFeatureView(false);

            if (_this31.filterDataStatus === 1) {
              _this31.getSubjectsData();
            } else {
              _this31.getDepartmentsAndSectionsList();
            }

            _this31.toaster.showSuccess(_this31.translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this31.translate.instant("SUBJECTS")
            }));
          }, function () {
            _this31.loader.hideLoader();
          });
        }
      }, {
        key: "uploadSubjectAttachment",
        value: function uploadSubjectAttachment() {
          var _this32 = this;

          this.loader.showLoader();
          this.subjectsService.uploadSubjectAttachment(this.selectedSubjectId, this.addAttachmentForm.value, this.fileType).subscribe(function () {
            _this32.loader.hideLoader();

            _this32.getSubjects(_this32.filterForm.value);

            $('#upload-files').modal('hide');

            _this32.toaster.showSuccess(_this32.translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this32.translate.instant("SYLLABUS")
            }));
          }, function () {
            _this32.loader.hideLoader();
          });
        }
      }, {
        key: "initialiseModal",
        value: function initialiseModal(fileType, subject) {
          this.fileType = fileType;
          this.selectedSubjectId = subject.id;
          $('#addAttachmentForm')[0].reset();
          this.addAttachmentForm.reset();
        }
      }, {
        key: "initialiseAssignModal",
        value: function initialiseAssignModal(subject, type) {
          this.assignFacultyType = type;
          this.selectedSubjectId = subject.id;
          this.assignFacultyForm.get('faculty_id').patchValue(this.assignFacultyType ? subject.faculty_id : null);
        }
      }, {
        key: "assignFaculties",
        value: function assignFaculties() {
          var _this33 = this;

          this.loader.showLoader();
          this.subjectsService.assignFaculties(this.assignFacultyForm.value, this.selectedSubjectId).subscribe(function () {
            _this33.loader.hideLoader();

            _this33.getSubjects(_this33.filterForm.value);

            $('#assign-faculty').modal('hide');

            _this33.toaster.showSuccess(_this33.translate.instant("FACULTY_ASSIGNED_TO_SUBJECT_SUCCESSFULLY"));
          }, function () {
            _this33.loader.hideLoader();
          });
        }
      }]);

      return AdminSubjectsComponent;
    }();

    AdminSubjectsComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_8__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_9__["AdminSubjectsService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__["AdminDepartmentService"]
      }, {
        type: _adminServices_faculties_faculties_service__WEBPACK_IMPORTED_MODULE_10__["AdminFacultiesService"]
      }];
    };

    AdminSubjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-subjects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subjects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/subjects/subjects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subjects.component.scss */
      "./src/app/admin/components/subjects/subjects.component.scss"))["default"]]
    })], AdminSubjectsComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/topic/topic.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/admin/components/topic/topic.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTopicTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdG9waWMvdG9waWMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/topic/topic.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/components/topic/topic.component.ts ***!
    \***********************************************************/

  /*! exports provided: AdminTopicComponent */

  /***/
  function srcAppAdminComponentsTopicTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTopicComponent", function () {
      return AdminTopicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _vimeo_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @vimeo/player */
    "./node_modules/@vimeo/player/dist/player.es.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminServices/topic/topic.service */
    "./src/app/admin/services/topic/topic.service.ts");

    var AdminTopicComponent = /*#__PURE__*/function () {
      function AdminTopicComponent(_constants, _translate, _toaster, _loader, _route, _router, _topic) {
        var _this34 = this;

        _classCallCheck(this, AdminTopicComponent);

        this._constants = _constants;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._topic = _topic;
        this.topicsDataStatus = 2;
        this.topics = [];
        this.selectedTopic = {};
        this.chapterDetails = {};
        this.queryParams = {};
        this.playerOptions = {};

        this._route.params.subscribe(function (params) {
          _this34.chapterId = params['chapterId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this34.queryParams = queryParams;
        });

        this.editTopicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'chapter_details_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'video_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'related_videos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(AdminTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicsList();
        }
      }, {
        key: "validateUpdateTopicFormValue",
        value: function validateUpdateTopicFormValue(formName) {
          return this.editTopicForm.get(formName);
        }
      }, {
        key: "resetTopicsList",
        value: function resetTopicsList() {
          this.topicsDataStatus = 2;
          this.topics = [];
          this.chapterDetails = {};

          this._loader.showLoader();
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList() {
          var _this35 = this;

          this.resetTopicsList();

          this._topic.getTopicsList(this.chapterId).subscribe(function (response) {
            _this35._loader.hideLoader();

            _this35.topicsDataStatus = 1;
            _this35.chapterDetails = response;
            _this35.topics = response.chapter_details.data;

            if (_this35.queryParams.topicId) {
              var index = lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"](_this35.topics, {
                id: parseInt(_this35.queryParams.topicId)
              });

              _this35.prepareVimeoPlayer(index > -1 ? _this35.topics[index] : _this35.topics[0]);
            } else {
              _this35.prepareVimeoPlayer(_this35.topics[0]);
            }
          }, function (errorCode) {
            _this35._loader.hideLoader();

            _this35.topicsDataStatus = errorCode;
          });
        }
      }, {
        key: "prepareVimeoPlayer",
        value: function prepareVimeoPlayer(topic) {
          this.selectedTopic = topic;
          this.changeRouteParams();
          this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_6__["default"]('vimeo-player', {
            id: this.selectedTopic.vimeo_id,
            loop: true,
            responsive: true,
            portrait: true,
            title: false,
            autoplay: true
          });
        }
      }, {
        key: "selectTopic",
        value: function selectTopic(topic) {
          if (topic !== this.selectedTopic) {
            this.selectedTopic = topic;
            this.changeRouteParams();
            this.changeVimeoSource();
          }
        }
      }, {
        key: "changeVimeoSource",
        value: function changeVimeoSource() {
          this.player.loadVideo(this.selectedTopic.vimeo_id).then(function () {
            console.log("Video src updated");
          })["catch"](function () {
            console.log("Video src cannot be updated");
          });
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          var data = {};
          data['topicId'] = this.selectedTopic.id;

          this._router.navigate(['admin/topics', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "navigateToFaqs",
        value: function navigateToFaqs(topic) {
          var data = {};
          data['topicId'] = topic.id;

          this._router.navigate(['admin/faqs', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "editTopic",
        value: function editTopic(topic) {
          $('#editTopicForm')[0].reset();
          this.editTopicForm.reset();
          this.editTopicForm.patchValue({
            name: topic.name,
            chapter_details_id: topic.id,
            keywords: topic.keywords,
            related_videos: topic.related_videos,
            video_id: topic.vimeo_id
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["editTopicForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["editTopicForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "updateTopic",
        value: function updateTopic() {
          var _this36 = this;

          this._loader.showLoader();

          this._topic.updateTopic(this.editTopicForm.value).subscribe(function () {
            _this36._loader.hideLoader();

            $('#update-topic').modal('hide');

            _this36.getTopicsList();

            _this36._toaster.showSuccess(_this36._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this36._translate.instant("TOPIC")
            }));
          }, function () {
            _this36._loader.hideLoader();
          });
        }
      }, {
        key: "deleteTopic",
        value: function deleteTopic(topic) {
          var _this37 = this;

          if (confirm("Are you sure you want to delete?")) {
            this._loader.showLoader();

            this._topic.deleteTopic(topic).subscribe(function () {
              _this37._loader.hideLoader();

              _this37.getTopicsList();

              _this37._toaster.showSuccess(_this37._translate.instant("TOPIC_DELETED_SUCCESSFULLY", {
                value: _this37._translate.instant("TOPIC")
              }));
            }, function () {
              _this37._loader.hideLoader();
            });
          }
        }
      }]);

      return AdminTopicComponent;
    }();

    AdminTopicComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__["AdminTopicService"]
      }];
    };

    AdminTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/topic/topic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topic.component.scss */
      "./src/app/admin/components/topic/topic.component.scss"))["default"]]
    })], AdminTopicComponent);
    /***/
  },

  /***/
  "./src/app/admin/services/chapter/chapter.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/services/chapter/chapter.service.ts ***!
    \***********************************************************/

  /*! exports provided: AdminChapterService */

  /***/
  function srcAppAdminServicesChapterChapterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminChapterService", function () {
      return AdminChapterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var AdminChapterService = /*#__PURE__*/function () {
      function AdminChapterService(constants, http) {
        _classCallCheck(this, AdminChapterService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(AdminChapterService, [{
        key: "getChapters",
        value: function getChapters(data) {
          return this.http.get(this.constants.CHAPTERS_LIST_URL + data.subject_id + '/chapters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addChapter",
        value: function addChapter(filterData, addFormValue) {
          var formData = new FormData();

          if (addFormValue.notes) {
            formData.append('notes', addFormValue.notes);
          }

          formData.append('thumbnail', addFormValue.thumbnail);
          formData.append('name', addFormValue.name);
          formData.append('subject_id', filterData.subject_id);
          formData.append('description', addFormValue.description);
          return this.http.post(this.constants.ADD_CHAPTERS_URL, formData);
        }
      }, {
        key: "addTopic",
        value: function addTopic(topicFormData) {
          var formData = new FormData();
          formData.append('video_id', topicFormData.video_id);
          formData.append('topic', topicFormData.name);

          if (topicFormData.keywords) {
            formData.append('keywords', topicFormData.keywords);
          }

          if (topicFormData.related_videos) {
            formData.append('related_videos', topicFormData.related_videos);
          }

          formData.append('chapter_id', topicFormData.chapter_id);
          return this.http.post(this.constants.ADD_TOPIC_URL, formData);
        }
      }, {
        key: "updateChapter",
        value: function updateChapter(updateFormValue) {
          var formData = new FormData();

          if (updateFormValue.notes) {
            formData.append('notes', updateFormValue.notes);
          }

          if (updateFormValue.thumbnail) {
            formData.append('thumbnail', updateFormValue.thumbnail);
          }

          formData.append('name', updateFormValue.name);
          formData.append('description', updateFormValue.description);
          formData.append('chapter_id', updateFormValue.chapter_id);
          return this.http.post(this.constants.UPDATE_CHAPTERS_URL, formData);
        }
      }]);

      return AdminChapterService;
    }();

    AdminChapterService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminChapterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminChapterService);
    /***/
  },

  /***/
  "./src/app/admin/services/dashboard/dashboard.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/services/dashboard/dashboard.service.ts ***!
    \***************************************************************/

  /*! exports provided: AdminDashboardService */

  /***/
  function srcAppAdminServicesDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardService", function () {
      return AdminDashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AdminDashboardService = /*#__PURE__*/function () {
      function AdminDashboardService(constants, http, storageService) {
        _classCallCheck(this, AdminDashboardService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(AdminDashboardService, [{
        key: "getDashboardData",
        value: function getDashboardData() {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.ADMIN_DASHBOARD_LIST_URL + this.userDetails.inst_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              return response;
            }

            throw 0;
          }));
        }
      }]);

      return AdminDashboardService;
    }();

    AdminDashboardService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    AdminDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminDashboardService);
    /***/
  },

  /***/
  "./src/app/admin/services/department/department.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/services/department/department.service.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminDepartmentService */

  /***/
  function srcAppAdminServicesDepartmentDepartmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDepartmentService", function () {
      return AdminDepartmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AdminDepartmentService = /*#__PURE__*/function () {
      function AdminDepartmentService(constants, http, storageService) {
        _classCallCheck(this, AdminDepartmentService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(AdminDepartmentService, [{
        key: "getDepartments",
        value: function getDepartments() {
          return this.http.get(this.constants.DEPARTMENTS_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "getDepartmentsAndSections",
        value: function getDepartmentsAndSections() {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data) {
              var result = response.data;

              if (result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
                return response.data;
              }
            }

            throw 0;
          }));
        }
      }, {
        key: "addDepartment",
        value: function addDepartment(selectedFile) {
          var formData = new FormData();
          formData.append('departments', selectedFile);
          return this.http.post(this.constants.ADD_DEPARTMENT_URL, formData);
        }
      }]);

      return AdminDepartmentService;
    }();

    AdminDepartmentService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    AdminDepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminDepartmentService);
    /***/
  },

  /***/
  "./src/app/admin/services/examination/examination.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/services/examination/examination.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AdminExaminationService */

  /***/
  function srcAppAdminServicesExaminationExaminationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExaminationService", function () {
      return AdminExaminationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var AdminExaminationService = /*#__PURE__*/function () {
      function AdminExaminationService(constants, http) {
        _classCallCheck(this, AdminExaminationService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(AdminExaminationService, [{
        key: "getExamsList",
        value: function getExamsList(data) {
          return this.http.get(this.constants.EXAMINATION_LIST_URL + data.subject_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addExamination",
        value: function addExamination(filterData, addFormValue) {
          var formData = new FormData();
          formData.append('name', addFormValue.name);
          formData.append('subject_id', filterData.subject_id);
          formData.append('year', addFormValue.year);
          formData.append('paper', addFormValue.paper);
          return this.http.post(this.constants.ADD_EXAMINATION_URL, formData);
        }
      }, {
        key: "deleteExamPaper",
        value: function deleteExamPaper(paper) {
          return this.http["delete"](this.constants.EXAM_PAPER_DELETE_URL + paper.id);
        }
      }]);

      return AdminExaminationService;
    }();

    AdminExaminationService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminExaminationService);
    /***/
  },

  /***/
  "./src/app/admin/services/faculties/faculties.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/services/faculties/faculties.service.ts ***!
    \***************************************************************/

  /*! exports provided: AdminFacultiesService */

  /***/
  function srcAppAdminServicesFacultiesFacultiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFacultiesService", function () {
      return AdminFacultiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AdminFacultiesService = /*#__PURE__*/function () {
      function AdminFacultiesService(constants, http, storageService) {
        _classCallCheck(this, AdminFacultiesService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(AdminFacultiesService, [{
        key: "getFaculties",
        value: function getFaculties(filterData) {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.FACULTIES_LIST_URL + this.userDetails.inst_id + '/' + filterData.department_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addFaculties",
        value: function addFaculties(filterData, data) {
          this.userDetails = this.storageService.getData("userDetails");
          var formData = new FormData();
          formData.append('faculties', data.faculties);
          formData.append('department_id', filterData.department_id);
          formData.append('inst_id', this.userDetails.inst_id);
          return this.http.post(this.constants.ADD_FACULTIES_URL, formData);
        }
      }, {
        key: "deleteFaculty",
        value: function deleteFaculty(facultyData) {
          return this.http["delete"](this.constants.FACULTY_DELETE_URL + facultyData.id);
        }
      }]);

      return AdminFacultiesService;
    }();

    AdminFacultiesService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    AdminFacultiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminFacultiesService);
    /***/
  },

  /***/
  "./src/app/admin/services/faq/faq.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/services/faq/faq.service.ts ***!
    \***************************************************/

  /*! exports provided: AdminFaqService */

  /***/
  function srcAppAdminServicesFaqFaqServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFaqService", function () {
      return AdminFaqService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var AdminFaqService = /*#__PURE__*/function () {
      function AdminFaqService(constants, http) {
        _classCallCheck(this, AdminFaqService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(AdminFaqService, [{
        key: "getFaqsList",
        value: function getFaqsList(topicId) {
          return this.http.get(this.constants.ADMIN_FAQS_LIST_URL + topicId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addFaq",
        value: function addFaq(addFormValue, topicId) {
          var formData = new FormData();
          formData.append('question', addFormValue.question);
          formData.append('answer', addFormValue.answer);
          formData.append('chapter_detail_id', topicId);
          return this.http.post(this.constants.ADD_FAQ_URL, formData);
        }
      }, {
        key: "updateFaq",
        value: function updateFaq(editFormValue, faqId) {
          var formData = new FormData();
          formData.append('question', editFormValue.question);
          formData.append('answer', editFormValue.answer);
          formData.append('id', faqId);
          return this.http.post(this.constants.UPDATE_FAQ_URL, formData);
        }
      }, {
        key: "deleteFaq",
        value: function deleteFaq(faqId) {
          return this.http["delete"](this.constants.DELETE_FAQ_URL + faqId);
        }
      }]);

      return AdminFaqService;
    }();

    AdminFaqService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminFaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminFaqService);
    /***/
  },

  /***/
  "./src/app/admin/services/students/students.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/services/students/students.service.ts ***!
    \*************************************************************/

  /*! exports provided: AdminStudentsService */

  /***/
  function srcAppAdminServicesStudentsStudentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminStudentsService", function () {
      return AdminStudentsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AdminStudentsService = /*#__PURE__*/function () {
      function AdminStudentsService(constants, http, storageService) {
        _classCallCheck(this, AdminStudentsService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(AdminStudentsService, [{
        key: "getStudents",
        value: function getStudents(selectedDepartmentId, selectedSectionId) {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.STUDENTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addStudents",
        value: function addStudents(filterData, data) {
          this.userDetails = this.storageService.getData("userDetails");
          var formData = new FormData();
          formData.append('students', data.students);
          formData.append('department_id', filterData.department_id);
          formData.append('inst_class_id', filterData.inst_class_id);
          formData.append('inst_id', this.userDetails.inst_id);
          return this.http.post(this.constants.ADD_STUDENTS_URL, formData);
        }
      }]);

      return AdminStudentsService;
    }();

    AdminStudentsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    AdminStudentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminStudentsService);
    /***/
  },

  /***/
  "./src/app/admin/services/subjects/subjects.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/services/subjects/subjects.service.ts ***!
    \*************************************************************/

  /*! exports provided: AdminSubjectsService */

  /***/
  function srcAppAdminServicesSubjectsSubjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSubjectsService", function () {
      return AdminSubjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AdminSubjectsService = /*#__PURE__*/function () {
      function AdminSubjectsService(constants, http, storageService) {
        _classCallCheck(this, AdminSubjectsService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(AdminSubjectsService, [{
        key: "getSubjects",
        value: function getSubjects(selectedDepartmentId, selectedSectionId) {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addSubjects",
        value: function addSubjects(data) {
          this.userDetails = this.storageService.getData("userDetails");
          var formData = new FormData();
          formData.append('subjects', data.subjects);
          formData.append('inst_id', this.userDetails.inst_id);
          return this.http.post(this.constants.ADD_SUBJECTS_URL, formData);
        }
      }, {
        key: "uploadSubjectAttachment",
        value: function uploadSubjectAttachment(subject_id, data, fileType) {
          var formData = new FormData();

          if (fileType === 0) {
            formData.append('syllabus', data.attachment);
          } else {
            formData.append('bg_image', data.attachment);
          }

          formData.append('subject_id', subject_id);
          return this.http.post(this.constants.ADD_SUBJECT_SYLLABUS_URL, formData);
        }
      }, {
        key: "assignFaculties",
        value: function assignFaculties(data, subjectId) {
          var formData = new FormData();
          formData.append('subject_id', subjectId);
          formData.append('faculty_id', data.faculty_id);
          return this.http.post(this.constants.ADD_SUBJECT_FACULTY_URL, formData);
        }
      }]);

      return AdminSubjectsService;
    }();

    AdminSubjectsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    AdminSubjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminSubjectsService);
    /***/
  },

  /***/
  "./src/app/admin/services/topic/topic.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/services/topic/topic.service.ts ***!
    \*******************************************************/

  /*! exports provided: AdminTopicService */

  /***/
  function srcAppAdminServicesTopicTopicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTopicService", function () {
      return AdminTopicService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var AdminTopicService = /*#__PURE__*/function () {
      function AdminTopicService(constants, http) {
        _classCallCheck(this, AdminTopicService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(AdminTopicService, [{
        key: "getTopicsList",
        value: function getTopicsList(chapterId) {
          return this.http.get(this.constants.ADMIN_TOPICS_LIST_URL + chapterId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              var result = response.data[0];

              if (result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
                return result;
              }

              throw 0;
            }

            throw 0;
          }));
        }
      }, {
        key: "updateTopic",
        value: function updateTopic(topicFormData) {
          var formData = new FormData();
          formData.append('topic', topicFormData.name);
          formData.append('video_id', topicFormData.video_id);

          if (topicFormData.keywords) {
            formData.append('keywords', topicFormData.keywords);
          }

          if (topicFormData.related_videos) {
            formData.append('related_videos', topicFormData.related_videos);
          }

          formData.append('chapter_details_id', topicFormData.chapter_details_id);
          return this.http.post(this.constants.UPDATE_TOPIC_URL, formData);
        }
      }, {
        key: "deleteTopic",
        value: function deleteTopic(topic) {
          return this.http["delete"](this.constants.ADMIN_TOPICS_DELETE_URL + topic.id);
        }
      }]);

      return AdminTopicService;
    }();

    AdminTopicService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminTopicService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _sharedComponents_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedComponents/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _sharedComponents_pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedComponents/pageNotFound/pageNotFound.component */
    "./src/app/shared/components/pageNotFound/pageNotFound.component.ts");
    /* harmony import */


    var _superAdminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @superAdminComponents/dashboard/dashboard.component */
    "./src/app/superAdmin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _superAdminComponents_institutes_institutes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @superAdminComponents/institutes/institutes.component */
    "./src/app/superAdmin/components/institutes/institutes.component.ts");
    /* harmony import */


    var _superAdminComponents_admins_admins_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @superAdminComponents/admins/admins.component */
    "./src/app/superAdmin/components/admins/admins.component.ts");
    /* harmony import */


    var _superAdminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @superAdminComponents/mcq/mcq.component */
    "./src/app/superAdmin/components/mcq/mcq.component.ts");
    /* harmony import */


    var _adminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminComponents/dashboard/dashboard.component */
    "./src/app/admin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _adminComponents_faculties_faculties_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @adminComponents/faculties/faculties.component */
    "./src/app/admin/components/faculties/faculties.component.ts");
    /* harmony import */


    var _adminComponents_students_students_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @adminComponents/students/students.component */
    "./src/app/admin/components/students/students.component.ts");
    /* harmony import */


    var _adminComponents_department_department_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @adminComponents/department/department.component */
    "./src/app/admin/components/department/department.component.ts");
    /* harmony import */


    var _adminComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @adminComponents/subjects/subjects.component */
    "./src/app/admin/components/subjects/subjects.component.ts");
    /* harmony import */


    var _adminComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @adminComponents/chapter/chapter.component */
    "./src/app/admin/components/chapter/chapter.component.ts");
    /* harmony import */


    var _adminComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @adminComponents/faq/faq.component */
    "./src/app/admin/components/faq/faq.component.ts");
    /* harmony import */


    var _adminComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @adminComponents/topic/topic.component */
    "./src/app/admin/components/topic/topic.component.ts");
    /* harmony import */


    var _adminComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @adminComponents/examination/examination.component */
    "./src/app/admin/components/examination/examination.component.ts");
    /* harmony import */


    var _adminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @adminComponents/mcq/mcq.component */
    "./src/app/admin/components/mcq/mcq.component.ts");
    /* harmony import */


    var _studentComponents_subject_subject_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @studentComponents/subject/subject.component */
    "./src/app/student/components/subject/subject.component.ts");
    /* harmony import */


    var _studentComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @studentComponents/topic/topic.component */
    "./src/app/student/components/topic/topic.component.ts");
    /* harmony import */


    var _studentComponents_content_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @studentComponents/content/content.component */
    "./src/app/student/components/content/content.component.ts");
    /* harmony import */


    var _studentComponents_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @studentComponents/wishlist/wishlist.component */
    "./src/app/student/components/wishlist/wishlist.component.ts");
    /* harmony import */


    var _studentComponents_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @studentComponents/feedback/feedback.component */
    "./src/app/student/components/feedback/feedback.component.ts");
    /* harmony import */


    var _studentComponents_help_help_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @studentComponents/help/help.component */
    "./src/app/student/components/help/help.component.ts");
    /* harmony import */


    var _studentComponents_search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @studentComponents/search/search.component */
    "./src/app/student/components/search/search.component.ts");
    /* harmony import */


    var _studentComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @studentComponents/profile/profile.component */
    "./src/app/student/components/profile/profile.component.ts");
    /* harmony import */


    var _app_student_components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @app/student/components/profile/create-profile/create-profile.component */
    "./src/app/student/components/profile/create-profile/create-profile.component.ts");
    /* harmony import */


    var _studentComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @studentComponents/mcq/mcq.component */
    "./src/app/student/components/mcq/mcq.component.ts");
    /* harmony import */


    var _facultyComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @facultyComponents/dashboard/dashboard.component */
    "./src/app/faculty/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _facultyComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @facultyComponents/subjects/subjects.component */
    "./src/app/faculty/components/subjects/subjects.component.ts");
    /* harmony import */


    var _facultyComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @facultyComponents/chapter/chapter.component */
    "./src/app/faculty/components/chapter/chapter.component.ts");
    /* harmony import */


    var _facultyComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @facultyComponents/examination/examination.component */
    "./src/app/faculty/components/examination/examination.component.ts");
    /* harmony import */


    var _facultyComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @facultyComponents/topic/topic.component */
    "./src/app/faculty/components/topic/topic.component.ts");
    /* harmony import */


    var _facultyComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @facultyComponents/questions/questions.component */
    "./src/app/faculty/components/questions/questions.component.ts");
    /* harmony import */


    var _facultyComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @facultyComponents/faq/faq.component */
    "./src/app/faculty/components/faq/faq.component.ts");
    /* harmony import */


    var _facultyComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @facultyComponents/mcq/mcq.component */
    "./src/app/faculty/components/mcq/mcq.component.ts");

    var routes = [{
      path: '',
      component: _sharedComponents_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'school/login',
      component: _sharedComponents_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'superAdmin/dashboard',
      component: _superAdminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["SuperAdminDashboardComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'superAdmin/institutes',
      component: _superAdminComponents_institutes_institutes_component__WEBPACK_IMPORTED_MODULE_7__["SuperAdminInstitutesComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'superAdmin/admins',
      component: _superAdminComponents_admins_admins_component__WEBPACK_IMPORTED_MODULE_8__["SuperAdminAdminsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'superAdmin/mcq',
      component: _superAdminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_9__["McqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/dashboard',
      component: _adminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/faculties',
      component: _adminComponents_faculties_faculties_component__WEBPACK_IMPORTED_MODULE_11__["AdminFacultiesComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/students',
      component: _adminComponents_students_students_component__WEBPACK_IMPORTED_MODULE_12__["AdminStudentsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/departments',
      component: _adminComponents_department_department_component__WEBPACK_IMPORTED_MODULE_13__["AdminDepartmentComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/subjects',
      component: _adminComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_14__["AdminSubjectsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/chapters',
      component: _adminComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_15__["AdminChapterComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/examination',
      component: _adminComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_18__["AdminExaminationComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/faqs/:chapterId',
      component: _adminComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["AdminFaqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/topics/:chapterId',
      component: _adminComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_17__["AdminTopicComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin/mcq',
      component: _adminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_19__["AdminMcqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/home',
      component: _studentComponents_subject_subject_component__WEBPACK_IMPORTED_MODULE_20__["StudentSubjectComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/contents/:subjectId',
      component: _studentComponents_content_content_component__WEBPACK_IMPORTED_MODULE_22__["StudentContentComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/topics/:chapterId',
      component: _studentComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_21__["StudentTopicComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/examination',
      component: _studentComponents_subject_subject_component__WEBPACK_IMPORTED_MODULE_20__["StudentSubjectComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/wishlist',
      component: _studentComponents_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_23__["StudentWishlistComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/feedback',
      component: _studentComponents_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__["StudentFeedbackComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/help',
      component: _studentComponents_help_help_component__WEBPACK_IMPORTED_MODULE_25__["StudentHelpComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/search',
      component: _studentComponents_search_search_component__WEBPACK_IMPORTED_MODULE_26__["StudentSearchComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/profile',
      component: _studentComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["StudentProfileComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/create-profile',
      component: _app_student_components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_28__["StudentCreateProfileComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student/mcq',
      component: _studentComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_29__["StudentMcqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/dashboard',
      component: _facultyComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["FacultyDashboardComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/subjects',
      component: _facultyComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_31__["FacultySubjectsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/chapters',
      component: _facultyComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_32__["FacultyChaptersComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/examination',
      component: _facultyComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_33__["FacultyExaminationComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/questions/:subjectId',
      component: _facultyComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_35__["FacultyQuestionsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/topics/:chapterId',
      component: _facultyComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_34__["FacultyTopicComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/students',
      component: _facultyComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_31__["FacultySubjectsComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/faqs/:chapterId',
      component: _facultyComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_36__["FacultyFaqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faculty/mcq',
      component: _facultyComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_37__["FacultyMcqComponent"],
      canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '**',
      component: _sharedComponents_pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_languageTranslator_languageTranslator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/languageTranslator/languageTranslator.service */
    "./src/app/shared/services/languageTranslator/languageTranslator.service.ts");

    var AppComponent = function AppComponent(translateLanguage) {
      _classCallCheck(this, AppComponent);

      this.translateLanguage = translateLanguage;
      this.translateLanguage.initiateLanguage();
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_languageTranslator_languageTranslator_service__WEBPACK_IMPORTED_MODULE_2__["LanguageTranslatorService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @sharedServices/http-interceptor/http-interceptor.service */
    "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
    /* harmony import */


    var _sharedComponents_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @sharedComponents/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _sharedComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @sharedComponents/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _sharedComponents_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @sharedComponents/breadcrumb/breadcrumb.component */
    "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _sharedComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @sharedComponents/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _studentComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @studentComponents/navbar/navbar.component */
    "./src/app/student/components/navbar/navbar.component.ts");
    /* harmony import */


    var _superAdminComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @superAdminComponents/sidebar/sidebar.component */
    "./src/app/superAdmin/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _adminComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @adminComponents/sidebar/sidebar.component */
    "./src/app/admin/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _sharedComponents_pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @sharedComponents/pageNotFound/pageNotFound.component */
    "./src/app/shared/components/pageNotFound/pageNotFound.component.ts");
    /* harmony import */


    var _sharedComponents_formValidator_formValidator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @sharedComponents/formValidator/formValidator.component */
    "./src/app/shared/components/formValidator/formValidator.component.ts");
    /* harmony import */


    var _superAdminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @superAdminComponents/dashboard/dashboard.component */
    "./src/app/superAdmin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _superAdminComponents_institutes_institutes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @superAdminComponents/institutes/institutes.component */
    "./src/app/superAdmin/components/institutes/institutes.component.ts");
    /* harmony import */


    var _adminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @adminComponents/dashboard/dashboard.component */
    "./src/app/admin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _adminComponents_faculties_faculties_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @adminComponents/faculties/faculties.component */
    "./src/app/admin/components/faculties/faculties.component.ts");
    /* harmony import */


    var _adminComponents_students_students_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @adminComponents/students/students.component */
    "./src/app/admin/components/students/students.component.ts");
    /* harmony import */


    var _superAdminComponents_admins_admins_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @superAdminComponents/admins/admins.component */
    "./src/app/superAdmin/components/admins/admins.component.ts");
    /* harmony import */


    var _adminComponents_department_department_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @adminComponents/department/department.component */
    "./src/app/admin/components/department/department.component.ts");
    /* harmony import */


    var _adminComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @adminComponents/subjects/subjects.component */
    "./src/app/admin/components/subjects/subjects.component.ts");
    /* harmony import */


    var _shared_pipes_verifyData_verify_data_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./shared/pipes/verifyData/verify-data.pipe */
    "./src/app/shared/pipes/verifyData/verify-data.pipe.ts");
    /* harmony import */


    var _adminComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @adminComponents/chapter/chapter.component */
    "./src/app/admin/components/chapter/chapter.component.ts");
    /* harmony import */


    var _studentComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @studentComponents/sidebar/sidebar.component */
    "./src/app/student/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _studentComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @studentComponents/chapter/chapter.component */
    "./src/app/student/components/chapter/chapter.component.ts");
    /* harmony import */


    var _studentComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @studentComponents/topic/topic.component */
    "./src/app/student/components/topic/topic.component.ts");
    /* harmony import */


    var _studentComponents_subject_subject_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @studentComponents/subject/subject.component */
    "./src/app/student/components/subject/subject.component.ts");
    /* harmony import */


    var _studentComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @studentComponents/examination/examination.component */
    "./src/app/student/components/examination/examination.component.ts");
    /* harmony import */


    var _adminComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @adminComponents/examination/examination.component */
    "./src/app/admin/components/examination/examination.component.ts");
    /* harmony import */


    var _shared_pipes_prepareObject_prepare_object_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./shared/pipes/prepareObject/prepare-object.pipe */
    "./src/app/shared/pipes/prepareObject/prepare-object.pipe.ts");
    /* harmony import */


    var _studentComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @studentComponents/questions/questions.component */
    "./src/app/student/components/questions/questions.component.ts");
    /* harmony import */


    var _studentComponents_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @studentComponents/wishlist/wishlist.component */
    "./src/app/student/components/wishlist/wishlist.component.ts");
    /* harmony import */


    var _studentComponents_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @studentComponents/feedback/feedback.component */
    "./src/app/student/components/feedback/feedback.component.ts");
    /* harmony import */


    var _studentComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @studentComponents/faq/faq.component */
    "./src/app/student/components/faq/faq.component.ts");
    /* harmony import */


    var _studentComponents_help_help_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @studentComponents/help/help.component */
    "./src/app/student/components/help/help.component.ts");
    /* harmony import */


    var _studentComponents_content_content_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @studentComponents/content/content.component */
    "./src/app/student/components/content/content.component.ts");
    /* harmony import */


    var _adminComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @adminComponents/faq/faq.component */
    "./src/app/admin/components/faq/faq.component.ts");
    /* harmony import */


    var _adminComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @adminComponents/topic/topic.component */
    "./src/app/admin/components/topic/topic.component.ts");
    /* harmony import */


    var _studentComponents_search_search_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @studentComponents/search/search.component */
    "./src/app/student/components/search/search.component.ts");
    /* harmony import */


    var _studentComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @studentComponents/profile/profile.component */
    "./src/app/student/components/profile/profile.component.ts");
    /* harmony import */


    var _facultyComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @facultyComponents/dashboard/dashboard.component */
    "./src/app/faculty/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _facultyComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @facultyComponents/sidebar/sidebar.component */
    "./src/app/faculty/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _facultyComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @facultyComponents/subjects/subjects.component */
    "./src/app/faculty/components/subjects/subjects.component.ts");
    /* harmony import */


    var _facultyComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @facultyComponents/chapter/chapter.component */
    "./src/app/faculty/components/chapter/chapter.component.ts");
    /* harmony import */


    var _facultyComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @facultyComponents/examination/examination.component */
    "./src/app/faculty/components/examination/examination.component.ts");
    /* harmony import */


    var _facultyComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @facultyComponents/topic/topic.component */
    "./src/app/faculty/components/topic/topic.component.ts");
    /* harmony import */


    var _facultyComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @facultyComponents/faq/faq.component */
    "./src/app/faculty/components/faq/faq.component.ts");
    /* harmony import */


    var _facultyComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @facultyComponents/questions/questions.component */
    "./src/app/faculty/components/questions/questions.component.ts");
    /* harmony import */


    var _studentComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @studentComponents/list-error/list-error.component */
    "./src/app/student/components/list-error/list-error.component.ts");
    /* harmony import */


    var _facultyComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @facultyComponents/list-error/list-error.component */
    "./src/app/faculty/components/list-error/list-error.component.ts");
    /* harmony import */


    var _superAdminComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @superAdminComponents/list-error/list-error.component */
    "./src/app/superAdmin/components/list-error/list-error.component.ts");
    /* harmony import */


    var _adminComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @adminComponents/list-error/list-error.component */
    "./src/app/admin/components/list-error/list-error.component.ts");
    /* harmony import */


    var _app_student_components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @app/student/components/profile/create-profile/create-profile.component */
    "./src/app/student/components/profile/create-profile/create-profile.component.ts");
    /* harmony import */


    var _studentComponents_recent_videos_recent_videos_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @studentComponents/recent-videos/recent-videos.component */
    "./src/app/student/components/recent-videos/recent-videos.component.ts");
    /* harmony import */


    var _superAdmin_components_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./superAdmin/components/mcq/mcq.component */
    "./src/app/superAdmin/components/mcq/mcq.component.ts");
    /* harmony import */


    var _studentComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! @studentComponents/mcq/mcq.component */
    "./src/app/student/components/mcq/mcq.component.ts");
    /* harmony import */


    var _facultyComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! @facultyComponents/mcq/mcq.component */
    "./src/app/faculty/components/mcq/mcq.component.ts");
    /* harmony import */


    var _adminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! @adminComponents/mcq/mcq.component */
    "./src/app/admin/components/mcq/mcq.component.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
    } //Component declaration


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _sharedComponents_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _sharedComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _sharedComponents_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _superAdminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["SuperAdminDashboardComponent"], _sharedComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _superAdminComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SuperAdminSidebarComponent"], _adminComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["AdminSidebarComponent"], _superAdminComponents_institutes_institutes_component__WEBPACK_IMPORTED_MODULE_25__["SuperAdminInstitutesComponent"], _sharedComponents_pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"], _sharedComponents_formValidator_formValidator_component__WEBPACK_IMPORTED_MODULE_23__["FormValidatorComponent"], _adminComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["AdminDashboardComponent"], _adminComponents_faculties_faculties_component__WEBPACK_IMPORTED_MODULE_27__["AdminFacultiesComponent"], _adminComponents_students_students_component__WEBPACK_IMPORTED_MODULE_28__["AdminStudentsComponent"], _superAdminComponents_admins_admins_component__WEBPACK_IMPORTED_MODULE_29__["SuperAdminAdminsComponent"], _adminComponents_department_department_component__WEBPACK_IMPORTED_MODULE_30__["AdminDepartmentComponent"], _adminComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_31__["AdminSubjectsComponent"], _shared_pipes_verifyData_verify_data_pipe__WEBPACK_IMPORTED_MODULE_32__["VerifyDataPipe"], _adminComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_33__["AdminChapterComponent"], _studentComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_35__["StudentChapterComponent"], _studentComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_36__["StudentTopicComponent"], _studentComponents_subject_subject_component__WEBPACK_IMPORTED_MODULE_37__["StudentSubjectComponent"], _studentComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_38__["StudentExaminationComponent"], _adminComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_39__["AdminExaminationComponent"], _shared_pipes_prepareObject_prepare_object_pipe__WEBPACK_IMPORTED_MODULE_40__["PrepareObjectPipe"], _studentComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_41__["StudentQuestionsComponent"], _studentComponents_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_42__["StudentWishlistComponent"], _studentComponents_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_43__["StudentFeedbackComponent"], _studentComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["StudentNavbarComponent"], _studentComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_44__["StudentFaqComponent"], _studentComponents_help_help_component__WEBPACK_IMPORTED_MODULE_45__["StudentHelpComponent"], _studentComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_34__["StudentSidebarComponent"], _studentComponents_content_content_component__WEBPACK_IMPORTED_MODULE_46__["StudentContentComponent"], _adminComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_47__["AdminFaqComponent"], _adminComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_48__["AdminTopicComponent"], _studentComponents_search_search_component__WEBPACK_IMPORTED_MODULE_49__["StudentSearchComponent"], _studentComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_50__["StudentProfileComponent"], _facultyComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_51__["FacultyDashboardComponent"], _facultyComponents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_52__["FacultySidebarComponent"], _facultyComponents_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_53__["FacultySubjectsComponent"], _facultyComponents_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_54__["FacultyChaptersComponent"], _facultyComponents_examination_examination_component__WEBPACK_IMPORTED_MODULE_55__["FacultyExaminationComponent"], _facultyComponents_questions_questions_component__WEBPACK_IMPORTED_MODULE_58__["FacultyQuestionsComponent"], _facultyComponents_topic_topic_component__WEBPACK_IMPORTED_MODULE_56__["FacultyTopicComponent"], _facultyComponents_faq_faq_component__WEBPACK_IMPORTED_MODULE_57__["FacultyFaqComponent"], _studentComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_59__["StudentListErrorComponent"], _facultyComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_60__["FacultyListErrorComponent"], _superAdminComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_61__["SuperAdminListErrorComponent"], _adminComponents_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_62__["AdminListErrorComponent"], _app_student_components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_63__["StudentCreateProfileComponent"], _studentComponents_recent_videos_recent_videos_component__WEBPACK_IMPORTED_MODULE_64__["StudentRecentVideosComponent"], _superAdmin_components_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_65__["McqComponent"], _studentComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_66__["StudentMcqComponent"], _facultyComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_67__["FacultyMcqComponent"], _adminComponents_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_68__["AdminMcqComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
        }
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]],
      providers: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _app_constants__WEBPACK_IMPORTED_MODULE_13__["Constants"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _sharedServices_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["HttpConfigInterceptor"],
        multi: true
      }],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
      bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, storageService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.storageService = storageService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return true; // if (!this.storageService.getData('Authorization')) {
          // 	this.router.navigate(['login']);
          // 	return false;
          // } else {
          // 	return true;
          // }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Constants = function Constants() {
      _classCallCheck(this, Constants);

      this.DOMAIN_URL = 'https://api.gradlit.in/';
      this.BASE_URL = this.DOMAIN_URL + 'api/';
      this.LANGUAGE_ARRAY = ['en', 'ka'];
      this.DEFAULT_LANGUAGE = this.LANGUAGE_ARRAY[0];
      this.ENABLE_ENCRYPTION = true;
      this.ENCRYPTION_KEY = "Rewind";
      this.STUDENT_CSV_CONTENTS = ["USN", "Password"];
      this.FACULTY_CSV_CONTENTS = ["Name", "Email", "Password"];
      this.SUPER_ADMIN = "superAdmin";
      this.ADMIN = "admin";
      this.STUDENT = "student";
      this.FACULTY = "faculty";
      this.LOGIN_URL = this.BASE_URL + 'login';
      this.USER_DETAILS_URL = this.BASE_URL + 'student/user';
      this.LOGOUT_URL = this.BASE_URL + 'logout';
      this.INSTITUTES_LIST_URL = this.BASE_URL + 'all-institutes';
      this.ADMIN_URL = this.BASE_URL + "admin/";
      this.STUDENT_URL = this.BASE_URL + "student/";
      this.SUPER_ADMIN_DASHBOARD_LIST_URL = this.ADMIN_URL + 'super-admin-dashboard';
      this.ADD_INSTITUTE_URL = this.ADMIN_URL + 'add-institute';
      this.ADMINS_LIST_URL = this.ADMIN_URL + 'inst-admin';
      this.ADD_ADMIN_URL = this.ADMIN_URL + 'add-inst-admin';
      this.DEPARTMENTS_AND_SECTIONS_LIST_URL = this.ADMIN_URL + 'get-department-classes/';
      this.FACULTIES_LIST_URL = this.ADMIN_URL + 'faculties/';
      this.ADD_FACULTIES_URL = this.ADMIN_URL + 'add-faculties';
      this.FACULTY_DELETE_URL = this.ADMIN_URL + 'faculty/';
      this.DEPARTMENTS_LIST_URL = this.ADMIN_URL + 'departments';
      this.ADD_DEPARTMENT_URL = this.ADMIN_URL + 'add-department';
      this.STUDENTS_LIST_URL = this.ADMIN_URL + 'students/';
      this.ADD_STUDENTS_URL = this.ADMIN_URL + 'add-students';
      this.SUBJECTS_LIST_URL = this.ADMIN_URL + 'subject/';
      this.ADD_SUBJECTS_URL = this.ADMIN_URL + 'upload-department-subjects';
      this.CHAPTERS_LIST_URL = this.ADMIN_URL + 'subject/';
      this.ADD_CHAPTERS_URL = this.ADMIN_URL + 'add-chapter';
      this.ADD_TOPIC_URL = this.ADMIN_URL + 'add-chapter-details';
      this.EXAMINATION_LIST_URL = this.ADMIN_URL + 'examination/';
      this.ADD_EXAMINATION_URL = this.ADMIN_URL + 'examination';
      this.SUBJECT_FAULTY_LIST_URL = this.ADMIN_URL + 'subject-faculties/';
      this.ADD_SUBJECT_FACULTY_URL = this.ADMIN_URL + 'add-subject-faculty';
      this.ADMIN_DASHBOARD_LIST_URL = this.ADMIN_URL + 'dashboard/';
      this.ADMIN_SUBJECTS_DETAILS_URL = this.ADMIN_URL + 'subject-info/';
      this.ADD_SUBJECT_SYLLABUS_URL = this.ADMIN_URL + 'subject-syllabus';
      this.FAQS_LIST_URL = this.ADMIN_URL + 'faqs/';
      this.ADMIN_TOPICS_LIST_URL = this.ADMIN_URL + 'chapter/';
      this.ADMIN_FAQS_LIST_URL = this.ADMIN_URL + 'faqs/';
      this.ADD_FAQ_URL = this.ADMIN_URL + 'faqs';
      this.UPDATE_FAQ_URL = this.ADMIN_URL + 'update-faqs';
      this.DELETE_FAQ_URL = this.ADMIN_URL + 'faq/';
      this.UPDATE_TOPIC_URL = this.ADMIN_URL + 'update-chapter-details';
      this.UPDATE_CHAPTERS_URL = this.ADMIN_URL + 'update-chapter';
      this.ADMIN_UPDATE_URL = this.ADMIN_URL + 'update-inst-admin';
      this.ADMIN_STATUS_UPDATE_URL = this.ADMIN_URL + 'toggle-institute-admin';
      this.INSTITUTE_STATUS_UPDATE_URL = this.ADMIN_URL + 'toggle-institute';
      this.INSTITUTE_UPDATE_URL = this.ADMIN_URL + 'update-institute';
      this.EXAM_PAPER_DELETE_URL = this.ADMIN_URL + 'examination/';
      this.ADMIN_TOPICS_DELETE_URL = this.ADMIN_URL + 'delete-chapter-details/'; //students API

      this.STUDENT_SUBJECTS_LIST_URL = this.STUDENT_URL + 'student-subjects/';
      this.STUDENT_CHAPTERS_LIST_URL = this.STUDENT_URL + 'subject/';
      this.STUDENT_TOPICS_LIST_URL = this.STUDENT_URL + 'chapter/';
      this.STUDENT_EXAMS_LIST_URL = this.STUDENT_URL + 'examination/';
      this.STUDENT_QUESTIONS_LIST_URL = this.STUDENT_URL + 'questions/';
      this.STUDENT_ADD_QUESTION_URL = this.STUDENT_URL + 'question';
      this.STUDENT_WISHLIST_LIST_URL = this.STUDENT_URL + 'wishlist';
      this.STUDENT_ADD_WISHLIST_URL = this.STUDENT_URL + 'add-to-wishlist';
      this.STUDENT_TOGGLE_WISHLIST_URL = this.STUDENT_URL + 'toggle-wishlist';
      this.STUDENT_SEARCH_LIST_URL = this.STUDENT_URL + 'search/';
      this.STUDENT_PROFILE_UPDATE_URL = this.STUDENT_URL + 'update-profile';
      this.STUDENT_RECENT_VIDEOS_LIST_URL = this.STUDENT_URL + 'recent-videos';
      this.SEND_OTP_URL = this.STUDENT_URL + 'otp';
      this.VERIFY_OTP_URL = this.STUDENT_URL + 'verify-otp';
      this.VERIFY_STUDENT_EMAIL = this.STUDENT_URL + 'verify-email';
      this.FORGOT_STUDENT_EMAIL = this.STUDENT_URL + 'forgot-password';
      this.FACULTY_SUBJECTS_LIST_URL = this.ADMIN_URL + 'faculty-subjects';
      this.FACULTY_QUESTIONS_LIST_URL = this.ADMIN_URL + 'subject-questions/';
      this.FACULTY_SUBMIT_REPLAY_URL = this.ADMIN_URL + 'answer';
      this.FACULTY_TEST_URL = "http://test.gradlit.in/login";
      this.MCQ_DIRECT_LOGIN_TOKEN = this.BASE_URL + "get-mcq-token";
      this.FORGOT_ADMIn_EMAIL = this.ADMIN_URL + 'forgot-password';
    };
    /***/

  },

  /***/
  "./src/app/faculty/components/chapter/chapter.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/faculty/components/chapter/chapter.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsChapterChapterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9jaGFwdGVyL2NoYXB0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/faculty/components/chapter/chapter.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/faculty/components/chapter/chapter.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FacultyChaptersComponent */

  /***/
  function srcAppFacultyComponentsChapterChapterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyChaptersComponent", function () {
      return FacultyChaptersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _adminServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @adminServices/chapter/chapter.service */
    "./src/app/admin/services/chapter/chapter.service.ts");
    /* harmony import */


    var _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @adminServices/subjects/subjects.service */
    "./src/app/admin/services/subjects/subjects.service.ts");
    /* harmony import */


    var _vimeo_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @vimeo/player */
    "./node_modules/@vimeo/player/dist/player.es.js");

    var FacultyChaptersComponent = /*#__PURE__*/function () {
      function FacultyChaptersComponent(_constants, _download, _miscellaneous, _translate, _toaster, _loader, _router, _chapter, _department, _subjects) {
        _classCallCheck(this, FacultyChaptersComponent);

        this._constants = _constants;
        this._download = _download;
        this._miscellaneous = _miscellaneous;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._router = _router;
        this._chapter = _chapter;
        this._department = _department;
        this._subjects = _subjects;
        this.departments = [];
        this.semesters = [];
        this.chapters = [];
        this.subjects = [];
        this.availableForms = ["filterForm", "addChapterForm", "addTopicForm", "editChapterForm"];
        this.filterDataStatus = 2;
        this.chaptersDataStatus = 2;
        this.subjectsDataStatus = 2;
        this.showAddFeature = false;
        this.showPreviewError = true;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'subject_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addChapterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'notes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'thumbnail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.addTopicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'chapter_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'video_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'related_videos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
        this.editChapterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'chapter_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'notes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'thumbnail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(FacultyChaptersComponent, [{
        key: "validateForm",
        value: function validateForm(formName, formIndex) {
          return this[this.availableForms[formIndex]].get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFiltersList();
        }
      }, {
        key: "resetFiltersList",
        value: function resetFiltersList() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFiltersList",
        value: function getFiltersList() {
          var _this38 = this;

          this.resetFiltersList();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this38._loader.hideLoader();

            _this38.filterDataStatus = 1;
            _this38.departments = response.departments;
            _this38.semesters = response.inst_class;
          }, function (errorCode) {
            _this38._loader.hideLoader();

            _this38.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getSubjectsData",
        value: function getSubjectsData() {
          this.resetChapters();
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getSubjects(data);
          }
        }
      }, {
        key: "resetFormValue",
        value: function resetFormValue(formIndex, key) {
          var formName = this.availableForms[formIndex];
          this[formName].get(key).patchValue(null);
        }
      }, {
        key: "resetSubjects",
        value: function resetSubjects() {
          this.subjectsDataStatus = 2;
          this.subjects = [];

          this._loader.showLoader();

          this.resetFormValue(0, 'subject_id');
          this.resetFormValue(2, 'chapter_id');
        }
      }, {
        key: "getSubjects",
        value: function getSubjects(data) {
          var _this39 = this;

          this.resetSubjects();

          this._subjects.getSubjects(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this39._loader.hideLoader();

            _this39.subjectsDataStatus = 1;
            _this39.subjects = response;
          }, function (errorCode) {
            _this39._loader.hideLoader();

            _this39.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "resetChapters",
        value: function resetChapters() {
          this.chaptersDataStatus = 2;
          this.chapters = [];
          this.resetFormValue(3, 'chapter_id');
        }
      }, {
        key: "getChapters",
        value: function getChapters() {
          var _this40 = this;

          this.resetChapters();

          this._loader.showLoader();

          this._chapter.getChapters(this.filterForm.value).subscribe(function (response) {
            _this40._loader.hideLoader();

            _this40.chaptersDataStatus = 1;
            _this40.chapters = response;
          }, function (errorCode) {
            _this40._loader.hideLoader();

            _this40.chaptersDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addChapterForm')[0].reset();
            this.addChapterForm.reset();
            $('#addTopicForm')[0].reset();
            this.addTopicForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addChapterForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "disableAddTopicFeatureForm",
        value: function disableAddTopicFeatureForm() {
          return this.addTopicForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget, formIndex) {
          var formName = this.availableForms[formIndex];
          this[formName].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this[formName].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addChapter",
        value: function addChapter() {
          var _this41 = this;

          this._loader.showLoader();

          this._chapter.addChapter(this.filterForm.value, this.addChapterForm.value).subscribe(function () {
            _this41._loader.hideLoader();

            _this41.showAddFeatureView(false);

            _this41.getChapters();

            _this41._toaster.showSuccess(_this41._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this41._translate.instant("CHAPTERS")
            }));
          }, function () {
            _this41._loader.hideLoader();
          });
        }
      }, {
        key: "addTopic",
        value: function addTopic() {
          var _this42 = this;

          this._loader.showLoader();

          this._chapter.addTopic(this.addTopicForm.value).subscribe(function () {
            _this42._loader.hideLoader();

            _this42.showAddFeatureView(false);

            _this42.getChapters();

            _this42._toaster.showSuccess(_this42._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this42._translate.instant("TOPIC")
            }));
          }, function () {
            _this42._loader.hideLoader();
          });
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(chapter) {
          this._router.navigate(['faculty/topics', chapter.id]);
        }
      }, {
        key: "addTopics",
        value: function addTopics(chapter) {
          this.showAddFeatureView(true);
          this.addTopicForm.get('chapter_id').patchValue(chapter.id);
          $('#topic-tab').click();
        }
      }, {
        key: "editChapter",
        value: function editChapter(chapter) {
          $('#editChapterForm')[0].reset();
          this.editChapterForm.reset();
          this.editChapterForm.patchValue({
            name: chapter.name,
            chapter_id: chapter.id,
            description: chapter.description
          });
        }
      }, {
        key: "updateChapter",
        value: function updateChapter() {
          var _this43 = this;

          this._loader.showLoader();

          this._chapter.updateChapter(this.editChapterForm.value).subscribe(function () {
            _this43._loader.hideLoader();

            $('#update-chapter').modal('hide');

            _this43.getChapters();

            _this43._toaster.showSuccess(_this43._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this43._translate.instant("CHAPTER")
            }));
          }, function () {
            _this43._loader.hideLoader();
          });
        }
      }, {
        key: "previewVedio",
        value: function previewVedio() {
          if (this.addTopicForm.value.video_id) {
            this.showPreviewError = false;
            this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_13__["default"]('vimeo-player', {
              id: Number(this.addTopicForm.value.video_id),
              loop: true,
              responsive: true,
              portrait: true,
              title: false,
              autoplay: true
            });
          } else {
            this.showPreviewError = true;
          }
        }
      }]);

      return FacultyChaptersComponent;
    }();

    FacultyChaptersComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"]
      }, {
        type: _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__["MiscellaneousService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _adminServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_11__["AdminChapterService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_10__["AdminDepartmentService"]
      }, {
        type: _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_12__["AdminSubjectsService"]
      }];
    };

    FacultyChaptersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-chapter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chapter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/chapter/chapter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chapter.component.scss */
      "./src/app/faculty/components/chapter/chapter.component.scss"))["default"]]
    })], FacultyChaptersComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/dashboard/dashboard.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/faculty/components/dashboard/dashboard.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faculty/components/dashboard/dashboard.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/faculty/components/dashboard/dashboard.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FacultyDashboardComponent */

  /***/
  function srcAppFacultyComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyDashboardComponent", function () {
      return FacultyDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FacultyDashboardComponent = /*#__PURE__*/function () {
      function FacultyDashboardComponent() {
        _classCallCheck(this, FacultyDashboardComponent);
      }

      _createClass(FacultyDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacultyDashboardComponent;
    }();

    FacultyDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/faculty/components/dashboard/dashboard.component.scss"))["default"]]
    })], FacultyDashboardComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/examination/examination.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/faculty/components/examination/examination.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsExaminationExaminationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9leGFtaW5hdGlvbi9leGFtaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/faculty/components/examination/examination.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/faculty/components/examination/examination.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FacultyExaminationComponent */

  /***/
  function srcAppFacultyComponentsExaminationExaminationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyExaminationComponent", function () {
      return FacultyExaminationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/department/department.service */
    "./src/app/admin/services/department/department.service.ts");
    /* harmony import */


    var _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adminServices/subjects/subjects.service */
    "./src/app/admin/services/subjects/subjects.service.ts");
    /* harmony import */


    var _adminServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adminServices/examination/examination.service */
    "./src/app/admin/services/examination/examination.service.ts");

    var FacultyExaminationComponent = /*#__PURE__*/function () {
      function FacultyExaminationComponent(_download, _translate, _toaster, _loader, _department, _examination, _subjects) {
        _classCallCheck(this, FacultyExaminationComponent);

        this._download = _download;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._department = _department;
        this._examination = _examination;
        this._subjects = _subjects;
        this.departments = [];
        this.semesters = [];
        this.subjects = [];
        this.examsList = [];
        this.filterDataStatus = 2;
        this.subjectsDataStatus = 2;
        this.examDataStatus = 2;
        this.showAddFeature = false;
        this.years = [2020, 2019, 2018, 2017, 2016, 2015];
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'department_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'inst_class_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'subject_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
          'paper': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(FacultyExaminationComponent, [{
        key: "validateAddFormValue",
        value: function validateAddFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "resetFormValue",
        value: function resetFormValue(formName, key) {
          this[formName].get(key).patchValue(null);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartmentsAndSectionsList();
        }
      }, {
        key: "resetDepartmentsAndSections",
        value: function resetDepartmentsAndSections() {
          this.filterDataStatus = 2;
          this.departments = [];
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getDepartmentsAndSectionsList",
        value: function getDepartmentsAndSectionsList() {
          var _this44 = this;

          this.resetDepartmentsAndSections();

          this._department.getDepartmentsAndSections().subscribe(function (response) {
            _this44._loader.hideLoader();

            _this44.filterDataStatus = 1;
            _this44.departments = response.departments;
            _this44.semesters = response.inst_class;
          }, function (errorCode) {
            _this44._loader.hideLoader();

            _this44.filterDataStatus = errorCode;
          });
        }
      }, {
        key: "getSubjectsData",
        value: function getSubjectsData() {
          this.resetExamsList();
          var data = this.filterForm.value;

          if (data.department_id && data.inst_class_id) {
            this.getSubjects(data);
          }
        }
      }, {
        key: "resetSubjects",
        value: function resetSubjects() {
          this.subjectsDataStatus = 2;
          this.subjects = [];

          this._loader.showLoader();

          this.resetFormValue('filterForm', 'subject_id');
        }
      }, {
        key: "getSubjects",
        value: function getSubjects(data) {
          var _this45 = this;

          this.resetSubjects();

          this._subjects.getSubjects(data.department_id, data.inst_class_id).subscribe(function (response) {
            _this45._loader.hideLoader();

            _this45.subjectsDataStatus = 1;
            _this45.subjects = response;
          }, function (errorCode) {
            _this45._loader.hideLoader();

            _this45.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "resetExamsList",
        value: function resetExamsList() {
          this.examDataStatus = 2;
          this.examsList = [];
        }
      }, {
        key: "getExamsList",
        value: function getExamsList() {
          var _this46 = this;

          this.resetExamsList();

          this._loader.showLoader();

          this._examination.getExamsList(this.filterForm.value).subscribe(function (response) {
            _this46._loader.hideLoader();

            _this46.examDataStatus = 1;
            _this46.examsList = response;
          }, function (errorCode) {
            _this46._loader.hideLoader();

            _this46.examDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addDataForm')[0].reset();
            this.addDataForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid && this.filterForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["addDataForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["addDataForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addExam",
        value: function addExam() {
          var _this47 = this;

          this._loader.showLoader();

          this._examination.addExamination(this.filterForm.value, this.addDataForm.value).subscribe(function () {
            _this47._loader.hideLoader();

            _this47.showAddFeatureView(false);

            _this47.getExamsList();

            _this47._toaster.showSuccess(_this47._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this47._translate.instant("EXAMINATION")
            }));
          }, function () {
            _this47._loader.hideLoader();
          });
        }
      }, {
        key: "deletePaper",
        value: function deletePaper(paper) {
          var _this48 = this;

          this._loader.showLoader();

          this._examination.deleteExamPaper(paper).subscribe(function () {
            _this48._loader.hideLoader();

            _this48.getExamsList();

            _this48._toaster.showSuccess(_this48._translate.instant("FEATURE_DELETED_SUCCESSFULLY", {
              value: _this48._translate.instant("EXAMINATION")
            }));
          }, function () {
            _this48._loader.hideLoader();
          });
        }
      }]);

      return FacultyExaminationComponent;
    }();

    FacultyExaminationComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _adminServices_department_department_service__WEBPACK_IMPORTED_MODULE_7__["AdminDepartmentService"]
      }, {
        type: _adminServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_9__["AdminExaminationService"]
      }, {
        type: _adminServices_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubjectsService"]
      }];
    };

    FacultyExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-examination',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/examination/examination.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examination.component.scss */
      "./src/app/faculty/components/examination/examination.component.scss"))["default"]]
    })], FacultyExaminationComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/faq/faq.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/faculty/components/faq/faq.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faculty/components/faq/faq.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/faculty/components/faq/faq.component.ts ***!
    \*********************************************************/

  /*! exports provided: FacultyFaqComponent */

  /***/
  function srcAppFacultyComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyFaqComponent", function () {
      return FacultyFaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adminServices/topic/topic.service */
    "./src/app/admin/services/topic/topic.service.ts");
    /* harmony import */


    var _adminServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adminServices/faq/faq.service */
    "./src/app/admin/services/faq/faq.service.ts");

    var FacultyFaqComponent = /*#__PURE__*/function () {
      function FacultyFaqComponent(_translate, _loader, _route, _router, _toaster, _faq, _topic) {
        var _this49 = this;

        _classCallCheck(this, FacultyFaqComponent);

        this._translate = _translate;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._toaster = _toaster;
        this._faq = _faq;
        this._topic = _topic;
        this.topicsDataStatus = 2;
        this.topics = [];
        this.faqsDataStatus = 2;
        this.faqs = [];
        this.queryParams = {};
        this.showAddFeature = false;
        this.selectedFaq = {};

        this._route.params.subscribe(function (params) {
          _this49.chapterId = params['chapterId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this49.queryParams = queryParams;
        });

        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
          'answer': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [])
        });
        this.editDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
          'answer': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [])
        });
      }

      _createClass(FacultyFaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicsList();
        }
      }, {
        key: "validateAddDataFormValue",
        value: function validateAddDataFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "validateEditDataFormValue",
        value: function validateEditDataFormValue(formName) {
          return this.editDataForm.get(formName);
        }
      }, {
        key: "resetTopicsList",
        value: function resetTopicsList() {
          this.topicsDataStatus = 2;
          this.topics = [];

          this._loader.showLoader();
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList() {
          var _this50 = this;

          this.resetTopicsList();

          this._topic.getTopicsList(this.chapterId).subscribe(function (response) {
            _this50._loader.hideLoader();

            _this50.topicsDataStatus = 1;
            _this50.topics = response.chapter_details.data;
            _this50.topicId = parseInt(_this50.queryParams.topicId);

            _this50.onTopicChange();
          }, function (errorCode) {
            _this50._loader.hideLoader();

            _this50.topicsDataStatus = errorCode;
          });
        }
      }, {
        key: "onTopicChange",
        value: function onTopicChange() {
          this.changeRouteParams();
          this.getFaqsList();
        }
      }, {
        key: "resetFaqsList",
        value: function resetFaqsList() {
          this.faqsDataStatus = 2;
          this.faqs = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFaqsList",
        value: function getFaqsList() {
          var _this51 = this;

          this.resetFaqsList();

          this._faq.getFaqsList(this.topicId).subscribe(function (response) {
            _this51._loader.hideLoader();

            _this51.faqsDataStatus = 1;
            _this51.faqs = response.reverse();
          }, function (errorCode) {
            _this51._loader.hideLoader();

            _this51.faqsDataStatus = errorCode;
          });
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          var data = {};
          data['topicId'] = this.topicId;

          this._router.navigate(['faculty/faqs', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            this.addDataForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid ? false : true;
        }
      }, {
        key: "disableEditFeatureForm",
        value: function disableEditFeatureForm() {
          return this.editDataForm.valid ? false : true;
        }
      }, {
        key: "addFaq",
        value: function addFaq() {
          var _this52 = this;

          this._loader.showLoader();

          this._faq.addFaq(this.addDataForm.value, this.topicId).subscribe(function () {
            _this52._loader.hideLoader();

            _this52.showAddFeatureView(false);

            _this52.getFaqsList();

            _this52._toaster.showSuccess(_this52._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this52._translate.instant("FAQ")
            }));
          }, function () {
            _this52._loader.hideLoader();
          });
        }
      }, {
        key: "initialiseEditModal",
        value: function initialiseEditModal(faq) {
          this.selectedFaq = faq;
          this.editDataForm.reset();
          this.editDataForm.get('question').patchValue(this.selectedFaq.question);
          this.editDataForm.get('answer').patchValue(this.selectedFaq.answer);
        }
      }, {
        key: "updateFaq",
        value: function updateFaq() {
          var _this53 = this;

          this._loader.showLoader();

          this._faq.updateFaq(this.editDataForm.value, this.selectedFaq.id).subscribe(function () {
            _this53._loader.hideLoader();

            _this53.getFaqsList();

            $('#editData').modal('hide');

            _this53._toaster.showSuccess(_this53._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this53._translate.instant("FAQ")
            }));
          }, function () {
            _this53._loader.hideLoader();
          });
        }
      }, {
        key: "deleteFaq",
        value: function deleteFaq(faq) {
          var _this54 = this;

          this._loader.showLoader();

          this._faq.deleteFaq(faq.id).subscribe(function () {
            _this54._loader.hideLoader();

            _this54.getFaqsList();

            _this54._toaster.showSuccess(_this54._translate.instant("FEATURE_DELETED_SUCCESSFULLY", {
              value: _this54._translate.instant("FAQ")
            }));
          }, function () {
            _this54._loader.hideLoader();
          });
        }
      }]);

      return FacultyFaqComponent;
    }();

    FacultyFaqComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _adminServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_8__["AdminFaqService"]
      }, {
        type: _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_7__["AdminTopicService"]
      }];
    };

    FacultyFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/faculty/components/faq/faq.component.scss"))["default"]]
    })], FacultyFaqComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/list-error/list-error.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/faculty/components/list-error/list-error.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsListErrorListErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9saXN0LWVycm9yL2xpc3QtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/faculty/components/list-error/list-error.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/faculty/components/list-error/list-error.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FacultyListErrorComponent */

  /***/
  function srcAppFacultyComponentsListErrorListErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyListErrorComponent", function () {
      return FacultyListErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FacultyListErrorComponent = function FacultyListErrorComponent() {
      _classCallCheck(this, FacultyListErrorComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FacultyListErrorComponent.prototype, "errorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FacultyListErrorComponent.prototype, "errorCode", void 0);
    FacultyListErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-list-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/list-error/list-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-error.component.scss */
      "./src/app/faculty/components/list-error/list-error.component.scss"))["default"]]
    })], FacultyListErrorComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/mcq/mcq.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/faculty/components/mcq/mcq.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsMcqMcqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9tY3EvbWNxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faculty/components/mcq/mcq.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/faculty/components/mcq/mcq.component.ts ***!
    \*********************************************************/

  /*! exports provided: FacultyMcqComponent */

  /***/
  function srcAppFacultyComponentsMcqMcqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyMcqComponent", function () {
      return FacultyMcqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @superAdminServices/dashboard/dashboard.service */
    "./src/app/superAdmin/services/dashboard/dashboard.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FacultyMcqComponent = /*#__PURE__*/function () {
      function FacultyMcqComponent(_loader, _dashboard, _router) {
        _classCallCheck(this, FacultyMcqComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this._router = _router;
      }

      _createClass(FacultyMcqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loader.showLoader();

          this.getDirectLoginUrl();
        }
      }, {
        key: "getDirectLoginUrl",
        value: function getDirectLoginUrl() {
          var _this55 = this;

          this._dashboard.getDirectLoginUrl().subscribe(function (response) {
            _this55._router.navigate(['faculty/dashboard']);

            if (response && response.mcq_url) {
              window.open(response.mcq_url, '_blank');
            }

            _this55._loader.hideLoader();
          }, function (errorCode) {
            _this55._loader.hideLoader();
          });
        }
      }]);

      return FacultyMcqComponent;
    }();

    FacultyMcqComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["SuperAdminDashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    FacultyMcqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mcq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/mcq/mcq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq.component.scss */
      "./src/app/faculty/components/mcq/mcq.component.scss"))["default"]]
    })], FacultyMcqComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/questions/questions.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/faculty/components/questions/questions.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsQuestionsQuestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faculty/components/questions/questions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/faculty/components/questions/questions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FacultyQuestionsComponent */

  /***/
  function srcAppFacultyComponentsQuestionsQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyQuestionsComponent", function () {
      return FacultyQuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _app_faculty_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/faculty/services/questions/questions.service */
    "./src/app/faculty/services/questions/questions.service.ts");

    var FacultyQuestionsComponent = /*#__PURE__*/function () {
      function FacultyQuestionsComponent(_miscellaneous, _loader, _route, _toaster, _translate, _question) {
        var _this56 = this;

        _classCallCheck(this, FacultyQuestionsComponent);

        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._route = _route;
        this._toaster = _toaster;
        this._translate = _translate;
        this._question = _question;
        this.questionsList = [];
        this.questionsListStatus = 2;

        this._route.params.subscribe(function (params) {
          _this56.subjectId = params['subjectId'];
        });
      }

      _createClass(FacultyQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getQuestionsList();
        }
      }, {
        key: "resetQuestionsList",
        value: function resetQuestionsList() {
          this.questionsListStatus = 2;
          this.questionsList = {};

          this._loader.showLoader();
        }
      }, {
        key: "getQuestionsList",
        value: function getQuestionsList() {
          var _this57 = this;

          this.resetQuestionsList();

          this._question.getQuestionsList(this.subjectId).subscribe(function (response) {
            _this57._loader.hideLoader();

            _this57.questionsListStatus = 1;
            _this57.questionsList = response;
          }, function (errorStatus) {
            _this57.questionsListStatus = errorStatus;

            _this57._loader.hideLoader();
          });
        }
      }, {
        key: "submitReplay",
        value: function submitReplay(question) {
          var _this58 = this;

          this._loader.showLoader();

          this._question.submitReplay(question).subscribe(function () {
            _this58.getQuestionsList();

            _this58._loader.hideLoader();

            _this58._toaster.showSuccess(_this58._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this58._translate.instant("REPLAY")
            }));
          }, function () {
            _this58._loader.hideLoader();
          });
        }
      }]);

      return FacultyQuestionsComponent;
    }();

    FacultyQuestionsComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _app_faculty_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_7__["FacultyQuestionsService"]
      }];
    };

    FacultyQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-questions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/questions/questions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questions.component.scss */
      "./src/app/faculty/components/questions/questions.component.scss"))["default"]]
    })], FacultyQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/sidebar/sidebar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/faculty/components/sidebar/sidebar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/faculty/components/sidebar/sidebar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/faculty/components/sidebar/sidebar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FacultySidebarComponent */

  /***/
  function srcAppFacultyComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultySidebarComponent", function () {
      return FacultySidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");

    var FacultySidebarComponent = /*#__PURE__*/function () {
      function FacultySidebarComponent(_constants, _miscellaneous, _storage) {
        _classCallCheck(this, FacultySidebarComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._storage = _storage;
        this.sidemenus = [];
        this.userDetails = {};
        this.width = window.innerWidth;
      }

      _createClass(FacultySidebarComponent, [{
        key: "onResize",
        value: function onResize() {
          this.width = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userType = this._constants.FACULTY;
          this.userDetails = this._storage.getData("userDetails");
          this.sidemenus = [{
            name: "DASHBOARD",
            icon: "fa fa-home",
            link: '/' + this.userType + '/dashboard'
          }, {
            name: "QUESTIONS",
            icon: "fa fa-question-circle",
            link: '/' + this.userType + '/subjects'
          }, {
            name: "CHAPTERS",
            icon: "fas fa-pen",
            link: '/' + this.userType + "/chapters"
          }, {
            name: "EXAMINATIONS",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/examination"
          }, {
            name: "TEST",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/mcq"
          }];
        }
      }, {
        key: "minimizeSidemenu",
        value: function minimizeSidemenu() {
          if (this.width <= 768) {
            $('body').removeClass('sidebar-open');
            $('body').addClass('sidebar-collapse');
          }
        }
      }]);

      return FacultySidebarComponent;
    }();

    FacultySidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }, {
        type: _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousService"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], FacultySidebarComponent.prototype, "onResize", null);
    FacultySidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/faculty/components/sidebar/sidebar.component.scss"))["default"]]
    })], FacultySidebarComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/subjects/subjects.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/faculty/components/subjects/subjects.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsSubjectsSubjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy9zdWJqZWN0cy9zdWJqZWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/faculty/components/subjects/subjects.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/faculty/components/subjects/subjects.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FacultySubjectsComponent */

  /***/
  function srcAppFacultyComponentsSubjectsSubjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultySubjectsComponent", function () {
      return FacultySubjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _app_faculty_services_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/faculty/services/subjects/subjects.service */
    "./src/app/faculty/services/subjects/subjects.service.ts");
    /* harmony import */


    var _app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");

    var FacultySubjectsComponent = /*#__PURE__*/function () {
      function FacultySubjectsComponent(_constants, _miscellaneous, _download, _router, _loader, _subjects) {
        _classCallCheck(this, FacultySubjectsComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._download = _download;
        this._router = _router;
        this._loader = _loader;
        this._subjects = _subjects;
        this.subjectsListStatus = 2;
        this.subjectsList = [];
      }

      _createClass(FacultySubjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFacultySubjects();
        }
      }, {
        key: "resetSubjectsList",
        value: function resetSubjectsList() {
          this.subjectsListStatus = 2;
          this.subjectsList = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFacultySubjects",
        value: function getFacultySubjects() {
          var _this59 = this;

          this.resetSubjectsList();

          this._subjects.getSubjectsList().subscribe(function (response) {
            _this59._loader.hideLoader();

            _this59.subjectsListStatus = 1;
            _this59.subjectsList = response;
          }, function (errorStatus) {
            _this59.subjectsListStatus = errorStatus;

            _this59._loader.hideLoader();
          });
        }
      }, {
        key: "onSubjectSelection",
        value: function onSubjectSelection(subject) {
          this._router.navigate(['faculty/questions', subject.id]);
        }
      }]);

      return FacultySubjectsComponent;
    }();

    FacultySubjectsComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _app_shared_services_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
      }, {
        type: _app_faculty_services_subjects_subjects_service__WEBPACK_IMPORTED_MODULE_6__["FacultySubjectsService"]
      }];
    };

    FacultySubjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-subjects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subjects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/subjects/subjects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subjects.component.scss */
      "./src/app/faculty/components/subjects/subjects.component.scss"))["default"]]
    })], FacultySubjectsComponent);
    /***/
  },

  /***/
  "./src/app/faculty/components/topic/topic.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/faculty/components/topic/topic.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyComponentsTopicTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvY29tcG9uZW50cy90b3BpYy90b3BpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/faculty/components/topic/topic.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/faculty/components/topic/topic.component.ts ***!
    \*************************************************************/

  /*! exports provided: FacultyTopicComponent */

  /***/
  function srcAppFacultyComponentsTopicTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyTopicComponent", function () {
      return FacultyTopicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _vimeo_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @vimeo/player */
    "./node_modules/@vimeo/player/dist/player.es.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adminServices/topic/topic.service */
    "./src/app/admin/services/topic/topic.service.ts");

    var FacultyTopicComponent = /*#__PURE__*/function () {
      function FacultyTopicComponent(_constants, _translate, _toaster, _loader, _route, _router, _topic) {
        var _this60 = this;

        _classCallCheck(this, FacultyTopicComponent);

        this._constants = _constants;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._topic = _topic;
        this.topicsDataStatus = 2;
        this.topics = [];
        this.selectedTopic = {};
        this.chapterDetails = {};
        this.queryParams = {};
        this.playerOptions = {};

        this._route.params.subscribe(function (params) {
          _this60.chapterId = params['chapterId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this60.queryParams = queryParams;
        });

        this.editTopicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'chapter_details_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'video_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'related_videos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(FacultyTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicsList();
        }
      }, {
        key: "validateUpdateTopicFormValue",
        value: function validateUpdateTopicFormValue(formName) {
          return this.editTopicForm.get(formName);
        }
      }, {
        key: "resetTopicsList",
        value: function resetTopicsList() {
          this.topicsDataStatus = 2;
          this.topics = [];
          this.chapterDetails = {};

          this._loader.showLoader();
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList() {
          var _this61 = this;

          this.resetTopicsList();

          this._topic.getTopicsList(this.chapterId).subscribe(function (response) {
            _this61._loader.hideLoader();

            _this61.topicsDataStatus = 1;
            _this61.chapterDetails = response;
            _this61.topics = response.chapter_details.data;

            if (_this61.queryParams.topicId) {
              var index = lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"](_this61.topics, {
                id: parseInt(_this61.queryParams.topicId)
              });

              _this61.prepareVimeoPlayer(index > -1 ? _this61.topics[index] : _this61.topics[0]);
            } else {
              _this61.prepareVimeoPlayer(_this61.topics[0]);
            }
          }, function (errorCode) {
            _this61._loader.hideLoader();

            _this61.topicsDataStatus = errorCode;
          });
        }
      }, {
        key: "prepareVimeoPlayer",
        value: function prepareVimeoPlayer(topic) {
          this.selectedTopic = topic;
          this.changeRouteParams();
          this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_6__["default"]('vimeo-player', {
            id: this.selectedTopic.vimeo_id,
            loop: true,
            responsive: true,
            portrait: true,
            title: false,
            autoplay: true
          });
        }
      }, {
        key: "selectTopic",
        value: function selectTopic(topic) {
          if (topic !== this.selectedTopic) {
            this.selectedTopic = topic;
            this.changeRouteParams();
            this.changeVimeoSource();
          }
        }
      }, {
        key: "changeVimeoSource",
        value: function changeVimeoSource() {
          this.player.loadVideo(this.selectedTopic.vimeo_id).then(function () {
            console.log("Video src updated");
          })["catch"](function () {
            console.log("Video src cannot be updated");
          });
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          var data = {};
          data['topicId'] = this.selectedTopic.id;

          this._router.navigate(['faculty/topics', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "navigateToFaqs",
        value: function navigateToFaqs(topic) {
          var data = {};
          data['topicId'] = topic.id;

          this._router.navigate(['faculty/faqs', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "editTopic",
        value: function editTopic(topic) {
          $('#editTopicForm')[0].reset();
          this.editTopicForm.reset();
          this.editTopicForm.patchValue({
            name: topic.name,
            chapter_details_id: topic.id,
            keywords: topic.keywords,
            related_videos: topic.related_videos,
            video_id: topic.vimeo_id
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["editTopicForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["editTopicForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "updateTopic",
        value: function updateTopic() {
          var _this62 = this;

          this._loader.showLoader();

          this._topic.updateTopic(this.editTopicForm.value).subscribe(function () {
            _this62._loader.hideLoader();

            $('#update-topic').modal('hide');

            _this62.getTopicsList();

            _this62._toaster.showSuccess(_this62._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this62._translate.instant("TOPIC")
            }));
          }, function () {
            _this62._loader.hideLoader();
          });
        }
      }]);

      return FacultyTopicComponent;
    }();

    FacultyTopicComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _adminServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__["AdminTopicService"]
      }];
    };

    FacultyTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/components/topic/topic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topic.component.scss */
      "./src/app/faculty/components/topic/topic.component.scss"))["default"]]
    })], FacultyTopicComponent);
    /***/
  },

  /***/
  "./src/app/faculty/services/questions/questions.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/faculty/services/questions/questions.service.ts ***!
    \*****************************************************************/

  /*! exports provided: FacultyQuestionsService */

  /***/
  function srcAppFacultyServicesQuestionsQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyQuestionsService", function () {
      return FacultyQuestionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var FacultyQuestionsService = /*#__PURE__*/function () {
      function FacultyQuestionsService(_constants, _http) {
        _classCallCheck(this, FacultyQuestionsService);

        this._constants = _constants;
        this._http = _http;
      }

      _createClass(FacultyQuestionsService, [{
        key: "getQuestionsList",
        value: function getQuestionsList(subjectId) {
          return this._http.get(this._constants.FACULTY_QUESTIONS_LIST_URL + subjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "submitReplay",
        value: function submitReplay(question) {
          var formData = new FormData();
          formData.append('id', question.id);
          formData.append('answer', question.replay);
          return this._http.post(this._constants.FACULTY_SUBMIT_REPLAY_URL, formData);
        }
      }]);

      return FacultyQuestionsService;
    }();

    FacultyQuestionsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FacultyQuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FacultyQuestionsService);
    /***/
  },

  /***/
  "./src/app/faculty/services/subjects/subjects.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/faculty/services/subjects/subjects.service.ts ***!
    \***************************************************************/

  /*! exports provided: FacultySubjectsService */

  /***/
  function srcAppFacultyServicesSubjectsSubjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultySubjectsService", function () {
      return FacultySubjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var FacultySubjectsService = /*#__PURE__*/function () {
      function FacultySubjectsService(_constants, _http) {
        _classCallCheck(this, FacultySubjectsService);

        this._constants = _constants;
        this._http = _http;
      }

      _createClass(FacultySubjectsService, [{
        key: "getSubjectsList",
        value: function getSubjectsList() {
          return this._http.get(this._constants.FACULTY_SUBJECTS_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return FacultySubjectsService;
    }();

    FacultySubjectsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FacultySubjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FacultySubjectsService);
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbComponent = function BreadcrumbComponent() {
      _classCallCheck(this, BreadcrumbComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbComponent.prototype, "title", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/shared/components/breadcrumb/breadcrumb.component.scss"))["default"]]
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/formValidator/formValidator.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/formValidator/formValidator.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFormValidatorFormValidatorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1WYWxpZGF0b3IvZm9ybVZhbGlkYXRvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/formValidator/formValidator.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/formValidator/formValidator.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FormValidatorComponent */

  /***/
  function srcAppSharedComponentsFormValidatorFormValidatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidatorComponent", function () {
      return FormValidatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormValidatorComponent = /*#__PURE__*/function () {
      function FormValidatorComponent() {
        _classCallCheck(this, FormValidatorComponent);

        this.validateRequired = true;
        this.validateEmail = false;
        this.validateNameMinLength = false;
        this.validatePasswordLength = false;
        this.validatePhoneNoMinLength = false;
      }

      _createClass(FormValidatorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var propName in changes) {
            var change = changes[propName];
            this[propName] = change.currentValue;
          }
        }
      }]);

      return FormValidatorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "validateRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "validateEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "validateNameMinLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "validatePasswordLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormValidatorComponent.prototype, "validatePhoneNoMinLength", void 0);
    FormValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-validator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formValidator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/formValidator/formValidator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formValidator.component.scss */
      "./src/app/shared/components/formValidator/formValidator.component.scss"))["default"]]
    })], FormValidatorComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/login/login.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/login/login.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/login/login.service */
    "./src/app/shared/services/login/login.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_router, _loader, toaster, _login) {
        _classCallCheck(this, LoginComponent);

        this._router = _router;
        this._loader = _loader;
        this.toaster = toaster;
        this._login = _login;
        this.showPassword = false;
        this.validateUsn = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'usn': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
        this.adminForgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(LoginComponent, [{
        key: "validateLoginForm",
        value: function validateLoginForm(formName) {
          return this.loginForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginType = this.getLoginType();
          this.loginForm.controls['email'].setValidators([]);

          if (this.loginType !== 'student') {
            this.loginForm.controls['email'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
          }
        }
      }, {
        key: "getLoginType",
        value: function getLoginType() {
          switch (this._router.url) {
            case '/school/login':
              return 'school';

            case '/':
              return 'student';

            default:
              return 'student';
          }
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this63 = this;

          var data = this.loginForm.value;

          if (this.loginType === 'student') {
            data['type'] = 2;
          }

          this._loader.showLoader();

          this._login.doLogin(this.loginForm.value).subscribe(function () {
            _this63.getUserDetails();
          }, function () {
            _this63._loader.hideLoader();
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this64 = this;

          this._login.getUserDetails().subscribe(function (response) {
            _this64._loader.hideLoader();

            _this64.navigateToDashboard(response.type);
          }, function () {
            _this64._loader.hideLoader();
          });
        }
      }, {
        key: "navigateToDashboard",
        value: function navigateToDashboard(typeOfUser) {
          switch (typeOfUser) {
            case 1:
              this._router.navigate(['/superAdmin/dashboard']);

              break;

            case 2:
              this._router.navigate(['/student/home']);

              break;

            case 3:
              this._router.navigate(['/admin/dashboard']);

              break;

            case 4:
              this._router.navigate(['/faculty/dashboard']);

              break;

            default:
              this._router.navigate(['/superAdmin/dashboard']);

          }
        }
      }, {
        key: "validateForgotPasswordFormValue",
        value: function validateForgotPasswordFormValue(formName) {
          return this.forgotPasswordForm.get(formName);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this65 = this;

          var data = this.forgotPasswordForm.value;

          this._loader.showLoader();

          this._login.forgotPassword(data).subscribe(function (response) {
            _this65._loader.hideLoader();

            _this65.toaster.showSuccess(response.status.message);
          }, function (errorCode) {
            _this65._loader.hideLoader();
          });
        }
      }, {
        key: "validateAdminForgotPasswordFormValue",
        value: function validateAdminForgotPasswordFormValue(formName) {
          return this.adminForgotPasswordForm.get(formName);
        }
      }, {
        key: "adminForgotPassword",
        value: function adminForgotPassword() {
          var _this66 = this;

          var data = this.adminForgotPasswordForm.value;

          this._loader.showLoader();

          this._login.adminForgotPassword(data).subscribe(function (response) {
            _this66._loader.hideLoader();

            _this66.toaster.showSuccess(response.status.message);
          }, function (errorCode) {
            _this66._loader.hideLoader();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/shared/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/sessionHandler/sessionHandler.service */
    "./src/app/shared/services/sessionHandler/sessionHandler.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(_constants, _miscellaneous, _session, _storage) {
        _classCallCheck(this, NavbarComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._session = _session;
        this._storage = _storage;
        this.userDetails = {};
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = this._storage.getData("userDetails");
          this.loginType = this.userDetails.type;
        }
      }, {
        key: "logout",
        value: function logout() {
          this._session.showLogoutPopup();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousService"]
      }, {
        type: _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_3__["SessionHandlerService"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/components/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/pageNotFound/pageNotFound.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/pageNotFound/pageNotFound.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VOb3RGb3VuZC9wYWdlTm90Rm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/pageNotFound/pageNotFound.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/pageNotFound/pageNotFound.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppSharedComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'appPageNotFound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pageNotFound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pageNotFound/pageNotFound.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pageNotFound.component.scss */
      "./src/app/shared/components/pageNotFound/pageNotFound.component.scss"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/prepareObject/prepare-object.pipe.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/pipes/prepareObject/prepare-object.pipe.ts ***!
    \*******************************************************************/

  /*! exports provided: PrepareObjectPipe */

  /***/
  function srcAppSharedPipesPrepareObjectPrepareObjectPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrepareObjectPipe", function () {
      return PrepareObjectPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrepareObjectPipe = /*#__PURE__*/function () {
      function PrepareObjectPipe() {
        _classCallCheck(this, PrepareObjectPipe);
      }

      _createClass(PrepareObjectPipe, [{
        key: "transform",
        value: function transform(value) {
          var array = [];

          for (var key in value) {
            array.push({
              key: key,
              value: value[key]
            });
          }

          return array;
        }
      }]);

      return PrepareObjectPipe;
    }();

    PrepareObjectPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'prepareObject'
    })], PrepareObjectPipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/verifyData/verify-data.pipe.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/pipes/verifyData/verify-data.pipe.ts ***!
    \*************************************************************/

  /*! exports provided: VerifyDataPipe */

  /***/
  function srcAppSharedPipesVerifyDataVerifyDataPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyDataPipe", function () {
      return VerifyDataPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var VerifyDataPipe = /*#__PURE__*/function () {
      function VerifyDataPipe(_translate) {
        _classCallCheck(this, VerifyDataPipe);

        this._translate = _translate;
      }

      _createClass(VerifyDataPipe, [{
        key: "transform",
        value: function transform(value, type) {
          if (value !== null && value !== '' && typeof value !== "undefined") {
            return value;
          } else {
            if (type === 'number') {
              return 0;
            } else {
              return this._translate.instant("NA");
            }
          }
        }
      }]);

      return VerifyDataPipe;
    }();

    VerifyDataPipe.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    VerifyDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'verifyData'
    })], VerifyDataPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/alert/alert.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/alert/alert.service.ts ***!
    \********************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppSharedServicesAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(_translate) {
        _classCallCheck(this, AlertService);

        this._translate = _translate;
      }

      _createClass(AlertService, [{
        key: "showWarning",
        value: function showWarning(alertMessage, title) {
          return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title ? title : this._translate.instant('WARNING'),
            text: alertMessage,
            icon: 'warning',
            confirmButtonColor: '#7d4acb',
            confirmButtonText: this._translate.instant('YES'),
            showConfirmButton: true,
            showCancelButton: true,
            allowOutsideClick: true
          });
        }
      }, {
        key: "showSuccess",
        value: function showSuccess(alertMessage, title) {
          return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title ? title : this._translate.instant('SUCCESS'),
            text: alertMessage,
            icon: 'success',
            confirmButtonColor: '#7d4acb',
            confirmButtonText: this._translate.instant('OK'),
            showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: true
          });
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/shared/services/download/download.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/download/download.service.ts ***!
    \**************************************************************/

  /*! exports provided: DownloadService */

  /***/
  function srcAppSharedServicesDownloadDownloadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadService", function () {
      return DownloadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var DownloadService = /*#__PURE__*/function () {
      function DownloadService(_constants) {
        _classCallCheck(this, DownloadService);

        this._constants = _constants;

        this.downloadAsCsv = function (objArray, headers, fileName) {
          var objectKeys = headers.map(function (header) {
            return header.toLowerCase();
          });
          var strLine = headers + '\n';

          if (objArray.length > 0) {
            for (var i = 0; i < objArray.length; i++) {
              for (var key = 0; key < objectKeys.length; key++) {
                var fields = objectKeys[key].split(","); //logic to combine two keys under one header

                if (fields !== undefined && fields.length > 1) {
                  strLine = strLine + objArray[i][fields[0]] + " " + objArray[i][fields[1]];
                } else {
                  strLine = strLine + objArray[i][objectKeys[key]];
                }

                if (key < objectKeys.length) {
                  strLine = strLine + ",";
                }
              }

              strLine = strLine + '\n';
            }
          }

          var aTag = document.createElement("a");
          aTag.setAttribute('href', "data:application/csv;charset=UTF-8," + encodeURIComponent(strLine));
          aTag.setAttribute('download', fileName);
          aTag.setAttribute('visibility', 'hidden');
          aTag.setAttribute('display', 'none');
          document.body.appendChild(aTag);
          aTag.click();
        };
      }

      _createClass(DownloadService, [{
        key: "download",
        value: function download(file, event) {
          if (event) {
            event.stopPropagation();
          }

          var aTag = document.createElement("a");
          aTag.setAttribute('href', this._constants.DOMAIN_URL + file);
          aTag.setAttribute('download', '');
          aTag.setAttribute('visibility', 'hidden');
          aTag.setAttribute('display', 'none');
          document.body.appendChild(aTag);
          aTag.click();
        }
      }]);

      return DownloadService;
    }();

    DownloadService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }];
    };

    DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DownloadService);
    /***/
  },

  /***/
  "./src/app/shared/services/http-interceptor/http-interceptor.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/services/http-interceptor/http-interceptor.service.ts ***!
    \******************************************************************************/

  /*! exports provided: HttpConfigInterceptor */

  /***/
  function srcAppSharedServicesHttpInterceptorHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
      return HttpConfigInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");

    var HttpConfigInterceptor = /*#__PURE__*/function () {
      function HttpConfigInterceptor(_storage, _miscellaneous) {
        _classCallCheck(this, HttpConfigInterceptor);

        this._storage = _storage;
        this._miscellaneous = _miscellaneous;
      }

      _createClass(HttpConfigInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this67 = this;

          var Authorization = this._storage.getData("Authorization");

          var userDetails = this._storage.getData("userDetails");

          if (Authorization) {
            request = request.clone({
              headers: request.headers.set('Authorization', "Bearer " + Authorization.token)
            });
          }

          if (!(request.body instanceof FormData)) {
            request = request.clone({
              headers: request.headers.set('Content-Type', 'application/json')
            });
          }

          if (userDetails) {
            request = request.clone({
              headers: request.headers.set('user-id', userDetails.id.toString())
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this67._miscellaneous.handle(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(3);
          }));
        }
      }]);

      return HttpConfigInterceptor;
    }();

    HttpConfigInterceptor.ctorParameters = function () {
      return [{
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }];
    };

    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpConfigInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/services/languageTranslator/languageTranslator.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/services/languageTranslator/languageTranslator.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: LanguageTranslatorService */

  /***/
  function srcAppSharedServicesLanguageTranslatorLanguageTranslatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageTranslatorService", function () {
      return LanguageTranslatorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");

    var LanguageTranslatorService = /*#__PURE__*/function () {
      function LanguageTranslatorService(_translate, _constants) {
        _classCallCheck(this, LanguageTranslatorService);

        this._translate = _translate;
        this._constants = _constants;
      }

      _createClass(LanguageTranslatorService, [{
        key: "initiateLanguage",
        value: function initiateLanguage() {
          this._translate.addLangs(this._constants.LANGUAGE_ARRAY);

          this._translate.setDefaultLang(this._constants.DEFAULT_LANGUAGE);

          this.setLanguage(this._constants.DEFAULT_LANGUAGE);
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(languageCode) {
          this._translate.use(languageCode);
        }
      }]);

      return LanguageTranslatorService;
    }();

    LanguageTranslatorService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }];
    };

    LanguageTranslatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LanguageTranslatorService);
    /***/
  },

  /***/
  "./src/app/shared/services/loader/loader.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/loader/loader.service.ts ***!
    \**********************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppSharedServicesLoaderLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var LoaderService = /*#__PURE__*/function () {
      function LoaderService(_spinner) {
        _classCallCheck(this, LoaderService);

        this._spinner = _spinner;
      }

      _createClass(LoaderService, [{
        key: "showLoader",
        value: function showLoader() {
          this._spinner.show();
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this._spinner.hide();
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/shared/services/login/login.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/login/login.service.ts ***!
    \********************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppSharedServicesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(_http, _constants, _storage) {
        _classCallCheck(this, LoginService);

        this._http = _http;
        this._constants = _constants;
        this._storage = _storage;
      }

      _createClass(LoginService, [{
        key: "doLogin",
        value: function doLogin(loginData) {
          var _this68 = this;

          return this._http.post(this._constants.LOGIN_URL, loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.token) {
              _this68._storage.setData('Authorization', response);

              return response;
            }

            throw 0;
          }));
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this69 = this;

          return this._http.get(this._constants.USER_DETAILS_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data) {
              _this69._storage.setData('userDetails', response.data);

              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(data) {
          return this._http.post(this._constants.FORGOT_STUDENT_EMAIL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.status) {
              return response;
            }

            throw 0;
          }));
        }
      }, {
        key: "adminForgotPassword",
        value: function adminForgotPassword(data) {
          return this._http.post(this._constants.FORGOT_ADMIn_EMAIL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.status) {
              return response;
            }

            throw 0;
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/shared/services/miscellaneous/miscellaneous.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/services/miscellaneous/miscellaneous.service.ts ***!
    \************************************************************************/

  /*! exports provided: MiscellaneousService */

  /***/
  function srcAppSharedServicesMiscellaneousMiscellaneousServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function () {
      return MiscellaneousService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");

    var MiscellaneousService = /*#__PURE__*/function () {
      function MiscellaneousService(_toaster, _translate) {
        _classCallCheck(this, MiscellaneousService);

        this._toaster = _toaster;
        this._translate = _translate;
        this.toasterStatus = false;
      }

      _createClass(MiscellaneousService, [{
        key: "setDefaultStudentLogo",
        value: function setDefaultStudentLogo(event) {
          event.target.src = "assets/images/default_usericon.png";
        }
      }, {
        key: "setDefaultAdminLogo",
        value: function setDefaultAdminLogo(event) {
          event.target.src = "assets/images/default_usericon.png";
        }
      }, {
        key: "setDefaultInstituteLogo",
        value: function setDefaultInstituteLogo(event) {
          event.target.src = "assets/images/default_usericon.png";
        }
      }, {
        key: "setDefaultThumbnailImage",
        value: function setDefaultThumbnailImage(event) {
          event.target.src = "assets/images/default_thumb.jpg";
        }
      }, {
        key: "handle",
        value: function handle(error, toasterStatus) {
          this.toasterStatus = toasterStatus ? toasterStatus : false;

          if (error && error.error && error.error.message) {
            this._toaster.showError(error.error.message);
          } else if (error && error.error && error.error.error) {
            this._toaster.showError(error.error.error);
          } else {
            this._toaster.showError(this._translate.instant("STANDARD_ERROR"));
          }
        }
      }]);

      return MiscellaneousService;
    }();

    MiscellaneousService.ctorParameters = function () {
      return [{
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    MiscellaneousService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MiscellaneousService);
    /***/
  },

  /***/
  "./src/app/shared/services/sessionHandler/sessionHandler.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/services/sessionHandler/sessionHandler.service.ts ***!
    \**************************************************************************/

  /*! exports provided: SessionHandlerService */

  /***/
  function srcAppSharedServicesSessionHandlerSessionHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionHandlerService", function () {
      return SessionHandlerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _sharedServices_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/alert/alert.service */
    "./src/app/shared/services/alert/alert.service.ts");

    var SessionHandlerService = /*#__PURE__*/function () {
      function SessionHandlerService(_router, _alert, _translate, _storage, _constants, _http) {
        _classCallCheck(this, SessionHandlerService);

        this._router = _router;
        this._alert = _alert;
        this._translate = _translate;
        this._storage = _storage;
        this._constants = _constants;
        this._http = _http;
      }

      _createClass(SessionHandlerService, [{
        key: "handleLogout",
        value: function handleLogout() {
          var _this70 = this;

          this._http.post(this._constants.LOGOUT_URL, {}).subscribe(function () {
            _this70.navigateToLogin();
          }, function () {
            _this70.navigateToLogin();
          });
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          var userDetails = this._storage.getData("userDetails");

          this._storage.clear();

          if (userDetails.type === 2) {
            this._router.navigate(['/']);
          } else {
            this._router.navigate(['/school/login']);
          }
        }
      }, {
        key: "showLogoutPopup",
        value: function showLogoutPopup() {
          var _this71 = this;

          this._alert.showWarning(this._translate.instant('LOGOUT_MESSAGE2'), this._translate.instant('LOGOUT_MESSAGE1')).then(function (response) {
            if (response.isConfirmed) {
              _this71.handleLogout();
            }
          });
        }
      }]);

      return SessionHandlerService;
    }();

    SessionHandlerService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SessionHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SessionHandlerService);
    /***/
  },

  /***/
  "./src/app/shared/services/storage/storage.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/storage/storage.service.ts ***!
    \************************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(_constants) {
        _classCallCheck(this, StorageService);

        this._constants = _constants;
      }

      _createClass(StorageService, [{
        key: "setData",
        value: function setData(key, value) {
          if (this._constants.ENABLE_ENCRYPTION) {
            localStorage.setItem(key, crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(JSON.stringify(value), this._constants.ENCRYPTION_KEY));
          } else {
            localStorage.setItem(key, JSON.stringify(value));
          }
        }
      }, {
        key: "getData",
        value: function getData(key) {
          if (localStorage.getItem(key)) {
            var value = localStorage.getItem(key);

            if (this._constants.ENABLE_ENCRYPTION) {
              var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(value, this._constants.ENCRYPTION_KEY);
              return JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8));
            } else {
              return JSON.parse(value);
            }
          } else {
            return false;
          }
        }
      }, {
        key: "deleteData",
        value: function deleteData(key) {
          if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          localStorage.clear();
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/shared/services/toaster/toaster.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/toaster/toaster.service.ts ***!
    \************************************************************/

  /*! exports provided: ToasterService */

  /***/
  function srcAppSharedServicesToasterToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ToasterService = /*#__PURE__*/function () {
      function ToasterService(_toaster, _translate) {
        _classCallCheck(this, ToasterService);

        this._toaster = _toaster;
        this._translate = _translate;
      }

      _createClass(ToasterService, [{
        key: "showSuccess",
        value: function showSuccess(message) {
          this._toaster.success(message, this._translate.instant('SUCCESS'));
        }
      }, {
        key: "showError",
        value: function showError(message) {
          this._toaster.error(message, this._translate.instant('ERROR'));
        }
      }]);

      return ToasterService;
    }();

    ToasterService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToasterService);
    /***/
  },

  /***/
  "./src/app/student/components/chapter/chapter.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/chapter/chapter.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsChapterChapterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9jaGFwdGVyL2NoYXB0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/chapter/chapter.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/chapter/chapter.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentChapterComponent */

  /***/
  function srcAppStudentComponentsChapterChapterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentChapterComponent", function () {
      return StudentChapterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @studentServices/chapter/chapter.service */
    "./src/app/student/services/chapter/chapter.service.ts");

    var StudentChapterComponent = /*#__PURE__*/function () {
      function StudentChapterComponent(_constants, _download, _miscellaneous, _loader, _router, _chapter) {
        _classCallCheck(this, StudentChapterComponent);

        this._constants = _constants;
        this._download = _download;
        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._router = _router;
        this._chapter = _chapter;
        this.chapters = [];
        this.chaptersDataStatus = 2;
      }

      _createClass(StudentChapterComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var propName in changes) {
            var change = changes[propName];
            this[propName] = change.currentValue;
          }

          this.getChaptersList();
        }
      }, {
        key: "resetChaptersList",
        value: function resetChaptersList() {
          this.chaptersDataStatus = 2;
          this.chapters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getChaptersList",
        value: function getChaptersList() {
          var _this72 = this;

          this.resetChaptersList();

          this._chapter.getChaptersList(this.subjectId).subscribe(function (response) {
            _this72._loader.hideLoader();

            _this72.chaptersDataStatus = 1;
            _this72.chapters = response;
          }, function (errorCode) {
            _this72._loader.hideLoader();

            _this72.chaptersDataStatus = errorCode;
          });
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(chapter) {
          this._router.navigate(['student/topics', chapter.id]);
        }
      }]);

      return StudentChapterComponent;
    }();

    StudentChapterComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _studentServices_chapter_chapter_service__WEBPACK_IMPORTED_MODULE_7__["StudentChapterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentChapterComponent.prototype, "subjectId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentChapterComponent.prototype, "subjectDetails", void 0);
    StudentChapterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-chapter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chapter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/chapter/chapter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chapter.component.scss */
      "./src/app/student/components/chapter/chapter.component.scss"))["default"]]
    })], StudentChapterComponent);
    /***/
  },

  /***/
  "./src/app/student/components/content/content.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/content/content.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsContentContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/content/content.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/content/content.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentContentComponent */

  /***/
  function srcAppStudentComponentsContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentContentComponent", function () {
      return StudentContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @studentServices/subject/subject.service */
    "./src/app/student/services/subject/subject.service.ts");

    var StudentContentComponent = /*#__PURE__*/function () {
      function StudentContentComponent(_constants, _download, _miscellaneous, _loader, _route, _router, _subject) {
        var _this73 = this;

        _classCallCheck(this, StudentContentComponent);

        this._constants = _constants;
        this._download = _download;
        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._subject = _subject;
        this.subjectDetailsDataStatus = 2;
        this.subjectDetails = {};

        this._route.params.subscribe(function (params) {
          _this73.subjectId = params['subjectId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this73.contentType = parseInt(queryParams.contentType);
        });
      }

      _createClass(StudentContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSubjectDetails();
        }
      }, {
        key: "resetSubjectDetailsList",
        value: function resetSubjectDetailsList() {
          this.subjectDetailsDataStatus = 2;
          this.subjectDetails = {};

          this._loader.showLoader();
        }
      }, {
        key: "getSubjectDetails",
        value: function getSubjectDetails() {
          var _this74 = this;

          this.resetSubjectDetailsList();

          this._subject.getSubjectDetails(this.subjectId).subscribe(function (response) {
            _this74._loader.hideLoader();

            _this74.subjectDetailsDataStatus = 1;
            _this74.subjectDetails = response;
          }, function (errorCode) {
            _this74._loader.hideLoader();

            _this74.subjectDetailsDataStatus = errorCode;
          });
        }
      }, {
        key: "updateNavigation",
        value: function updateNavigation(contentType) {
          this.contentType = contentType;
          var data = {};
          data['contentType'] = contentType;

          this._router.navigate(['student/contents', this.subjectId], {
            queryParams: data
          });
        }
      }]);

      return StudentContentComponent;
    }();

    StudentContentComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _studentServices_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["StudentSubjectService"]
      }];
    };

    StudentContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/content/content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.scss */
      "./src/app/student/components/content/content.component.scss"))["default"]]
    })], StudentContentComponent);
    /***/
  },

  /***/
  "./src/app/student/components/examination/examination.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/student/components/examination/examination.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsExaminationExaminationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9leGFtaW5hdGlvbi9leGFtaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/components/examination/examination.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/student/components/examination/examination.component.ts ***!
    \*************************************************************************/

  /*! exports provided: StudentExaminationComponent */

  /***/
  function srcAppStudentComponentsExaminationExaminationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentExaminationComponent", function () {
      return StudentExaminationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @studentServices/examination/examination.service */
    "./src/app/student/services/examination/examination.service.ts");

    var StudentExaminationComponent = /*#__PURE__*/function () {
      function StudentExaminationComponent(_download, _loader, _examination) {
        _classCallCheck(this, StudentExaminationComponent);

        this._download = _download;
        this._loader = _loader;
        this._examination = _examination;
        this.examDataStatus = 2;
        this.examsList = [];
      }

      _createClass(StudentExaminationComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var propName in changes) {
            var change = changes[propName];
            this[propName] = change.currentValue;
          }

          this.getExamsList();
        }
      }, {
        key: "resetExamsList",
        value: function resetExamsList() {
          this.examDataStatus = 2;
          this.examsList = [];

          this._loader.showLoader();
        }
      }, {
        key: "getExamsList",
        value: function getExamsList() {
          var _this75 = this;

          this.resetExamsList();

          this._examination.getExamsList(this.subjectId).subscribe(function (response) {
            _this75._loader.hideLoader();

            _this75.examDataStatus = 1;
            _this75.examsList = response;
          }, function (errorCode) {
            _this75._loader.hideLoader();

            _this75.examDataStatus = errorCode;
          });
        }
      }]);

      return StudentExaminationComponent;
    }();

    StudentExaminationComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_2__["DownloadService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _studentServices_examination_examination_service__WEBPACK_IMPORTED_MODULE_4__["StudentExaminationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentExaminationComponent.prototype, "subjectId", void 0);
    StudentExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-examination',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/examination/examination.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examination.component.scss */
      "./src/app/student/components/examination/examination.component.scss"))["default"]]
    })], StudentExaminationComponent);
    /***/
  },

  /***/
  "./src/app/student/components/faq/faq.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/student/components/faq/faq.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/faq/faq.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/student/components/faq/faq.component.ts ***!
    \*********************************************************/

  /*! exports provided: StudentFaqComponent */

  /***/
  function srcAppStudentComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentFaqComponent", function () {
      return StudentFaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @studentServices/faq/faq.service */
    "./src/app/student/services/faq/faq.service.ts");

    var StudentFaqComponent = /*#__PURE__*/function () {
      function StudentFaqComponent(_loader, _faq) {
        _classCallCheck(this, StudentFaqComponent);

        this._loader = _loader;
        this._faq = _faq;
        this.faqsDataStatus = 2;
        this.faqs = [];
      }

      _createClass(StudentFaqComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var propName in changes) {
            var change = changes[propName];
            this[propName] = change.currentValue;
          }

          this.getFaqsList();
        }
      }, {
        key: "resetQuestionsList",
        value: function resetQuestionsList() {
          this.faqsDataStatus = 2;
          this.faqs = [];

          this._loader.showLoader();
        }
      }, {
        key: "getFaqsList",
        value: function getFaqsList() {
          var _this76 = this;

          this.resetQuestionsList();

          this._faq.getFaqsList(this.topicId).subscribe(function (response) {
            _this76._loader.hideLoader();

            _this76.faqsDataStatus = 1;
            _this76.faqs = response.reverse();
          }, function () {
            _this76._loader.hideLoader();

            _this76.faqsDataStatus = 0;
          });
        }
      }]);

      return StudentFaqComponent;
    }();

    StudentFaqComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _studentServices_faq_faq_service__WEBPACK_IMPORTED_MODULE_3__["StudentFaqService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentFaqComponent.prototype, "topicId", void 0);
    StudentFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/student/components/faq/faq.component.scss"))["default"]]
    })], StudentFaqComponent);
    /***/
  },

  /***/
  "./src/app/student/components/feedback/feedback.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/student/components/feedback/feedback.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/components/feedback/feedback.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/feedback/feedback.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StudentFeedbackComponent */

  /***/
  function srcAppStudentComponentsFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentFeedbackComponent", function () {
      return StudentFeedbackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentFeedbackComponent = /*#__PURE__*/function () {
      function StudentFeedbackComponent() {
        _classCallCheck(this, StudentFeedbackComponent);
      }

      _createClass(StudentFeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudentFeedbackComponent;
    }();

    StudentFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.scss */
      "./src/app/student/components/feedback/feedback.component.scss"))["default"]]
    })], StudentFeedbackComponent);
    /***/
  },

  /***/
  "./src/app/student/components/help/help.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/student/components/help/help.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsHelpHelpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/help/help.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/student/components/help/help.component.ts ***!
    \***********************************************************/

  /*! exports provided: StudentHelpComponent */

  /***/
  function srcAppStudentComponentsHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHelpComponent", function () {
      return StudentHelpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentHelpComponent = /*#__PURE__*/function () {
      function StudentHelpComponent() {
        _classCallCheck(this, StudentHelpComponent);
      }

      _createClass(StudentHelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudentHelpComponent;
    }();

    StudentHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/help/help.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help.component.scss */
      "./src/app/student/components/help/help.component.scss"))["default"]]
    })], StudentHelpComponent);
    /***/
  },

  /***/
  "./src/app/student/components/list-error/list-error.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/student/components/list-error/list-error.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsListErrorListErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9saXN0LWVycm9yL2xpc3QtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/list-error/list-error.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/student/components/list-error/list-error.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StudentListErrorComponent */

  /***/
  function srcAppStudentComponentsListErrorListErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListErrorComponent", function () {
      return StudentListErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentListErrorComponent = function StudentListErrorComponent() {
      _classCallCheck(this, StudentListErrorComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentListErrorComponent.prototype, "errorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentListErrorComponent.prototype, "errorCode", void 0);
    StudentListErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-list-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/list-error/list-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-error.component.scss */
      "./src/app/student/components/list-error/list-error.component.scss"))["default"]]
    })], StudentListErrorComponent);
    /***/
  },

  /***/
  "./src/app/student/components/mcq/mcq.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/student/components/mcq/mcq.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsMcqMcqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9tY3EvbWNxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/mcq/mcq.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/student/components/mcq/mcq.component.ts ***!
    \*********************************************************/

  /*! exports provided: StudentMcqComponent */

  /***/
  function srcAppStudentComponentsMcqMcqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMcqComponent", function () {
      return StudentMcqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @superAdminServices/dashboard/dashboard.service */
    "./src/app/superAdmin/services/dashboard/dashboard.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentMcqComponent = /*#__PURE__*/function () {
      function StudentMcqComponent(_loader, _dashboard, _router) {
        _classCallCheck(this, StudentMcqComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this._router = _router;
      }

      _createClass(StudentMcqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loader.showLoader();

          this.getDirectLoginUrl();
        }
      }, {
        key: "getDirectLoginUrl",
        value: function getDirectLoginUrl() {
          var _this77 = this;

          this._dashboard.getDirectLoginUrl().subscribe(function (response) {
            _this77._router.navigate(['student/home']);

            if (response && response.mcq_url) {
              window.open(response.mcq_url, '_blank');
            }

            _this77._loader.hideLoader();
          }, function (errorCode) {
            _this77._loader.hideLoader();
          });
        }
      }]);

      return StudentMcqComponent;
    }();

    StudentMcqComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["SuperAdminDashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    StudentMcqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mcq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/mcq/mcq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq.component.scss */
      "./src/app/student/components/mcq/mcq.component.scss"))["default"]]
    })], StudentMcqComponent);
    /***/
  },

  /***/
  "./src/app/student/components/navbar/navbar.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/navbar/navbar.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/navbar/navbar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/student/components/navbar/navbar.component.ts ***!
    \***************************************************************/

  /*! exports provided: StudentNavbarComponent */

  /***/
  function srcAppStudentComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentNavbarComponent", function () {
      return StudentNavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/sessionHandler/sessionHandler.service */
    "./src/app/shared/services/sessionHandler/sessionHandler.service.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @studentServices/semester/semester.service */
    "./src/app/student/services/semester/semester.service.ts");

    var StudentNavbarComponent = /*#__PURE__*/function () {
      function StudentNavbarComponent(_constants, _miscellaneous, _loader, _router, _semester, _session, _storage) {
        _classCallCheck(this, StudentNavbarComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._router = _router;
        this._semester = _semester;
        this._session = _session;
        this._storage = _storage;
        this.userDetails = {};
        this.semesters = [];
        this.semestersDataStatus = 2;
        this.showSemesterDropdown = false;
        this.showSearhBar = true;
        this.semesterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StudentNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = this._storage.getData("userDetails");
          this.loginType = this.userDetails.type;
          this.searchString = '';

          if (this.semestersDataStatus != 1) {
            this.getSemestersList();
          }

          ;
          this.toggleSemestersListSelector();
          this.toggleSearchBar();
        }
      }, {
        key: "toggleSearchBar",
        value: function toggleSearchBar() {
          this.showSearhBar = true;

          if (this._router.url.split('?')[0] === "/student/search") {
            this.showSearhBar = false;
          }
        }
      }, {
        key: "toggleSemestersListSelector",
        value: function toggleSemestersListSelector() {
          this.showSemesterDropdown = false;

          if (this._router.url === "/student/home" || this._router.url === "/student/examination") {
            this.showSemesterDropdown = true;
          }
        }
      }, {
        key: "resetSemestersList",
        value: function resetSemestersList() {
          this.semestersDataStatus = 2;
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getSemestersList",
        value: function getSemestersList() {
          var _this78 = this;

          this.resetSemestersList();

          this._semester.getSemestersList().subscribe(function (response) {
            _this78._loader.hideLoader();

            _this78.semestersDataStatus = 1;
            _this78.semesters = response.inst_class;

            _this78.renderSemestersList();
          }, function () {
            _this78._loader.hideLoader();

            _this78.semestersDataStatus = 0;
          });
        }
      }, {
        key: "renderSemestersList",
        value: function renderSemestersList() {
          if (this._storage.getData("selected_semester")) {
            var semester = this._storage.getData("selected_semester");

            this.selectSemesterId = semester.id;
          } else {
            this.selectSemesterId = this.userDetails.inst_class_id;
          }

          this.emitSelectionEvent();
        }
      }, {
        key: "onSemesterSelection",
        value: function onSemesterSelection(semesterId) {
          this.selectSemesterId = parseInt(semesterId);
          this.emitSelectionEvent();
        }
      }, {
        key: "emitSelectionEvent",
        value: function emitSelectionEvent() {
          var index = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](this.semesters, {
            id: this.selectSemesterId
          });

          this._storage.setData("selected_semester", this.semesters[index]);

          this.semesterChanged.emit(this.semesters[index]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this._session.showLogoutPopup();
        }
      }, {
        key: "navigateToSearch",
        value: function navigateToSearch() {
          if (this.searchString) {
            var data = {};
            data['searchString'] = this.searchString;

            this._router.navigate(['student/search'], {
              queryParams: data
            });
          } else {
            this._router.navigate(['student/search']);
          }
        }
      }, {
        key: "navigteToProfile",
        value: function navigteToProfile() {
          this._router.navigate(['student/profile']);
        }
      }]);

      return StudentNavbarComponent;
    }();

    StudentNavbarComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_9__["StudentSemesterService"]
      }, {
        type: _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_7__["SessionHandlerService"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StudentNavbarComponent.prototype, "semesterChanged", void 0);
    StudentNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/student/components/navbar/navbar.component.scss"))["default"]]
    })], StudentNavbarComponent);
    /***/
  },

  /***/
  "./src/app/student/components/profile/create-profile/create-profile.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/student/components/profile/create-profile/create-profile.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsProfileCreateProfileCreateProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9wcm9maWxlL2NyZWF0ZS1wcm9maWxlL2NyZWF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/profile/create-profile/create-profile.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/student/components/profile/create-profile/create-profile.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: StudentCreateProfileComponent */

  /***/
  function srcAppStudentComponentsProfileCreateProfileCreateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCreateProfileComponent", function () {
      return StudentCreateProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/login/login.service */
    "./src/app/shared/services/login/login.service.ts");
    /* harmony import */


    var _app_student_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/student/services/profile/profile.service */
    "./src/app/student/services/profile/profile.service.ts");
    /* harmony import */


    var _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @studentServices/semester/semester.service */
    "./src/app/student/services/semester/semester.service.ts");
    /* harmony import */


    var _app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/shared/services/alert/alert.service */
    "./src/app/shared/services/alert/alert.service.ts");

    var StudentCreateProfileComponent = /*#__PURE__*/function () {
      function StudentCreateProfileComponent(_router, _login, _profile, _alert, _loader, _translate, _semester, _toaster, _fb) {
        _classCallCheck(this, StudentCreateProfileComponent);

        this._router = _router;
        this._login = _login;
        this._profile = _profile;
        this._alert = _alert;
        this._loader = _loader;
        this._translate = _translate;
        this._semester = _semester;
        this._toaster = _toaster;
        this._fb = _fb;
        this.profileDetails = {};
        this.semesters = [];
        this.profileDetailsStatus = 2;
        this.semestersDataStatus = 2;
        this.createProfileIndex = 1;
        this.showPassword = false;
        this.showConfirmPassword = false;
        this.otpSent = false;
        this.createProfileForm1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'profile_pic': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'semesterId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.createProfileForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'otp': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.createProfileForm2 = _fb.group({
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          phone_number: [],
          otp: []
        }, {
          validator: this.checkPasswords
        });
      }

      _createClass(StudentCreateProfileComponent, [{
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var password = group.controls.password.value;
          var confirmPassword = group.controls.confirmPassword.value;
          return password === confirmPassword ? null : {
            passwordNotSame: true
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSemestersList();
          this.getProfileDetails(0);
        }
      }, {
        key: "validateCreateProfileForm1",
        value: function validateCreateProfileForm1(formName) {
          return this.createProfileForm1.get(formName);
        }
      }, {
        key: "validateCreateProfileForm2",
        value: function validateCreateProfileForm2(formName) {
          return this.createProfileForm2.get(formName);
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;
        }
      }, {
        key: "toggleConfirmPassword",
        value: function toggleConfirmPassword() {
          this.showConfirmPassword = !this.showConfirmPassword;
        }
      }, {
        key: "navigate",
        value: function navigate(index) {
          this.createProfileIndex = index;
        }
      }, {
        key: "resetProfileDetails",
        value: function resetProfileDetails() {
          this.profileDetailsStatus = 2;
          this.profileDetails = {};

          this._loader.showLoader();
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails(status) {
          var _this79 = this;

          this.resetProfileDetails();

          this._login.getUserDetails().subscribe(function (response) {
            _this79._loader.hideLoader();

            _this79.profileDetailsStatus = 1;
            _this79.profileDetails = response;

            _this79.initiateProfileForm();

            if (status) {
              _this79._router.navigate(['/student/home']);
            }
          }, function (errorCode) {
            _this79._loader.hideLoader();

            _this79.profileDetailsStatus = errorCode;
          });
        }
      }, {
        key: "resetSemestersList",
        value: function resetSemestersList() {
          this.semestersDataStatus = 2;
          this.semesters = [];

          this._loader.showLoader();
        }
      }, {
        key: "getSemestersList",
        value: function getSemestersList() {
          var _this80 = this;

          this.resetSemestersList();

          this._semester.getSemestersList().subscribe(function (response) {
            _this80._loader.hideLoader();

            _this80.semestersDataStatus = 1;
            _this80.semesters = response.inst_class;
          }, function () {
            _this80._loader.hideLoader();

            _this80.semestersDataStatus = 0;
          });
        }
      }, {
        key: "initiateProfileForm",
        value: function initiateProfileForm() {
          this.createProfileForm1.reset();
          this.createProfileForm2.reset();
          this.createProfileForm1.patchValue({
            name: this.profileDetails.name,
            email: this.profileDetails.email,
            semesterId: this.profileDetails.inst_class_id
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this.createProfileForm1.get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this.createProfileForm1.get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this81 = this;

          this.otpSent = true;

          this._loader.showLoader();

          this._profile.sendOTP(this.createProfileForm2.value).subscribe(function () {
            _this81._loader.hideLoader();

            _this81._toaster.showSuccess(_this81._translate.instant("OTP_SENT_SUCCESSFULLY"));
          }, function () {
            _this81._loader.hideLoader();
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP() {
          var _this82 = this;

          this._loader.showLoader();

          this._profile.verifyOTP(this.createProfileForm2.value).subscribe(function () {
            _this82._loader.hideLoader();

            _this82.createProfile();
          }, function () {
            _this82._loader.hideLoader();
          });
        }
      }, {
        key: "createProfile",
        value: function createProfile() {
          var _this83 = this;

          this._loader.showLoader();

          this._profile.createProfile(this.createProfileForm1.value, this.createProfileForm2.value).subscribe(function () {
            _this83._loader.hideLoader();

            _this83._alert.showSuccess(_this83._translate.instant('PROFILE_CREATED_SUCCESSFULLY'), _this83._translate.instant('SUCCESS')).then(function () {
              _this83.getProfileDetails(1);
            });
          }, function () {
            _this83._loader.hideLoader();
          });
        }
      }]);

      return StudentCreateProfileComponent;
    }();

    StudentCreateProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }, {
        type: _app_student_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__["StudentProfileService"]
      }, {
        type: _app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_9__["StudentSemesterService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    StudentCreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-create-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/create-profile/create-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-profile.component.scss */
      "./src/app/student/components/profile/create-profile/create-profile.component.scss"))["default"]]
    })], StudentCreateProfileComponent);
    /***/
  },

  /***/
  "./src/app/student/components/profile/profile.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/profile/profile.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/profile/profile.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/profile/profile.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentProfileComponent */

  /***/
  function srcAppStudentComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function () {
      return StudentProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/login/login.service */
    "./src/app/shared/services/login/login.service.ts");
    /* harmony import */


    var _app_student_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/student/services/profile/profile.service */
    "./src/app/student/services/profile/profile.service.ts");
    /* harmony import */


    var _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/shared/services/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @studentServices/semester/semester.service */
    "./src/app/student/services/semester/semester.service.ts");
    /* harmony import */


    var _app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/shared/services/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var StudentProfileComponent = /*#__PURE__*/function () {
      function StudentProfileComponent(constants, loginService, studentProfileService, loader, translate, miscellaneousService, _semester, toaster, _storage, _fb) {
        _classCallCheck(this, StudentProfileComponent);

        this.constants = constants;
        this.loginService = loginService;
        this.studentProfileService = studentProfileService;
        this.loader = loader;
        this.translate = translate;
        this.miscellaneousService = miscellaneousService;
        this._semester = _semester;
        this.toaster = toaster;
        this._storage = _storage;
        this._fb = _fb;
        this.profileDetailsStatus = 2;
        this.profileDetails = {};
        this.semesters = [];
        this.semestersDataStatus = 2;
        this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'profile_pic': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          'semester_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.editProfileForm = _fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          phone_number: [],
          email: [],
          profile_pic: [],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          semester_id: []
        }, {
          validator: this.checkPasswords
        });
      }

      _createClass(StudentProfileComponent, [{
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var password = group.controls.password.value;
          var confirmPassword = group.controls.confirm_password.value;
          return password === confirmPassword ? null : {
            passwordNotSame: true
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfileDetails();
        }
      }, {
        key: "validateProfileEditFormValue",
        value: function validateProfileEditFormValue(formName) {
          return this.editProfileForm.get(formName);
        }
      }, {
        key: "resetProfileDetails",
        value: function resetProfileDetails() {
          this.profileDetailsStatus = 2;
          this.profileDetails = {};
          this.loader.showLoader();
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails() {
          var _this84 = this;

          this.resetProfileDetails();
          this.loginService.getUserDetails().subscribe(function (response) {
            _this84.loader.hideLoader();

            _this84.profileDetailsStatus = 1;
            _this84.profileDetails = response;
          }, function (errorCode) {
            _this84.loader.hideLoader();

            _this84.profileDetailsStatus = errorCode;
          });
        }
      }, {
        key: "initiateEditModal",
        value: function initiateEditModal() {
          $('#editProfileForm')[0].reset();
          this.getSemestersList();
          this.editProfileForm.reset();
          this.editProfileForm.patchValue({
            name: this.profileDetails.name,
            phone_number: this.profileDetails.phone_number,
            email: this.profileDetails.email,
            semester_id: this.profileDetails.inst_class_id
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget) {
          this["editProfileForm"].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this["editProfileForm"].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this85 = this;

          this.loader.showLoader();
          this.studentProfileService.updateProfile(this.editProfileForm.value).subscribe(function () {
            $('#update-profile').modal('hide');

            _this85.getProfileDetails();

            _this85.loader.hideLoader();

            _this85._storage.deleteData("selected_semester");

            _this85.toaster.showSuccess(_this85.translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this85.translate.instant("PROFILE")
            }));
          }, function () {
            _this85.loader.hideLoader();
          });
        }
      }, {
        key: "resetSemestersList",
        value: function resetSemestersList() {
          this.semestersDataStatus = 2;
          this.semesters = [];
          this.loader.showLoader();
        }
      }, {
        key: "getSemestersList",
        value: function getSemestersList() {
          var _this86 = this;

          this.resetSemestersList();

          this._semester.getSemestersList().subscribe(function (response) {
            _this86.loader.hideLoader();

            _this86.semestersDataStatus = 1;
            _this86.semesters = response.inst_class;
          }, function () {
            _this86.loader.hideLoader();

            _this86.semestersDataStatus = 0;
          });
        }
      }]);

      return StudentProfileComponent;
    }();

    StudentProfileComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }, {
        type: _app_student_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__["StudentProfileService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousService"]
      }, {
        type: _studentServices_semester_semester_service__WEBPACK_IMPORTED_MODULE_10__["StudentSemesterService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    StudentProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/student/components/profile/profile.component.scss"))["default"]]
    })], StudentProfileComponent);
    /***/
  },

  /***/
  "./src/app/student/components/questions/questions.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/student/components/questions/questions.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsQuestionsQuestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/questions/questions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/student/components/questions/questions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StudentQuestionsComponent */

  /***/
  function srcAppStudentComponentsQuestionsQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentQuestionsComponent", function () {
      return StudentQuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_questions_questions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @studentServices/questions/questions.service */
    "./src/app/student/services/questions/questions.service.ts");

    var StudentQuestionsComponent = /*#__PURE__*/function () {
      function StudentQuestionsComponent(_translate, _toaster, _loader, _question) {
        _classCallCheck(this, StudentQuestionsComponent);

        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._question = _question;
        this.questionsDataStatus = 2;
        this.questions = [];
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(StudentQuestionsComponent, [{
        key: "validateAddFormValue",
        value: function validateAddFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var propName in changes) {
            var change = changes[propName];
            this[propName] = change.currentValue;
          }

          this.getQuestionsList();
        }
      }, {
        key: "resetQuestionsList",
        value: function resetQuestionsList() {
          this.questionsDataStatus = 2;
          this.questions = [];

          this._loader.showLoader();
        }
      }, {
        key: "getQuestionsList",
        value: function getQuestionsList() {
          var _this87 = this;

          this.resetQuestionsList();

          this._question.getQuestionsList(this.topicId).subscribe(function (response) {
            _this87._loader.hideLoader();

            _this87.questionsDataStatus = 1;
            _this87.questions = response.reverse();
          }, function () {
            _this87._loader.hideLoader();

            _this87.questionsDataStatus = 0;
          });
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid ? false : true;
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          var _this88 = this;

          this._loader.showLoader();

          this._question.addQuestion(this.addDataForm.value, this.topicId).subscribe(function () {
            _this88._loader.hideLoader();

            _this88.getQuestionsList();

            _this88.addDataForm.reset();

            _this88._toaster.showSuccess(_this88._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this88._translate.instant("QUESTION")
            }));
          }, function () {
            _this88._loader.hideLoader();
          });
        }
      }]);

      return StudentQuestionsComponent;
    }();

    StudentQuestionsComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _studentServices_questions_questions_service__WEBPACK_IMPORTED_MODULE_6__["StudentQuestionsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StudentQuestionsComponent.prototype, "topicId", void 0);
    StudentQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-questions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/questions/questions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questions.component.scss */
      "./src/app/student/components/questions/questions.component.scss"))["default"]]
    })], StudentQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/student/components/recent-videos/recent-videos.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/student/components/recent-videos/recent-videos.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsRecentVideosRecentVideosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9yZWNlbnQtdmlkZW9zL3JlY2VudC12aWRlb3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/recent-videos/recent-videos.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/student/components/recent-videos/recent-videos.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: StudentRecentVideosComponent */

  /***/
  function srcAppStudentComponentsRecentVideosRecentVideosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRecentVideosComponent", function () {
      return StudentRecentVideosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_recent_videos_recent_videos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @studentServices/recent-videos/recent-videos.service */
    "./src/app/student/services/recent-videos/recent-videos.service.ts");

    var StudentRecentVideosComponent = /*#__PURE__*/function () {
      function StudentRecentVideosComponent(_constants, _miscellaneous, _loader, _router, _recentVideos) {
        _classCallCheck(this, StudentRecentVideosComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._router = _router;
        this._recentVideos = _recentVideos;
        this.recentVideosDataStatus = 2;
        this.recentVideos = [];
      }

      _createClass(StudentRecentVideosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRecentVideosList();
        }
      }, {
        key: "resetRecentVideosList",
        value: function resetRecentVideosList() {
          this.recentVideosDataStatus = 2;
          this.recentVideos = [];

          this._loader.showLoader();
        }
      }, {
        key: "getRecentVideosList",
        value: function getRecentVideosList() {
          var _this89 = this;

          this.resetRecentVideosList();

          this._recentVideos.getRecentVideosList().subscribe(function (response) {
            _this89._loader.hideLoader();

            _this89.recentVideosDataStatus = 1;
            _this89.recentVideos = response;
          }, function (errorCode) {
            _this89._loader.hideLoader();

            _this89.recentVideosDataStatus = errorCode;
          });
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(topic) {
          var data = {};
          data['topicId'] = topic.id;

          this._router.navigate(['student/topics', topic.chapter_id], {
            queryParams: data
          });
        }
      }]);

      return StudentRecentVideosComponent;
    }();

    StudentRecentVideosComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _studentServices_recent_videos_recent_videos_service__WEBPACK_IMPORTED_MODULE_6__["StudentRecentVideosService"]
      }];
    };

    StudentRecentVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-recent-videos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recent-videos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/recent-videos/recent-videos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recent-videos.component.scss */
      "./src/app/student/components/recent-videos/recent-videos.component.scss"))["default"]]
    })], StudentRecentVideosComponent);
    /***/
  },

  /***/
  "./src/app/student/components/search/search.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/search/search.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/components/search/search.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/student/components/search/search.component.ts ***!
    \***************************************************************/

  /*! exports provided: StudentSearchComponent */

  /***/
  function srcAppStudentComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSearchComponent", function () {
      return StudentSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_student_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/student/services/search/search.service */
    "./src/app/student/services/search/search.service.ts");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");

    var StudentSearchComponent = /*#__PURE__*/function () {
      function StudentSearchComponent(_constants, _miscellaneous, _route, _router, _loader, _search) {
        var _this90 = this;

        _classCallCheck(this, StudentSearchComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._route = _route;
        this._router = _router;
        this._loader = _loader;
        this._search = _search;
        this.searchResultsDataStatus = 2;
        this.searchResults = [];

        this._route.queryParams.subscribe(function (queryParams) {
          _this90.searchString = queryParams.searchString;
        });
      }

      _createClass(StudentSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.searchString) {
            this.getSearchResults();
          }
        }
      }, {
        key: "resetSearchResultsList",
        value: function resetSearchResultsList() {
          this.searchResultsDataStatus = 2;
          this.searchResults = [];
        }
      }, {
        key: "getSearchResults",
        value: function getSearchResults() {
          var _this91 = this;

          this.resetSearchResultsList();
          this.changeRouteParams();

          if (this.searchString) {
            this._loader.showLoader();

            this._search.getSearchResultsList(this.searchString).subscribe(function (response) {
              _this91._loader.hideLoader();

              _this91.searchResultsDataStatus = 1;
              _this91.searchResults = response;
            }, function (errorCode) {
              _this91._loader.hideLoader();

              _this91.searchResultsDataStatus = errorCode;
            });
          }
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          if (this.searchString) {
            var data = {};
            data['searchString'] = this.searchString;

            this._router.navigate(['student/search'], {
              queryParams: data
            });
          } else {
            this._router.navigate(['student/search']);
          }
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(topic) {
          var data = {};
          data['topicId'] = topic.id;

          this._router.navigate(['student/topics', topic.chapter_id], {
            queryParams: data
          });
        }
      }, {
        key: "preventEvent",
        value: function preventEvent(event) {
          event.stopPropagation();
        }
      }]);

      return StudentSearchComponent;
    }();

    StudentSearchComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _app_student_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["StudentSearchService"]
      }];
    };

    StudentSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/search/search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/student/components/search/search.component.scss"))["default"]]
    })], StudentSearchComponent);
    /***/
  },

  /***/
  "./src/app/student/components/sidebar/sidebar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/sidebar/sidebar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/sidebar/sidebar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/sidebar/sidebar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentSidebarComponent */

  /***/
  function srcAppStudentComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSidebarComponent", function () {
      return StudentSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var StudentSidebarComponent = /*#__PURE__*/function () {
      function StudentSidebarComponent(_constants, _miscellaneous, _storage) {
        _classCallCheck(this, StudentSidebarComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._storage = _storage;
        this.sidemenus = [];
        this.userDetails = {};
        this.width = window.innerWidth;
      }

      _createClass(StudentSidebarComponent, [{
        key: "onResize",
        value: function onResize() {
          this.width = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userType = this._constants.STUDENT;
          this.userDetails = this._storage.getData("userDetails");
          this.sidemenus = [{
            name: "HOME",
            icon: "fa fa-home",
            link: '/' + this.userType + '/home'
          }, {
            name: "EXAMINATION",
            icon: "fa fa-graduation-cap",
            link: '/' + this.userType + '/examination'
          }, {
            name: "WISHLIST",
            icon: "far fa-heart",
            link: '/' + this.userType + '/wishlist'
          }, {
            name: "FEEDBACK",
            icon: "fas fa-comments",
            link: '/' + this.userType + '/feedback'
          }, {
            name: "HELP",
            icon: "fa fa-question-circle",
            link: '/' + this.userType + '/help'
          }, {
            name: "SEARCH",
            icon: "fa fa-search",
            link: '/' + this.userType + '/search'
          }, {
            name: "PROFILE",
            icon: "fa fa-user",
            link: '/' + this.userType + '/profile'
          }, {
            name: "TEST",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/mcq"
          }];
        }
      }, {
        key: "minimizeSidemenu",
        value: function minimizeSidemenu() {
          if (this.width <= 768) {
            $('body').removeClass('sidebar-open');
            $('body').addClass('sidebar-collapse');
          }
        }
      }]);

      return StudentSidebarComponent;
    }();

    StudentSidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }, {
        type: _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], StudentSidebarComponent.prototype, "onResize", null);
    StudentSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/student/components/sidebar/sidebar.component.scss"))["default"]]
    })], StudentSidebarComponent);
    /***/
  },

  /***/
  "./src/app/student/components/subject/subject.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/subject/subject.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsSubjectSubjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdWJqZWN0L3N1YmplY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/student/components/subject/subject.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/components/subject/subject.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentSubjectComponent */

  /***/
  function srcAppStudentComponentsSubjectSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSubjectComponent", function () {
      return StudentSubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @studentServices/subject/subject.service */
    "./src/app/student/services/subject/subject.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @sharedServices/sessionHandler/sessionHandler.service */
    "./src/app/shared/services/sessionHandler/sessionHandler.service.ts");

    var StudentSubjectComponent = /*#__PURE__*/function () {
      function StudentSubjectComponent(_constants, _download, _miscellaneous, _loader, _router, storageService, toaster, translate, _session, _subjects) {
        _classCallCheck(this, StudentSubjectComponent);

        this._constants = _constants;
        this._download = _download;
        this._miscellaneous = _miscellaneous;
        this._loader = _loader;
        this._router = _router;
        this.storageService = storageService;
        this.toaster = toaster;
        this.translate = translate;
        this._session = _session;
        this._subjects = _subjects;
        this.subjectsDataStatus = 2;
        this.subjects = [];
        this.selectedSemester = {};
        this.userDetails = {};
        this.verifyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]),
          'department_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", []),
          'usn': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", []),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", []),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)])
        });
      }

      _createClass(StudentSubjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = this.storageService.getData("userDetails");
          this.verifyForm.controls['department_name'].setValue(this.userDetails.department_name);
          this.verifyForm.controls['usn'].setValue(this.userDetails.usn);

          if (!this.userDetails.is_verified) {
            $('#myModal').modal({
              backdrop: 'static',
              keyboard: false
            });
            $('#myModal').modal('show');
          }

          this.featureType = this._router.url === "/student/home" ? 1 : 2;
        }
      }, {
        key: "onSemesterSelection",
        value: function onSemesterSelection(semester) {
          this.selectedSemester = semester;
          this.getSubjects();
        }
      }, {
        key: "resetSubjectsList",
        value: function resetSubjectsList() {
          this.subjectsDataStatus = 2;
          this.subjects = [];

          this._loader.showLoader();
        }
      }, {
        key: "getSubjects",
        value: function getSubjects() {
          var _this92 = this;

          this.resetSubjectsList();

          this._subjects.getSubjectsList(this.selectedSemester).subscribe(function (response) {
            _this92._loader.hideLoader();

            _this92.subjectsDataStatus = 1;
            _this92.subjects = response[0].subjects.data;
          }, function (errorCode) {
            _this92._loader.hideLoader();

            _this92.subjectsDataStatus = errorCode;
          });
        }
      }, {
        key: "onSubjectSelection",
        value: function onSubjectSelection(subject) {
          var data = {};
          data['contentType'] = this.featureType;

          this._router.navigate(['student/contents', subject.id], {
            queryParams: data
          });
        }
      }, {
        key: "validateVerifyFormValue",
        value: function validateVerifyFormValue(formName) {
          return this.verifyForm.get(formName);
        }
      }, {
        key: "verifyAccount",
        value: function verifyAccount() {
          var _this93 = this;

          var data = this.verifyForm.value;
          data.usn = this.userDetails.usn;
          data.type = this.userDetails.type;

          this._loader.showLoader();

          this._subjects.verifyAccount(data).subscribe(function (response) {
            _this93._loader.hideLoader();

            _this93.toaster.showSuccess(response.status.message);

            _this93.logout();
          }, function (errorCode) {
            _this93._loader.hideLoader();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this._session.handleLogout();
        }
      }]);

      return StudentSubjectComponent;
    }();

    StudentSubjectComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _sharedServices_sessionHandler_sessionHandler_service__WEBPACK_IMPORTED_MODULE_12__["SessionHandlerService"]
      }, {
        type: _studentServices_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["StudentSubjectService"]
      }];
    };

    StudentSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-subject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/subject/subject.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subject.component.scss */
      "./src/app/student/components/subject/subject.component.scss"))["default"]]
    })], StudentSubjectComponent);
    /***/
  },

  /***/
  "./src/app/student/components/topic/topic.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/student/components/topic/topic.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsTopicTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy90b3BpYy90b3BpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/components/topic/topic.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student/components/topic/topic.component.ts ***!
    \*************************************************************/

  /*! exports provided: StudentTopicComponent */

  /***/
  function srcAppStudentComponentsTopicTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentTopicComponent", function () {
      return StudentTopicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _vimeo_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @vimeo/player */
    "./node_modules/@vimeo/player/dist/player.es.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/download/download.service */
    "./src/app/shared/services/download/download.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @studentServices/topic/topic.service */
    "./src/app/student/services/topic/topic.service.ts");
    /* harmony import */


    var _studentServices_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @studentServices/wishlist/wishlist.service */
    "./src/app/student/services/wishlist/wishlist.service.ts");

    var StudentTopicComponent = /*#__PURE__*/function () {
      function StudentTopicComponent(_constants, _download, _translate, _toaster, _loader, _route, _router, _topic, _wishlist) {
        var _this94 = this;

        _classCallCheck(this, StudentTopicComponent);

        this._constants = _constants;
        this._download = _download;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._route = _route;
        this._router = _router;
        this._topic = _topic;
        this._wishlist = _wishlist;
        this.topicsDataStatus = 2;
        this.topics = [];
        this.selectedTopic = {};
        this.chapterDetails = {};
        this.queryParams = {};
        this.playerOptions = {};

        this._route.params.subscribe(function (params) {
          _this94.chapterId = params['chapterId'];
        });

        this._route.queryParams.subscribe(function (queryParams) {
          _this94.queryParams = queryParams;
        });
      }

      _createClass(StudentTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicsList();
        }
      }, {
        key: "resetTopicsList",
        value: function resetTopicsList() {
          this.topicsDataStatus = 2;
          this.topics = [];
          this.chapterDetails = {};

          this._loader.showLoader();
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList() {
          var _this95 = this;

          this.resetTopicsList();

          this._topic.getTopicsList(this.chapterId).subscribe(function (response) {
            _this95._loader.hideLoader();

            _this95.topicsDataStatus = 1;
            _this95.chapterDetails = response;
            _this95.topics = response.chapter_details.data;

            if (_this95.queryParams.topicId) {
              var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this95.topics, {
                id: parseInt(_this95.queryParams.topicId)
              });
              console.log("qqqqqqqqqqqqqqqqqqqqqq");
              console.log(_this95.topics[0]);

              _this95.prepareVimeoPlayer(index > -1 ? _this95.topics[index] : _this95.topics[0]);
            } else {
              _this95.prepareVimeoPlayer(_this95.topics[0]);
            }
          }, function (errorCode) {
            _this95._loader.hideLoader();

            _this95.topicsDataStatus = errorCode;
          });
        }
      }, {
        key: "prepareVimeoPlayer",
        value: function prepareVimeoPlayer(topic) {
          this.selectedTopic = topic;
          this.changeRouteParams();
          this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_5__["default"]('vimeo-player', {
            id: this.selectedTopic.vimeo_id,
            loop: true,
            responsive: true,
            portrait: true,
            title: false,
            autoplay: true
          });
        }
      }, {
        key: "selectTopic",
        value: function selectTopic(topic) {
          if (topic !== this.selectedTopic) {
            this.selectedTopic = topic;
            this.changeRouteParams();
            this.changeVimeoSource();
          }
        }
      }, {
        key: "changeVimeoSource",
        value: function changeVimeoSource() {
          this.player.loadVideo(this.selectedTopic.vimeo_id).then(function () {
            console.log("Video src updated");
          })["catch"](function () {
            console.log("Video src cannot be updated");
          });
        }
      }, {
        key: "changeRouteParams",
        value: function changeRouteParams() {
          var data = {};
          data['topicId'] = this.selectedTopic.id;

          this._router.navigate(['student/topics', this.chapterId], {
            queryParams: data
          });
        }
      }, {
        key: "updateTopicWishlist",
        value: function updateTopicWishlist(status) {
          var _this96 = this;

          this._loader.showLoader();

          this._wishlist.updateTopicWishlist(this.selectedTopic).subscribe(function () {
            _this96._loader.hideLoader();

            _this96.selectedTopic.is_wishlist = status;

            _this96._toaster.showSuccess(_this96._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this96._translate.instant("WISHLIST")
            }));
          }, function () {
            _this96._loader.hideLoader();
          });
        }
      }]);

      return StudentTopicComponent;
    }();

    StudentTopicComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"]
      }, {
        type: _sharedServices_download_download_service__WEBPACK_IMPORTED_MODULE_7__["DownloadService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _studentServices_topic_topic_service__WEBPACK_IMPORTED_MODULE_10__["StudentTopicService"]
      }, {
        type: _studentServices_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_11__["StudentWishlistService"]
      }];
    };

    StudentTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/topic/topic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topic.component.scss */
      "./src/app/student/components/topic/topic.component.scss"))["default"]]
    })], StudentTopicComponent);
    /***/
  },

  /***/
  "./src/app/student/components/wishlist/wishlist.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/student/components/wishlist/wishlist.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentComponentsWishlistWishlistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/components/wishlist/wishlist.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/student/components/wishlist/wishlist.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StudentWishlistComponent */

  /***/
  function srcAppStudentComponentsWishlistWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentWishlistComponent", function () {
      return StudentWishlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _studentServices_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @studentServices/wishlist/wishlist.service */
    "./src/app/student/services/wishlist/wishlist.service.ts");

    var StudentWishlistComponent = /*#__PURE__*/function () {
      function StudentWishlistComponent(_constants, _miscellaneous, _translate, _toaster, _loader, _router, _wishlist) {
        _classCallCheck(this, StudentWishlistComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._router = _router;
        this._wishlist = _wishlist;
        this.wishlistDataStatus = 2;
        this.wishlists = [];
      }

      _createClass(StudentWishlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWishlistDetails();
        }
      }, {
        key: "resetWishlistDetails",
        value: function resetWishlistDetails() {
          this.wishlistDataStatus = 2;
          this.wishlists = [];

          this._loader.showLoader();
        }
      }, {
        key: "getWishlistDetails",
        value: function getWishlistDetails() {
          var _this97 = this;

          this.resetWishlistDetails();

          this._wishlist.getWishlistDetails().subscribe(function (response) {
            _this97._loader.hideLoader();

            _this97.wishlistDataStatus = 1;
            _this97.wishlists = response;
          }, function (errorCode) {
            _this97._loader.hideLoader();

            _this97.wishlistDataStatus = errorCode;
          });
        }
      }, {
        key: "navigateToTopics",
        value: function navigateToTopics(topic) {
          var data = {};
          data['topicId'] = topic.id;

          this._router.navigate(['student/topics', topic.chapter_id], {
            queryParams: data
          });
        }
      }, {
        key: "preventEvent",
        value: function preventEvent(event) {
          event.stopPropagation();
        }
      }, {
        key: "updateTopicWishlist",
        value: function updateTopicWishlist(selectedTopic, event) {
          var _this98 = this;

          this.preventEvent(event);

          this._loader.showLoader();

          var data = {};
          data['id'] = selectedTopic.chapter_detail_id;
          data['is_wishlist'] = 1;

          this._wishlist.updateTopicWishlist(data).subscribe(function () {
            _this98._loader.hideLoader();

            _this98.getWishlistDetails();

            _this98._toaster.showSuccess(_this98._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this98._translate.instant("WISHLIST")
            }));
          }, function () {
            _this98._loader.hideLoader();
          });
        }
      }]);

      return StudentWishlistComponent;
    }();

    StudentWishlistComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _app_shared_services_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _studentServices_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_8__["StudentWishlistService"]
      }];
    };

    StudentWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/components/wishlist/wishlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist.component.scss */
      "./src/app/student/components/wishlist/wishlist.component.scss"))["default"]]
    })], StudentWishlistComponent);
    /***/
  },

  /***/
  "./src/app/student/services/chapter/chapter.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student/services/chapter/chapter.service.ts ***!
    \*************************************************************/

  /*! exports provided: StudentChapterService */

  /***/
  function srcAppStudentServicesChapterChapterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentChapterService", function () {
      return StudentChapterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentChapterService = /*#__PURE__*/function () {
      function StudentChapterService(constants, http) {
        _classCallCheck(this, StudentChapterService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentChapterService, [{
        key: "getChaptersList",
        value: function getChaptersList(subjectId) {
          return this.http.get(this.constants.STUDENT_CHAPTERS_LIST_URL + subjectId + '/chapters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return StudentChapterService;
    }();

    StudentChapterService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentChapterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentChapterService);
    /***/
  },

  /***/
  "./src/app/student/services/examination/examination.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/student/services/examination/examination.service.ts ***!
    \*********************************************************************/

  /*! exports provided: StudentExaminationService */

  /***/
  function srcAppStudentServicesExaminationExaminationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentExaminationService", function () {
      return StudentExaminationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentExaminationService = /*#__PURE__*/function () {
      function StudentExaminationService(constants, http) {
        _classCallCheck(this, StudentExaminationService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentExaminationService, [{
        key: "getExamsList",
        value: function getExamsList(subjectId) {
          return this.http.get(this.constants.STUDENT_EXAMS_LIST_URL + subjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return StudentExaminationService;
    }();

    StudentExaminationService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentExaminationService);
    /***/
  },

  /***/
  "./src/app/student/services/faq/faq.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/student/services/faq/faq.service.ts ***!
    \*****************************************************/

  /*! exports provided: StudentFaqService */

  /***/
  function srcAppStudentServicesFaqFaqServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentFaqService", function () {
      return StudentFaqService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentFaqService = /*#__PURE__*/function () {
      function StudentFaqService(constants, http) {
        _classCallCheck(this, StudentFaqService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentFaqService, [{
        key: "getFaqsList",
        value: function getFaqsList(topicId) {
          return this.http.get(this.constants.FAQS_LIST_URL + topicId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return StudentFaqService;
    }();

    StudentFaqService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentFaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentFaqService);
    /***/
  },

  /***/
  "./src/app/student/services/profile/profile.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student/services/profile/profile.service.ts ***!
    \*************************************************************/

  /*! exports provided: StudentProfileService */

  /***/
  function srcAppStudentServicesProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentProfileService", function () {
      return StudentProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentProfileService = /*#__PURE__*/function () {
      function StudentProfileService(constants, http) {
        _classCallCheck(this, StudentProfileService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentProfileService, [{
        key: "sendOTP",
        value: function sendOTP(profileForm2) {
          var formData = new FormData();
          formData.append('phone_number', profileForm2.phone_number);
          return this.http.post(this.constants.SEND_OTP_URL, formData);
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP(profileForm2) {
          var formData = new FormData();
          formData.append('phone_number', profileForm2.phone_number);
          formData.append('otp', profileForm2.otp);
          return this.http.post(this.constants.VERIFY_OTP_URL, formData);
        }
      }, {
        key: "createProfile",
        value: function createProfile(profileForm1, profileForm2) {
          var formData = new FormData();

          if (profileForm1.profile_pic) {
            formData.append('profile_pic', profileForm1.profile_pic);
          }

          if (profileForm2.password) {
            formData.append('password', profileForm2.password);
          }

          formData.append('name', profileForm1.name);
          formData.append('phone_number', profileForm2.phone_number);
          formData.append('email', profileForm1.email);
          return this.http.post(this.constants.STUDENT_PROFILE_UPDATE_URL, formData);
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(profileFormValue) {
          var formData = new FormData();

          if (profileFormValue.profile_pic) {
            formData.append('profile_pic', profileFormValue.profile_pic);
          }

          if (profileFormValue.password) {
            formData.append('password', profileFormValue.password);
          }

          if (profileFormValue.confirm_password) {
            formData.append('confirm_password', profileFormValue.confirm_password);
          }

          formData.append('name', profileFormValue.name);
          formData.append('phone_number', profileFormValue.phone_number);
          formData.append('email', profileFormValue.email);
          formData.append('inst_class_id', profileFormValue.semester_id);
          return this.http.post(this.constants.STUDENT_PROFILE_UPDATE_URL, formData);
        }
      }]);

      return StudentProfileService;
    }();

    StudentProfileService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentProfileService);
    /***/
  },

  /***/
  "./src/app/student/services/questions/questions.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/services/questions/questions.service.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentQuestionsService */

  /***/
  function srcAppStudentServicesQuestionsQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentQuestionsService", function () {
      return StudentQuestionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentQuestionsService = /*#__PURE__*/function () {
      function StudentQuestionsService(constants, http) {
        _classCallCheck(this, StudentQuestionsService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentQuestionsService, [{
        key: "getQuestionsList",
        value: function getQuestionsList(topicId) {
          return this.http.get(this.constants.STUDENT_QUESTIONS_LIST_URL + topicId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(addForm, topicId) {
          var formData = new FormData();
          formData.append('chapter_detail_id', topicId);
          formData.append('question', addForm.question);
          return this.http.post(this.constants.STUDENT_ADD_QUESTION_URL, formData);
        }
      }]);

      return StudentQuestionsService;
    }();

    StudentQuestionsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentQuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentQuestionsService);
    /***/
  },

  /***/
  "./src/app/student/services/recent-videos/recent-videos.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/student/services/recent-videos/recent-videos.service.ts ***!
    \*************************************************************************/

  /*! exports provided: StudentRecentVideosService */

  /***/
  function srcAppStudentServicesRecentVideosRecentVideosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRecentVideosService", function () {
      return StudentRecentVideosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentRecentVideosService = /*#__PURE__*/function () {
      function StudentRecentVideosService(constants, http) {
        _classCallCheck(this, StudentRecentVideosService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentRecentVideosService, [{
        key: "getRecentVideosList",
        value: function getRecentVideosList() {
          return this.http.get(this.constants.STUDENT_RECENT_VIDEOS_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return StudentRecentVideosService;
    }();

    StudentRecentVideosService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentRecentVideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentRecentVideosService);
    /***/
  },

  /***/
  "./src/app/student/services/search/search.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/student/services/search/search.service.ts ***!
    \***********************************************************/

  /*! exports provided: StudentSearchService */

  /***/
  function srcAppStudentServicesSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSearchService", function () {
      return StudentSearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentSearchService = /*#__PURE__*/function () {
      function StudentSearchService(constants, http) {
        _classCallCheck(this, StudentSearchService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentSearchService, [{
        key: "getSearchResultsList",
        value: function getSearchResultsList(searchString) {
          return this.http.get(this.constants.STUDENT_SEARCH_LIST_URL + searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }]);

      return StudentSearchService;
    }();

    StudentSearchService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentSearchService);
    /***/
  },

  /***/
  "./src/app/student/services/semester/semester.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/student/services/semester/semester.service.ts ***!
    \***************************************************************/

  /*! exports provided: StudentSemesterService */

  /***/
  function srcAppStudentServicesSemesterSemesterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSemesterService", function () {
      return StudentSemesterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var StudentSemesterService = /*#__PURE__*/function () {
      function StudentSemesterService(constants, http, storageService) {
        _classCallCheck(this, StudentSemesterService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(StudentSemesterService, [{
        key: "getSemestersList",
        value: function getSemestersList() {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data) {
              var result = response.data;

              if (result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
                return result;
              }

              throw 0;
            }

            throw 0;
          }));
        }
      }]);

      return StudentSemesterService;
    }();

    StudentSemesterService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    StudentSemesterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentSemesterService);
    /***/
  },

  /***/
  "./src/app/student/services/subject/subject.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student/services/subject/subject.service.ts ***!
    \*************************************************************/

  /*! exports provided: StudentSubjectService */

  /***/
  function srcAppStudentServicesSubjectSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentSubjectService", function () {
      return StudentSubjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var StudentSubjectService = /*#__PURE__*/function () {
      function StudentSubjectService(constants, http, storageService) {
        _classCallCheck(this, StudentSubjectService);

        this.constants = constants;
        this.http = http;
        this.storageService = storageService;
        this.userDetails = {};
      }

      _createClass(StudentSubjectService, [{
        key: "getSubjectsList",
        value: function getSubjectsList(semesterDetails) {
          this.userDetails = this.storageService.getData("userDetails");
          return this.http.get(this.constants.STUDENT_SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + semesterDetails.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length && response.data[0].subjects && response.data[0].subjects.data) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "getSubjectDetails",
        value: function getSubjectDetails(subjectId) {
          return this.http.get(this.constants.ADMIN_SUBJECTS_DETAILS_URL + subjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "verifyAccount",
        value: function verifyAccount(verifyData) {
          return this.http.post(this.constants.VERIFY_STUDENT_EMAIL, verifyData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.status) {
              return response;
            }

            throw 0;
          }));
        }
      }]);

      return StudentSubjectService;
    }();

    StudentSubjectService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    StudentSubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentSubjectService);
    /***/
  },

  /***/
  "./src/app/student/services/topic/topic.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/student/services/topic/topic.service.ts ***!
    \*********************************************************/

  /*! exports provided: StudentTopicService */

  /***/
  function srcAppStudentServicesTopicTopicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentTopicService", function () {
      return StudentTopicService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentTopicService = /*#__PURE__*/function () {
      function StudentTopicService(constants, http) {
        _classCallCheck(this, StudentTopicService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentTopicService, [{
        key: "getTopicsList",
        value: function getTopicsList(chapterId) {
          return this.http.get(this.constants.STUDENT_TOPICS_LIST_URL + chapterId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              var result = response.data[0];

              if (result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
                return result;
              }

              throw 0;
            }

            throw 0;
          }));
        }
      }]);

      return StudentTopicService;
    }();

    StudentTopicService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentTopicService);
    /***/
  },

  /***/
  "./src/app/student/services/wishlist/wishlist.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/student/services/wishlist/wishlist.service.ts ***!
    \***************************************************************/

  /*! exports provided: StudentWishlistService */

  /***/
  function srcAppStudentServicesWishlistWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentWishlistService", function () {
      return StudentWishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var StudentWishlistService = /*#__PURE__*/function () {
      function StudentWishlistService(constants, http) {
        _classCallCheck(this, StudentWishlistService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(StudentWishlistService, [{
        key: "getWishlistDetails",
        value: function getWishlistDetails() {
          return this.http.get(this.constants.STUDENT_WISHLIST_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "updateTopicWishlist",
        value: function updateTopicWishlist(selectedTopic) {
          var formData = new FormData();
          formData.append('chapter_detail_id', selectedTopic.id);
          var url = selectedTopic.is_wishlist === 1 ? this.constants.STUDENT_TOGGLE_WISHLIST_URL : this.constants.STUDENT_ADD_WISHLIST_URL;
          return this.http.post(url, formData);
        }
      }]);

      return StudentWishlistService;
    }();

    StudentWishlistService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentWishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentWishlistService);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/admins/admins.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/superAdmin/components/admins/admins.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsAdminsAdminsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9hZG1pbnMvYWRtaW5zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/admins/admins.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/superAdmin/components/admins/admins.component.ts ***!
    \******************************************************************/

  /*! exports provided: SuperAdminAdminsComponent */

  /***/
  function srcAppSuperAdminComponentsAdminsAdminsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminAdminsComponent", function () {
      return SuperAdminAdminsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _app_superAdmin_services_institutes_institutes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/superAdmin/services/institutes/institutes.service */
    "./src/app/superAdmin/services/institutes/institutes.service.ts");
    /* harmony import */


    var _app_superAdmin_services_admins_admins_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/superAdmin/services/admins/admins.service */
    "./src/app/superAdmin/services/admins/admins.service.ts");

    var SuperAdminAdminsComponent = /*#__PURE__*/function () {
      function SuperAdminAdminsComponent(_translate, _toaster, _loader, _institute, _admin) {
        _classCallCheck(this, SuperAdminAdminsComponent);

        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._institute = _institute;
        this._admin = _admin;
        this.institutes = [];
        this.admins = [];
        this.instituteDataStatus = 2;
        this.adminDataStatus = 2;
        this.showAddFeature = false;
        this.addAdminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
          'inst_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
      }

      _createClass(SuperAdminAdminsComponent, [{
        key: "validateAddAdminFormValue",
        value: function validateAddAdminFormValue(formName) {
          return this.addAdminForm.get(formName);
        }
      }, {
        key: "validateEditFormValue",
        value: function validateEditFormValue(formName) {
          return this.editForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAdmins();
        }
      }, {
        key: "resetAdmins",
        value: function resetAdmins() {
          this.adminDataStatus = 2;
          this.admins = [];

          this._loader.showLoader();
        }
      }, {
        key: "getAdmins",
        value: function getAdmins() {
          var _this99 = this;

          this.resetAdmins();

          this._admin.getAdmins().subscribe(function (response) {
            _this99._loader.hideLoader();

            _this99.adminDataStatus = 1;
            _this99.admins = response;
          }, function (errorCode) {
            _this99._loader.hideLoader();

            _this99.adminDataStatus = errorCode;
          });
        }
      }, {
        key: "resetInstitutes",
        value: function resetInstitutes() {
          this.instituteDataStatus = 2;
          this.institutes = [];

          this._loader.showLoader();
        }
      }, {
        key: "getInstitutes",
        value: function getInstitutes() {
          var _this100 = this;

          this.resetInstitutes();

          this._institute.getInstitutes().subscribe(function (response) {
            _this100._loader.hideLoader();

            _this100.instituteDataStatus = 1;
            _this100.institutes = response;
          }, function (errorCode) {
            _this100._loader.hideLoader();

            _this100.instituteDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            this.addAdminForm.reset();
            this.getInstitutes();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addAdminForm.valid ? false : true;
        }
      }, {
        key: "addAdmin",
        value: function addAdmin() {
          var _this101 = this;

          this._loader.showLoader();

          this._admin.addAdmin(this.addAdminForm.value).subscribe(function () {
            _this101._loader.hideLoader();

            _this101.showAddFeatureView(false);

            _this101.getAdmins();

            _this101._toaster.showSuccess(_this101._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this101._translate.instant("ADMIN")
            }));
          }, function () {
            _this101._loader.hideLoader();
          });
        }
      }, {
        key: "initiateEditModal",
        value: function initiateEditModal(admin) {
          this.editForm.reset();
          this['editForm'].patchValue({
            name: admin.name,
            email: admin.email,
            id: admin.id
          });
        }
      }, {
        key: "updateAdmin",
        value: function updateAdmin() {
          var _this102 = this;

          this._loader.showLoader();

          this._admin.updateAdmin(this.editForm.value).subscribe(function () {
            $('#update-admin').modal('hide');

            _this102.getAdmins();

            _this102._loader.hideLoader();

            _this102._toaster.showSuccess(_this102._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this102._translate.instant("ADMIN")
            }));
          }, function () {
            _this102._loader.hideLoader();
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(admin) {
          var _this103 = this;

          this._loader.showLoader();

          this._admin.updateStatus(admin).subscribe(function () {
            _this103._loader.hideLoader();

            _this103._toaster.showSuccess(_this103._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this103._translate.instant("ADMIN_STATUS")
            }));
          }, function () {
            _this103._loader.hideLoader();
          });
        }
      }]);

      return SuperAdminAdminsComponent;
    }();

    SuperAdminAdminsComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _app_superAdmin_services_institutes_institutes_service__WEBPACK_IMPORTED_MODULE_6__["SuperAdminInstitutesService"]
      }, {
        type: _app_superAdmin_services_admins_admins_service__WEBPACK_IMPORTED_MODULE_7__["SuperAdminAdminsService"]
      }];
    };

    SuperAdminAdminsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-admin-admins',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admins.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/admins/admins.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admins.component.scss */
      "./src/app/superAdmin/components/admins/admins.component.scss"))["default"]]
    })], SuperAdminAdminsComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/dashboard/dashboard.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/superAdmin/components/dashboard/dashboard.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/dashboard/dashboard.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/superAdmin/components/dashboard/dashboard.component.ts ***!
    \************************************************************************/

  /*! exports provided: SuperAdminDashboardComponent */

  /***/
  function srcAppSuperAdminComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminDashboardComponent", function () {
      return SuperAdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @superAdminServices/dashboard/dashboard.service */
    "./src/app/superAdmin/services/dashboard/dashboard.service.ts");

    var SuperAdminDashboardComponent = /*#__PURE__*/function () {
      function SuperAdminDashboardComponent(_loader, _dashboard) {
        _classCallCheck(this, SuperAdminDashboardComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this.dashboardDataStatus = 2;
        this.dashboardData = {};
        this.dashboardReportCards = [];
      }

      _createClass(SuperAdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDashboardData();
        }
      }, {
        key: "resetDashboardData",
        value: function resetDashboardData() {
          this.dashboardDataStatus = 2;
          this.dashboardData = {};

          this._loader.showLoader();
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData() {
          var _this104 = this;

          this.resetDashboardData();

          this._dashboard.getDashboardData().subscribe(function (response) {
            _this104._loader.hideLoader();

            _this104.dashboardDataStatus = 1;
            _this104.dashboardData = response;

            _this104.prepareDashboardReportCards();
          }, function (errorCode) {
            _this104._loader.hideLoader();

            _this104.dashboardDataStatus = errorCode;
          });
        }
      }, {
        key: "prepareDashboardReportCards",
        value: function prepareDashboardReportCards() {
          this.dashboardReportCards = [{
            name: "CLASSES",
            className: 'bg-red',
            icon: 'fas fa-university',
            value: this.dashboardData.classes
          }, {
            name: "STUDENTS",
            className: 'bg-info',
            icon: 'fas fa-graduation-cap',
            value: this.dashboardData.students
          }, {
            name: "FACULTIES",
            className: 'bg-warning',
            icon: 'fas fa-chalkboard-teacher',
            value: this.dashboardData.faculties
          }, {
            name: "INSTITUTES",
            className: 'bg-red',
            icon: 'fas fa-graduation-cap',
            value: this.dashboardData.institutes
          }, {
            name: "VIDEOS",
            className: 'bg-warning',
            icon: 'fa fa-video',
            value: this.dashboardData.videos
          }];
        }
      }]);

      return SuperAdminDashboardComponent;
    }();

    SuperAdminDashboardComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["SuperAdminDashboardService"]
      }];
    };

    SuperAdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-admin-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/superAdmin/components/dashboard/dashboard.component.scss"))["default"]]
    })], SuperAdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/institutes/institutes.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/superAdmin/components/institutes/institutes.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsInstitutesInstitutesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9pbnN0aXR1dGVzL2luc3RpdHV0ZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/institutes/institutes.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/superAdmin/components/institutes/institutes.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SuperAdminInstitutesComponent */

  /***/
  function srcAppSuperAdminComponentsInstitutesInstitutesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminInstitutesComponent", function () {
      return SuperAdminInstitutesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sharedServices/toaster/toaster.service */
    "./src/app/shared/services/toaster/toaster.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sharedServices/miscellaneous/miscellaneous.service */
    "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
    /* harmony import */


    var _superAdminServices_institutes_institutes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @superAdminServices/institutes/institutes.service */
    "./src/app/superAdmin/services/institutes/institutes.service.ts");

    var SuperAdminInstitutesComponent = /*#__PURE__*/function () {
      function SuperAdminInstitutesComponent(_constants, _miscellaneous, _translate, _toaster, _loader, _institute) {
        _classCallCheck(this, SuperAdminInstitutesComponent);

        this._constants = _constants;
        this._miscellaneous = _miscellaneous;
        this._translate = _translate;
        this._toaster = _toaster;
        this._loader = _loader;
        this._institute = _institute;
        this.institutes = [];
        this.instituteDataStatus = 2;
        this.showAddFeature = false;
        this.addDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'logo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.editDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
          'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
          'logo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
      }

      _createClass(SuperAdminInstitutesComponent, [{
        key: "validateAddDataFormValue",
        value: function validateAddDataFormValue(formName) {
          return this.addDataForm.get(formName);
        }
      }, {
        key: "validateEditDataFormValue",
        value: function validateEditDataFormValue(formName) {
          return this.editDataForm.get(formName);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInstitutes();
        }
      }, {
        key: "resetInstitutes",
        value: function resetInstitutes() {
          this.instituteDataStatus = 2;
          this.institutes = [];

          this._loader.showLoader();
        }
      }, {
        key: "getInstitutes",
        value: function getInstitutes() {
          var _this105 = this;

          this.resetInstitutes();

          this._institute.getInstitutes().subscribe(function (response) {
            _this105._loader.hideLoader();

            _this105.instituteDataStatus = 1;
            _this105.institutes = response;
          }, function (errorCode) {
            _this105._loader.hideLoader();

            _this105.instituteDataStatus = errorCode;
          });
        }
      }, {
        key: "showAddFeatureView",
        value: function showAddFeatureView(status) {
          this.showAddFeature = status;

          if (status) {
            $('#addDataForm')[0].reset();
            this.addDataForm.reset();
          }
        }
      }, {
        key: "disableAddFeatureForm",
        value: function disableAddFeatureForm() {
          return this.addDataForm.valid ? false : true;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, fileTarget, formType) {
          var formName = formType === 1 ? "addDataForm" : "editDataForm";
          this[formName].get(fileTarget).setValue(null);

          if (event.target.files.length > 0) {
            this[formName].get(fileTarget).setValue(event.target.files[0]);
          }
        }
      }, {
        key: "addInstitute",
        value: function addInstitute() {
          var _this106 = this;

          this._loader.showLoader();

          this._institute.addInstitute(this.addDataForm.value).subscribe(function () {
            _this106._loader.hideLoader();

            _this106.showAddFeatureView(false);

            _this106.getInstitutes();

            _this106._toaster.showSuccess(_this106._translate.instant("FEATURE_ADDED_SUCCESSFULLY", {
              value: _this106._translate.instant("INSTITUTE")
            }));
          }, function () {
            _this106._loader.hideLoader();
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(institute) {
          var _this107 = this;

          this._loader.showLoader();

          this._institute.updateStatus(institute).subscribe(function () {
            _this107._loader.hideLoader();

            _this107._toaster.showSuccess(_this107._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this107._translate.instant("INSTITUTE_STATUS")
            }));
          }, function () {
            _this107._loader.hideLoader();
          });
        }
      }, {
        key: "initiateEditModal",
        value: function initiateEditModal(institute) {
          $('#editDataForm')[0].reset();
          this.editDataForm.reset();
          this.editDataForm.patchValue({
            id: institute.id,
            name: institute.name,
            phone_number: institute.phone_number,
            address: institute.address
          });
        }
      }, {
        key: "updateInstitute",
        value: function updateInstitute() {
          var _this108 = this;

          this._loader.showLoader();

          this._institute.updateInstitute(this.editDataForm.value).subscribe(function () {
            $('#update-institute').modal('hide');

            _this108.getInstitutes();

            _this108._loader.hideLoader();

            _this108._toaster.showSuccess(_this108._translate.instant("FEATURE_UPDATED_SUCCESSFULLY", {
              value: _this108._translate.instant("INSTITUTE")
            }));
          }, function () {
            _this108._loader.hideLoader();
          });
        }
      }]);

      return SuperAdminInstitutesComponent;
    }();

    SuperAdminInstitutesComponent.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _sharedServices_miscellaneous_miscellaneous_service__WEBPACK_IMPORTED_MODULE_7__["MiscellaneousService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _sharedServices_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _superAdminServices_institutes_institutes_service__WEBPACK_IMPORTED_MODULE_8__["SuperAdminInstitutesService"]
      }];
    };

    SuperAdminInstitutesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-admin-institutes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./institutes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/institutes/institutes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./institutes.component.scss */
      "./src/app/superAdmin/components/institutes/institutes.component.scss"))["default"]]
    })], SuperAdminInstitutesComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/list-error/list-error.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/superAdmin/components/list-error/list-error.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsListErrorListErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9saXN0LWVycm9yL2xpc3QtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/list-error/list-error.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/superAdmin/components/list-error/list-error.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SuperAdminListErrorComponent */

  /***/
  function srcAppSuperAdminComponentsListErrorListErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminListErrorComponent", function () {
      return SuperAdminListErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperAdminListErrorComponent = function SuperAdminListErrorComponent() {
      _classCallCheck(this, SuperAdminListErrorComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SuperAdminListErrorComponent.prototype, "errorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SuperAdminListErrorComponent.prototype, "errorCode", void 0);
    SuperAdminListErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sAdmin-list-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/list-error/list-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-error.component.scss */
      "./src/app/superAdmin/components/list-error/list-error.component.scss"))["default"]]
    })], SuperAdminListErrorComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/mcq/mcq.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/superAdmin/components/mcq/mcq.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsMcqMcqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9tY3EvbWNxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/mcq/mcq.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/superAdmin/components/mcq/mcq.component.ts ***!
    \************************************************************/

  /*! exports provided: McqComponent */

  /***/
  function srcAppSuperAdminComponentsMcqMcqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McqComponent", function () {
      return McqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @superAdminServices/dashboard/dashboard.service */
    "./src/app/superAdmin/services/dashboard/dashboard.service.ts");
    /* harmony import */


    var _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var McqComponent = /*#__PURE__*/function () {
      function McqComponent(_loader, _dashboard, _router) {
        _classCallCheck(this, McqComponent);

        this._loader = _loader;
        this._dashboard = _dashboard;
        this._router = _router;
      }

      _createClass(McqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loader.showLoader();

          this.getDirectLoginUrl();
        }
      }, {
        key: "getDirectLoginUrl",
        value: function getDirectLoginUrl() {
          var _this109 = this;

          this._dashboard.getDirectLoginUrl().subscribe(function (response) {
            _this109._router.navigate(['superAdmin/dashboard']);

            if (response && response.mcq_url) {
              window.open(response.mcq_url, '_blank');
            }

            _this109._loader.hideLoader();
          }, function (errorCode) {
            _this109._loader.hideLoader();
          });
        }
      }]);

      return McqComponent;
    }();

    McqComponent.ctorParameters = function () {
      return [{
        type: _sharedServices_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _superAdminServices_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["SuperAdminDashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    McqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mcq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/mcq/mcq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq.component.scss */
      "./src/app/superAdmin/components/mcq/mcq.component.scss"))["default"]]
    })], McqComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/components/sidebar/sidebar.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/superAdmin/components/sidebar/sidebar.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/superAdmin/components/sidebar/sidebar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/superAdmin/components/sidebar/sidebar.component.ts ***!
    \********************************************************************/

  /*! exports provided: SuperAdminSidebarComponent */

  /***/
  function srcAppSuperAdminComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminSidebarComponent", function () {
      return SuperAdminSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sharedServices/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");

    var SuperAdminSidebarComponent = /*#__PURE__*/function () {
      function SuperAdminSidebarComponent(_constants, _storage) {
        _classCallCheck(this, SuperAdminSidebarComponent);

        this._constants = _constants;
        this._storage = _storage;
        this.sidemenus = [];
        this.userDetails = {};
        this.width = window.innerWidth;
      }

      _createClass(SuperAdminSidebarComponent, [{
        key: "onResize",
        value: function onResize() {
          this.width = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userType = this._constants.SUPER_ADMIN;
          this.userDetails = this._storage.getData("userDetails");
          this.sidemenus = [{
            name: "DASHBOARD",
            icon: "fas fa-tachometer-alt",
            link: '/' + this.userType + '/dashboard'
          }, {
            name: "INSTITUTES",
            icon: "fas fa-university",
            link: '/' + this.userType + "/institutes"
          }, {
            name: "ADMINS",
            icon: "fas fa-chalkboard-teacher",
            link: '/' + this.userType + "/admins"
          }, {
            name: "TEST",
            icon: "fas fa-clipboard",
            link: '/' + this.userType + "/mcq"
          }];
        }
      }, {
        key: "minimizeSidemenu",
        value: function minimizeSidemenu() {
          if (this.width <= 768) {
            $('body').removeClass('sidebar-open');
            $('body').addClass('sidebar-collapse');
          }
        }
      }]);

      return SuperAdminSidebarComponent;
    }();

    SuperAdminSidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]
      }, {
        type: _sharedServices_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], SuperAdminSidebarComponent.prototype, "onResize", null);
    SuperAdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-admin-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/superAdmin/components/sidebar/sidebar.component.scss"))["default"]]
    })], SuperAdminSidebarComponent);
    /***/
  },

  /***/
  "./src/app/superAdmin/services/admins/admins.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/superAdmin/services/admins/admins.service.ts ***!
    \**************************************************************/

  /*! exports provided: SuperAdminAdminsService */

  /***/
  function srcAppSuperAdminServicesAdminsAdminsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminAdminsService", function () {
      return SuperAdminAdminsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var SuperAdminAdminsService = /*#__PURE__*/function () {
      function SuperAdminAdminsService(_constants, _http) {
        _classCallCheck(this, SuperAdminAdminsService);

        this._constants = _constants;
        this._http = _http;
      }

      _createClass(SuperAdminAdminsService, [{
        key: "getAdmins",
        value: function getAdmins() {
          return this._http.get(this._constants.ADMINS_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addAdmin",
        value: function addAdmin(data) {
          var formData = new FormData();
          formData.append('name', data.name);
          formData.append('email', data.email);
          formData.append('password', data.password);
          formData.append('inst_id', data.inst_id);
          return this._http.post(this._constants.ADD_ADMIN_URL, formData);
        }
      }, {
        key: "updateAdmin",
        value: function updateAdmin(data) {
          var formData = new FormData();
          formData.append('id', data.id);
          formData.append('name', data.name);
          formData.append('email', data.email);

          if (data.password) {
            formData.append('password', data.password);
          }

          return this._http.post(this._constants.ADMIN_UPDATE_URL, formData);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(data) {
          var formData = new FormData();
          formData.append('id', data.id);
          return this._http.post(this._constants.ADMIN_STATUS_UPDATE_URL, formData);
        }
      }]);

      return SuperAdminAdminsService;
    }();

    SuperAdminAdminsService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SuperAdminAdminsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SuperAdminAdminsService);
    /***/
  },

  /***/
  "./src/app/superAdmin/services/dashboard/dashboard.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/superAdmin/services/dashboard/dashboard.service.ts ***!
    \********************************************************************/

  /*! exports provided: SuperAdminDashboardService */

  /***/
  function srcAppSuperAdminServicesDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminDashboardService", function () {
      return SuperAdminDashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var SuperAdminDashboardService = /*#__PURE__*/function () {
      function SuperAdminDashboardService(constants, http) {
        _classCallCheck(this, SuperAdminDashboardService);

        this.constants = constants;
        this.http = http;
      }

      _createClass(SuperAdminDashboardService, [{
        key: "getDashboardData",
        value: function getDashboardData() {
          return this.http.get(this.constants.SUPER_ADMIN_DASHBOARD_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "getDirectLoginUrl",
        value: function getDirectLoginUrl() {
          return this.http.get(this.constants.MCQ_DIRECT_LOGIN_TOKEN).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response) {
              return response;
            }

            throw 0;
          }));
        }
      }]);

      return SuperAdminDashboardService;
    }();

    SuperAdminDashboardService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SuperAdminDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SuperAdminDashboardService);
    /***/
  },

  /***/
  "./src/app/superAdmin/services/institutes/institutes.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/superAdmin/services/institutes/institutes.service.ts ***!
    \**********************************************************************/

  /*! exports provided: SuperAdminInstitutesService */

  /***/
  function srcAppSuperAdminServicesInstitutesInstitutesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminInstitutesService", function () {
      return SuperAdminInstitutesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/constants */
    "./src/app/constants.ts");

    var SuperAdminInstitutesService = /*#__PURE__*/function () {
      function SuperAdminInstitutesService(_constants, _http) {
        _classCallCheck(this, SuperAdminInstitutesService);

        this._constants = _constants;
        this._http = _http;
      }

      _createClass(SuperAdminInstitutesService, [{
        key: "getInstitutes",
        value: function getInstitutes() {
          return this._http.get(this._constants.INSTITUTES_LIST_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response && response.data && response.data.length) {
              return response.data;
            }

            throw 0;
          }));
        }
      }, {
        key: "addInstitute",
        value: function addInstitute(data) {
          var formData = new FormData();
          formData.append('logo', data.logo);
          formData.append('name', data.name);
          formData.append('phone_number', data.phone_number);
          formData.append('address', data.address);
          return this._http.post(this._constants.ADD_INSTITUTE_URL, formData);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(data) {
          var formData = new FormData();
          formData.append('id', data.id);
          return this._http.post(this._constants.INSTITUTE_STATUS_UPDATE_URL, formData);
        }
      }, {
        key: "updateInstitute",
        value: function updateInstitute(data) {
          var formData = new FormData();
          formData.append('id', data.id);
          formData.append('name', data.name);
          formData.append('phone_number', data.phone_number);
          formData.append('address', data.address);

          if (data.logo) {
            formData.append('logo', data.logo);
          }

          return this._http.post(this._constants.INSTITUTE_UPDATE_URL, formData);
        }
      }]);

      return SuperAdminInstitutesService;
    }();

    SuperAdminInstitutesService.ctorParameters = function () {
      return [{
        type: _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SuperAdminInstitutesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SuperAdminInstitutesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dell\Documents\GitHub\eclass-web\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map