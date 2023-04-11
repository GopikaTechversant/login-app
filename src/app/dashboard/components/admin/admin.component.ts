import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users:any []=[];
  
  constructor(){}
  ngOnInit(): void {
    const userStorage = localStorage.getItem('users');
    if (userStorage) {
      this.users = JSON.parse(userStorage);
      console.log(users)
    }  
    
  }
 
}
