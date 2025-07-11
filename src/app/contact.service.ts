import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  secondURL = 'https://67dd1191e00db03c406a0ed4.mockapi.io/products/api/Products';

  //to get all products
  getproduct() {
    return this.http.get(this.secondURL);
  }

  //to get products by id
  getbyidproduct(id: number) {
    return this.http.get(this.secondURL + '/' + id);
  }

  //to add new record
  post(body: any) {
    return this.http.post(this.secondURL, body);
  }

  //to update records
  put(id: number, body: any) {
    return this.http.put(this.secondURL + '/' + id, body);
  }

  //to delete given reocord
  delete(id: number) {
    return this.http.delete(this.secondURL + '/' + id);
  }
}
