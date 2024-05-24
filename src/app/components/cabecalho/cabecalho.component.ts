import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent {
  constructor() { }

  ngOnInit(): void {
    const sr = ScrollReveal({
      reset: false,
      duration: 1000,
      easing: 'ease-in-out'
    });

    sr.reveal('header');

  }
}