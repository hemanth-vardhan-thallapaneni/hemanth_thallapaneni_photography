import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {}

  navigateToSocial(social: string) {
    if (social === 'instagram') {
      window.open('https://www.instagram.com/thallapaneni_hemanth/', '_blank');
    } else if (social === 'linkedin') {
      window.open(
        'https://www.linkedin.com/in/thallapaneni-hemanth/',
        '_blank'
      );
    } else if (social === 'gmail') {
      window.open('mailto:hemanthvardhan5@gmail.com');
    }
  }
}
