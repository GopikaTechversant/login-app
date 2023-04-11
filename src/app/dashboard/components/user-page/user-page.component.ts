import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users = users;
  loggedInUser: any;

  constructor(private router:Router,private authGuard:AuthGuard) { }

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
    this.router.navigate(['/login']);
  }
  
}
