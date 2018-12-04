import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../theme/pt'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }

}
