import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data:Array<{id:number,name:string,duration:string,status:string}>=[]
  // selectedvalue : string='1';
  @Output()statuschanged : EventEmitter<{index:number,value:string}>=new EventEmitter<{index:number,value:string}>()
  onChange(index:number,value:any) {
    this.statuschanged.emit({index:index,value:value.target.value});
    
  }
}
