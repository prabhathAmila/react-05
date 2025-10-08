console.log('math');

function setTimer(callback, delay) {
	return setTimeout(callback, delay);
}

// Sample usage
console.log('start');
setTimer(() => {
  console.log('center');
}, 0); // 1 second delay
console.log('end');