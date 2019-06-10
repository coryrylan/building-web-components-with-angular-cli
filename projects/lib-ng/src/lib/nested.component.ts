import { Component, Input, Output, EventEmitter } from '@angular/core';
import './../../../lib-web/src/lib/dropdown';

@Component({
  selector: 'ngx-nested',
  template: `
    <h2>Web Component in a Angular Library Visible: {{webVisible}}</h2>
    <x-dropdown [title]="webTitle" (visible)="webVisible = $event.detail">
      Hello from Web Component in an  Angular Component Library!
    </x-dropdown>
  `,
  styles: []
})
export class NestedComponent {
  webTitle = 'Web Component in Angular Library';
  webVisible = false;
}
