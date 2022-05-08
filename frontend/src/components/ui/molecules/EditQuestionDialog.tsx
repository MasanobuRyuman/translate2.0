import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent 
} from '@mui/material'
import {useEffect,useState} from 'react'

interface IEditQuestionDialog {
  open: boolean
  setOpen: any
  english: string
  japanese: string
  class : string
}
export const EditQuestionDialog = (props: IEditQuestionDialog) => {
  const [en,setEn] = useState("") 
  const [jp,setJp] = useState("")
  const [questionClass,setQuestionClass] = useState("")

  useEffect(()=>{
    setEn(props.english)
    setJp(props.japanese)
    setQuestionClass(props.class)
    console.log(props.class)
  },[props.open])

  const handleClose = (question: any) => {
    props.setOpen(false)
  }

  const handleQuestionClassChange = (event: SelectChangeEvent)=>{
    setQuestionClass(event.target.value as string);
  }

  const setEnglish = (e:any) => {
    setEn(e?.currentTarget?.value)
  }
  const setJapanese = (e:any) => {
    setJp(e?.currentTarget?.value)
  }
  return (
    <div>
      <p>{props.open}</p>
      <Dialog
        open={props.open}
        onClose={handleClose}
        fullWidth={true}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <p>英語</p>
          <TextField
            autoFocus
            fullWidth
            variant='standard'
            onChange={(e) => {
              setEnglish(e)
            }}
            value={en}
          />
          <p>日本語</p>
          <TextField
            autoFocus
            fullWidth
            variant='standard'
            onChange={(e) => {
              setJapanese(e)
            }}
            value={jp}
          />
          <Box sx={{
            mt: 3,
          }}>
            <Typography>問題のクラス</Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={questionClass}
                label="Age"
                onChange={handleQuestionClassChange}
              >
                <MenuItem value={"分からない"}>分からない</MenuItem>
                <MenuItem value={20}>大体分かる</MenuItem>
                <MenuItem value={30}>分かる</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            更新
          </Button>
          <Button onClick={handleClose}>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
