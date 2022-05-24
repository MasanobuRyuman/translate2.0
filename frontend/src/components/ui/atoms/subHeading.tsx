import {Box} from '@mui/material'
import { ReactNode } from 'react';

export const DefaultSubHeading = ({ children }: {
  children: ReactNode
})=>{
  return(
    <Box sx={{
      backgroundColor: "#D4E7F9",
      border: "solid",
      borderWidth: 1,
      borderRadius : 2,
      width :100,
      height: 40,
    }}>{children}</Box>
  )
}