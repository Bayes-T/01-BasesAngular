import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StwListComponent } from './stw-list.component';

describe('StwListComponent', () => {
  let component: StwListComponent;
  let fixture: ComponentFixture<StwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StwListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
