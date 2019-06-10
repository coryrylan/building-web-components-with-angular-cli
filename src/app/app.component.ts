import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngTitle = 'open angular component';
  webTitle = 'open web component';
  ngVisible = false;
  webVisible = false;
}
