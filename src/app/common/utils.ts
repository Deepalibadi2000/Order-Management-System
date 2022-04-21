export class Utils {

    constructor() { }

    static showSnackbar(message: String, timeout: number, bgColor: String,
        actionText: String, actionColor: String, actionClick: any): {} {
        return {
            msg: message,
            timeout: timeout,
            background: bgColor,
            // action : {
            //     text: actionText,
            //     color: actionColor,
            //     onClick: actionClick,
            // }
        }
    }

}