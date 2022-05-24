import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'
import React from 'react'

interface IQuestionTabsProps {
  class_1: any
  class_2: any
  class_3: any
}

export const QuestionTabs = (props: IQuestionTabsProps) => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            indicatorColor='secondary'
            textColor='secondary'
            variant='fullWidth'
            centered
          >
            <Tab label='分からない' value='1' />
            <Tab label='少し分かる' value='2' />
            <Tab label='分かる' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>{props.class_1}</TabPanel>
        <TabPanel value='2'>{props.class_2}</TabPanel>
        <TabPanel value='3'>{props.class_3}</TabPanel>
      </TabContext>
    </div>
  )
}
