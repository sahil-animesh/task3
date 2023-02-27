import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  arr:Array<string>=[]
  @Input() data:Array<{id:number,name:string,duration:string,status:string}>=[]
  //selectedvalue : string='1';
  @Output()statuschanged : EventEmitter<{index:number,value:string,reason:string}>=new EventEmitter<{index:number,value:string,reason:string}>()
  @Output()statusunchanged : EventEmitter<number>=new EventEmitter<number>()
  onChange(index:number,value:any ,previousStatus:string) {
    console.log(value.target.value)
    if(value.target.value==1  || value.target.value==2)
    {
      const reason:any=prompt("Why Do You Want To Change The Status ");
      if(reason===null || reason=='')
      {
          //this.statusunchanged.emit();
          console.log('Called',previousStatus)
          value.target.value=previousStatus;
          console.log(value);
      }
      else
      {
         this.statuschanged.emit({index:index,value:value.target.value,reason:reason});
         alert("Your status has been successfully updated")
      }
    }
    else
    {
      this.statuschanged.emit({index:index,value:value.target.value,reason:""});
      alert("Your status has been successfully updated")
    }
    
  }
}
