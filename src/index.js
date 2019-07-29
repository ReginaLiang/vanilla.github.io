import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello PWA!</h1>
`;

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js')
  .then((reg) => {
    console.log('Service worker registered.', reg);
  });
}