import { z } from "zod";

import { prisma } from "../../db/client";
import { router, protectedProcedure } from "../trpc";


export const gameRouter = router({
    makePrediction: protectedProcedure
      .input(z.object({
        fightId: z.string(), 
        fighterId: z.string(),
        userId: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (
          // User hasn't already made prediction for this fight
          Object.values(await prisma.prediction.findMany({
            where: {
              fightId: input.fightId,
              predictorId: input.userId,
            }
          })).length == 0
        ) {
          const prediction = await ctx.prisma.prediction.create({
            data: {
              predictorId: input.userId,
              fightId: input.fightId,
              fighterId: input.fighterId,
            }
          });

          return prediction;
        }
      }),
  getPrediction: protectedProcedure
    .input(z.object({
      fightId: z.string(),
      userId: z.string(),
    }))
    .query(async ({ ctx, input }): Promise<string | null> => {
      const prediction = await ctx.prisma.prediction.findFirst({
        where: {
          fightId: input.fightId,
          predictorId: input.userId,
        }
      });

      if (prediction && prediction.fighterId) {
        return prediction.fighterId;
      }
      
      return null;
    })
})

