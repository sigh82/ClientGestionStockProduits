import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  credentials={
    username: '',
    password: ''
  };



  constructor( private fb : FormBuilder,
               private appService : AppService,
               private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['',Validators.compose([Validators.minLength(3), Validators.required])],
      password : ['', Validators.compose([Validators.minLength(3), Validators.required])]
    })
  }

  login(){
    this.appService.authenticate(this.credentials, () => {
      this.router.navigateByUrl("/home/(contentOutlet:produit)");
    } )
  }

}
