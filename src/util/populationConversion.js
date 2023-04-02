const populationValueConversion = (val) => {
  let str = val?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return str
}

export default populationValueConversion