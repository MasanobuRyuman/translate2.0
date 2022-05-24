import Edit from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'

import { IQuestion } from '../../../pages/api/questions'
import { EditQuestionDialog } from './EditQuestionDialog'

interface IQuestionListProps {
  questionData: IQuestion[]
}

export const QuestionList = (props: IQuestionListProps) => {
  const [open, setOpen] = useState(false)
  const [questionId, setQuestionId] = useState(0)
  const [english, setEnglish] = useState('')
  const [japanese, setJapanese] = useState('')
  const [questionClass, setQuestionClass] = useState('')

  const handleClickOpen = (question: any) => {
    setQuestionId(question.questionId)
    setEnglish(question.EN)
    setJapanese(question.JP)
    setQuestionClass(question.className)
    setOpen(true)
  }

  const columns: GridColDef[] = [
    { field: 'EN', headerName: '英語', flex: 1 },
    { field: 'JP', headerName: '日本語', flex: 1 },
    {
      field: 'editBtn',
      headerName: '編集',
      sortable: false,
      width: 65,
      renderCell: (params) => (
        <button onClick={() => handleClickOpen(params.row)}>
          <Edit />
        </button>
      ),
    },
  ]

  return (
    <div>
      <Box
        sx={{
          width: {
            lg: 800,
            md: 600,
            sm: 600,
          },
          height: 500,
        }}
      >
        <DataGrid
          getRowId={(row) => row.questionId}
          rows={props.questionData}
          columns={columns}
          pageSize={5}
        />
      </Box>
      <EditQuestionDialog
        open={open}
        setOpen={(value: boolean) => setOpen(value)}
        questionId={questionId}
        english={english}
        japanese={japanese}
        class={questionClass}
      />
    </div>
  )
}
