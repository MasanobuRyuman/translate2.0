import { Box,Typography } from '@mui/material'

import { DefaultBox, TopPageLoginButton } from '../atoms'
import { PageHeader, TopPageCatchCopy,PointArea } from '../organisms'

interface ITopPageTemplate {
  signIn: any
}

export const TopPageTemplate = (props: ITopPageTemplate) => {
  return (
    <div>
      <PageHeader />
      <Box sx={{
        position: "relative"
      }}>
        <Box
          component = "img"
          src = "/translate_topImage.svg"
          sx={{
            mt : 8,
            width : "100%",
          }}
        />
        <TopPageLoginButton
          onClick={() => props.signIn()}
          sx={{
            display: 'block',
            top : "60%",
            left: 0,
            right: 0,
            margin: "auto",
            position : "absolute",
            width : {
              md : 250,
              sm : 200,
              xs : 100,
            },
            height : "10%",
            fontSize : "80%"
          }}
        >
          <Typography sx={{
            fontSize : {
              lg : 50,
              md : 40,
              sm : 30,
              xs : "100%",
            },
            mt : {
              md : -0.7,
              sm : -0.5,
            }
          }}>ログイン</Typography>
        </TopPageLoginButton> 
      </Box>
      <Box sx={{
        mt : -1,
      }}>
        <PointArea />
      </Box>
    </div>
  )
}
