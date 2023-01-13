import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { productData } from './data-interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afirestore : AngularFirestore){}

  // Creating DB for products

  // name of product

  addProductName(productname : productData){
    productname.pname = this.afirestore.createId();
    return this.afirestore.collection('/Products').add(productname);
  }


  // Displaying new product details in div below
  getProducts(){
    // get collection of 'Products' from fsdb
    return this.afirestore.collection('/Products').snapshotChanges();
  }


  // Not including CRUD = (Delete and Update)

  // // CRU (Delete)
 
  // deleteProduct(productname : productData){
  //   return this.afirestore.doc('/Products/' + productname.pname).delete();
  // }


  // updateProduct(productname : productData){
  //   this.deleteProduct(productname);
  //   this.addProductName(productname);
  // }

}
