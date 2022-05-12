import axios from 'axios'

export interface IQuestion {
  userId: number
  questionId: number
  EN: string
  JP: string
  classId: number
  className: string
}

export interface IClassQuestion {
  classId_1: IQuestion[]
  classId_2: IQuestion[]
  classId_3: IQuestion[]
}

const tempQuestionData = {
  classId_1: [
    { userId: 1, questionId: 2, EN: 'test', JP: 'テスト', classId: 2, class: '分からない' },
    { userId: 2, questionId: 1, EN: 'test3', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 3, questionId: 3, EN: 'test34', JP: 'テスト', classId: 3, class: '分からない' },
    { userId: 4, questionId: 4, EN: 'test4', JP: 'テスト', classId: 4, class: '分からない' },
  ],
  classId_2: [
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
  ],
  classId_3: [
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
    { userId: 1, questionId: 1, EN: 'test', JP: 'テスト', classId: 1, class: '分からない' },
  ],
}

export const FetchQuestionData = async (id: number) => {
  const result = await axios.get(`http://localhost:3001/api/find/${id}`)
  return result.data
}

export const CreateQuestion = async (
  userId: number,
  english: string,
  japanese: string,
  classId: number,
) => {
  console.log('hiatta')
  const result = await axios.post('http://localhost:3001/api/create', {
    data: { userId: userId, EN: english, JP: japanese, classId: classId },
  })
  console.log(result)
}

interface IUpdateQuestion {
  questionId: number
  english: string
  japanese: string
  classId: number
}

export const UpdateQuestion = async (
  questionId: number,
  english: string,
  japanese: string,
  classId: number,
) => {
  await axios.post('http://localhost:3001/api/update', {
    data: { questionId: questionId, EN: english, JP: japanese, classId: classId },
  })
}

export const DeleteQuestion = async (questionId: number) => {
  console.log('deletequestion')
  console.log(questionId)
  await axios.post('http://localhost:3001/api/delete', { data: { questionId: questionId } })
}
