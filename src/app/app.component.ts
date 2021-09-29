import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  FNc:string[]=[];
  LNc: string[] =[];
  SAc: string[] =[];
  SA2c: string[] =[];
  Cc: string[] =[];
  SPc: string[] =[];
  PZc: string[]=[] ;
  Pc: string[] =[];
  Ec: string[]=[] ;
  constructor() {
  }
  title="Villy";

  ngOnInit() {
    // this.FNc=["Oleg"];
    // this.LNc=["Sibirsky"];
    // this.SAc=["Golotina 42"];
    // this.SA2c=["Vatutina 32"];
    // this.Cc=["Kiev"];
    // this.SPc=["Kievska oblast"];
    // this.PZc=["00091"];
    // this.Pc=["093-322-14-12"];
    // this.Ec=["ee@ee.net"];
  }


  addUser(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string) {
    this.FNc.unshift(value);
    this.LNc.unshift(value2);
    this.SAc.unshift(value3);
    this.SA2c.unshift(value4);
    this.Cc.unshift(value5);
    this.SPc.unshift(value6);
    this.PZc.unshift(value7);
    this.Pc.unshift(value8);
    this.Ec.unshift(value9);
    return false;
  }
}
