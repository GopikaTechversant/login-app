import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataUrl = 'assets/data.json';
  private users: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.dataUrl).subscribe(res => {
      this.users = res;
    });
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: any) {
    this.users.push(newUser);
  }
  writeUsers(users: any[]) {
    return this.http.post(this.dataUrl, users);
  }
  
}
