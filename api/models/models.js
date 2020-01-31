const db = require('../../data/db-config');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }
  find() {
    return db(this.tableName);
  }
  findBy(filter) {
    return db(this.tableName).where(filter);
  }
  add(newItem) {
    return db(this.tableName)
      .insert(newItem)
      .returning('*');
  }
  update(id, item) {
    return db(this.tableName)
      .where({ id })
      .update(item)
      .returning('*');
  }
  remove(id) {
    return db(this.tableName)
      .where({ id })
      .del();
  }
}

const Users = new Model('users');
const Campaigns = new Model('campaigns');
const Organizations = new Model('organizations');
const Supporters = new Model('supporters');

module.exports = { Users, Campaigns, Organizations, Supporters };