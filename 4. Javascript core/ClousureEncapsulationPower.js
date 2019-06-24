function makeNuclearButton() {
  var peaceTime = 0;
  function launch() {
    return "fire";
  }
  function passTime() {
    return ++peaceTime;
  }
  function getPeaceTime() {
    return peaceTime;
  }
  setInterval(passTime, 1000);
  return {
    getPeaceTime: getPeaceTime
  };
}

console.log(makeNuclearButton().getPeaceTime());
setTimeout(function() {
  console.log(makeNuclearButton().getPeaceTime());
}, 2000);
