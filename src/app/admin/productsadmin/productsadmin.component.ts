import { ProductsComponent } from './../../products/products.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ContactService } from 'src/app/contact.service';
import { ContactComponent } from 'src/app/contact/contact.component';

@Component({
  selector: 'app-productsadmin',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css']
})
export class ProductsadminComponent implements OnInit{
  info:any;
  data:any;
  id:any;
// productlist: any;

  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router, private api:ContactService){
    this.id = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {

    this.getdataAll();


  
  }

  getdataAll(){
    this.api.getproduct().subscribe((result)=>{
      this.data = result;
      console.log(this.data)
    })
  }

  editdata(){
    this.router.navigate(["/admin/productlist"])
  }

  delete(id:any){
    this.api.delete(id).subscribe((result)=>{
      this.getdataAll();
    })

  }

  // logout(){
  //   localStorage.clear()
  //   this.router.navigate(['/login'])

  // }




}


