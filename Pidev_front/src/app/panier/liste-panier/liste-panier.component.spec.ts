import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePanierComponent } from './liste-panier.component';

describe('ListePanierComponent', () => {
  let component: ListePanierComponent;
  let fixture: ComponentFixture<ListePanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
