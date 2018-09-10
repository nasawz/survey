import { init } from '@rematch/core';
import { svModel } from '../models/svModel';
import { authModel } from '../models/authModel';

const store = init({
  models: {
    svModel,
    authModel
  }
});

export default store;
