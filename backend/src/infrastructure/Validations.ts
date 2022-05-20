export function numCheck(item: number): number {
  if (!Number.isNaN(Number(item))) return Number(item)
  console.log(`${item} Numcheck Error!`)
  throw new Error(`Numcheck Error! ${item} is not NUMBER!`)
}

export function strCheck(item:string):string {
  if (typeof item === "string") return item
  console.log(`${item} StrCheck Error`)
  throw new Error(`StrCheck Error! ${item} is not STRING`)
}