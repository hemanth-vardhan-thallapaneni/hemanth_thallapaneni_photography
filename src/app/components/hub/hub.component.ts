import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/shared/services/data-share.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

type AppState = 'LANDING' | 'PHOTOGRAPHY' | 'APPS';

interface PipelineProject {
  name: string;
  status: string;
  desc: string;
  id?: string;
}

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  currentState: AppState = 'LANDING';
  isDarkMode: boolean = false;
  photos$: Observable<any[]> | undefined;
  systemLatency: number = 12;

  pipeline: PipelineProject[] = [
    { name: 'MONOPET', status: 'PROTOTYPING', desc: 'Virtual entity management via industrial monochrome interface.' },
    { name: 'ON AIR', status: 'IDEATION', desc: 'Real-time broadcast utility for distributed acoustic nodes.' },
    { id: 'splix', name: 'SPLIX', status: 'STABLE', desc: 'A ZERO-SUBSCRIPTION GROUP EXPENSE LEDGER.' }
  ];

  aboutBio = `
    HEMANTH THALLAPANENI. 
    RESEARCHER. DEVELOPER. PHOTOGRAPHER.
    CURRENTLY BUILDING BRUTALIST UTILITIES AND CINEMATIC ARCHIVES.
    FOCUSED ON PERFORMANCE, PRIVACY, AND RAW AESTHETIC INTEGRITY.
  `;

  techSpecs = {
    'CORE UTILITY': 'DEBT & BALANCE LEDGER',
    'PLATFORM': 'NATIVE IOS'
  };

  constructor(
    private dataService: DataShareService,
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photos$ = this.dataService.getAllPhotos();
    this.themeService.isDarkMode.subscribe(mode => {
      this.isDarkMode = mode;
      if (mode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });

    // Sync state with URL path
    this.syncStateWithRoute();
    
    // Simulate live telemetry
    setInterval(() => {
      this.systemLatency = Math.floor(Math.random() * (24 - 8 + 1)) + 8;
    }, 3000);
  }

  private syncStateWithRoute() {
    const path = window.location.pathname;
    if (path.includes('/photography')) {
      this.currentState = 'PHOTOGRAPHY';
    } else if (path.includes('/software')) {
      this.currentState = 'APPS';
    } else {
      this.currentState = 'LANDING';
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme(!this.isDarkMode);
  }

  setState(state: AppState) {
    this.currentState = state;
    const path = state === 'PHOTOGRAPHY' ? '/photography' : 
                 state === 'APPS' ? '/software' : '/';
    this.router.navigate([path]);
    window.scrollTo(0, 0);
  }

  viewApp(id: string | undefined) {
    if (id) {
      this.router.navigate(['/software', id]);
    }
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'start' 
      });
    }
  }

  getTechStamp(photo: any) {
    const bodies = ['FUJIFILM X-S20', 'CANON R5', 'SONY A7RIV'];
    const lenses = ['35MM F/1.4', '23MM F/2', '56MM F/1.2'];
    const locs = ['CONCORD', 'HOUSTON', 'NEW YORK', 'TOKYO'];
    
    const seed = photo.name ? photo.name.length : 1;
    return {
      BODY: bodies[seed % bodies.length],
      LENS: lenses[seed % lenses.length],
      LOC: photo.category ? photo.category.toUpperCase() : locs[seed % locs.length]
    };
  }
}

