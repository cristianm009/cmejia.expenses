import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('',
      [
        Validators.required,
        Validators.email,
       /* Validators.minLength(4),
        Validators.maxLength(10)*/
      ]
    );
    // this.emailField.valueChanges.subscribe(value => console.log(value));
  }

  ngOnInit() {
  }

  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}