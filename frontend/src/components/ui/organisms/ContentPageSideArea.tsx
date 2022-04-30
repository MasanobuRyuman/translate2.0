import {Box,Paper,MenuItem,MenuList,List,ListSubheader,ListItem,ListItemText} from '@mui/material'

import {DefaultBox,H4} from '../atoms'

export const ContentPageSideArea = () => {
  const test = () =>{
    console.log("kita")
  }
  return(
    <div>
      <DefaultBox Width={200} Height="100%">
        <Box sx={{
          width :"80%",
          m : "auto",
          pt : 3,
        }}>
          <Paper>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader" sx={{
                backgroundColor : "#4D90CE",
              }}>
                <H4 sx={{
                  color : "#FFFFFF"
                }}>メニュー</H4>
              </ListSubheader>
            }
          >
            <ListItem button>
              <ListItemText onClick={()=>test()} primary="翻訳" />
            </ListItem>
            <ListItem button>
              <ListItemText onClick={()=>test()} primary="問題一覧" />
            </ListItem>
            <ListItem button>
              <ListItemText onClick={()=>test()} primary="テスト" />
            </ListItem>
            <ListItem button>
              <ListItemText onClick={()=>test()} primary="ログアウト" />
            </ListItem>
          </List>
          </Paper>
        </Box>
      </DefaultBox>
    </div>
  )
}