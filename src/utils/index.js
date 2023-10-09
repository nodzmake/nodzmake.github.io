export const objWithSelectiveFields = (
  oldArray,
  propertyNames
) => {
  return oldArray.map((item) => {
    const newObj = {}
    propertyNames.forEach(propertyName => {
      newObj[propertyName] = item[propertyName]
    })
    return newObj
  })
}
