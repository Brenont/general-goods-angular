import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() active: string;

  public homeActive: boolean = false;
  public productActive: boolean = false;
  public companyActive: boolean = false;
  public contactActive: boolean = false;

  public toogle = false;

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
    this.toogle = !this.toogle;
  }

}

