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
const processBinaryTime = (binary) => {
  for (let i = 0; i < binary.length; i++) {
    for (let j = 0; j < binary[i].length; j++) {
      if (binary[i][j] === '1') {
        document
          .getElementsByClassName('unit')
          [i].getElementsByClassName('pip')
          [j].classList.add('light');
      } else {
        document
          .getElementsByClassName('unit')
          [i].getElementsByClassName('pip')
          [j].classList.remove('light');
      }
    }
  }
};
setInterval(() => {
  const binaryTime = convertTimeToBinary(getCurrentTime());
  processBinaryTime(binaryTime);
}, 1000);
