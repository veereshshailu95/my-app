import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {



    userForm:FormGroup = new FormGroup({
      id:new FormControl(),
      title:new FormControl(),
      description:new FormControl(),
      category:new FormControl(),
      price:new FormControl(),
      discountPercentage:new FormControl(),
      rating:new FormControl(),
      stock:new FormControl(),
       tags:new FormControl(),
       beauty: new FormControl(),
       mascara:new FormControl(),
       brand:new FormControl(),
       sku:new FormControl(),
       weight:new FormControl(),
       dimensions:new FormGroup({
         width: new FormControl(),
         height:new FormControl(),
         depth: new FormControl(),
        }),
         warrantyInformation:new FormControl(),
         shippingInformation:new FormControl(),
         availabilityStatus:new FormControl(),
         

         reviews:new FormArray([])
      
    })

    get reviewsFormArray(){
      return this.userForm.get('reviews') as FormArray;
    }

    addreviews(){
    this.reviewsFormArray.push(
      new FormGroup({
        rating:new FormControl(),
        comment:new FormControl(),
        date:new FormControl(),
        reviewerName:new FormControl(),
        reviewerEmail:new FormControl(),

      })


      
    )
    }

    delete(i:number){
      this.reviewsFormArray.removeAt(i);
    }

    
   


    submit(){
    console.log (this.userForm.value)
    }


    

  totalform:any=[];
  constructor(private form:FormService){
    this.form.getform().subscribe(
      (data:any)=>{
        console.log(data);
        this.totalform=data;
      }
    )
  }
}
