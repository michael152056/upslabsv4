import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public userService: UsersService, public router: Router) { 
    
  }
/*   getUser() {
    const user = { email: this.email, password: this.password };
    var email = this.email;
    this.userService.getUser(email).subscribe(data => {
      this.userService.setToken(data.token);
       this.router.navigateByUrl('/');
    });
  }
 */
  ngOnInit(): void {

  }


}
