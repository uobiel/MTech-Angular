import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sessao-tres',
  standalone: true,
  imports: [],
  templateUrl: './sessao-tres.component.html',
  styleUrl: './sessao-tres.component.css'
})
export class SessaoTresComponent {
    constructor() { }

    ngOnInit(): void {
      const sr = ScrollReveal({
        reset: false,
        duration: 1000,
        easing: 'ease-in-out'
      });

      sr.reveal('.linha');

    }
}
