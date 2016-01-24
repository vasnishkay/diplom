import bittenStep = require('./bittenstep');


export interface BittenBuild{
    id : number,
    changeset : number,
    startdate: Date,
    stoppeddate: Date,
    status: string,
    slave: string,
    platform: string,
    steps: bittenStep.BittenStep[]
}