import { BsFillExclamationCircleFill } from "react-icons/bs";

export const RosterHeader = () => (
  <div className="flex items-center gap-4 rounded-lg bg-red-50 p-4 text-red-700">
    <BsFillExclamationCircleFill className="h-5 w-5" />
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{`You don't have a roster yet!`}</div>
      <div className="text-xs">
        {`Don't forget to select your roster before the league begins.`}
      </div>
    </div>
  </div>
);
