export class Constants {

    public static SAVED_USERDETAILS = {
        userName: 'Deepali',
        password: 'admin@2022',
        is_logged: 'is_logged',
    };

    public static LOGINFORM = `
        <form ngNativeValidate id="login" name="login" autocomplete="off" (submit)="loginUser()">
            <div class="control-group mt-4">
                <div class="form-group">
                    <p for="mobile" class="mb-1" style="text-align:left">Mobile Number</p>
                    <input type="mobile" name="mobile" id="mobile" [(ngModel)]="mobile" 
                        class="form-control" placeholder="9X8X7X6X5X" required />
                </div>
                <div class="form-group my-4">
                    <p for="password" class="mb-1" style="text-align:left">Password</p>
                    <input type="password" name="password" id="password" [(ngModel)]="password"
                        class="form-control" placeholder="**********" required />
                </div><br>
                <div class="controls form-group">
                    <button class="btn btn-outline-success rounded-4 w-100" 
                        type="submit" form="login">LOGIN
                    </button>
                </div>
            </div>
        </form>`;

    public static ADD_SNACKBAR = {
        position: 'bottom-right',
        max: 3,
        timeout: 6000,
        color: '#FFFFFF',
        background: '#000000',
        accent: '#96c824'
    };

}