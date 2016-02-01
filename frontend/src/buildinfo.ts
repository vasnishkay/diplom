import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {BittenBuild} from './bittenbuild';
import {BittenStep} from './bittenstep';
import {BuildService} from './build_service';

@Component({
    selector: 'build-info',
    providers: [BuildService]
    
})

@View({
    template: `
    <div *ngIf="build" class="build">
    <dl>
        <h1>Build {{build.id}} - {{build.status}}</h1>
        <p><b>Platform:</b> {{build.platform}}</p>
        <p><b>Build by:</b> {{build.slave}}</p>
        <p><b>Started:</b> {{build.started.toGMTString()}}
        <p><b>Stopped:</b> {{build.stopped.toGMTString()}}</p>
    </dl>
    <div *ngFor="#step of build.steps">
        <h2>{{step.name}}</h2>
        <span>log</span>
        <textbox>{{step.linktolog}}</textbox>
    </div>
    </div>`,
    directives: [CORE_DIRECTIVES]
})

export class BuildInfo {
    build:BittenBuild;
    
    constructor(private _buildService: BuildService){
        this._buildService.getBulds(1).subscribe(data =>{
            this.build = new BittenBuild();
            this.build.id = data.build.id;
            this.build.rev = data.build.rev;
            this.build.rev_time = new Date(data.build.rev_time);
            this.build.platform = data.build.platform;
            this.build.config = data.build.config;
            this.build.started = new Date(data.build.started);
            this.build.stopped = new Date(data.build.stopped);
            this.build.status = data.build.status;
            this.build.slave = data.build.slave;
            this.build.steps = [];
            for(var i = 0; i< data.build.steps.length; i++)
            {
                var step = new BittenStep();
                step.name = data.build.steps[i].name;
                step.description = data.build.steps[i].description;
                step.started = new Date(data.build.steps[i].started);
                step.stopped = new Date(data.build.steps[i].stopped);
                step.status = data.build.steps[i].status;
                step.linktolog = data.build.steps[i].linktolog;
                this.build.steps.push(step);
            }
        });
    }
}