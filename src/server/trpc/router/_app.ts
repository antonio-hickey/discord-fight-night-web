import { router } from "../trpc";
import { authRouter } from "./auth";
import { fightsRouter } from "./fights";
import { gameRouter } from "./game";

export const appRouter = router({
  game: gameRouter,
  fights: fightsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
