import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fighter } from '../fighters';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FightersService {
  model = 'fighters';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(fighter) {
    return this.http.post(this.getUrl(), fighter);
  }

  update(fighter) {
    return this.http.put(this.getUrlWithID(fighter.id), fighter);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
