import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'src/model/rol';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent implements OnInit {

  @Input()
  rol: Rol;


  constructor() { }

  ngOnInit(): void {
  }

}
