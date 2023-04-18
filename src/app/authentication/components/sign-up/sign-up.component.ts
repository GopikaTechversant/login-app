import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  role:string = '';
  password: string = '';
  users:any[]=[];

  constructor(private http: HttpClient, private router: Router,
) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data.json').subscribe(res => {
      this.users = res;
      // console.log('data response', this.users);
      // this.users.push(newUser);
      console.log("this.users",this.users);

    });
  }
  saveDataToJsonFile() {
    const blob = new Blob([JSON.stringify(this.users)], { type: 'application/json' });
    saveAs(blob, 'assets/data.json');
  }
  

  signup() {
    const newUser = {
      username: this.username,
      email: this.email,
      role:this.role,
      password: this.password,
      
    };

    
      
        
      const userExist = this.users.find(user => user.email === this.email && user.password === this.password);
      if(userExist){
        alert("user already exist");
      }else{
        this.users.push(newUser);
        // console.log(newUser);
        
        console.log("after push",this.users);

      }
      this.router.navigate(['']);
      }
  }

