import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username:string='';
  email:string='';
  password:string='';
  
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  login():void{
        const userExist=users.find(user => 
          user.email==this.email && user.password==this.password);
          if(userExist){
           
            
            localStorage.setItem('user', JSON.stringify(userExist));
            this.router.navigate(['/userpage']);
            
            
          }else{
            alert("user not exist");
          }
         
      }
}
