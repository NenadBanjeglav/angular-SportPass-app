import { Component, Input, OnInit } from '@angular/core';
import { Account, Membership, Packet } from 'src/app/models/models';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  packet:Packet = new Packet();

  @Input()
  membership:Membership = new Membership();

  green:boolean = false;
  yellow:boolean = false;
  red:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.membership.status);
    if(this.membership.status < 70){
      this.green = true;
    }else if(this.membership.status >= 70 && this.membership.status < 100){
      this.yellow = true;
    }else{
      this.red = true;
    }
  }


  
}
