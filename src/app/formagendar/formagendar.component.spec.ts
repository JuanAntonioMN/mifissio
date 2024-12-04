import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormagendarComponent } from './formagendar.component';

describe('FormagendarComponent', () => {
  let component: FormagendarComponent;
  let fixture: ComponentFixture<FormagendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormagendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormagendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
