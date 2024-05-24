import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoQuatroComponent } from './sessao-quatro.component';

describe('SessaoQuatroComponent', () => {
  let component: SessaoQuatroComponent;
  let fixture: ComponentFixture<SessaoQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoQuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
