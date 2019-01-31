export default () => {
  const randomizer = parseInt(Math.random() * 3, 10);
  switch (randomizer) {
    case 0:
      return {
        numeric: randomizer,
        lingual: 'Applied',
      };
    case 1:
      return {
        numeric: randomizer,
        lingual: 'Interviewing',
      };
    default:
      return {
        numeric: randomizer,
        lingual: 'Hired',
      };
  }
};
