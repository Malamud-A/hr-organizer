export default () => {
  const randomizer = Math.random();
  if (randomizer < 0.33) return 'Applied';
  if (randomizer > 0.33 && randomizer < 0.66) return 'Interviewing';
  return 'Hired';
};
