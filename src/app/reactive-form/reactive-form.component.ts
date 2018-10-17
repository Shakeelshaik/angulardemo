import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  addUser() {
    console.log(this.form.value);
  }
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl('')
    });
  }

}
