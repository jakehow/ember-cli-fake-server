/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us)
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'pretender', target: '~0.6.0'}
    ]);
  }
};
