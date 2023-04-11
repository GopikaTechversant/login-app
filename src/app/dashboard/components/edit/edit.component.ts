import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  
  user : any;
  loggedInUser: any;
  
  constructor(private router: Router){}
  ngOnInit(): void {
    const loggedInUser = JSON.parse(localStorage.getItem('user') as string);
    this.loggedInUser = loggedInUser;
    const userId = this.loggedInUser.id;
    this.user = users.find(u => u.id === userId);
  }
  onSubmit() {
    
    const userId = this.loggedInUser.id;
    const userIndex = users.findIndex(u => u.id === userId);
    users[userIndex] = this.user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/userpage']);
  }
  
  onCancel(): void {
    this.router.navigate(['/userpage']);
  }
 
}
