const convertTimeToBinaryTimeString = (time) => {
  return time
    .split('')
    .map((time) => parseInt(time, 10).toString(2).padStart(4, '0'));
};
