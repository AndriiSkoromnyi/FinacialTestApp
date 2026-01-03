import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.css',
})
export class TopNavComponent {
  navItems = [
    { label: 'Dashboard', route: '/dashboard', svg: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { label: 'Accounts', route: '/account', svg: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' },
    { label: 'Brokers', route: '/brokers', svg: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' }, // Simplified users
    { label: 'Submissions', route: '/submissions', svg: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
    { label: 'Organizations', route: '/organizations', svg: 'M3 21l18 0 M5 21l0 -14l14 0l0 14 M9 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' }, /* Portfolio/Briefcase-ish */
    { label: 'Goals & Rules', route: '/goals', svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }, /* Shield/Goal */
    { label: 'Admin', route: '/admin', svg: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 11l4 2-4 2-4-2 4-2z' }, /* Placeholder */
  ];
}
