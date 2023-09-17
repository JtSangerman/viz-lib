import { Component, OnInit } from '@angular/core';
import { VizLib } from "../../viz-lib/lib"

@Component({
  selector: 'demo-app-root',
  styleUrls: ['./demo-app.component.scss'],
  templateUrl: './demo-app.component.html'
})
export class AppComponent implements OnInit {
  demoArea: HTMLElement = null;

  constructor(){
  }

  ngOnInit(): void {
    const demoDiv = document.getElementById("demos");
    console.log({VizLib, demoDiv})

    VizLib.Bubbl(document.getElementById("demos"));
    VizLib.MatrixImage(document.getElementById("demos"));
    VizLib.Tetriz(document.getElementById("demos"));
  }
}
