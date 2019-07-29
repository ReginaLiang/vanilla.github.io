if('serviceWorker' in navigator){
  navigator.serviceWorker.register('src/service-worker.js')
  .then((reg) => {
    console.log('Service worker registered.', reg);
  });
}
