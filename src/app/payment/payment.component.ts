import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { PaymentService } from '../payment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  record:any
  order:any;
  // price:any;
  totalprice:number = 0;
  shipping = 10;
  TotalOrder:number = 0;
  formData:any;
  id:any;

  constructor(private share:PaymentService, private http:HttpClient){

  }
  ngOnInit(): void {
  this.record = JSON.parse(localStorage.getItem('records') || '[]');

  this.formdata();

   this.totalprice=this.record.price + this.record.price;

   if(this.totalprice>500)
   {
    this.shipping = this.shipping + 90;
   this.TotalOrder = this.record.price+this.shipping;

   }else{
    this.TotalOrder = this.record.price - this.shipping;
   }


  //  this.share.getuser(this.order).subscribe((result:any)=>{
  //   console.log(result)

  //  })

  //  this.userdata = JSON.parse(localStorage.getItem('userdata') || '[]');

  }

  formdata(){

    this.formData = new FormGroup({
      // country:new FormControl(" "),
      id:new FormControl(""),
      fname:new FormControl(""),
      lname:new FormControl(""),
      address:new FormControl(""),
      secondaddress:new FormControl(""),
      city:new FormControl(""),
      state:new FormControl(""),
      postalcode:new FormControl(""),
      email:new FormControl(""),
      mobileno:new FormControl(""),
      message:new FormControl("")

     })


   }

  // data:any = {
  //   country:" ",
  //   fname:" ",
  //   lname: " ",
  //   address:" ",
  //   secondaddress:" ",
  //   city:" ",
  //   state:" ",
  //   postalcode:" ",
  //   email:" ",
  //   mobileno:" ",
  //   message:" "
  // }

 // userdata:any =[];


  gotoAdmin(data:any){

    //this.data={fname:data.fname,lname:data.lname, address:data.address, secondaddress:data.secondaddress, city:data.city, state:data.state, email:data.email, mobileno:data.mobileno, message:data.message}
    //this.userdata.push(this.data)

    //localStorage.setItem('userdata', JSON.stringify(this.userdata));
    console.log(data);
    this.order = {...this.formData.value}
    console.log(this.order)

    this.share.post("orders", this.order).subscribe((result:any)=>{
      console.log(this.order)
      console.log(result)
      this.id = result.id;
      console.log(this.id);
      alert("Added successfully");
    })

  }



}
