import { Component, OnInit } from '@angular/core';
import { getToken, AppCheck } from '@angular/fire/app-check';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hemanth_thallapaneni_photography';

  constructor(private appCheck: AppCheck) {}
  ngOnInit() {
    getToken(this.appCheck).then((token) => {
      //
    });
  }
}
