function handler(input, duration) {
  if (duration < 0 || duration > 1440) {
    console.log("Duration invalid");
    return;
  }
  const obj = {};
  input.sort((a, b) => a.endTime - b.endTime);
  console.log(input);
  let maxDuration = 0;
  const maxObj = {};
  for (let i = 0; i < input.length - 1; i++) {
    const time = input[i].endTime - input[i + 1].startTime;
    const curDuration = input[i].endTime - input[i].startTime;
    if (time > 0) continue;
    if (Math.abs(time) >= duration) {
      obj.startTime = input[i].endTime;
      obj.endTime = input[i].endTime + duration;
    }
    if (curDuration > maxDuration) {
      maxDuration = curDuration;
      maxObj.startTime = input[i].startTime;
      maxObj.endTime = input[i].endTime;
    }
  }

  if (obj.startTime > maxObj.startTime && obj.endTime < maxObj.endTime) {
    obj.startTime = undefined;
    obj.endTime = undefined;
  }
  if (!obj.startTime) {
    obj.startTime = input[input.length - 1].endTime;
    obj.endTime = input[input.length - 1].endTime + duration;
  }
  if (obj.endTime > 1440) {
    console.log("No result");
    return;
  }
  return obj;
}

module.exports = handler;
