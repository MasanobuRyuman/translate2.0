import { Height } from '@mui/icons-material'
import { Box, styled } from '@mui/material'
import { height } from '@mui/system'

interface IDefaultBox {
  Width: number | string
  Height: number | string
}

export const DefaultBox = styled(Box)({
  backgroundColor: '#D4E7F9',
  height: 300,
  width: 300,
})
