import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobcart';

  ngOnInit() {
    AOS.init(); //AOS - 2
    AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  onActivate(event:any) {
   window.scroll({  top : 0, left: 0, });
  }
}
