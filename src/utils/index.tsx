export const objWithSelectiveFields = (
  oldArray: any,
  propertyNames: Array<string>
) => {
  return oldArray.map((item: any) => {
    const newObj: any = {}
    propertyNames.forEach(propertyName => {
      newObj[propertyName] = item[propertyName]
    })
    return newObj
  })
}
