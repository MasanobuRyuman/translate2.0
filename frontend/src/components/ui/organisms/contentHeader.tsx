import {Box} from '@mui/material'

import {Header,Logo} from '../atoms'

export const ContentHeader = ()=>{
  return(
    <div>
      <Header>
        <Box sx={{
          m:"auto",
        }}>
          <Logo sx={{
            textAlign:"center",
            pt : 1,
          }}>Translate2.0</Logo>
        </Box>
      </Header>
    </div>
  )
}