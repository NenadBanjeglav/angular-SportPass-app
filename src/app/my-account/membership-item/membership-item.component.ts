import { Component, Input, OnInit } from '@angular/core';
import { Membership, Packet } from 'src/app/models/models';

@Component({
  selector: 'app-membership-item',
  templateUrl: './membership-item.component.html',
  styleUrls: ['./membership-item.component.css']
})
export class MembershipItemComponent implements OnInit {

  @Input()
  membership:Membership = new Membership();

  @Input()
  packet:Packet = new Packet();

  constructor() { }

  ngOnInit(): void {
  }

}
