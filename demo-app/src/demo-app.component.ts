import { Component, OnInit } from '@angular/core';
import { VizLib } from "../../viz-lib/lib"

@Component({
  selector: 'demo-app-root',
  styles: [`
    .theme {
      text-align: center;
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
    }
    .flex-col {
      display: flex;
      flex-direction: column;
    }
    .flex-row {
      display: flex;
      flex-direction: row;
    }
    .text-left-margin-align {
      text-align: left;
      margin-left: 1%;
    }
    .title {
      font-size: 300%;
      font-weight: bold;
      margin: 5px 15px 0px 5px;
      height: 6rem;
    }
    .subtitle {
      font-size: 200%;
      margin-bottom: 1rem;
    }
    .subtext {
      font-style: italic;
    }
    .break-line {
      border-bottom: 1px solid #369;
      margin-bottom: -1rem;
    }
    .height-2rem {
      height: 2rem;
    }
    .height-0rem {
      height: 0rem;
    }`
],
  template: `
    <div class="theme flex-col">
      <h1 class="break-line">
        <strong class="title">&lt;viz-lib&gt;</strong>
        <sup class="height-2rem"><sup><sup><sup><sup><sup><a href="https://github.com/JtSangerman/viz-lib" target="_blank">(source)</a></sup></sup></sup></sup></sup></sup>
        <br>
      </h1>
      <div id="demos" class="flex-col text-left-margin-align">
        <h2 class="height-0rem subtitle">&gt; docs and demos</h2>
        <h5 class="subtext">This is where we can document and demo everything available within the viz-lib library</h5>
      </div>
      <div class="flex-col text-left-margin-align">
        <h2 class="height-0rem subtitle">&gt; ideas and inspo</h2>
        <h5 class="subtext"><a href="https://www.youtube.com/@project_jdm/about" target="_blank">PROJECT JDM</a></h5>
        <div class="flex-row">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AGYaAQV27wM?si=k1zqMKFXWs8W-Tx1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-wDENSQrMxg?si=wd6QlgMggDKwWy1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4GaGnU8Ij2Y?si=IFuxPAgy7ygFzeXu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
        </div>
      </div>
  `
})
export class AppComponent implements OnInit {
  title = 'viz-lib';

  ngOnInit(): void {
    VizLib.Bubbl();
  }
}
