import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormEditComponent } from './modal-form-edit.component';

describe('ModalFormEditComponent', () => {
  let component: ModalFormEditComponent;
  let fixture: ComponentFixture<ModalFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
