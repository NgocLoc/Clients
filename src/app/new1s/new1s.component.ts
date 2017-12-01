import { Component, OnInit } from '@angular/core';
import { New1sService } from '../services/new1s.service';


@Component({
  selector: 'app-new1s',
  templateUrl: './new1s.component.html',
  styleUrls: ['./new1s.component.css'],
  providers:[New1sService]
})
export class New1sComponent implements OnInit {

  new1s;
  new1; 
  idnew1: number;
 
 constructor(private new1sService: New1sService) { }
  getAll(): void {
    this.new1sService.getAll().then(res => this.new1s = res);
  }
  ngOnInit() {
    this.getAll();
  }

}
