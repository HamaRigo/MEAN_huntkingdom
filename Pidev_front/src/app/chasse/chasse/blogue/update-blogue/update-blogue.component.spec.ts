import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogueComponent } from './update-blogue.component';

describe('UpdateBlogueComponent', () => {
  let component: UpdateBlogueComponent;
  let fixture: ComponentFixture<UpdateBlogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
