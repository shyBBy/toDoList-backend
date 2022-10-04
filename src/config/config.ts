export const config = {
  jwtTimeToExpire: '0s',
  jwtCookieTimeToExpire: 0,
  // DOMENA
  jwtCookieDomain: 'localhost',
  // JESLI HTTPS to TRUE, A JAK HTTP to FALSE
  jwtCookieSecure: false,
  jwtHttpOnly: true,
  dbHost: 'localhost',
  dbPort: 3306,
  dbDatabase: 'todolist',
  dbUsername: 'todosadmin',
  dbPassword: 'todos123',
  dbSynchronize: true,
  dbLogging: true,
  // corsFrontDomain: 'http://127.0.0.1:5173/',
};
