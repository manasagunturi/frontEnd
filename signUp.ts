import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  type:string="password";
  isText : boolean=false;
  eyeIcon: string="fa-eye-slash";
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder,private service:UserServiceService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
      // username:['',Validators.required],
    })
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  registerData(){
    console.log(this.registerForm.value)
    const param={
      "firstName":this.registerForm.value['firstName'],
      "lastName":this.registerForm.value['lastName'],
      "email":this.registerForm.value['email'],

      "password":this.registerForm.value['password'],
      "phone":this.registerForm.value['phone']

    }
this.service.getData(param)
  }
}
