import { Box } from '@mui/material'

import { DefaultBox, DefaultButton, H2, TopPageLoginButton } from '../atoms'
import { PageHeader, TopPageCatchCopy } from '../organisms'

interface ITopPageTemplate {
  signIn: any
}

export const TopPageTemplate = (props: ITopPageTemplate) => {
  return (
    <div>
      <PageHeader />
      <DefaultBox Width='100%' Height='100vh'>
        <Box
          sx={{
            width: '80%',
            m: 'auto',
            pt: 5,
          }}
        >
          <TopPageCatchCopy />
          <TopPageLoginButton
            onClick={() => props.signIn()}
            sx={{
              display: 'block',
              m: 'auto',
              mt: 5,
            }}
          >
            ログイン
          </TopPageLoginButton>
        </Box>
      </DefaultBox>
    </div>
  )
}
