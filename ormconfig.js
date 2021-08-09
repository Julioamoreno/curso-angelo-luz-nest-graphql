module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST || "db",
  "port": +process.env.DB_PORT || 5432,
  "username": process.env.DB_USER || "",
  "password": process.env.DB_PASSWORD || "",
  "database": process.env.DB_NAME ||"nest_api",
  "entities": [
    "dist/**/*.entity{.ts,.js}"
  ],
  "synchronize": process.env.DB_SYNC == "true"
}