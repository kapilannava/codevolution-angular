import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{"Welcome back" + name}}
    </h2>
    <h2>
    {{2+2}}
    </h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
  `,
  styles: []
})
export class TestComponent {

  public name = "Bapilan";

  constructor() { }


}
