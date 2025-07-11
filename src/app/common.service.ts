import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http:HttpClient) { }

   baseURL = ("https://fakestoreapi.com/products")



   //we can write in component also which we want but we used in service because of the service feature is that it can share with all component and how we want that which we want we can use
   getdata(){
    return this.http.get("https://fakestoreapi.com/products")
   }

   getbyid(id:any){
    return this.http.get(this.baseURL +"/"+ id)
   }//this is can be used as any component

   //to set token at local storage
   setToken(token:string){
   localStorage.setItem('Token',token)
   }

   //to get token at local storage
   getToken(){
    return localStorage.getItem('Token')
   }

   islogin(){
    if(localStorage.getItem('Token')!=null){
      return true
    }else{
      return false
    }
   }
   //to login authentication
   tologIn(data:any):any{
    if(data.email === 'admin@gmail.com' && data.password ==='123'){
      this.setToken('sdkfjsldkfjlsdkfjsldkfj')
      return {status:'success',data:{name:'admin', email:'admin@gmail.com', usertype:'admin'}}
    }else{
      return {status:'failed'}
    }

   }




}
