export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action)
    console.log('Prev state:', prevState)
    console.log('Arguments:', args)
    const newState = reducer(prevState, action, args)
    console.log('New state:', newState)
    console.groupEnd()
    return newState
  }
}