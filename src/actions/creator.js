// didnt want to install redux for this
const createAction = (type, payload = null) => {
  return {
    type,
    payload
  }
};

export default createAction;