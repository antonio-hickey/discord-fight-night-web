import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import { Fight } from "../../../types/main";


const FIGHTS_MOCK: {[key: string]: Fight} = {
 "382c8e1f512a558289934aad389aa518": {
    "name": "MIDDLEWEIGHT TITLE BOUT",
    "hash": "382c8e1f512a558289934aad389aa518",
    "fighters": [
      {
        name: "Isreal Adesanya",
        rank: 1,
        imageUrl: "https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2021-06/68129_profile-galery_fullbodyleft-picture_ADESANYA_ISRAEL_L_06-12.png?VersionId=null&itok=9CRLOAsk",
      },
      {
        name: "Alex Pereira",
        rank: 4,
        imageUrl: "https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2022-06/1a649e28-6151-4e67-9417-c09bf42014a8%252FPEREIRA_ALEX_R_07-02.png?itok=gL8SFt3P",
      }
    ]
  },
  "0f89492e043bb1706e7151a38d173552": {
    "name": "WOMEN'S STRAWWEIGHT TITLE BOUT",
    "hash": "0f89492e043bb1706e7151a38d173552",
    "fighters": [
      {
        name: "Carla Esparza",
        rank: 1,
        imageUrl: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_matchup_stats_full_body/s3/2022-06/ESPARZA_CARLA_L_05-07_BELT.png?itok=BXBDfi93",
      },
      {
        name: "Zhang Weili",
        rank: 2,
        imageUrl: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_matchup_stats_full_body/s3/2022-07/ade57ced-076a-46fd-825c-607cb8749f9d%252FWEILI_ZHANG_R_06-11.png?itok=j1Ht9Xpb",
      }
    ]
  }
}

export const fightsRouter = router({
  getFights: publicProcedure
    .query((): {[key: string]: Fight} => {
      return FIGHTS_MOCK
    }),
  getFight: publicProcedure
    .input(z.object({fightHash: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return FIGHTS_MOCK[input?.fightHash!]
    })
});
