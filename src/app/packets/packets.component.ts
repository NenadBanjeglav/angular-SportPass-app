import { Component, OnInit } from '@angular/core';
import { PacketList } from '../models/models';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.css']
})
export class PacketsComponent implements OnInit {

  params = {
    sort: 'price',
    sortDirection: '',
    filter: {
      monthsFrom: 1,
      monthsTo: 6,
      tpmFrom: 12
    }
  }


  brojTreninga:number = 12;


  packets:PacketList = new PacketList();

  constructor(private service: GymService) { }

  ngOnInit(): void {
    this.getPackets();
  }

  getPackets(){
    this.service.getPackets(this.params).subscribe({
      next:(data:PacketList)=>{
        this.packets = data;
        console.log(this.packets)
      },
      error:(err:any)=> console.log(err)
    })
  }

  sviChecked(event:any){
    this.params.filter.monthsFrom = 1;
    this.params.filter.monthsTo = 6;
    this.getPackets();
  }

  oneChecked(event:any){
    this.params.filter.monthsFrom = 1;
    this.params.filter.monthsTo = 1;
    this.getPackets();
  }

  moreChecked(event:any){
    this.params.filter.monthsFrom = 3;
    this.params.filter.monthsTo = 6;
    this.getPackets();
  }

  tpmChange(event:any){
    this.params.filter.tpmFrom = event.target.value;
    this.brojTreninga = event.target.value;
    this.getPackets();
  }

  sortDirectionChange(event:any){
    this.params.sortDirection = event.target.value;
    this.getPackets();
  }

}
