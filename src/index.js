function clock() {
  var crazy = new Date().getTime() / 4204769 * Math.random();
  var overreact = React.createElement('h1', {}, 'HOLY SHIT THE WORLD JUST BLEW UP!');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()} and your lucky number is ${Math.floor(crazy)}`);
  var app = React.createElement('div', {}, overreact, clock);

  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

setInterval(clock, 1000)
