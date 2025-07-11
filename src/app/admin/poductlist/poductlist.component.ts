import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-poductlist',
  templateUrl: './poductlist.component.html',
  styleUrls: ['./poductlist.component.css'],
})
export class PoductlistComponent implements OnInit {
  id: any;
  data: any;
  formData: any; // Initialize formData as a FormGroup

  constructor(private api: ContactService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID' + ' ' + this.id);
  }

  ngOnInit(): void {
    // Initialize the form with empty or default values
    this.formData = new FormGroup({
      id: new FormControl('0'),
      Title: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });

    if (this.id != null) {
      // If there's an ID, fetch the product data
      this.api.getbyidproduct(this.id).subscribe(
        (result) => {
          console.log('API Result:', result);
          this.data = result; // Store the fetched data
          this.populateForm(); // Populate the form with the fetched data
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }

  // Populate form fields with the fetched data
  populateForm(): void {
    if (this.data) {
      // Use patchValue to update the form values
      this.formData.patchValue({
        id: this.data.id ?? '0',
        Title: this.data.Title ?? '',
        image: this.data.image ?? '',
        price: this.data.price ?? '',
      });
    }
  }

  // Handle form submission
  adddata(data: any): void {
    if (data.id != '0') {
      // If the product has an ID, perform an update (PUT request)
      this.api.put(data.id, data).subscribe((result) => {
        this.router.navigate(['./admin/productsadmin']);
        console.log(result);
      });
    } else {
      // If the product doesn't have an ID, perform a create (POST request)
      this.api.post(data).subscribe((result) => {
        this.router.navigate(['./admin/productsadmin']);
      });
    }
  }

}
