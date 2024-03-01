import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lets-grow',
  templateUrl: './lets-grow.component.html',
  styleUrls: ['./lets-grow.component.css'],
})
export class LetsGrowComponent {

  appURL = environment.app_url;

}
