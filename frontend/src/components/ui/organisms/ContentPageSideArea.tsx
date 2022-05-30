import {
  Box,
  Paper,
  Menu,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

import { DefaultBox, DefaultButton, H4 } from '../atoms'

export const ContentPageSideArea = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const buttonMenuOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const buttonMenuHandleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <DefaultBox
        sx={{
          width: {
            lg: 300,
            md: 200,
            sm: 125,
          },
          height: '100vh',
          display: {
            sm: 'block',
            xs: 'none',
          },
        }}
      >
        <Box
          sx={{
            width: '90%',
            m: 'auto',
            pt: 10,
          }}
        >
          <Paper>
            <List
              component='nav'
              aria-labelledby='nested-list-subheader'
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader'
                  sx={{
                    backgroundColor: '#4D90CE',
                  }}
                >
                  <H4
                    sx={{
                      color: '#FFFFFF',
                    }}
                  >
                    メニュー
                  </H4>
                </ListSubheader>
              }
            >
              <Link href='/translate' passHref>
                <ListItem button>
                  <ListItemText primary='翻訳' />
                </ListItem>
              </Link>
              <Link href='/questionList' passHref>
                <ListItem button>
                  <ListItemText primary='問題一覧' />
                </ListItem>
              </Link>
              <Link href='/test' passHref>
                <ListItem button>
                  <ListItemText primary='テスト' />
                </ListItem>
              </Link>
              <a onClick={() => handleClickOpen()}>
                <ListItem button>
                  <ListItemText primary='ログアウト' />
                </ListItem>
              </a>
            </List>
          </Paper>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent>
            <p>ログアウトしますか？</p>
          </DialogContent>
          <DialogActions>
            <DefaultButton onClick={() => signOut()}>ログアウト</DefaultButton>
            <DefaultButton onClick={handleClose} autoFocus>
              閉じる
            </DefaultButton>
          </DialogActions>
        </Dialog>
      </DefaultBox>
      <div>
        <DefaultButton
          id='basic-button'
          aria-controls={buttonMenuOpen ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={buttonMenuOpen ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            display: {
              sm: 'none',
              xs: 'inline',
            },
            mt: 10,
            ml: 3,
          }}
        >
          メニュー
        </DefaultButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={buttonMenuOpen}
          onClose={buttonMenuHandleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <List component='nav' aria-labelledby='nested-list-subheader'>
            <Link href='/translate' passHref>
              <ListItem button>
                <ListItemText primary='翻訳' />
              </ListItem>
            </Link>
            <Link href='/questionList' passHref>
              <ListItem button>
                <ListItemText primary='問題一覧' />
              </ListItem>
            </Link>

            <Link href='/test' passHref>
              <ListItem button>
                <ListItemText primary='テスト' />
              </ListItem>
            </Link>
            <a onClick={() => handleClickOpen()}>
              <ListItem button>
                <ListItemText primary='ログアウト' />
              </ListItem>
            </a>
          </List>
        </Menu>
      </div>
    </div>
  )
}
