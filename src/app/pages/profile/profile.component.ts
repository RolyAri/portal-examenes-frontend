import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = null;
  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
    this.user = this.loginService.getUser();
    /*this.loginService.getCurrenUser().subscribe(
      (user:any) => {
        this.user = user;
      },
      (error) => {
        alert(error);
      }
    )*/
  }
}
