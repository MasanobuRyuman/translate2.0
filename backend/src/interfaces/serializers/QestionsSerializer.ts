import { IFindQuestion } from '../../application/repositories/IQuestionRepository'

interface IClassList {
  [key: number]: string
}

const classList: IClassList = {
  1: '分からない',
  2: '大体分かる',
  3: '分かる',
}
export class QuestionSerializer {
  serialize(data: IFindQuestion[]) {
    let class1Questions = []
    let class2Questions = []
    let class3Questions = []
    if (data != undefined) {
      data.forEach((value) => {
        const questionType: keyof IClassList = value.classId
        const className = classList[questionType]
        const tempData = {
          userId: value.userId,
          questionId: value.questionId,
          EN: value.EN,
          JP: value.JP,
          classId: value.classId,
          className: className,
        }
        if (value.classId == 1) class1Questions.push(tempData)
        if (value.classId == 2) class2Questions.push(tempData)
        if (value.classId == 3) class3Questions.push(tempData)
      })
    } else {
      console.log('undefined')
    }
    const value = {
      classId_1: class1Questions,
      classId_2: class2Questions,
      classId_3: class3Questions,
    }
    return value
  }
}
