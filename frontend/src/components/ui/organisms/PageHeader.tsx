import { Box } from '@mui/material'

import { Header, Logo } from '../atoms'

export const PageHeader = () => {
  return (
    <div>
      <Header>
        <Logo
          sx={{
            textAlign: 'center',
          }}
        >
          Translate2.0
        </Logo>
      </Header>
    </div>
  )
}
