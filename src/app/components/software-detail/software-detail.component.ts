import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { SPLIX_LEGAL } from 'src/app/shared/constants/splix-legal.constants';

interface ShowcaseSection {
  id: string;
  title: string;
  desc: string;
  images: string[];
}

interface AppDetail {
  id: string;
  name: string;
  tagline: string;
  highlights: string[];
  appStoreLink: string;
  privacyPolicyLink: string;
  termsLink: string;
  manifesto: string;
  specs: any;
  showcaseSections?: ShowcaseSection[];
}

@Component({
  selector: 'app-software-detail',
  templateUrl: './software-detail.component.html',
  styleUrls: ['./software-detail.component.scss']
})
export class SoftwareDetailComponent implements OnInit {
  app: AppDetail | undefined;
  isDarkMode: boolean = false;
  legalData: any = null;
  isLegalView: boolean = false;

  private apps: AppDetail[] = [
    {
      id: 'splix',
      name: 'SPLIX',
      tagline: 'A ZERO-SUBSCRIPTION GROUP EXPENSE LEDGER',
      highlights: [
        'Track shared expenses and log balances inside isolated groups.',
        'One-time acquisition model with zero subscription dependencies.',
        'Cloud-synced infrastructure for real-time ledger updates across group members.',
        'Authenticated user sessions to securely preserve balance history across devices.'
      ],
      appStoreLink: 'https://apps.apple.com/us/app/splix-app/id6760433317',
      privacyPolicyLink: '/software/splix/privacy',
      termsLink: '/software/splix/termsandconditions',
      manifesto: 'OWN YOUR DATA. OWN YOUR TOOLS.',
      specs: {
        'CORE UTILITY': 'DEBT & BALANCE LEDGER',
        'PLATFORM': 'NATIVE IOS'
      },
      showcaseSections: [
        {
          id: '01',
          title: 'OVERVIEW',
          desc: 'A simple, fast dashboard displaying exactly who owes money and who is owed, giving you radical financial clarity immediately upon opening the app.',
          images: ['assets/splix/Screenshot1.png']
        },
        {
          id: '02',
          title: 'INTERFACE',
          desc: 'Switch between stark light mode, clean dark mode, or high-contrast bold orange accents to match your visual preference.',
          images: [
            'assets/splix/Screenshot2.png',
            'assets/splix/Screenshot3.png'
          ]
        },
        {
          id: '03',
          title: 'GROUPS',
          desc: 'Settle group spending for specific trips, events, or living arrangements without cluttering your personal history dashboard.',
          images: ['assets/splix/Screenshot4.png']
        },
        {
          id: '04',
          title: 'MULTI_CURRENCY',
          desc: 'Track international expenses natively side-by-side with an easy horizontal swipe mechanic that removes manual math from group travel.',
          images: ['assets/splix/Screenshot5.png']
        },
        {
          id: '05',
          title: 'SPLIT_RULES',
          desc: 'Choose exactly how to divide costs—split equally, input exact amounts, or assign custom percentages across group participants seamlessly.',
          images: ['assets/splix/Screenshot6.png']
        },
        {
          id: '06',
          title: 'LIMITS',
          desc: 'Log unlimited transactions and build out large groups with zero restrictions, paywalls, or caps holding back your ledger logs.',
          images: ['assets/splix/Screenshot7.png']
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const subpage = params['subpage'];
      
      this.app = this.apps.find(a => a.id === id);
      
      if (subpage === 'privacy') {
        this.legalData = SPLIX_LEGAL.privacy;
        this.isLegalView = true;
      } else if (subpage === 'termsandconditions') {
        this.legalData = SPLIX_LEGAL.terms;
        this.isLegalView = true;
      } else {
        this.legalData = null;
        this.isLegalView = false;
      }
    });

    this.themeService.isDarkMode.subscribe(mode => this.isDarkMode = mode);
  }

  goBack() {
    if (this.isLegalView && this.app) {
      this.router.navigate(['/software', this.app.id]);
    } else {
      this.router.navigate(['/software']);
    }
  }
}
