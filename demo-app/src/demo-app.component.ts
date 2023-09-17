import { Component, OnInit } from '@angular/core';
import { VizLib } from "../../viz-lib/lib"

@Component({
  selector: 'demo-app-root',
  styleUrls: ['./demo-app.component.scss'],
  templateUrl: './demo-app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const demoDiv = document.getElementById("demos");

    VizLib.Bubbl(demoDiv);
    VizLib.MatrixImage(demoDiv);
    VizLib.Tetriz(demoDiv);
  }
}
