export class QuestionSerializer {
  serialize(data:any){
    let class1Questions = []
    let class2Questions = []
    let class3Questions = []
    if (data != undefined){
      data.forEach((value) =>{
        const classId = value.classId.classId
        const className = value.classId.className
        const tempData = {
          userId : value.userId,
          questionId : value.questionId,
          EN : value.EN,
          JP : value.JP,
          classId : classId,
          className : className
        }
        if (classId == 1) class1Questions.push(tempData)
        if (classId == 2) class2Questions.push(tempData)
        if (classId == 3) class3Questions.push(tempData)
      })
    }else{
      console.log("undefined")
    }
    const value = {
      classId_1:class1Questions,
      classId_2:class2Questions,
      classId_3:class3Questions,
    }
    return(value)
  }
} 