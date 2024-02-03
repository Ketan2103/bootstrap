import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms-control.component.html',
  styleUrl: './forms-control.component.scss'
})
export class FormsControlComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.formBuilder.group(this.formGroup);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
