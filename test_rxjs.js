try {
  require('rxjs');
  console.log('rxjs is available');
} catch (e) {
  console.log('rxjs is NOT available');
  console.log(e.message);
}
