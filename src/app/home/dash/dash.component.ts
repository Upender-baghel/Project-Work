import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
  data:any[]=[]

  constructor(private http:HttpClient){
    const url = `http://localhost:3000/data`
    this.http.get(url).subscribe(
      (result:any)=>{
        this.data = result
        console.log(this.data);
        
      }
    )
  }

}
