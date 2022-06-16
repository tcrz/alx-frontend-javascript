import Building from './5-building';

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  /* No getter for sqft because it inherited that method from Building */

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
