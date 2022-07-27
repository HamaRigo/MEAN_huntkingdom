import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGibierComponent } from './update-gibier.component';

describe('UpdateGibierComponent', () => {
  let component: UpdateGibierComponent;
  let fixture: ComponentFixture<UpdateGibierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGibierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGibierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
