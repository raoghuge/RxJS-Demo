import { Injectable } from '@angular/core';
import * as light from '../services/light.json';
import * as dark from './dark.json';


@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  private themeWrapper = document.querySelector('body');
  private dark = (dark  as  any).default;
  private light =  (light as any).default;
  constructor() { }

  change(type) {
    switch (type) {
      case 'dark': this.loadTheme(this.dark);
      break;
      case 'light': this.loadTheme(this.light);
    }
  }

  private loadTheme(stylesheet) {
    this.themeWrapper.style.setProperty('--background', stylesheet['background']);
    this.themeWrapper.style.setProperty('--color', stylesheet.color);
    this.themeWrapper.style.setProperty('--defaultFont', stylesheet.defaultFont);
  }
}
