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
} from '@mui/material'
import Link from 'next/link'

import { DefaultBox, H4 } from '../atoms'

export const ContentPageSideArea = () => {
  const test = () => {
    console.log('kita')
  }
  return (
    <div>
      <DefaultBox Width={200} Height={500}>
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
                <Link href="/translate"><ListItemText onClick={() => test()} primary='翻訳' /></Link>
              </ListItem>
              <ListItem button>
                <Link href="/questionList"><ListItemText onClick={() => test()} primary='問題一覧' /></Link>
              </ListItem>
              <ListItem button>
                <Link href="/test"><ListItemText onClick={() => test()} primary='テスト' /></Link>
              </ListItem>
              <ListItem button>
                <ListItemText onClick={() => test()} primary='ログアウト' />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </DefaultBox>
    </div>
  )
}
