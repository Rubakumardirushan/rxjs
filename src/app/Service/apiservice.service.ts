import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private http: HttpClient) { }

 getdata():Observable<any>{
   return this.http.get('https://fakestoreapi.com/carts').pipe(map((data:any)=>{
      return data.map((iteam:any)=>{

        return {
          id:iteam.id,
          date:iteam.date,

        }
      })
   }));

 }


}
