import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor(private mySercice:DemoService, private router:Router) { }

  @Input() oneUser:any;

  ngOnInit(): void {
  }

  DeleteUser(id:any){
    this.mySercice.deleteUserBtID(id).subscribe(()=>{
      this.router.navigate(["/users"])
    });
    this.router.navigateByUrl('/UserItemComponent', {skipLocationChange:true})
  }

}
