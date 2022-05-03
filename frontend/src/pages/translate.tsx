import type { NextPage } from 'next'

import { TranslatePage } from '../components/ui/templates'
import { englishTranslate, japaneseTranslate } from './api/Translate'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Translate: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()

  return (
    <div>
      <TranslatePage
        questionData={QuestionData}
        englishTranslate={(EN) => englishTranslate(EN)}
        japaneseTranslate={(JP) => japaneseTranslate(JP)}
      />
    </div>
  )
}

export default Translate
