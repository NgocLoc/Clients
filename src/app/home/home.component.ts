import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { New1sService } from '../services/new1s.service';
import {FormControl, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CoursesService, New1sService, ContactsService]
})
export class HomeComponent implements OnInit {
  courses;
  new1s;
  createContact:FormGroup;
  contacts;

  constructor(private coursesSerice: CoursesService, private new1sService: New1sService, private contactsService: ContactsService, private fb: FormBuilder) { }
  getAll()
  {
    this.coursesSerice.getAll().then(res => this.courses = res);
  }
  getall()
  {
    this.new1sService.getAll().then(res => this.new1s = res);
  }

  ngOnInit() {
    this.getAll();
    this.getall();
    this.createContact = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]]
    });
  }
  onCreate(): void {
    this.contactsService.create(this.createContact.value).then(cus => this.getAll());
    this.createContact.reset({
      name: '',
      message: '',
      email: ''
    });
  
}
}
