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
  remember_me:boolean=false;
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
    if (this.isValidUserDetails() === true) {
      console.log(this.userName)
      console.log(this.password)
      this.isLoggedIn = true;
      // this.closeModal();
      localStorage.setItem(Constants.SAVED_USERDETAILS.is_logged, 'true');
      localStorage.setItem(Constants.SAVED_USERDETAILS.password, this.password);
      localStorage.setItem(Constants.SAVED_USERDETAILS.userName  , this.userName);
      console.log(localStorage)
     
      this.router.navigate(['/home']);
    } else {
      // this.toast.error('Login Failed, Try Again', 'fail');
      this.snackbar.add({ msg: 'Login Failed - Try Again' });
      this.showSnackbar();
    }
  }

  isValidUserDetails(): boolean {
    if (this.userName === undefined || this.userName === null || this.userName === '') {
      return false;
    }
    if (this.userName !== Constants.SAVED_USERDETAILS.userName) {
      this.toast.warning('User not Registered');
      return false;
    }
    if (this.password === undefined || this.password === null || this.password === '') {
      return false;
    }
    if (this.password !== Constants.SAVED_USERDETAILS.password) {
      this.toast.warning('Password Incorrect, Please Try Again');
      return false;
    }
    return true;
  }
  onClick(){
    console.log("clicked 1" + this.remember_me);
    this.remember_me=!this.remember_me; 
    console.log("clicked 2" + this.remember_me);
  }
  showSnackbar() {
    this.snackbar.add({msg : 'Login Failed'});
  }

  ngOnInit(): void {
    this.isUserLoggedIn();
    // if (this.isLoggedIn) {
    //   this.router.navigate(['/home']);
    // } else {
    //    //this.showLoginAlert();
    //   // this.showLoginDialogModal();
    // }
  }

}
