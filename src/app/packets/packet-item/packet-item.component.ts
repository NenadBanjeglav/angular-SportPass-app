import { Component, Input, OnInit } from '@angular/core';
import { Packet } from 'src/app/models/models';

@Component({
  selector: 'app-packet-item',
  templateUrl: './packet-item.component.html',
  styleUrls: ['./packet-item.component.css']
})
export class PacketItemComponent implements OnInit {

  @Input()
  packet:Packet = new Packet();

  @Input()
  renderBuy:boolean = false;



  constructor() { }

  ngOnInit(): void {
   
  }

 



}
