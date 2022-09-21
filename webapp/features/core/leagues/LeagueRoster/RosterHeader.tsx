import { AnimatePresence, motion } from "framer-motion";
import { BsFillExclamationCircleFill } from "react-icons/bs";

type Props = {
  isRosterComplete: boolean;
};
export const RosterHeader = ({ isRosterComplete }: Props) => (
  <AnimatePresence>
    {!isRosterComplete && (
      <motion.div
        key="roster-incomplete"
        exit={{ height: 0 }}
        className="flex items-center gap-4 rounded-lg bg-red-50 p-4 text-red-700"
      >
        <BsFillExclamationCircleFill className="h-5 w-5" />
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{`You haven't completed your roster yet!`}</div>
          <div className="text-xs">
            {`Don't forget to select your roster before the league begins.`}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
