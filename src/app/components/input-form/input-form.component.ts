import { Component, OnInit, Input } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
// import { type } from 'os';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input() placeHolder : string;
  @Input() id :string;
  @Input() name :string;
  @Input() type :string;

  constructor() { }

  ngOnInit() {
  }

}
