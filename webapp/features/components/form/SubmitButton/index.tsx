import classnames from "classnames";
import { motion } from "framer-motion";
import { ImArrowRight2 } from "react-icons/im";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
  isSubmitting?: boolean;
};
export const SubmitButton = ({
  title,
  subtitle,
  className,
  isSubmitting,
}: Props) => (
  <button
    type="submit"
    className={classnames(
      className,
      "flex items-center justify-between px-3 py-2",
      "rounded-full bg-gradient-to-bl from-blue-700 to-blue-800 text-blue-50 shadow-2xl"
    )}
  >
    <div className="flex flex-col px-4">
      {subtitle && <div className="text-xs">{subtitle}</div>}
      <div className="font-semibold">{title}</div>
    </div>
    <div
      className={classnames(
        "relative flex h-10 w-10 items-center justify-center rounded-full",
        isSubmitting ? "bg-blue-800 text-white" : "bg-white text-blue-800"
      )}
      role="status"
    >
      {!isSubmitting && <ImArrowRight2 className="h-5 w-5" />}
      {isSubmitting && (
        <motion.div
          className={classnames(
            "absolute left-0 top-0 h-full w-full",
            "box-border rounded-full border-4 border-transparent border-t-current"
          )}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 1.3,
          }}
        />
      )}
    </div>
  </button>
);
