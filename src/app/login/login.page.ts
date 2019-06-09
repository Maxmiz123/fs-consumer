import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public email: string = "";
  public password: string = "";

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) {}

  login() {
    const authReq = {
      email: this.email,
      password: this.password
    };
    this.httpClient
    .post("http://localhost:3000/api/auth", authReq)
    .subscribe(
      (response: any) => {
        console.log(response);
        const userId = response.id;

        localStorage.setItem("user_id", userId);

        this.navCtrl.navigateForward("tabs", {
          queryParams: {
            user_id: userId
          }
        });
      },
      err => {
        alert("Failed to login. Incorrect Username or Password");
      }
    );
  }
  navToRegister(){
    this.navCtrl.navigateForward('signup');
}
}