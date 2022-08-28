import classnames from "classnames";

import Image from "@/features/components/Image";
import { LeaguePageProps } from "@/features/core/leagues/LeaguePage/index";
import { LeaguePills } from '@/features/core/leagues/LeaguePage/LeaguePills'

export const LeagueHeader = (props: LeaguePageProps) => {
  const { title, season, show } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="w-1/4 max-w-[120px]">
        <Image
          src={season.logo_src}
          options="ar_1:1,c_fill,g_auto"
          width={120}
          height={120}
          alt=""
        />
      </div>
      <div className="-mt-2">
        <h1 className="text-lg font-semibold">{title || `${show.title} League`}</h1>
        <div className="hidden md:block">
          <LeaguePills {...props} />
        </div>
        <button
          className={classnames(
            "mt-1 rounded px-2 py-1 text-sm",
            "bg-gradient-to-br from-blue-600 to-blue-700 text-blue-100"
          )}
        >
          Join League
        </button>
      </div>
    </div>
  );
}
