import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <section id="portfolio" class="section--no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Gallery or portfolio</h1>
            <p class="lead margin-bottom--big">You can make also a portfolio or image gallery.</p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row no-space">
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-1.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 1"><img
              src="assets/img/portfolio-1.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-2.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 2"><img
              src="assets/img/portfolio-2.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-3.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 3"><img
              src="assets/img/portfolio-3.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-4.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 4"><img
              src="assets/img/portfolio-4.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-5.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 5"><img
              src="assets/img/portfolio-5.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-6.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 6"><img
              src="assets/img/portfolio-6.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-7.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 7"><img
              src="assets/img/portfolio-7.jpg" alt="" class="img-responsive"></a></div>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="box"><a href="assets/img/portfolio-8.jpg" title="" data-lightbox="portfolio" data-title="Portfolio image 8"><img
              src="assets/img/portfolio-8.jpg" alt="" class="img-responsive"></a></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
