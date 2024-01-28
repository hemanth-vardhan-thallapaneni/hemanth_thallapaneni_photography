import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  toggleTheme(mode: boolean) {
    this.isDarkMode.next(mode);
  }
}
