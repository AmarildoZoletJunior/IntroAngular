import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterTesteComponent } from './emitter-teste.component';

describe('EmitterTesteComponent', () => {
  let component: EmitterTesteComponent;
  let fixture: ComponentFixture<EmitterTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
