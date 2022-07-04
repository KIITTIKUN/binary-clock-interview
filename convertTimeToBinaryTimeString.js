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

const eachDivPip = (i, j) => {
  return document
    .getElementsByClassName('unit')
    [i].getElementsByClassName('pip')[j];
};

const isBinaryOn = (binary, i, j) => {
  return binary[i][j] === '1';
};

const processBinaryClock = (binary) => {
  for (let i = 0; i < binary.length; i++) {
    for (let j = 0; j < binary[i].length; j++) {
      isBinaryOn(binary, i, j)
        ? eachDivPip(i, j).classList.add('light')
        : eachDivPip(i, j).classList.remove('light');
    }
  }
};

const processDigitalClock = () => {
  let digitalTime = getCurrentTime();
  for (let i = 0; i < getCurrentTime().length; i++) {
    let div = document.getElementsByClassName('digital-time')[i];
    div.innerHTML = `${digitalTime[i]}`;
  }
};

setInterval(() => {
  const binaryTime = convertTimeToBinary(getCurrentTime());
  processBinaryClock(binaryTime);
  processDigitalClock();
}, 1000);
