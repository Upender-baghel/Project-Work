import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private toast:ToastrService,private rout:Router,private http:HttpClient) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get name(){
    return this.feedbackForm.get('name')
  }
  get email(){
    return this.feedbackForm.get('email')
  }
  get message(){
    return this.feedbackForm.get('message')
  }


  submit(){
    if(this.feedbackForm.valid){

      const url =`http://localhost:3000/data`
      this.http.post(url, this.feedbackForm.value).subscribe(
        (data:any)=>{  
          console.log(data);
          this.toast.success("Thanks For Your Feedback 😊")
          this.feedbackForm.reset() 
          this.rout.navigate(['/home/dash'])
          
          
        }
      )
    }else{
      this.toast.error("Please Fill Input Proper ⚠️")
    
    }
  }






}
