import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private mySercice:DemoService, private router:Router) { }

  ngOnInit(): void {
  }

  AddNewUser(name="", age:any, address="", phone=""){
    let user ={name, age, address, phone};
    this.mySercice.addUser(user).subscribe(()=>{
      this.router.navigate(['/users'])
    });

  }

}
