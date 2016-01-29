import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {BittenBuild} from './bittenbuild';
import {BittenStep} from './bittenstep';
import {BuildService} from './build_service';

@Component({
    providers: [BuildService]
})

@View({
    template: `
    <table class="listing">
    <thead>
        <td class="chgset">Chgset</td>
        <td>Linux</td>
        <td>Windows</td>
    </thead>
    <tbody *ngIf="list.length>0">
    <tr *ngFor="#row of list">
    <td>{{row.rev}}</td>
    <td *ngFor="#build of row.builds">
                    <span><a href="/builds/{{build.id}}">{{build.id}}</a></span> <span class="status"><b>{{build.status}}</b></span>
                    <p>{{build.slave}}</p>
                    <p>{{build.started.toUTCString()}}</p>
                    <p *ngFor="#step of build.steps" class="{{step.status.toLowerCase()}}">{{step.name}}</p>
    </td>
    </tr>
    </tbody>
  </table>`,
  directives: [CORE_DIRECTIVES]
})


export class BuildList{
    list: any = [];
    
    constructor(private _buildService: BuildService){
        this._buildService.getList(0).subscribe(data => {
            for(var k = 0; k<data.list.length; k++){
                var list = data.list[k].build
                var buildList = []
                for(var i =0; i < list.length; i++){
                    var build = new BittenBuild();
                    build.id = list[i].id;
                    build.rev = list[i].rev;
                    build.rev_time = new Date(list[i].rev_time);
                    build.platform = list[i].platform;
                    build.config = list[i].config;
                    build.started = new Date(list[i].started);
                    build.stopped = new Date(list[i].stopped);
                    build.status = list[i].status;
                    build.slave = list[i].slave;
                    build.steps = [];
                for(var j = 0; j< list[i].steps.length; j++){
                    var step = new BittenStep();
                    step.name = list[i].steps[j].name;
                    step.description = list[i].steps[j].description;
                    step.started = new Date(list[i].steps[j].started);
                    step.stopped = new Date(list[i].steps[j].stopped);
                    step.status = list[i].steps[j].status;
                    step.linktolog = list[i].steps[j].filename;
                    build.steps.push(step);
                }
                buildList.push(build);
                }
                this.list.push({'rev': build.rev, 'builds': buildList});
            }});
    }
}