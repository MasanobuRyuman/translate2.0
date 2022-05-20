export function numcheck(item: number): number {
  if (!Number.isNaN(Number(item))) return Number(item);
  console.log(`${item} Numcheck Error!`)
  throw new Error(`Numcheck Error! ${item} is not NUMBER!`);
}