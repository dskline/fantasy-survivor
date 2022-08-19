/**
 * classNames would be the preferred function name, but that would require
 * extra configuration in eslint-plugin-tailwindcss
 */
export const classnames = (...classes: (false | null | undefined | string)[]) =>
  classes.join(" ").trim();
