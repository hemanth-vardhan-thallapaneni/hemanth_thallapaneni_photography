import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SideMenuListComponent } from 'src/app/dynamic-components/side-menu-list/side-menu-list.component';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  isDarkMode: boolean = false;
  showMenuButton: boolean = false;
  public innerWidth: any;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 767) {
      this.showMenuButton = true;
    } else {
      this.showMenuButton = false;
    }
  }
  constructor(
    private router: Router,
    private themeService: ThemeService,
    private dialog: MatDialog
  ) {
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

  toggleSideMenu() {
    this.dialog.open(SideMenuListComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      enterAnimationDuration: '300ms',
    });
  }
}
