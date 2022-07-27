import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlogueComponent } from './detail-blogue.component';

describe('DetailBlogueComponent', () => {
  let component: DetailBlogueComponent;
  let fixture: ComponentFixture<DetailBlogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBlogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
