import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() active :string;

  constructor() { }

  ngOnInit() {
  }

}
