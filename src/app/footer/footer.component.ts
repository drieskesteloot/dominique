import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <a id="to-top" href="#top" class="btn btn-dark-imagenin btn-lg"><i class="fa fa-chevron-up fa-fw fa-1x"></i></a>
      <div class="footer__copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>©2018 Dominique Genin</p>
            </div>
            <div class="col-md-6">
              <p class="credit">Template by <a href="https://bootstrapious.com/free-templates" class="external">Bootstrapious templates</a></p>
              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
