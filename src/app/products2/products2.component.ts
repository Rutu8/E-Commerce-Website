import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit {
  products:any;
  constructor(private api:ContactService){

  }
  ngOnInit(): void {
    this.getadminproducts();

  }
 // https://67dd1191e00db03c406a0ed4.mockapi.io/products/api/Products

  getadminproducts(){
    this.api.getproduct().subscribe((result:any)=>{
      console.log(result);
      this.products = result;
    })

  }

}
