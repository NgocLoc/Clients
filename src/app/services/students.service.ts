import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class StudentsService {
  private url = 'http://localhost:8080/students';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }

}
