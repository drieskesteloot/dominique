import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  template: `
    <div id="lightboxOverlay" class="lightboxOverlay" style="display: block; width: 1903px; height: 4429px;"></div>
    <div id="lightbox" class="lightbox" style="display: block; top: 3292px; left: 0px;">
      <div class="lb-outerContainer" style="width: 1208px; height: 808px;">
        <div class="lb-container"><img class="lb-image" src="assets/img/portfolio-4.jpg" style="display: block; width: 1200px; height: 800px;">
          <div class="lb-nav" style="display: block;">
            <a class="lb-prev" href="" style="display: block;"></a>
            <a class="lb-next" href="" style="display: block;"></a>
          </div>
          <div class="lb-loader" style="display: none;">
            <a class="lb-cancel"></a>
          </div>
        </div>
      </div>
      <div class="lb-dataContainer" style="display: block; width: 1208px;">
        <div class="lb-data">
          <div class="lb-details">
            <span class="lb-caption" style="display: inline;">Portfolio image 4</span>
            <span class="lb-number">Image 4 of 8</span>
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
