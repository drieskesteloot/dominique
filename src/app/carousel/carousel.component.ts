import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div id="carousel-home" data-ride="carousel" class="carousel slide carousel-fullscreen carousel-fade">
      <!-- Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#carousel-home" data-slide-to="0" class=""></li>
        <li data-target="#carousel-home" data-slide-to="1" class=""></li>
        <li data-target="#carousel-home" data-slide-to="2" class="active"></li>
      </ol>
      <!-- Wrapper for slides-->
      <div role="listbox" class="carousel-inner">
        <div style="background-image: url('assets/img/carousel3.jpg');" class="item">
          <div class="overlay"></div>
          <div class="carousel-caption">
            <h1 class="super-heading">Barunka</h1>
            <p class="super-paragraph">A multi-purpose Bootstrap template by  <a href="https://bootstrapious.com">Bootstrapious.com</a>.</p>
          </div>
        </div>
        <div style="background-image: url('assets/img/carousel2.jpg');" class="item">
          <div class="overlay"></div>
          <div class="carousel-caption">
            <h1 class="super-heading">Praesent dapibus, neque id cursus faucibus</h1>
            <p class="super-paragraph">Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci</p>
          </div>
        </div>
        <div style="background-image: url('assets/img/carousel1.jpg');" class="item active">
          <div class="overlay"></div>
          <div class="carousel-caption">
            <h1 class="super-heading">Lorem ipsum dolor color</h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
