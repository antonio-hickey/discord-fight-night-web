import { z } from "zod";

import { prisma } from "../../db/client";
import { router, publicProcedure } from "../trpc";

import type { Fight, Fighter } from "../../../types/main";
import type { PrismaPromise } from "@prisma/client";

export const fightsRouter = router({
  getFights: publicProcedure
    .query((): PrismaPromise<(Fight & { fighters: Fighter[]; })[]> => {
      return prisma.fight.findMany({
        include: {
          fighters: true,
        }
      });
    }),

  getFight: publicProcedure
    .input(z.object({fightId: z.string().nullish() }))
    .query(({ input }) => {
      if (input.fightId) {
        return prisma.fight.findUnique({
          where: {
            id: input.fightId,
          },
          include: {
            fighters: true,
          }
        });
      } else {
        return null;
      }
    })

});
