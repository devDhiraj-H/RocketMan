import db from "../config/database.js";

export const findUser = async (userName : string) => {
  const client = await db.connect();

  await client.query("BEGIN");
  const result = await db.query(
    "SELECT id, hashed_password FROM users WHERE username = $1",
    [userName],
  );

  client.release();
  return result.rows[0];
};

export const findUserName = async (userName : string, email : string) => {
  const client = await db.connect();

  await client.query("BEGIN");
  const result = await db.query(
    "SELECT username, email FROM users WHERE username = $1 OR email = $2",
    [userName, email],
  );

  client.release();
  return result.rows[0];
};

export const createUser = async (userName : string, password : string, email : string) =>{
  const client = await db.connect();

  await client.query("BEGIN");

  const result = await db.query(
    "INSERT INTO users(username, hashed_password, email) values($1, $2, $3) RETURNING id", [userName, password, email] 
  );

  client.release();

  return result.rows[0];
}

