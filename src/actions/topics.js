export const UPDATE_TOPICS = "UPDATE_TOPICS"

export default (update) => {
  return{
    type: UPDATE_TOPICS,
    payload: {
      update
    }
  }
}
