import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor( private fb : FormBuilder ,private http : HttpClient ,private router : Router){}
  ngOnInit(): void {
    // debugger
    this.loginForm = this.fb.group ({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get email(){
    return this.loginForm.get('email')
  }
  login(){
    // debugger
    this.http.get<any>('http://localhost:3000/signUpUser').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      console.log(user);
      
      // const user = this.loginForm.find( m => m.email == this.loginForm.value.email && m.password == this.loginForm.value.password );
      if(user){
        alert('wellCome Back Account');
        this.loginForm.reset();

        this.router.navigate(['home'], { queryParams: user})
      }else {
        alert('user not Found');
        this.router.navigate(['signup'])
      }
      
    },err=>{
      alert('something wronged ')
    }
    )
  }

}
