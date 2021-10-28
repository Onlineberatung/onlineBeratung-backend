db.createUser(
  {
    user: "oplog",
    pwd: "oplog",
    roles: [{ role: "read", db: "local" }]
  }
);