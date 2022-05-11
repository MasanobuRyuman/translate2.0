/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Paper,
  MenuItem,
  MenuList,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

import { DefaultBox, DefaultButton, H4 } from '../atoms'

export const ContentPageSideArea = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const test = () => {
    console.log('kita')
  }
  return (
    <div>
      <DefaultBox Width={300} Height={800}>
        <Box
          sx={{
            width: '80%',
            m: 'auto',
            pt: 3,
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
              <ListItem button>
                <Link href='/translate'>
                  <ListItemText onClick={() => test()} primary='翻訳' />
                </Link>
              </ListItem>
              <ListItem button>
                <Link href='/questionList'>
                  <ListItemText onClick={() => test()} primary='問題一覧' />
                </Link>
              </ListItem>
              <ListItem button>
                <Link href='/test'>
                  <ListItemText onClick={() => test()} primary='テスト' />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemText onClick={() => handleClickOpen()} primary='ログアウト' />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </DefaultBox>
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
    </div>
  )
}
