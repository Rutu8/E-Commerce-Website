import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminproductdetails',
  templateUrl: './adminproductdetails.component.html',
  styleUrls: ['./adminproductdetails.component.css']
})
export class AdminproductdetailsComponent implements OnInit {

   id: any = 1;
    qty: any = 1;
    data: any;
    key: any;

    constructor(private api: ContactService, private route: ActivatedRoute) {
      this.id = route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
      this.api.getbyidproduct(this.id).subscribe((result: any) => {
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
        id: this.id,
        productname: this.data.Title,
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
