import { z } from "zod";

import { prisma } from "../../db/client";
import { router, publicProcedure } from "../trpc";

import { Fight, Fighter } from "../../../types/main";
import { PrismaPromise } from "@prisma/client";

export const fightsRouter = router({
  getFights: publicProcedure
    .query((): PrismaPromise<(Fight & { fighters: Fighter[]; })[]> => {
      return prisma.fight.findMany({
        include: {
          fighters: true,
        }
      })
    }),

  getFight: publicProcedure
    .input(z.object({fightId: z.string().nullish() }).nullish())
    .query(({ input }) => {
      if (input && input.fightId) {
        return prisma.fight.findUnique({
          where: {
            id: input.fightId,
          },
          include: {
            fighters: true,
          }
        })
      }
    })

});
