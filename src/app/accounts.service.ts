import { HttpClient } from '@angular/common/http';
import { Injectable, KeyValueDiffers } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

 
  constructor(private httpaccounts:HttpClient) { }
    getaccounts():Observable<any>{
      return this.httpaccounts.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
    }

    deleteaccount(id:string):Observable<any>{
      return this.httpaccounts.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
    }

    sortaccounts(column:string,order:string):Observable<any>{
      return this.httpaccounts.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby="+column+"&order"+order)
    }

    filteraccounts(term:string):Observable<any>{
      return this.httpaccounts.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
    }

    getaccountWithQueryParams(term:string,column:string,order:string,page:number):Observable<any>{
      return this.httpaccounts.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page);
    }


  }

