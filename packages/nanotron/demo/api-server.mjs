import {NanotronApiServer} from '@alwatr/nanotron';

const apiServer = new NanotronApiServer({
  host: '0.0.0.0',
  port: 80,
  prefix: '/api/',
});

apiServer.defineRoute({
  method: 'GET',
  url: '/',
  handler (connection) {
    connection.replyHeaders['content-type'] = 'text/html';
    connection.reply('<h1>Alwatr Nanotron Api Server</h1>');
  }
});

apiServer.defineRoute({
  method: 'GET',
  url: '/hello',
  handler (connection) {
    connection.replyJson({
      ok: true,
      message: 'Hello :)',
    });
  }
});
