function shake() {
    let ball = document.getElementById('ball');
    let messageText = document.getElementById('message');

    if (messageText != null) {
        messageText.parentNode.removeChild(messageText);
    }

    ball.classList.add('shake');

    setTimeout(function () {ball.classList.remove('shake');}, 1000);
    setTimeout(function () {getfortune();}, 1000);
}

function getfortune() {
    
    const randomNumber = Math.floor(Math.random()*8);
let eightBall = ''
switch (randomNumber) {
  case 0 :
  eightBall = 'It is certain'
  break;
  case 1 :
  eightBall = 'It is decidedly so'
  break;
  case 2 :
  eightBall = 'Reply hazy try again'
  break;
  case 3 :
  eightBall = 'Cannot predict now'
  break;
  case 4 :
  eightBall = 'Do not count on it'
  break;
  case 5 :
  eightBall = 'My sources say no'
  break;
  case 6 :
  eightBall = 'Outlook not so good'
  break;
  case 7 :
  eightBall = 'Signs point to yes'
  break;
}

document.getElementById('fortune').innerHTML = eightBall;

}