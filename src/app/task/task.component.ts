import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  projects:any=[];
  constructor(private http:HttpClient){}
  onStatusChange(data :any){
    //this.projects[data.index].status=data.value;
    //console.log(this.projects[data.index])
    this.projects[data.index-1].status=data.value;
    console.log(data.value)
    this.http.put("http://localhost:3000/task/"+data.index+"",this.projects[data.index-1]).subscribe((res)=> {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/task").subscribe((res) => {
        this.projects=res;
    })
  }

}
