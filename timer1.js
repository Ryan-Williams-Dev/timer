/**
 * Takes in an array of numbers, plays an alarm sound at time specified of those given numbers from runtime.
 * @param  {[Array]} arr An array of integers 
 */
const timer = (arr) => {
  if (arr.length === 0) return;
  let delay = 0;
  for (let i = 0; i < arr.length; i++) {
    const time = arr[i];
    if (time >= 0 && Number.isInteger(time)){
      delay = time * 1000;
      setTimeout(()=> {
        process.stdout.write('beep');
      }, delay)
    }
  }
}

timer([10, 3, 5, 15, 9]);