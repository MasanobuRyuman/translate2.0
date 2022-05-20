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

const apiURL = "https://translatestudy.herokuapp.com"

export const FetchQuestionData = async (id: number) => {
  const result = await axios.get(`${apiURL}/api/find/${id}`)
  return result.data
}

export const CreateQuestion = async (
  userId: number,
  english: string,
  japanese: string,
  classId: number,
) => {
  console.log('hiatta')
  const result = await axios.post(`${apiURL}/api/create`, {
    data: { userId: userId, EN: english, JP: japanese, classId: classId },
  })
  console.log(result)
}

export const UpdateQuestion = async (
  questionId: number,
  english: string,
  japanese: string,
  classId: number,
) => {
  await axios.post(`${apiURL}/api/update`, {
    data: { questionId: questionId, EN: english, JP: japanese, classId: classId },
  })
}

export const DeleteQuestion = async (questionId: number) => {
  await axios.post(`${apiURL}/api/delete`, { data: { questionId: questionId } })
}
