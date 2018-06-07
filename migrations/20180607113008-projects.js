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
  db.createTable('projects', {
    id: {
      type: 'int',
      primaryKey: true
    },
    project_desc: {
      type: 'string',
      length: 500
    },
    charity_id: {
      type: 'int'
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('projects', callback);
};

exports._meta = {
  "version": 1
};
