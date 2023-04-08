import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountMembership, Membership, Packet, PacketList } from '../models/models';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-buy-specific',
  templateUrl: './buy-specific.component.html',
  styleUrls: ['./buy-specific.component.css']
})
export class BuySpecificComponent implements OnInit {

  memberships:PacketList = new PacketList();
  packet: Packet = new Packet();
  packetId:number = 0;
  accMembership: AccountMembership = new AccountMembership();
  membership:Membership = new Membership();

  form:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    packets: new FormControl('',Validators.required)
  });

  

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get packets(){
    return this.form.get('packets')
  }

  constructor(private service: GymService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.packetId = params['id'];
    })
    this.getPackets();
  }

  getPackets(){
    this.service.getPackets().subscribe({
      next:(data:PacketList)=>{
        this.memberships = data;
        this.form.get('packets')?.setValue(this.packetId);
        console.log(this.memberships)
      },
      error:(err:any)=> console.log(err)
    })
  }

  buyMem(){
    for(let packet of this.memberships.results){
      if(packet.id == this.form.value.packets){
        this.packet = packet;
      }
    }

    this.membership.packet = this.packet;
    this.accMembership.email = this.form.value.email;
    this.accMembership.password = this.form.value.password;
    this.accMembership.membership = this.membership;

    console.log(this.accMembership);
    
    this.service.buyMem(this.accMembership).subscribe((accMem:AccountMembership)=>{
      this.router.navigate(['/account'])
    })
  }




}
