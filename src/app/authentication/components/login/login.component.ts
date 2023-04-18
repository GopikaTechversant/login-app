import { Component ,OnInit} from '@angular/core';
// import { users } from 'src/app/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username:string='';
  email:string='';
  password:string='';
  users:any[]=[];
  constructor(private router:Router,private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>('assets/data.json').subscribe(res => {
      this.users = res;
      // console.log('data response', this.users);
    });

  }
  login():void{
    const userExist = this.users.find(user => user.email === this.email && user.password === this.password);

          if(userExist){
           
            
            // localStorage.setItem('user', JSON.stringify(userExist));
            this.router.navigate(['/userpage']);
            console.log("userExist");
            
            
          }else{
            alert("user not exist");
          }
         
      }
      signUp() {
        this.router.navigate(['/signUp']);
      }
}
