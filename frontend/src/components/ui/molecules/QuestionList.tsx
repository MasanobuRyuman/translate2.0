import Edit from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { IQuestion } from '../../../pages/api/questions'

interface IQuestionListProps {
  questionData: IQuestion[]
}

export const QuestionList = (props: IQuestionListProps) => {
  const test = (questionId: any) => {
    console.log(questionId)
  }
  const columns: GridColDef[] = [
    { field: 'EN', headerName: '英語', width: 200 },
    { field: 'JP', headerName: '日本語', width: 200 },
    {
      field: 'editBtn',
      headerName: '詳細',
      sortable: false,
      width: 60,
      renderCell: (params) => (
        <button onClick={() => test(params.row.questionId)}>
          <Edit />
        </button>
      ),
    },
  ]

  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 400,
        }}
      >
        <DataGrid
          getRowId={(row) => row.questionId}
          rows={props.questionData}
          columns={columns}
          pageSize={5}
        />
      </Box>
    </div>
  )
}
