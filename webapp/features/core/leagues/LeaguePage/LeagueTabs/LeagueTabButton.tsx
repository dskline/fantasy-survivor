import classnames from "classnames";
import { IconType } from "react-icons";

type Props = {
  isActive: boolean;
  icon: IconType;
  title: string;
  onClick: () => void;
  hasNotification?: boolean;
};
export const LeagueTabButton = ({
  isActive,
  icon: Icon,
  title,
  onClick,
  hasNotification,
}: Props) => (
  <button
    className={classnames(
      "relative flex w-1/4 flex-col items-center gap-1 rounded-lg py-2 transition-colors",
      "md:w-auto md:rounded-b-none md:px-4 md:py-1.5",
      "disabled:cursor-auto",
      isActive
        ? "bg-blue-100 text-blue-700 md:bg-blue-500 md:text-blue-50 md:shadow-lg md:shadow-gray-400"
        : "bg-slate-100 text-slate-400 md:bg-blue-100 md:text-slate-700 md:shadow-sm md:shadow-gray-300"
    )}
    disabled={isActive}
    onClick={onClick}
  >
    <Icon className="h-4 w-4 md:hidden" />
    <div className="relative">{title}</div>
    {hasNotification && !isActive && (
      <div className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 md:top-0 md:-right-0.5" />
    )}
  </button>
);
