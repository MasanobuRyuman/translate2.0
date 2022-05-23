import { Box } from '@mui/material'
import React from 'react'

import { PageHeader, ContentPageSideArea, TranslateArea } from '../organisms'

interface IContentTemplateProps {
  children?: React.ReactNode
}

export const  ContentPageTemplate= (props: IContentTemplateProps) => {
  return (
    <div>
      <Box>
        <PageHeader />
        <Box
          sx={{
            display: {
              sm : 'flex',
              xs : 'block',
            }
          }}
        >
          <ContentPageSideArea />
          <Box
            sx={{
              m: 'auto',
              mt: {
                sm : 13,
                xs : 3,
              }
            }}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
    </div>
  )
}
