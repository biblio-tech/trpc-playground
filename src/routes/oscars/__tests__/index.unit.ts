import assert from 'node:assert';
import { describe, it } from 'node:test';
import { Context } from '../../../context';

import { appRouter } from '../../../router';

const TEST_CONTEXT: Context = { 
  bestActors: {
    4: ['Alice'],
    3: ['Bob'],
    2: ['Camilla'],
    1: ['David']
  },
};

const trpcRequest = () => {
  return appRouter.createCaller(TEST_CONTEXT);
};

describe('routes:oscars:unit', () => {
  it('should return appropriate actors', async () => {
    const request = trpcRequest();
    const res = await request.oscars.getBestActors({ totalAwards: 4});
    assert.strictEqual(res, TEST_CONTEXT.bestActors[4]);
  });
});