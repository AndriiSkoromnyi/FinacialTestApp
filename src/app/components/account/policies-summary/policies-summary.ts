
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer,  } from '@angular/platform-browser';

@Component({
    selector: 'app-policies-summary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './policies-summary.html',
    styleUrl: './policies-summary.css'
})
export class PoliciesSummaryComponent implements OnInit {
    private rawPolicies = [
        {
            name: 'Marine Cargo',
            premium: '$125,000',
            date: '6/15/2026',
            colorClass: 'blue',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.42 12.37C21.29 12.72 21.83 13.75 21.63 14.66L21.22 16.52C20.51 19.72 18 22 14.38 22H9.61998C5.99998 22 3.48999 19.72 2.77999 16.52L2.36998 14.66C2.16998 13.75 2.70997 12.72 3.57997 12.37L4.99999 11.8L10.51 9.58999C11.47 9.20999 12.53 9.20999 13.49 9.58999L19 11.8L20.42 12.37Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 22V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        },
        {
            name: 'General Liability',
            premium: '$85,000',
            date: '6/15/2026',
            colorClass: 'green',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.49 2.23L5.5 4.11C4.35 4.54 3.41 5.9 3.41 7.12V14.55C3.41 15.73 4.19 17.28 5.14 17.99L9.44 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.05 11.87L10.66 13.48L14.96 9.17999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        },
        {
            name: 'Workers Comp',
            premium: '$75,000',
            date: '---',
            colorClass: 'purple',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48 18.15C3.51 17.59 2.91 16.55 2.91 15.42V8.58003C2.91 7.46003 3.51 6.41999 4.48 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 11C13.2868 11 14.33 9.95681 14.33 8.66998C14.33 7.38316 13.2868 6.34003 12 6.34003C10.7132 6.34003 9.67 7.38316 9.67 8.66998C9.67 9.95681 10.7132 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        },
        {
            name: 'Property',
            premium: '$145,229.43',
            date: '---',
            colorClass: 'orange',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 16.5H10" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 16.5H17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 12H10" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 12H17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 7.5H10" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 7.5H17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        },
        {
            name: 'Umbrella',
            premium: '$25,000',
            date: '11/01/2026',
            colorClass: 'red',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 12H21C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12H12ZM12 12V18.5C12 19.8807 13.1193 21 14.5 21C15.8807 21 17 19.8807 17 18.5V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        }
    ];

    policies: any[] = [];

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.policies = this.rawPolicies.map(p => ({
            ...p,
            svg: this.sanitizer.bypassSecurityTrustHtml(p.svg)
        }));
    }
}
