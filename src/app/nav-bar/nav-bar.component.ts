import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `<header class="header">
              <div role="navigation" class="navbar navbar-default">
                <div class="container">
                  <div class="navbar-header">
                    <a href="www.google.com" class="navbar-brand">Google</a>
                    <div class="navbar-buttons">
                      <button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle navbar-btn">Menu<i class="fa fa-align-justify"></i></button>
                    </div>
                  </div>
                  <div id="navigation" class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                      <li class="active"><a href="http://www.google.com">Home</a></li>
                      <li><a href="http://www.google.com" class="external">Text page</a></li>
                      <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Dropdown <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="http://www.google.com">Dropdown item 1</a></li>
                          <li><a href="http://www.google.com">Dropdown item 2</a></li>
                          <li><a href="http://www.google.com">Dropdown item 3</a></li>
                          <li><a href="http://www.google.com">Dropdown item 4</a></li>
                        </ul>
                      </li>
                      <li><a href="http://www.google.com">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
           </header>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
