import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {
  status: any = {}
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/status.json');
  }
}
