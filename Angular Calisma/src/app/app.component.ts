import { Component } from '@angular/core';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountSerice: AccountService){}
  title = 'btk_iki';

  isLoggedin(){
    return this.accountSerice.isLoggedIn();
  }
  logOut(){
    this.accountSerice.logOut();
  }
}
