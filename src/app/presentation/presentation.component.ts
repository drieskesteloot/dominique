import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
    <section class="background-gray-lightest negative-margin">
      <div class="container">
        <h1> Mauris placerat eleifend leo.</h1>
        <p class="lead">Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
        <p> <a href="http://www.google.com" class="btn btn-ghost">Continue reading   </a></p>
      </div>
    </section>
  `,
  styleUrls: []
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
