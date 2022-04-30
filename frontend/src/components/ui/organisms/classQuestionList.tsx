import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs, Tab, Typography, Box, } from '@mui/material'
import React, { useContext } from 'react'

import {IClassQuestion} from '../../../pages/api/questions'
import {QuestionList} from '../molecules'


interface IClassQuestionListProps {
  questionData : IClassQuestion
}



export const ClassQuestionList = (props:IClassQuestionListProps)=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="分からない" value="1" />
            <Tab label="少し分かる" value="2" />
            <Tab label="分かる" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><QuestionList questionData={props.questionData.classId_1} /></TabPanel>
        <TabPanel value="2"><QuestionList questionData={props.questionData.classId_2} /></TabPanel>
        <TabPanel value="3"><QuestionList questionData={props.questionData.classId_3} /></TabPanel>
      </TabContext>
    </Box>
  )
}