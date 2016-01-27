import bittenStep = require('./bittenstep');


export class BittenBuild{
    id : number;
    rev : number;
    rev_time: Date;
    platform: string;
    config: string;
    started: Date;
    stopped: Date;
    status: string;
    slave: string;
    steps: bittenStep.BittenStep[];
}