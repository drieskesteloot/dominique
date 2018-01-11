import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <section id="contact" class="map" class="section--no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Contact</h1>
            <p class="lead margin-bottom--big">You can find me at this address</p>
          </div>
        </div>
      </div>
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
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
