import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/components/header/header.component';
import { SideNavComponent } from './layout/components/side-nav/side-nav.component';
import { BreadcrumbComponent } from './layout/components/breadcrumb/breadcrumb.component';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    BreadcrumbComponent,
    SideNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poc-admin-panel';
  currentLang = 'en';

  constructor(private _renderer: Renderer2) { }

  ngOnInit(): void {
    let htmlElem = document.documentElement;
    this._renderer.setAttribute(htmlElem, 'lang', this.currentLang);
    this.currentLang === 'ar' && this._renderer.setAttribute(htmlElem, 'dir', 'rtl');
  }
}
