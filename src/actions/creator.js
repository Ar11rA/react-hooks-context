// didnt want to install redux for this
const createAction = (type, payload = null) => ({
  type,
  payload,
});

export default createAction;
