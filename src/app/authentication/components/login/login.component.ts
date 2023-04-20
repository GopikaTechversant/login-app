import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.email || !this.password) {
      alert("Please enter email and password");
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') as string) as User[];
    console.log('users here',users);
    

    const userExist = users.find((user: any) => user.email === this.email && user.password === this.password);
  
    if (userExist) {
      // Store the user data in local storage
      localStorage.setItem('currentUser', JSON.stringify(userExist) as string);
      this.router.navigate(['/userpage']);
      console.log("User exists");
    } else {
      alert("User does not exist");
    }
  }
  
  signUp(): void {
    this.router.navigate(['/signUp']);
  }
}
