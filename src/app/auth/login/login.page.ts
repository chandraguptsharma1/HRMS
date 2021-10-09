import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postData = {
    empId: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) { }

  validateInputs() {
    let empId = this.postData.empId.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.empId &&
      this.postData.password &&
      empId.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    console.log('enter')
    // if (this.validateInputs()) {
    //   console.log(this.postData);
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          console.log(res);
          if (res.userData) {
            // Storing the User data.
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.router.navigate(['/home']);
          } else {
            this.toastService.presentToast('Incorrect username and password.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    // } else {
    //   this.toastService.presentToast(
    //     'Please enter username or password.'
    //     );
    // }
  }


  ngOnInit() {
  }

}
