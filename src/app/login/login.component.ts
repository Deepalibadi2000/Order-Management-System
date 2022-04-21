import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SnackbarService } from 'ngx-snackbar';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../common/constants';
import { AccessService } from '../service/access-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobileNumber: any;
  password: any;
  remember_me:any;
  isLoggedIn = false;
  isLoading = false;
  userName:any;
  constructor(
    private modal: NgbModal,
    private router: Router,
    private toast: ToastrService,
    private snackbar: SnackbarService,
    private access: AccessService,
  ) { }

  isUserLoggedIn() {
    if (localStorage.getItem(Constants.SAVED_USERDETAILS.is_logged) === 'true') {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  loginUser() {
    console.log('User Data', this.mobileNumber + ' ' + this.password);
    if (this.isValidUserDetails()) {
      this.isLoggedIn = true;
      // this.closeModal();
      localStorage.setItem(Constants.SAVED_USERDETAILS.is_logged, 'true');
      localStorage.setItem(Constants.SAVED_USERDETAILS.password, this.password);
      localStorage.setItem(Constants.SAVED_USERDETAILS.mobile_number, this.mobileNumber);
      this.router.navigate(['/home']);
    } else {
      // this.toast.error('Login Failed, Try Again', 'fail');
      this.snackbar.add({ msg: 'Login Failed - Try Again' });
      this.showSnackbar();
    }
  }

  isValidUserDetails() {
    if (this.mobileNumber == undefined
      || this.mobileNumber == null || this.mobileNumber == '') {
      this.toast.error('Enter valid mobile number', 'Fail');
      return false;
    } else if (this.mobileNumber.length != 10) {
      this.toast.error('Please enter valid 10 didit Mobile number', 'Fail');
      return false;
    }
    return true;
  }

  showSnackbar() {
    this.snackbar.add({msg : 'Login Failed'});
  }

  ngOnInit(): void {
    this.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      // this.showLoginAlert();
      // this.showLoginDialogModal();
    }
  }

}
