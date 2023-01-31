import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTesteUmComponent } from './http-teste-um.component';

describe('HttpTesteUmComponent', () => {
  let component: HttpTesteUmComponent;
  let fixture: ComponentFixture<HttpTesteUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpTesteUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTesteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
