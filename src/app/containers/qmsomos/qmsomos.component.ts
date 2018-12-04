import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../theme/pt';

@Component({
  selector: 'app-qmsomos',
  templateUrl: './qmsomos.component.html',
  styleUrls: ['./qmsomos.component.scss']
})
export class QmsomosComponent implements OnInit {

  public lang = LANG;
  
  constructor() { }

  ngOnInit() {
  }

}
