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
  dbDatabase: 'forum',
  dbUsername: 'veritasadminapi',
  dbPassword: 'haselkoadmin',
  dbSynchronize: true,
  dbLogging: false,
  // corsFrontDomain: 'http://127.0.0.1:5173/',
};
