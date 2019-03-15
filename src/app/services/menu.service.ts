import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuResponse } from '../models/menu-response.model.js';

@Injectable()
export class MenuService {
  constructor(
    private http: HttpClient
  ) {}

  getMenuList(): Observable<IMenuResponse[]> {
    return this.http.get('/menu-list') as Observable<IMenuResponse[]>;
  }
}
