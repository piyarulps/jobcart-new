import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appURL = environment.app_url;
  isMobileView = false;
  winWidth = 0;
  private clickOutsideListener!: () => void;
  navbarfixed: boolean = false;
  dropshow:boolean=false

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {

    this.winWidth = window.innerWidth;
    if (this.winWidth <= 900) {
      this.isMobileView = true;
    }
    this.clickOutsideListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.onClickedOutside();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.winWidth = window.innerWidth;
    if (this.winWidth <= 900) {
      this.isMobileView = true;
    }
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 10) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }


  onClickedOutside() {
    this.isMobileView = false;
  }


  toggleMobileView() {
    this.isMobileView = !this.isMobileView;
  }


  ngOnDestroy() {
    if (this.clickOutsideListener) {
      this.clickOutsideListener();
    }
  }


}
