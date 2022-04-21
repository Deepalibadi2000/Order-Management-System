import { HttpClient, HttpHeaders } from "@angular/common/http";

export class UrlMapping {

    constructor() { }

    /** URL */
    public static TASKPLUS_API = 'http://localhost:8080/taskplus-api/';

    /** URL Proxy */
    public static AUTH = UrlMapping.TASKPLUS_API + 'auth/';

    /** JAVA POST APIs */
    public static LOGIN_USER_API = UrlMapping.AUTH + 'login-user';

}