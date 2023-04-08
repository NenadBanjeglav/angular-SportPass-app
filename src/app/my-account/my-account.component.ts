import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/models';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  params = {
    email: '',
    password: '',
  }

  account:Account = new Account();

  form:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  login:boolean = false;
  

  constructor(private service:GymService) { }

  ngOnInit(): void {
    
  }

  getAccount(){
    this.params.email = this.form.value.email;
    this.params.password = this.form.value.password;
    this.service.getAccount(this.params).subscribe({
      next:(data:Account)=>{
        this.account = data;
        console.log(this.account)
        this.login = true;
      },
      error:(err:any)=> {
        console.log(err);
        alert('Email does not exist.');
        this.form.reset();

    }
  })

  }
}
