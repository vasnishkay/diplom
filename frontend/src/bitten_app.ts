import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BuildService} from './build_service';

import {BittenLatest} from './latestbuild';
import {BuildList} from './buildlist';

@Component({
  selector: 'bitten-app',
  template: `
  <nav class="navbar navbar-default">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">Bitten Hat</a>
    </div>
    <div>
        <ul class="nav navbar-nav">
            <li><a [routerLink]="['LatestBuilds']">Latest builds</a></li>
            <li><a [routerLink]="['BuildsList']">Builds list</a></li>
        </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>`,
  providers: [BuildService],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/latest', name: 'LatestBuilds', component: BittenLatest, useAsDefault: true},
    { path:'/builds', name:'BuildsList', component: BuildList}
])


export class BittenApp{ }

