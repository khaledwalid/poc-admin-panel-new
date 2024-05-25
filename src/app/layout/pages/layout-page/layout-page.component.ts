import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
// import { routes } from './layout.routes';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SideNavComponent
  ],
  // providers: [
  //   provideRouter(routes),
  // ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {

}
