import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeachTesteComponent } from './foreach-teste.component';

describe('ForeachTesteComponent', () => {
  let component: ForeachTesteComponent;
  let fixture: ComponentFixture<ForeachTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeachTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeachTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
