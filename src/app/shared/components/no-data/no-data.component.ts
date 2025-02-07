import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-no-data',
  standalone: true,
  imports: [],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss'
})
export class NoDataComponent {
  @Output() buttonClicked = new EventEmitter<boolean>();
}
