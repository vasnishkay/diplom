import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {BittenBuild} from './bittenbuild';
import {BittenStep} from './bittenstep';
import {BuildService} from './build_service';

@Component({
    providers: [BuildService]
})


export class BuildList{
    list: BittenBuild[] = [];
    
    constructor(private _buildService: BuildService){
        this._buildService.getList(0).subscribe(data => {
            for(var i = 0; i<data.list.length; i++){
                var build = new BittenBuild();
                build.id = data.list[i].id;
                build.rev = data.list[i].rev;
                build.rev_time = new Date(data.list[i].rev_time);
                build.platform = data.list[i].platform;
                build.config = data.list[i].config;
                build.started = new Date(data.list[i].started);
                build.stopped = new Date(data.list[i].stopped);
                build.status = data.list[i].status;
                build.slave = data.list[i].slave;
                build.steps = [];
                for(var j = 0; j< data.list[i].steps.length; j++){
                    var step = new BittenStep();
                    step.id = data.build.steps[i].id;
                    step.name = data.build.steps[i].name;
                    step.description = data.build.steps[i].description;
                    step.started = new Date(data.build.steps[i].started);
                    step.stopped = new Date(data.build.steps[i].stopped);
                    step.status = data.build.steps[i].status;
                    step.linktolog = data.build.steps[i].linktolog;
                    build.steps.push(step);
                }
                this.list.push(build);
            }});
    }
}