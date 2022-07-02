const convertTimeToBinary = (time) => {
  return time
    .split('')
    .map((eachTimeUnit) =>
      parseInt(eachTimeUnit, 10).toString(2).padStart(4, '0')
    );
};

const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
};
