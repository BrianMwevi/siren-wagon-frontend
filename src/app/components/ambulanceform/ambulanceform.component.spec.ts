import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceformComponent } from './ambulanceform.component';

describe('AmbulanceformComponent', () => {
  let component: AmbulanceformComponent;
  let fixture: ComponentFixture<AmbulanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
