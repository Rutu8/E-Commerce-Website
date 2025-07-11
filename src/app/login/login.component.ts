import { AdminModule } from './../admin/admin.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formdata:any;
  productid:any=1;
  data:any;
  // result:any;
  constructor(private router:Router, private route:ActivatedRoute, private common:CommonService){
    // this.productid = route.snapshot.paramMap.get('productid');




  }

  ngOnInit(): void {
    // this.common.getbyid(this.productid).subscribe((result: any) => {
    //   this.data = result;
    // })
    this.formdata = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
  })
  }





  getformdata(data:any){
    let result = this.common.tologIn(data)
    console.log(result)
    if(result.status == 'success'){
    localStorage.setItem('name',result.data.name)
    localStorage.setItem('email',result.data.email)
    localStorage.setItem('usertype',result.data.usertype)
      this.router.navigate(["/admin"])
  
    }else {
      alert('Welcome user')
      this.router.navigate(["/cart"])
    }

    console.log(data)
  //   if(data.name==="admin@gmail.com" && data.password==="123"){
  //   }else{
  //   }
  }



}
