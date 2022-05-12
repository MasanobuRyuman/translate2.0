import { IClassQuestion } from '../../../pages/api/questions'
import { ClassTestArea } from '../organisms'
import { ContentPageTemplate } from './ContentPageTemplate'

interface ITestPageTemplateProps {
  questionData: IClassQuestion
}

export const TestPageTemplate = (props: ITestPageTemplateProps) => {
  return (
    <div>
      <ContentPageTemplate>
        <ClassTestArea questionData={props.questionData} />
      </ContentPageTemplate>
    </div>
  )
}
