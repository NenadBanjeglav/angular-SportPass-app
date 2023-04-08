import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Account, AccountMembership, City, Packet, PacketList } from '../models/models';

const packetsUrl = 'http://localhost:3000/api/packets'
const citiesUrl = 'http://localhost:3000/api/cities'
const accountsUrl = 'http://localhost:3000/api/accounts'
const memUrl = 'http://localhost:3000/api/account/membership'
const accUrl = 'http://localhost:3000/api/account'

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http: HttpClient) { }

  getPackets(params?:any):Observable<PacketList>{
    let options = {};
    if(params){
      options = {
        params: new HttpParams()
        .set('sort', params.sort || '')
        .set('sortDirection', params.sortDirection || '')
        .set('filter', params.filter && JSON.stringify(params.filter) || '')
      }
    }

    return this.http.get(packetsUrl, options).pipe(
      map((data:any)=>{
        return new PacketList(data);
      })
    )
  }

  getCities(): Observable<City[]> {
    return this.http.get(citiesUrl).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new City(elem))) || [];
      })
    );
  }

  catchError(error: { message: any; }):Observable<Response>{
    if(error && error.message){
      alert('Email already exists')
    }
    return throwError(error);
  }

  regAccount(account:Account):Observable<any>{
    return this.http.post(accountsUrl, account).pipe(
      catchError(err => this.catchError(err))
    );
  }

  getPacketById(id:number):Observable<Packet>{
    return this.http.get(packetsUrl + "/" + id).pipe(
      map((data:any)=>{
        return new Packet(data);
      })
    )
  }

  buyMem(accMem:AccountMembership):Observable<any>{
    return this.http.post(memUrl, accMem);
  }

  getAccount(params?:any):Observable<Account>{
    let options = {};
    if(params){
      options = {
        params: new HttpParams()
        .set('email', params.email || '')
        .set('password', params.password || '')
      }
    }

    return this.http.get(accUrl, options).pipe(
      map((data:any)=>{
        return new Account(data);
      })
    )
  }

}
