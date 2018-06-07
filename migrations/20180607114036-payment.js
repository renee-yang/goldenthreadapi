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
  db.createTable('payment', {
    id: {
      type: 'int',
      primaryKey: true
    },
    name_on_card: {
      type: 'string',
      length: 50
    },
    card_number: {
      type: 'string',
      length: 16
    },
    expiry_date: {
      type: 'date'
    },
    security_code: {
      type: 'int'
    },
    user_id: {
      type: 'int'
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('payment', callback);
};

exports._meta = {
  "version": 1
};
