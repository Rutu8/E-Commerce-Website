import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  userUrl= "https://67f3a03fcbef97f40d2b5fdd.mockapi.io/api/users"

  getuser(url:string){
   return this.http.get(this.userUrl+url);

  }

  getuserById(url:string){
    return this.http.get(this.userUrl  + url);
  }

  post(url:string, data:any)
  {
    return this.http.post(this.userUrl+ url, data)
  }

  put(url:string, body:any){
    return this.http.put(this.userUrl + url, body)
  }

  delete(url:string){
    return this.http.delete(this.userUrl+ url)
  }

}
