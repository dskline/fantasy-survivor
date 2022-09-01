import classnames from "classnames";
import { BsCheckCircleFill } from "react-icons/bs";

import Image from "@/features/components/Image";
import { LeaguePageProps } from "@/features/core/leagues/LeaguePage/index";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";

type LeagueHeaderProps = {
  isUserInLeague: boolean;
  onJoin: () => void;
};
export const LeagueHeader = (props: LeaguePageProps & LeagueHeaderProps) => {
  const { title, season, show, isUserInLeague, onJoin } = props;
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
        <h1 className="text-lg font-semibold">
          {title || `${show.title} League`}
        </h1>
        <div className="hidden md:block">
          <LeaguePills {...props} />
        </div>
        <div className="mt-2">
          <button
            type="button"
            className={classnames(
              "flex items-center gap-2 rounded shadow-lg",
              "bg-gradient-to-br py-1 pl-2 pr-3 text-xs font-semibold",
              isUserInLeague
                ? "from-green-500 to-green-600 text-green-100"
                : "from-blue-600 to-blue-700 text-blue-100"
            )}
            onClick={() => onJoin()}
            disabled={isUserInLeague}
          >
            {isUserInLeague ? (
              <>
                <BsCheckCircleFill className="h-3 w-3" />
                Joined
              </>
            ) : (
              "Join League"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
