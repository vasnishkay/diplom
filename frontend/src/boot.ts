import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BittenApp} from "./bitten_app";

//noinspection TypeScriptValidateTypes
bootstrap(BittenApp, [HTTP_PROVIDERS]);