import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import React, { useContext } from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import { QuestionList, QuestionTabs } from '../molecules'

interface IClassQuestionListProps {
  questionData: IClassQuestion
}

export const ClassQuestionList = (props: IClassQuestionListProps) => {
  return (
    <QuestionTabs
      class_1={<QuestionList questionData={props.questionData.classId_1} />}
      class_2={<QuestionList questionData={props.questionData.classId_2} />}
      class_3={<QuestionList questionData={props.questionData.classId_3} />}
    />
  )
}
