import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../theme/pt'

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }

}
