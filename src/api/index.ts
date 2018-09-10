// TODO
import axios from 'axios';

/**
 * club_auth
 *
 */
export const club_auth = (activityId) => {
  return axios.post(
    `/api/problem/isFill?date=` + new Date().getTime(),
    {
      activityId
    }
    // {
    //   transformRequest: [
    //     function(data) {
    //       let ret = '';
    //       for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
    //       }
    //       return ret;
    //     }
    //   ],
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
  );
};
