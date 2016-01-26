import bittenStep = require('./bittenstep');


export interface BittenBuild{
    id : number,
    rev : number,
    rev_time: Date,
    platform: string,
    started: Date,
    stopped: Date,
    status: string,
    slave: string,
    steps: bittenStep.BittenStep[]
}