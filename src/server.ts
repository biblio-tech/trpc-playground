import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { createContext } from './context';
import { appRouter } from './router';

createHTTPServer({
  router: appRouter,
  createContext,
}).listen(2023);