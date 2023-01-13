import { router } from './index';
import { oscarRouter } from './routes/oscars';

export const appRouter = router({
  oscars: oscarRouter,
});

export type AppRouter = typeof appRouter;
