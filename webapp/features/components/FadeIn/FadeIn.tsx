import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  show: boolean;
  className?: string;
  preload?: boolean;
};
export const FadeIn = ({ children, show, className, preload }: Props) => (
  <div
    className={classnames(
      "transition-all duration-300",
      show ? "opacity-100" : "opacity-0",
      className
    )}
  >
    {preload ? children : show && children}
  </div>
);
