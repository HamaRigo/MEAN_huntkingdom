import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdminAuthComponent } from './layout-admin-auth.component';

describe('LayoutAdminAuthComponent', () => {
  let component: LayoutAdminAuthComponent;
  let fixture: ComponentFixture<LayoutAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAdminAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
