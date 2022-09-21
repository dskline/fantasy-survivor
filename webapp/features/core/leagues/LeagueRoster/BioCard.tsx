import classnames from "classnames";
import { MdLocationOn } from "react-icons/md";

import { Image } from "@/features/components/Image";
import { Contestant } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  contestant: Contestant;
  preload?: boolean;
};
export const BioCard = ({ contestant, preload }: Props) => {
  const { team_color, portrait_src, fullName } = contestant;

  return (
    <div
      className={classnames(
        "flex h-full md:grid md:grid-cols-1 [&>*]:md:max-w-[222px]",
        "overflow-hidden rounded-lg border-2 border-slate-500 md:border-none"
      )}
    >
      <div
        className={classnames(
          "col-span-full col-start-1 row-span-full row-start-1 overflow-hidden md:rounded-lg",
          "max-w-[clamp(33%,50%,222px)]"
        )}
      >
        <Image
          src={portrait_src}
          alt=""
          className="h-full w-full object-cover"
          width={444}
          height={666}
          priority={preload}
        />
      </div>
      <div
        className={classnames(
          "flex-1 md:col-span-1 md:col-start-1 md:row-span-full md:row-start-1",
          "md:h-1/2 md:self-end",
          team_color === "blue" && "bg-blue-100",
          team_color === "green" && "bg-emerald-50",
          team_color === "orange" && "bg-orange-100",
          team_color === "red" && "bg-red-100",
          team_color === "yellow" && "bg-yellow-100",
          "bg-none md:bg-inherit md:bg-gradient-to-t md:from-black/60 md:to-black/0"
        )}
      >
        <div className="flex h-full flex-col gap-0.5 p-4 md:justify-end md:text-white">
          <div
            className="z-10 mb-2 text-ellipsis font-semibold md:text-2xl md:leading-tight"
            title={fullName}
          >
            {fullName}
          </div>
          <div className="flex items-center text-xs">
            <MdLocationOn className="h-4 w-4" />
            <span>Unknown</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Age ?</span>
            <span>Job ?</span>
          </div>
          <div>
            <span className="text-xs md:hidden">Lorem ipsum</span>
          </div>
        </div>
      </div>
    </div>
  );
};
