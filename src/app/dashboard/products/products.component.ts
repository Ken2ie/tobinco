import { Component } from '@angular/core';
import { productData } from '../user/data-interface';
import { DataService } from '../user/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList : productData[] = [];

  pname: string = '';
    measure_unit : string = '';
    size :  string = '';
    pcode : string  = '';
    cash_price : string = ''; 
    credit_price : string = ''; 
    hospital_price : string = ''; 
    brief_description : string = '';
    detailed_description : string = '';
  
  constructor (private data :  DataService){}

  getProducts(){
    this.data.getProducts().subscribe(res => {
      this.productList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Please check your connection and fields.')
     });
  }


  addProducts(){}

}
