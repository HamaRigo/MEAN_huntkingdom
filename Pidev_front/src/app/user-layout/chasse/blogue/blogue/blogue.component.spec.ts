import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogueComponent } from './blogue.component';

describe('BlogueComponent', () => {
  let component: BlogueComponent;
  let fixture: ComponentFixture<BlogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
