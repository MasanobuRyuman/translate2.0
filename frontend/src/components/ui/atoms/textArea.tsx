import { styled } from '@mui/material'

interface IDefaultTextArea {
  Width: number
  Height: number
}

export const DefaultTextArea = styled('textarea')({
  display:"block",
  resize: 'none',
  width: 300,
  height: 200,
})
