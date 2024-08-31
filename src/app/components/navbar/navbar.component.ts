import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Fixed typo: should be styleUrls
})
export class NavbarComponent {
  isMenuOpen = false;
  screenWidth: number;
  isProfileMenuOpen = false;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    if (this.screenWidth >= 1024) {
      this.isMenuOpen = false; // Close the menu when resizing to larger screens
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!(event.target as HTMLElement).closest('.profile-avatar')) {
      this.isProfileMenuOpen = false;
    }
  }
}
