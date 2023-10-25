import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillDialogComponent } from './new-bill-dialog.component';

describe('NewBillDialogComponent', () => {
  let component: NewBillDialogComponent;
  let fixture: ComponentFixture<NewBillDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBillDialogComponent]
    });
    fixture = TestBed.createComponent(NewBillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
