import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button style="width: 100%; height: 200px;">{{ value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent {
  
  @Input() value!: 'X' | 'O';
  
}
