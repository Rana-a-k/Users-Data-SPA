import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userID = "";
  user:any;
  constructor(myActivated:ActivatedRoute,private myService:DemoService) {
    this.userID = myActivated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.getUserByID(this.userID).subscribe(
      (data) =>{this.user = data},
      (error)=>{console.log(error)}
    );
  }

}
