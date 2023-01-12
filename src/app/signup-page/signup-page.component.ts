import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {


  public signUpForm !: FormGroup;
  constructor( private fb : FormBuilder ,private http : HttpClient ,private router : Router){}
  ngOnInit(): void {
      this.signUpForm = this.fb.group ({
        fullname:['FAZAL'],
        email:['ADMIN@mail.com'],
        password:['ADMIN'],
      })
      
  }
  signUp (){
    console.log(this.signUpForm.value);
    // ADD HTTP 
    this.http.post<any>('http://localhost:3000/signUpUser',this.signUpForm.value).subscribe(res => {
      alert('Dear ' + this.signUpForm.value.fullname + ' Successfully SignUp Account' + `Move to Login Page \n\n` + `Add UserName ==> ` + this.signUpForm.value.email + `\nAdd Password ==> ` + this.signUpForm.value.email);
      
      this.signUpForm.reset();
      this.router.navigate(['login']);
    })
  }
}
