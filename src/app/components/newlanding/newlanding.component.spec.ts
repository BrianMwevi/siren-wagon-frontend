import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandingComponent } from './newlanding.component';

describe('NewlandingComponent', () => {
  let component: NewlandingComponent;
  let fixture: ComponentFixture<NewlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
