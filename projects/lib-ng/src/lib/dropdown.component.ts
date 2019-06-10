import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-dropdown',
  template: `
    <div class="dropdown">
      <button (click)="toggle()">{{this.title}}</button>
      <div *ngIf="visible">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
    .dropdown div {
      border: 1px solid #ccc;
      padding: 12px;
    }
    `
  ]
})
export class DropdownComponent {
  @Input() title = 'default button';
  @Input() visible = false;
  @Output() visibleChange =  new EventEmitter<boolean>();

  toggle() {
    this.visible = !this.visible;
    this.visibleChange.emit(this.visible);
  }
}
