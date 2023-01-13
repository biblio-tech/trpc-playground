import { router, publicProcedure } from '../../index';
import { z } from 'zod';

export const oscarRouter = router({
  getBestActors: publicProcedure.input(
    z.object({
      totalAwards: z.number().int().min(1).max(4)
    })
  )
  .query(({ ctx, input }) => {
    return ctx.bestActors[input.totalAwards];
  })
})
