import { styled } from '@mui/material'

interface IDefaultTextArea {
  Width: number
  Height: number
}

export const DefaultTextArea = styled('textarea')(({ Width, Height }: IDefaultTextArea) => ({
  resize: 'none',
  width: Width,
  height: Height,
}))
