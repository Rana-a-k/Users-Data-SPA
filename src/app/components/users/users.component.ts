import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private myService:DemoService) { }

  allusers:any;

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (users)=>{this.allusers = users},
      (error)=>{console.log(error)}
    )
  }

}
