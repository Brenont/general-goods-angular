import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmsomosComponent } from './qmsomos.component';

describe('QmsomosComponent', () => {
  let component: QmsomosComponent;
  let fixture: ComponentFixture<QmsomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmsomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
