import {NanotronApiServer} from '@alwatr/nanotron';

const apiServer = new NanotronApiServer({
  host: '0.0.0.0',
  port: 80,
  prefix: '/api/',
});

apiServer.defineRoute({
  method: 'GET',
  url: '/',
  handler (clientRequest, serverResponse) {
    serverResponse.headers['content-type'] = 'text/html';
    serverResponse.reply('<h1>Alwatr Nanotron Api Server</h1>');
  }
});

apiServer.defineRoute({
  method: 'GET',
  url: '/hello',
  handler (clientRequest, serverResponse) {
    serverResponse.replyJson({
      ok: true,
      message: 'Hello :)',
    });
  }
});

apiServer.defineRoute({
  method: 'GET',
  url: '/hello',
  handler (connection) {
    connection.serverResponse.replyJson({
      ok: true,
      message: 'Hello :)',
    });
  }
});
