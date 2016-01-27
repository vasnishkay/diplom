import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BuildService{
    constructor(private _http: Http) {}
    
    getLatestBuilds(){
        return this._http.get('src/testvalforlatest.json').map(res => res.json());
    }
    
    getBulds(id: number){
        return this._http.get('src/testvalforbuild.json').map(res => res.json());
    }
    
    getList(page: number){
        return this._http.get('src/testvalforlist.json').map(res => res.json());
    }
}