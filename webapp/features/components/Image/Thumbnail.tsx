import { Image } from "@/features/components/Image";

type Props = {
  src: string;
  size: number;
  className?: string;
  name?: string;
  round?: boolean;
};
export const Thumbnail = ({ src, size, className, name, round }: Props) => (
  <Image
    src={src}
    className={className}
    height={size}
    width={size}
    options={["c_thumb", "g_face", ...(round ? ["r_max"] : [])]}
    alt={name || ""}
  />
);
