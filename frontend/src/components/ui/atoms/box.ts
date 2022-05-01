import { Height } from '@mui/icons-material'
import { Box, styled } from '@mui/material'
import { height } from '@mui/system'

interface IDefaultBox {
  Width: number
  Height: number | string
}

export const DefaultBox = styled(Box)(({ Width, Height }: IDefaultBox) => ({
  backgroundColor: '#D4E7F9',
  height: Height,
  width: Width,
}))
