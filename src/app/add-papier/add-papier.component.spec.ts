import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPapierComponent } from './add-papier.component';

describe('AddPapierComponent', () => {
  let component: AddPapierComponent;
  let fixture: ComponentFixture<AddPapierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPapierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
