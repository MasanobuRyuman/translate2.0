import { Box, Grid } from '@mui/material'
import React from 'react'

import { PointCard } from './../molecules'

export const PointArea = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#D4E7F9',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '85%',
            m: 'auto',
          }}
        >
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 12 }}
            justifyContent="center"
          >
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <PointCard
                  TitleText={'Point 1'}
                  Text={
                    '翻訳から学習までを一貫してサポートするから苦手な単語をピンポイントで学習'
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <PointCard
                  TitleText={'Point 2'}
                  Text={
                    '翻訳してからその場で保存できるから続けられる'
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                  mb: 3,
                }}
              >
                <PointCard
                  TitleText={'Point 3'}
                  Text={'習熟度に合わ復習間隔を管理できるから効率的'}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}