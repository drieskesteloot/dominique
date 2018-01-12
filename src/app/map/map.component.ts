import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `    
    <section id="test" class="section--no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Address</h1>
            <p class="lead margin-bottom--big">You can find me at</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-lg-offset-1 text-center">
            <h4><strong>IMAGenIN</strong>
            </h4>
            <p>Berrekesstraat 1
              <br/>3053 Haasrode, Belgium</p>
            <ul class="list-unstyled">
              <li><i class="fa fa-phone fa-fw"></i> +32 (0)16 32 78</li>
              <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:dominique.genin@gmail.com">dominique.genin@gmail.com</a>
              </li>
            </ul>
            <br>
            <ul class="list-inline">
              <li>
                <a href="https://www.facebook.com/dominique.genin.98" target="_blank"><i class="fa fa-facebook fa-fw fa-3x"></i></a>
              </li>
              <!--
              <li>
                <a href="#"><i class="fa fa-twitter fa-fw fa-3x"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-dribbble fa-fw fa-3x"></i></a>
              </li>
              -->
              <li>
                <a href="https://be.linkedin.com/in/dominique-genin-b9ab6a8" target="_blank"><i class="fa fa-linkedin fa-fw fa-3x"></i></a>
              </li>
              <li>
                <a href="https://www.fotogamma.be/component/jsn/domigen?Itemid=" target="_blank"><i class="fa fa-camera fa-fw fa-3x"></i></a>
              </li>
            </ul>
            <hr class="small">
          </div>
        </div>
      </div>
    </section>
      <section id="contact" class="map" class="section--no-padding-bottom">
      <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoMZARe-HaeoVl5IkDWXOj6i5pz90_CH4&q=place_id:EixCZXJyZWtlc3N0cmFhdCAxLCAzMDUzIE91ZC1IZXZlcmxlZSwgQmVsZ2nDqw"
      ></iframe>
      <br/>
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Berrekesstraat,1,3035,Haasrode&amp;ie=UTF8"></a>
      </small>
    </section>
  `,
  styles: []
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
