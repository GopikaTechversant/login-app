import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users = users;
  loggedInUser: any;

  constructor(private router:Router) {
    console.log("hhefe");
    
   }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(localStorage.getItem('user') as string);
    this.loggedInUser = loggedInUser;
    
  }

  isAdmin() {
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }
  edit(){
    this.router.navigate(['/edit']);
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
  
}
