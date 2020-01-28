import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  public studentForm = this.formBuilder.group({
    name: ['', Validators.required],
    photo: ['', Validators.required],
    case: ['', Validators.required],
    school: ['', Validators.required],
    address: this.formBuilder.group({
      cep: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    }),
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  public imgUrl: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

  onSubmit() { console.log('submit'); }

  onSelectImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (onloadEvent) => { // called once readAsDataURL is completed
        this.imgUrl = onloadEvent.target.result as string;
      };
    }
    console.log(this.studentForm);
  }

}
