import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoDoisComponent } from './sessao-dois.component';

describe('SessaoDoisComponent', () => {
  let component: SessaoDoisComponent;
  let fixture: ComponentFixture<SessaoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
