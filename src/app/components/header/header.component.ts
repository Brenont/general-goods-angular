import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { LANG } from '../../../theme/pt'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang = LANG;

  @Input() active: string;

  public homeActive: boolean = false;
  public productActive: boolean = false;
  public companyActive: boolean = false;
  public contactActive: boolean = false;

  public toogleMenu = false;

  constructor() { }

  ngOnInit() {

    console.log(this.active);
    switch (this.active) {
      case 'home':
        this.homeActive = true;
        break;
      case 'produtos':
        this.productActive = true;
        break;
      case 'quem-somos':
        this.companyActive = true;
        break;
      case 'contato':
        this.contactActive = true;
        break;
      default:
        break;
    }
  }

  toogleSideMenu() {
    this.toogleMenu = !this.toogleMenu;
  }

}

