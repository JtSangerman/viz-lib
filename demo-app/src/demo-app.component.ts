import { Component, OnInit } from '@angular/core';
import { VizLib } from "../../viz-lib/lib"

@Component({
  selector: 'demo-app-root',
  styleUrls: ['./demo-app.component.scss'],
  templateUrl: './demo-app.component.html'
})
export class AppComponent implements OnInit {
  title = 'viz-lib';

  ngOnInit(): void {
    VizLib.Bubbl();
  }
}
