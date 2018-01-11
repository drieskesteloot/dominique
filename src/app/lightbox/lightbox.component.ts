import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  template: `
    <div id="lightboxOverlay" class="lightboxOverlay" style="display: none;"></div>
    <div id="lightbox" class="lightbox" style="display: none;">
      <div class="lb-outerContainer">
        <div class="lb-container">
          <img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
          <div class="lb-nav">
            <a class="lb-prev" href=""></a>
            <a class="lb-next" href=""></a>
          </div>
          <div class="lb-loader">
            <a class="lb-cancel"></a>
          </div>
        </div>
      </div>
      <div class="lb-dataContainer">
        <div class="lb-data">
          <div class="lb-details">
            <span class="lb-caption"></span>
            <span class="lb-number"></span>
          </div>
          <div class="lb-closeContainer">
            <a class="lb-close"></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LightboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
