import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any
  constructor(private http:HttpClient, private api:CommonService){

  }
  ngOnInit(): void {
    this.gettingproducts()
    }

    gettingproducts(){
      this.http.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
        this.products = result;
        console.log(result)
      })

    }






}


