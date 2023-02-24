import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  
  projects:any=[];
  constructor(private http:HttpClient){}
  onStatusChange(data :any){
    //this.projects[data.index].status=data.value;
    //console.log(this.projects[data.index])
    this.projects[data.index-1].status=data.value;
    console.log(data.value)
    this.http.put("http://localhost:3000/projects/"+data.index+"",this.projects[data.index-1]).subscribe((res)=> {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/projects").subscribe((res) => {
        this.projects=res;
    })
  }

}
