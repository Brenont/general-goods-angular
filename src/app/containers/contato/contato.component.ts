import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../theme/pt';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }
  

}
