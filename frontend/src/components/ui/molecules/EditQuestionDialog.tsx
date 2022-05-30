import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect, useState } from 'react'

import { DeleteQuestion } from '../../../pages/api/questions'
import { UpdateQuestion } from '../../../pages/api/questions'

interface IClassList {
  [key: string]: number
}

const classList: IClassList = {
  分からない: 1,
  大体分かる: 2,
  分かる: 3,
}

interface IEditQuestionDialog {
  open: boolean
  setOpen: any
  questionId: number
  english: string
  japanese: string
  class: string
}

export const EditQuestionDialog = (props: IEditQuestionDialog) => {
  const [en, setEn] = useState('')
  const [jp, setJp] = useState('')
  const [questionClass, setQuestionClass] = useState('')

  useEffect(() => {
    setEn(props.english)
    setJp(props.japanese)
    console.log(props.class)
    setQuestionClass(props.class)
  }, [props.open])

  const handleClose = () => {
    props.setOpen(false)
  }

  const handleQuestionClassChange = (event: SelectChangeEvent) => {
    setQuestionClass(event.target.value as string)
  }

  const setEnglish = (e: any) => {
    setEn(e?.currentTarget?.value)
  }
  const setJapanese = (e: any) => {
    setJp(e?.currentTarget?.value)
  }

  const updateQuestion = async () => {
    const questionType: keyof IClassList = questionClass
    const classId = classList[questionType]
    await UpdateQuestion(props.questionId, en, jp, classId)
    location.reload()
  }

  const deleteQuestion = async () => {
    await DeleteQuestion(props.questionId)
    location.reload()
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
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography>問題のクラス</Typography>
            <FormControl fullWidth>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={questionClass}
                label='Age'
                onChange={handleQuestionClassChange}
              >
                <MenuItem value={'分からない'}>分からない</MenuItem>
                <MenuItem value={'大体分かる'}>大体分かる</MenuItem>
                <MenuItem value={'分かる'}>分かる</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateQuestion()}>更新</Button>
          <Button onClick={() => deleteQuestion()}>削除</Button>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
