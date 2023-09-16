import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesureComponent } from './list-mesure.component';

describe('ListMesureComponent', () => {
  let component: ListMesureComponent;
  let fixture: ComponentFixture<ListMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMesureComponent]
    });
    fixture = TestBed.createComponent(ListMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
