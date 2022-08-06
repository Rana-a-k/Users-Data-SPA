import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  db_url = 'http://localhost:3500/users';
  constructor(private myClient: HttpClient) {}

  getAllUsers() {
    return this.myClient.get(this.db_url);
  }

  getUserByID(id: any) {
    return this.myClient.get(`${this.db_url}/${id}`);
  }

  addUser(user: any) {
    return this.myClient.post(this.db_url, user);
  }

  updateUserByID(user: any) {
    return this.myClient.put(`${this.db_url}/${user.id}`, user);
  }

  deleteUserBtID(id: any) {
    return this.myClient.delete(`${this.db_url}/${id}`);
  }
}
