## Nanotron

**Your Lightweight, High-Performance Micro/Nano Service Framework**

Nanotron is designed for building blazingly fast and efficient microservices and APIs. Its minimalist approach and focus on performance make it ideal for resource-constrained environments and scenarios where every millisecond counts.

## Key Features

- **Lightweight:** Minimal dependencies and a small footprint ensure optimal performance.
- **High-Performance:** Optimized for speed and efficiency in handling requests.
- **Microservice-Friendly:** Perfect for building and managing microservices architectures.
- **Intuitive API:** Simple and easy-to-use API for defining routes and handling requests.
- **TypeScript Support:** Built with TypeScript for enhanced type safety and developer experience.

## Installation

```bash
npm install @alwatr/nanotron
```

## Getting Started

```js
import { NanotronApiServer } from '@alwatr/nanotron';

const apiServer = new NanotronApiServer({
  host: '0.0.0.0',
  port: 80,
  prefix: '/api/',
});

apiServer.defineRoute({
  method: 'GET',
  url: '/hello',
  handler() {
    this.serverResponse.replyJson({
      ok: true,
      message: 'Hello :)',
    });
  }
});

apiServer.defineRoute({
  method: 'POST',
  url: '/echo-body',
  async handler() {
    const body = await this.getBodyRaw();
    this.serverResponse.replyJson({
      ok: true,
      data: body.toString(),
    });
  }
});
```

## Sponsors

The following companies, organizations, and individuals support Nitrobase ongoing maintenance and development. Become a Sponsor to get your logo on our README and website.

[![Exir Studio](https://avatars.githubusercontent.com/u/181194967?s=200&v=4)](https://exirstudio.com)

## License

This project is licensed under the AGPL-3.0 License.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
