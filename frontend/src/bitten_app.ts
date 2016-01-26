import {Component} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {BittenBuild} from './bittenbuild';
import {BittenStep} from './bittenstep';

@Component({
  selector: 'bitten-app',
  template: `<p>Bitten Hat</p>`
})

export class BittenApp{
    constructor(http: Http){
        http.get('testvalforlatest.json').map(res => res.json())
    }
}

