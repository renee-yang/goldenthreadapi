'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('charities', {
    id: {
      type: 'int',
      primaryKey: true
    },
    charity_name: {
      type: 'string',
      length: 50
    },
    charity_desc: {
      type: 'string',
      length: 500
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable ('charities', callback);
};

exports._meta = {
  "version": 1
};
