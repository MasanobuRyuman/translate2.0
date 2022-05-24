import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import { TestArea, QuestionTabs } from '../molecules'

interface ClassTestAreaProps {
  questionData: IClassQuestion
}

export const ClassTestArea = (props: ClassTestAreaProps) => {
  return (
    <div>
      <Box
        sx={{
          width: {
            lg: 850,
            md: 600,
            sm: 400,
            xs: 300,
          },
          height: 600,
          m: 'auto',
        }}
      >
        <QuestionTabs
          class_1={<TestArea questionData={props.questionData.classId_1} />}
          class_2={<TestArea questionData={props.questionData.classId_2} />}
          class_3={<TestArea questionData={props.questionData.classId_3} />}
        />
      </Box>
    </div>
  )
}
