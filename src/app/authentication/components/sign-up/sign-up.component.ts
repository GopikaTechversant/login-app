import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { users } from 'src/app/user';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username: string = '';
  email: string = '';
  role: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveDataToJsonFile() {
    const users = JSON.parse(localStorage.getItem('users') as string) as User[];

    // Save the updated user data to local storage
    localStorage.setItem('users', JSON.stringify(users) as string);
  }
  
  signup(): void {
    const users = JSON.parse(localStorage.getItem('users') as string) || [];

    const newUser = {
      username: this.username,
      email: this.email,
      role: this.role,
      password: this.password,
    };
  
    const userExist = users.find((user: any) => user.email === this.email && user.password === this.password);
    
    if (userExist) {
      alert("User already registered");
    } else {
      users.push(newUser);
      localStorage.setItem('currentUser', JSON.stringify(users) as string);
      console.log("After push", users);
      this.router.navigate(['/login']);
    }
  }
}
