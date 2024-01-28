import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  isDarkMode: boolean = false;
  navItems: any[] = [
    {
      name: 'photography',
      route: 'photography',
    },
    {
      name: 'digital art | coming soon',
      //route: 'digital_art',
    },
    // {
    //   name: 'shop',
    //   route: 'shop',
    // },
  ];

  constructor(private router: Router, private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe(
      (mode: boolean) => (this.isDarkMode = mode)
    );
  }

  routeToPage(routeName: string) {
    this.router.navigate([routeName]);
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }
}
