import axios from 'axios';

export default {
  getCandidates: () => axios.get('https://randomuser.me/api/', {
    params: {
      nat: 'gb',
      results: 5,
    },
  }),
};
