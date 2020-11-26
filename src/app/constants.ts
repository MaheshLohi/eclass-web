export class Constants {
    DOMAIN_URL = 'http://159.89.167.37/'
    FILES_PATH = this.DOMAIN_URL + 'public/' 
    BASE_URL = this.DOMAIN_URL + 'api/';
    LANGUAGE_ARRAY = ['en','ka'];
    DEFAULT_LANGUAGE = this.LANGUAGE_ARRAY[0];
    ENABLE_ENCRYPTION = true;
    ENCRYPTION_KEY = "Rewind";
    SUPER_ADMIN_USER_TYPE = 0;
    ADMIN_USER_TYPE = 1;
    STATUS_ACTIVE = 1;
    STATUS_INACTIVE = 0;
    DISPLAY_HTTP_ERROR_TOASTER = true;
    HTTP_SERVER_ERROR = 500;
    UNAUTHORISED_ERROR = 503;

    SUPER_ADMIN = "superAdmin";
    ADMIN = "admin"

    ADMIN_URL = "admin/"

    INSTITUTES_LIST_URL = this.BASE_URL + 'all-institutes';
    ADD_INSTITUTE_URL = this.BASE_URL + this.ADMIN_URL + 'add-institute';
    LOGIN_URL = this.BASE_URL + 'login';
    USER_DETAILS_URL = this.BASE_URL + 'student/user';
    ADMINS_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'inst-admin';
    FACULTIES_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'faculties/';
    ADD_FACULTIES_URL = this.BASE_URL + this.ADMIN_URL + 'add-faculties';
    ADD_ADMIN_URL = this.BASE_URL + this.ADMIN_URL + 'add-inst-admin';
    LOGOUT_URL = this.BASE_URL + 'logout';
    DEPARTMENTS_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'departments';
    DEPARTMENTS_AND_SECTIONS_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'get-department-classes';
    ADD_DEPARTMENT_URL = this.BASE_URL + this.ADMIN_URL + 'add-department';
    STUDENTS_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'students/';
    ADD_STUDENTS_URL = this.BASE_URL + this.ADMIN_URL + 'add-students';
    SUBJECTS_LIST_URL = this.BASE_URL + this.ADMIN_URL + 'subject/';
    ADD_SUBJECTS_URL = this.BASE_URL + this.ADMIN_URL + 'upload-department-subjects';
}