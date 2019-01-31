export const statuses = {
  0: {
    numeric: 0,
    lingual: 'Applied',
  },
  1: {
    numeric: 1,
    lingual: 'Interviewing',
  },
  2: {
    numeric: 2,
    lingual: 'Hired',
  },
};

export const randomizeStatus = () => {
  const randomizer = parseInt(Math.random() * 3, 10);
  return statuses[randomizer];
};
