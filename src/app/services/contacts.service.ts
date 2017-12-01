import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class ContactsService {
  private url = 'http://localhost:8080/contacts';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }

  create(contacts) {
    console.log(JSON.stringify(contacts));
    return this.http.post(this.url, JSON.stringify(contacts), { headers: this.headers })
      .toPromise();
  }

}
