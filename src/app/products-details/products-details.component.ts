import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  productid: any = 1;
  qty: any = 1;
  data: any;
  key: any;
  info:any;

  constructor(private common: CommonService, private route: ActivatedRoute) {
    this.productid = route.snapshot.paramMap.get('productid');
  }

  ngOnInit(): void {
    this.common.getbyid(this.productid).subscribe((result: any) => {
      this.data = result;
      // console.log(result);

      //get values in local storage
      this.records = JSON.parse(localStorage.getItem('records') || '[]');
    });
  }
  getquantity() {
    this.qty += 1;
  }

  removequantity() {
    this.qty -= 1;
  }

  things: any = {
    id: ' ',
    productname: ' ',
    productimage: ' ',
    quantity: ' ',
    price: ' ',
  };

  //create an empty array
  records: any = [];

  addtocart() {
    //first html page can be designed
    this.things = {
      id: this.productid,
      productname: this.data.title,
      productimage: this.data.image,
      quantity: this.qty,
      price: this.data.price * this.qty,
    };
    this.records.push(this.things);
    //to set data to local storage
    localStorage.setItem('records', JSON.stringify(this.records));
    // console.log(this.records)
    this.key =localStorage.key(this.records)

    //to enter a valid number of quantity
    if (this.qty === -1) {
      alert('Enter a valid quantity' + this.qty);
    } else if (this.qty === 0) {
      alert('Enter a valid quantity');
    }

    // if(){
    //   this.common.tologIn(this.info)
    // }



      // to one of the more items of one type
      // if(localStorage.key(this.key)=== this.records.indexOf('id')){

      // this.records.map((record:any)=>{
      //  this.productid= this.records.filter((value:any)=>{
      //     if(record.id !==value.id){
      //       this.records=this.records.replaceAll(this.qty+this.qty|this.records.price+this.records.price,this.records)
      //       alert("jsdfsdf")
      //       console.log(value.id+" ")

      //     }

      //   })
      // })



    }

  }



