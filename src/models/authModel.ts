import { club_auth } from '../api';

export const authModel = {
  state: {
    auth_result: null
  },
  reducers: {
    merge_auth_result(state, payload) {
      return Object.assign({}, state, payload);
    }
  },
  effects: (dispatch) => ({
    async clubAuth(payload, state) {
      let result = await club_auth(1);
      dispatch.authModel.merge_auth_result({ auth_result: result.data });
    }
  })
};
