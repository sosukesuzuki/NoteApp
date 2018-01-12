import removeMd from 'remove-markdown-and-html'

export default function findTitle (value) {
  const splitted = value.split('\n')
  let title = null
  let isInsideCodeBlock = false

  splitted.some((line, index) => {
    const trimmedLine = line.trim()
    const trimmedNextLine = splitted[index + 1] === undefined ? '' : splitted[index + 1].trim()
    if (trimmedLine.match('```')) {
      isInsideCodeBlock = !isInsideCodeBlock
    }
    if (isInsideCodeBlock === false && (trimmedLine.match(/^# +/) || trimmedNextLine.match(/^=+$/))) {
      title = trimmedLine
      return true
    }
  })

  if (title === null) {
    title = ''
    splitted.some((line) => {
      if (line.trim().length > 0) {
        title = line.trim()
        return true
      }
    })
  }

  return removeMd(title)
}
