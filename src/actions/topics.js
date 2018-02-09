export const UPDATE_TOPICS = "UPDATE_TOPICS"

export default (update) => {
  type: UPDATE_TOPICS,
  payload: {
    update
  }
}
