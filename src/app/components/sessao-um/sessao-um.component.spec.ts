import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoUmComponent } from './sessao-um.component';

describe('SessaoUmComponent', () => {
  let component: SessaoUmComponent;
  let fixture: ComponentFixture<SessaoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
