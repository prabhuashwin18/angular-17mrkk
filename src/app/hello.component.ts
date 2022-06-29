import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! My age {{myage}}</h1>
  <button (click)="passData();">click me</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  @Input('testage') myage;

  @Output() sendData: EventEmitter<any> = new EventEmitter();

  passData() {
    this.sendData.emit('data from child');
  }
}
