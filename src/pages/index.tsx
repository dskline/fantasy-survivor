import React from 'react'
import { NextPage } from 'next'

import Box from 'src/components/_layout/Box'
import Image from 'src/components/Image'
import BasePage from 'src/templates/core/BasePage'

const HomePage: NextPage = () => (
  <BasePage>
    <Box height='100vh'>
      <Image
        imageName='under-construction-signage-on-laptop-keyboard-211122_vk2cks'
        alt='Website under construction'
        urlParams='e_grayscale'
        useUrlParamsToBlur
      />
    </Box>
  </BasePage>
)
export default HomePage
