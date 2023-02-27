import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit{

  projects:any=[];
  constructor(private http:HttpClient){}
  onStatusChange(data :any){
    //this.projects[data.index].status=data.value;
    //console.log(this.projects[data.index])
    this.projects[data.index-1].status=data.value;
    this.http.put("http://localhost:3000/milestone/"+data.index+"",this.projects[data.index-1]).subscribe((res)=> {
      //console.log(res);
    })
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/milestone").subscribe((res) => {
        this.projects=res;
    })
  }

}
