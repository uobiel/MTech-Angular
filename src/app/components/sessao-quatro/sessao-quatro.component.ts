import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sessao-quatro',
  standalone: true,
  imports: [],
  templateUrl: './sessao-quatro.component.html',
  styleUrl: './sessao-quatro.component.css'
})
export class SessaoQuatroComponent {
    constructor() { }

    ngOnInit(): void {
      const sr = ScrollReveal({
        reset: false,
        duration: 1000,
        easing: 'ease-in-out'
      });

      sr.reveal('.container');

    }
}
