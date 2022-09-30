import Head from "next/head";

import { generateImageUrl } from "@/features/components/Image/generateImageUrl";

const APPLE_ICON_SIZES = [76, 128, 192];

type Props = {
  src: string;
};
export const MetaIcons = ({ src }: Props) => (
  <Head>
    <meta
      property="og:image"
      content={generateImageUrl(src, ["ar_1:1", "c_fill", "g_auto"])}
    />
    <link
      rel="icon"
      href={generateImageUrl(src, [
        "ar_1:1",
        "c_fill",
        "g_auto",
        `w_16`,
        `h_16`,
      ])}
    />
    <link
      rel="apple-touch-icon"
      href={generateImageUrl(src, ["ar_1:1", "c_fill", "g_auto"])}
    />
    {APPLE_ICON_SIZES.map((size) => (
      <link
        key={size}
        rel="apple-touch-icon"
        sizes={`${size}x${size}`}
        href={generateImageUrl(src, [
          "ar_1:1",
          "c_fill",
          "g_auto",
          `w_${size}`,
          `h_${size}`,
        ])}
      />
    ))}
  </Head>
);
