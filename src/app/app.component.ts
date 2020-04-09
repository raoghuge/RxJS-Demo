import { Component } from '@angular/core';
import { ThemingService } from './services/theming.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trial';

  constructor(
    public themeService: ThemingService,
    public authService : AuthService
    ) {

  }

  changeTheme(t) {
    this.themeService.change(t);
  }
}
