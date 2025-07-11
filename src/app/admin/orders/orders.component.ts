import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/payment.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userdata:any;
  product:any;
  constructor(private api:PaymentService){}
  ngOnInit(): void {
  // this.userdata = JSON.parse(localStorage.getItem('userdata') || '[]');

  this.api.getuser("userdata").subscribe((result)=>{
    this.userdata = result;
    console.log(this.userdata);
    // this.product = result.products;
  })



  }

}
