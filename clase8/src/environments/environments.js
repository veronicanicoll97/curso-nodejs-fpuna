module.exports = {
  jwtSecret: process.env.JWT_SECRET ?? "SECRET",
  databaseName: process.env.DATABASE_NAME ?? "postgres",
  databaseUser: process.env.DATABASE_USER ?? "postgres",
  databasePassword: process.env.DATABASE_PASSWORD ?? "postgres"
}