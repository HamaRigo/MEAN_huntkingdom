import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrucAstuceComponent } from './update-truc-astuce.component';

describe('UpdateTrucAstuceComponent', () => {
  let component: UpdateTrucAstuceComponent;
  let fixture: ComponentFixture<UpdateTrucAstuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrucAstuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrucAstuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
