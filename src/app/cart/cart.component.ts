import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  record: any;

  index: any;
  indexed:any;

  // index:any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor(private common: CommonService, private route: ActivatedRoute) {}

  // recieveproducts(product: any) {
  //   this.record = product;
  //   console.log(product);

  //   this.index =product[i]
  // }
  ngOnInit(): void {
    this.record = JSON.parse(localStorage.getItem('records') || '[]');

    this.indexed = localStorage.key(this.index);


  // if(this.record=== this.record){
  //   this.checksame()
  // }

  }

  removeItem(id:number) {
      //  this.record= this.record.filter((item:any)=>{
      //   if(item.id!=id){
      //     localStorage.removeItem(item.id)
      //     return item;
      //   }
      //  })
    // localStorage.setItem("data",JSON.stringify(this.record));

    if (this.indexed === this.indexed) {
     localStorage.removeItem(this.indexed);
  //  this.record.splice(this.indexed, this.record.length)
    }
  }

  gotopayment() {

  }

  // checksame(){
  //    this.record.quantity= this.record.quantit+this.record.quantity;
  //    this.record.price = this.record.price *this.record.quantity;
  //    alert("hey")

  //   }
}
