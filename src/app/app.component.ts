import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { SessaoUmComponent } from './components/sessao-um/sessao-um.component';
import { SessaoDoisComponent } from './components/sessao-dois/sessao-dois.component';
import { SessaoTresComponent } from './components/sessao-tres/sessao-tres.component';
import { SessaoQuatroComponent } from './components/sessao-quatro/sessao-quatro.component';
import { SessaoCincoComponent } from './components/sessao-cinco/sessao-cinco.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, 
            SessaoUmComponent, SessaoDoisComponent, 
            SessaoTresComponent, SessaoQuatroComponent,
            SessaoCincoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MTech';
}
