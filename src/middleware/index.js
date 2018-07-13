import music from './music';
import articles from './articles';
import api from './api';

const logger = () => next => (action) => {
  console.log(action.type);
  next(action);
};

export default [...music, ...articles, api, logger];
