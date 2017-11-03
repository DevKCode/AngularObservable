import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterServiceService {
  private static _emitters: {[ID: string]: EventEmitter<any>} = {};

  constructor() { }

  static get (ID: string): EventEmitter<any> {
    if (!this._emitters[ID]) {
      this._emitters[ID] = new EventEmitter();
    }

       return this._emitters[ID];
  }
}
