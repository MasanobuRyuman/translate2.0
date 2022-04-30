import axios from "axios";

export interface IQuestion {
  userId : number,
  questionId : number,
  EN : string,
  JP : string,
  classId : number,
  class : string,
}

export interface IClassQuestion {
  classId_1:IQuestion[]
  classId_2:IQuestion[]
  classId_3:IQuestion[]
}

const tempQuestionData = {
  classId_1 : [
    {userId:1,questionId:2,EN:"test",JP:"テスト",classId:2,class:"わからない"},
    {userId:2,questionId:1,EN:"test3",JP:"テスト",classId:1,class:"わからない"},
    {userId:3,questionId:3,EN:"test34",JP:"テスト",classId:3,class:"わからない"},
    {userId:4,questionId:4,EN:"test4",JP:"テスト",classId:4,class:"わからない"},
  ],
  classId_2:[
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
  ],
  classId_3:[
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
    {userId:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
  ]
}

export const FetchQuestionData = ()=>{
  return(tempQuestionData)
}
