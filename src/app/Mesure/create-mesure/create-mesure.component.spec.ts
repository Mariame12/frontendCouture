import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMesureComponent } from './create-mesure.component';

describe('CreateMesureComponent', () => {
  let component: CreateMesureComponent;
  let fixture: ComponentFixture<CreateMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMesureComponent]
    });
    fixture = TestBed.createComponent(CreateMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
