import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail } from './validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.minLength(18), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email, capgeminiEmail]),
    phone: new FormControl('', [Validators.min(1000000000), Validators.max(9999999999)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pin: new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee:new FormControl(),

    cards: new FormArray([]),
    images: new FormArray([])

  })
  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;

  }

  get imagesFormArray() {
    return this.userForm.get('images') as FormArray;
  }

  addCard() {
    this.cardsFormArray.push(
      new FormGroup({
        name: new FormControl(),
        number: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }



  addImage() {
    this.imagesFormArray.push(
      new FormControl()
    )
  }



  delete(i: number) {
    this.cardsFormArray.removeAt(i);
  }
  deleteimage(i: number) {
    this.imagesFormArray.removeAt(i);
  }


  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: string) => {
        if (data === 'DayScholar') {
          //add bus fee
          this.userForm.addControl('busfee', new FormControl('', Validators.required));
          //remove hostel fee
          this.userForm.removeControl('hostelfee');
        }
        else if (data == 'Residential') {
          //add hostel fee
          this.userForm.addControl('hostelfee', new FormControl('', Validators.required));
          //remove busfee
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  submit() {
    console.log(this.userForm.value)
  }
}

