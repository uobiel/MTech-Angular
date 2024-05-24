import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sessao-um',
  standalone: true,
  imports: [],
  templateUrl: './sessao-um.component.html',
  styleUrl: './sessao-um.component.css'
})
export class SessaoUmComponent {
  constructor() { }

  ngOnInit(): void {
    const sr = ScrollReveal({
      reset: false,
      duration: 1000,
      easing: 'ease-in-out'
    });

    sr.reveal('.left');
    sr.reveal('.rigth');

  }
}
