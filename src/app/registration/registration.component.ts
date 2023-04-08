import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account, City } from '../models/models';
import { GymService } from '../service/gym.service';
import { PassMatch } from './validators/pass-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  cities:City[] = [];
  accCity:City = new City();
  account:Account = new Account();

  form:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    passConfirm: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  },
  [PassMatch.MatchValidator('password', 'passConfirm')]);

  get passwordMatchError(){
    return(
      this.form.getError('mismatch') &&
      this.form.get('passConfirm')?.touched
    )
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get passConfirm() {
    return this.form.get('passConfirm');
  }
  get name() {
    return this.form.get('name');
  }
  get city() {
    return this.form.get('city');
  }

  constructor(private service: GymService, private router:Router) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(){
    this.service.getCities().subscribe({
      next:(data:City[])=>{
        this.cities = data
        console.log(this.cities)
      },
      error:(err:any)=>console.log(err)
    })
  }

  onRegistration(){
    for(let city of this.cities){
      if(city.id == this.form.value.city){
        this.accCity = city;
      }
    }

    this.account.email = this.form.value.email;
    this.account.password = this.form.value.password;
    this.account.name = this.form.value.name;
    this.account.city = this.accCity;
    this.account.memberships = [];
    
    console.log(this.account);

    this.service.regAccount(this.account).subscribe((account:Account)=>{
      this.router.navigate(['/packets'])
    })
  }

 

}
