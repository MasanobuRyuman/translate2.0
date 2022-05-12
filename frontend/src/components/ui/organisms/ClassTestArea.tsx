import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import { TestArea } from '../molecules'

interface ClassTestAreaProps {
  questionData: IClassQuestion
}

export const ClassTestArea = (props: ClassTestAreaProps) => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <div>
      <Box sx={{
        width : {
          lg:800,
          md: 600,
          sm : 400,
          xs : 300,
        },
        height : 600,
        m:"auto"
      }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='分からない' value='1' />
              <Tab label='少し分かる' value='2' />
              <Tab label='分かる' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <TestArea questionData={props.questionData.classId_1} />
          </TabPanel>
          <TabPanel value='2'>
            <TestArea questionData={props.questionData.classId_2} />
          </TabPanel>
          <TabPanel value='3'>
            <TestArea questionData={props.questionData.classId_3} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}
