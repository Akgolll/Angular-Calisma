import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddForms1Component } from './product-add-forms1.component';

describe('ProductAddForms1Component', () => {
  let component: ProductAddForms1Component;
  let fixture: ComponentFixture<ProductAddForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddForms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
