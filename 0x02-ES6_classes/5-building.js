/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["evacuationWarningMessage"] }] */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const clsProto = Object.getPrototypeOf(this);
    // console.log(proto)
    const superclsProto = Building.prototype;
    // console.log(typeof(superProto[Object.getOwnPropertyNames(superProto)[1]]))
    const superclsProperties = Object.getOwnPropertyNames(superclsProto);
    superclsProperties.forEach((name) => {
      if (typeof superclsProto[name] === 'function' && !Object.prototype.hasOwnProperty.call(clsProto, name)) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    });
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {}
}
