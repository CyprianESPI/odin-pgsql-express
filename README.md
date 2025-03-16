# odin-pgsql-express

## DATABASE

Create DB:

`CREATE DATABASE top_users;`

Connect to DB:

`\c top_users`

```
CREATE TABLE usernames (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ) 
);
```

`\d`

```
INSERT INTO usernames (username)
VALUES ('Mao'), ('nevz'), ('Lofty');
```

`SELECT * FROM usernames;`