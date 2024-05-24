import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sessao-cinco',
  standalone: true,
  imports: [],
  templateUrl: './sessao-cinco.component.html',
  styleUrl: './sessao-cinco.component.css'
})
export class SessaoCincoComponent {
  constructor() { }

  ngOnInit(): void {
    const sr = ScrollReveal({
      reset: false,
      duration: 1000,
      easing: 'ease-in-out'
    });

    sr.reveal('.section-four');

  }
}
