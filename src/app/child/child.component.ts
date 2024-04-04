import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() user : any;
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();
}
