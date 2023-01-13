import { inferAsyncReturnType } from "@trpc/server";

export function createContext() {
  return {
    bestActors: {
      4: ['Katharine Hepburn'],
      3: ['Daniel Day Lewis', 'Frances McDormand', 'Ingrid Bergman', 'Jack Nicholson'],
      2: ['Marlon Brando'],
      1: ['Leonardo DiCaprio']
    } as Record<number, string[]>,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;

