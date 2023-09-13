import { Component, OnInit } from '@angular/core';
import { VizLib } from "../../viz-lib/lib"

@Component({
  selector: 'demo-app-root',
  styles: [`
    a {
      z-index: 777;
    }
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
    .description {
      font-size: 45%;
      margin-top: -1rem;
      margin-bottom: 0.5rem;
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
    }
    .credit {
      margin-top: -.5rem;
      padding-bottom: 1px;
      display: flex;
      justify-content: flex-end;
      font-size: 125%;
    }
    .content-container {
      margin-bottom: 2rem;
    }
    .divider {
      border-bottom: 1px solid #369;
    }
    .example-header {
      margin-bottom: 0;
      margin-top: 2rem;
    }`
],
  template: `
    <div class="theme flex-col">
      <h1 class="break-line">
        <strong class="title">&lt;viz-lib&gt;</strong>
        <h5 class="subtext subtitle description">a lightweight js library for adding pleasant visual renders to anything web</h5>
        <br>
        <sup class="height-2rem">
          <sup><sup><sup><sup><sup>
            <div class="flex-col">
              <div class="credit">
                contributors: [
                  &nbsp;<a href="https://github.com/Marcus-Kim" target="_blank">marcus</a>,
                  &nbsp;<a href="https://github.com/JtSangerman" target="_blank">jamie</a>&nbsp;
                ]
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a href="https://github.com/JtSangerman/viz-lib" target="_blank">src</a>
              </div>
            </div>
          </sup></sup></sup></sup></sup>
        </sup>
      </h1>
      <div class="flex-col text-left-margin-align">
        <h2 class="height-0rem subtitle">&gt; docs and demos</h2>
        <h5 class="subtext">This is where we can document and demo everything available within the viz-lib library</h5>
        <div id="demos" class="content-container"></div>
      </div>
      <div class="divider"></div>
      <div class="flex-col text-left-margin-align">
        <h2 class="height-0rem subtitle">&gt; ideas and inspo</h2>
        <h5 class="subtext example-header">
          <<a href="https://www.youtube.com/@project_jdm/about" target="_blank">PROJECT JDM</a> />
        </h5>
        <div class="flex-row content-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AGYaAQV27wM?si=k1zqMKFXWs8W-Tx1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-wDENSQrMxg?si=wd6QlgMggDKwWy1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4GaGnU8Ij2Y?si=IFuxPAgy7ygFzeXu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h5 class="subtext example-header">
          <<a href="https://bost.ocks.org/mike/algorithms/" target="_blank">MIKE BOSTOCK</a> /><sup><sup> (creator of d3.js)</sup></sup>
        </h5>
        <div class="flex-row content-container">
          <img width="50%" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*iwyIoNpFYDXgg7ywdT2GqA.png" />
          <img width="50%" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*2Q1eA85O43Ygu-fUdvOccw.png" />
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
