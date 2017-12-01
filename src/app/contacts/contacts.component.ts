import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ContactsService} from'../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactsService, FormBuilder]
})
export class ContactsComponent implements OnInit {

  createContact:FormGroup;
  contacts;
  contact;
  idcontact: number;

  constructor(private contactsService: ContactsService, private fb: FormBuilder) { }
  getAll(): void {
    this.contactsService.getAll().then(res => this.contacts = res);
  }

  ngOnInit() {
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
