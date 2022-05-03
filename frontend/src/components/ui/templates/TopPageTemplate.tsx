import { Box } from '@mui/material'

import { DefaultBox, DefaultButton, H2, TopPageLoginButton } from '../atoms'
import { PageHeader, TopPageCatchCopy } from '../organisms'

export const TopPageTemplate = () => {
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
