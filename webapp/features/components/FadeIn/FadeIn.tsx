import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  show: boolean;
  className?: string;
  render?: boolean;
};
export const FadeIn = ({ children, show, className, render }: Props) => (
  <div
    className={classnames(
      "transition-opacity duration-300",
      show ? "opacity-100" : "opacity-0",
      className,
    )}
  >
    {render ? children : show && children}
  </div>
);
