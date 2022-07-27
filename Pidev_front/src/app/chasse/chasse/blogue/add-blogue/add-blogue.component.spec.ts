import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogueComponent } from './add-blogue.component';

describe('AddBlogueComponent', () => {
  let component: AddBlogueComponent;
  let fixture: ComponentFixture<AddBlogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
