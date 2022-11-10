import { router } from "../trpc";
import { authRouter } from "./auth";
import { fightsRouter } from "./fights";

export const appRouter = router({
  fights: fightsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
