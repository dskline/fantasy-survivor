import classnames from "classnames";

import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { Contestant } from "@/features/core/leagues/LeaguePage/types";

const PLACEHOLDER_CONTESTANT = {
  team_color: "gray",
  portrait_src: "",
  fullName: "",
};

type Props = {
  contestant?: Contestant;
  className?: string;
};
export const ContestantChip = ({ contestant, className }: Props) => {
  const { team_color, portrait_src, fullName } =
    contestant || PLACEHOLDER_CONTESTANT;
  return (
    <div
      className={classnames(
        "z-10 flex rounded-full shadow shadow-gray-500",
        "h-12 w-12 md:h-16 md:w-16",
        "border-2 md:border-[3px]",
        team_color === "blue" && "border-blue-500",
        team_color === "green" && "border-green-500",
        team_color === "orange" && "border-orange-500"
      )}
    >
      {portrait_src && (
        <span className={className}>
          <Thumbnail src={portrait_src} size={100} round name={fullName} />
        </span>
      )}
    </div>
  );
};
