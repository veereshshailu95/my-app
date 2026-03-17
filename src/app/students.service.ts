import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpstudent:HttpClient ) { }
    getstudent(){
      return this.httpstudent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
    }

     getstuden(id:string){
      return this.httpstudent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
    }

    


    getStudentsWithQueryParams(term:string,column:string,order:string,page:number):Observable<any>{
      return this.httpstudent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term+"&sortby="+column+"&order="+order+"limit=10page="+page);
    }

    
  editStudent(id:string,student:any):Observable<any>{
    return this.httpstudent.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,student);
  }

    

  deleteaccounts(id:string):Observable<any>{
          return this.httpstudent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)

  }
}
