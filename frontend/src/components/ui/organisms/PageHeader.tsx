import { Box } from '@mui/material'

import { Header, Logo } from '../atoms'

export const PageHeader = () => {
  return (
    <div>
      <Header>
        <Logo
          sx={{
            textAlign: 'center',
            pt: -1,
          }}
        >
          Translate2.0
        </Logo>
      </Header>
    </div>
  )
}
