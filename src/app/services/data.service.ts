import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post('http://localhost:3000/users/register',data);
  }

  login(){

  }

  addEnquiry(){

  }
  searchEnquiry(search, page, limit){
    let params = new HttpParams();
    params=params.append('search',search);
    params=params.append('page',page);
    params=params.append('limit',limit);
    return this.http.get('http://localhost:3000/users/enquiries/search', { params });
  }
}