import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div><mat-spinner></mat-spinner></div>
  `,
  styles: [`
    div {
      display: flex;
    }
    mat-spinner {
      margin: auto;
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
