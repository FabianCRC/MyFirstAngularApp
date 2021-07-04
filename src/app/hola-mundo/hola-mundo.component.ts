import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title='Welcome to Angular';


  ngOnInit(): void {
  }
  
  posts:any=[];
  constructor(private dataService: DataService) {
    dataService.getData().subscribe(data =>{
      this.posts=data;
    });
  }
  name: string = "";
  age: number = 0;

  users: string[] = ['Juan', 'Pepe', 'Jose'];

  addUser(newUser: any) {

    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

}
