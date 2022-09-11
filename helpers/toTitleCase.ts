const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const toTitleCase = (str: string) => {
  return str.split(' ').map(capitalize).join(' ')
}

export default toTitleCase
