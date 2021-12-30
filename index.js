function handler(input, duration) {
  if (duration < 0 || duration > 1440) {
    console.log("Duration invalid");
    return;
  }
  const obj = {};
  input.sort((a, b) => a.endTime - b.endTime);
  console.log(input);
  for (let i = 0; i < input.length - 1; i++) {
    const time = input[i].endTime - input[i + 1].startTime;
    if (time > 0) continue;
    if (Math.abs(time) >= duration) {
      obj.startTime = input[i].endTime;
      obj.endTime = input[i].endTime + duration;
    }
  }
  for (let i = 0; i < input.length; i++) {
    if (obj.startTime > input[i].startTime && obj.endTime < input[i].endTime) {
      obj.startTime = undefined;
      obj.endTime = undefined;
    }
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
