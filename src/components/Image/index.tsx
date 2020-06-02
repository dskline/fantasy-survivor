import React, { FC } from 'react'
import dynamic from 'next/dynamic'

import Box from 'src/components/_layout/Box'
import { ImageProps } from 'src/components/Image/types'
import config from 'src/config'
import { MAX_APPLICATION_WIDTH_PX } from 'src/templates/core/BasePage'

// TODO: fix TS issues importing client-only package without typings (https://github.com/vercel/next.js/issues/4515)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicImage: any = dynamic(() => import('react-cloudinary-lazy-image'), { ssr: false })

const Image: FC<ImageProps> = (props) => {
  const fluid = props.fixed
    ? undefined
    : {
      maxWidth: MAX_APPLICATION_WIDTH_PX,
    }

  return (
    <Box width='100%' height='100%'>
      <DynamicImage
        cloudName={config.public.cloudinaryCloudName}
        fluid={fluid}
        {...props}
      />
    </Box>
  )
}

export default Image
