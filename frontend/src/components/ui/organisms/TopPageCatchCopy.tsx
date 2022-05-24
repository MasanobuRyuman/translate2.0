import CheckIcon from '@mui/icons-material/Check'
import { Box } from '@mui/material'

import { H1, H3 } from '../atoms'

export const TopPageCatchCopy = () => {
  return (
    <div>
      <Box
        sx={{
          width: {
            sm: 600,
            xs: 300,
          },
          m: 'auto',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              mt: 3,
            }}
          >
            <CheckIcon sx={{ width: 45, height: 45 }} />
            <H3
              sx={{
                textDecoration: 'underline',
              }}
            >
              &nbsp;翻訳から学習までを一貫してサポート
            </H3>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CheckIcon sx={{ width: 45, height: 45 }} />
            <H3
              sx={{
                textDecoration: 'underline',
              }}
            >
              &nbsp;翻訳してからすぐに保存
            </H3>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CheckIcon sx={{ width: 45, height: 45 }} />
            <H3
              sx={{
                textDecoration: 'underline',
              }}
            >
              &nbsp;習熟度に合わせて復習間隔を管理
            </H3>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
