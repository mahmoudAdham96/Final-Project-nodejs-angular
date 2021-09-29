import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBarComponent } from './default-bar.component';

describe('DefaultBarComponent', () => {
  let component: DefaultBarComponent;
  let fixture: ComponentFixture<DefaultBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
