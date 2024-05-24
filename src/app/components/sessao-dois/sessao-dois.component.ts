import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sessao-dois',
  standalone: true,
  imports: [],
  templateUrl: './sessao-dois.component.html',
  styleUrl: './sessao-dois.component.css'
})
export class SessaoDoisComponent {
    constructor() { }

    ngOnInit(): void {
      const sr = ScrollReveal({
        reset: false,
        duration: 1000,
        easing: 'ease-in-out'
      });

      sr.reveal('.fade');

    }
}
