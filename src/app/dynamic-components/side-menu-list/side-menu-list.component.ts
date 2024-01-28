import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss'],
})
export class SideMenuListComponent {
  constructor(
    public dialogRef: MatDialogRef<SideMenuListComponent>,
    private router: Router
  ) {}
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
    {
      name: 'about',
      route: 'about',
    },
    {
      name: 'Thank you!',
      route: '',
    },
  ];
  routeToPage(routeName: string) {
    this.router.navigate([routeName]);
  }
}
