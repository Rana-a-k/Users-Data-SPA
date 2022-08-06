import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private mySercice: DemoService,
    private router: Router,
    private myActivated: ActivatedRoute
  ) {}
  id = this.myActivated.snapshot.params['id'];
  ngOnInit(): void {}

  UpdateUser(name: string, age: number, address: string, phone: string) {
    this.mySercice
      .updateUserByID({ id: this.id, name, age, address, phone })
      .subscribe((data) => {
        this.router.navigate(['/users']);
      });
  }
}
