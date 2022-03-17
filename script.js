var nama = prompt('Masukan Nama Kamu Terlebih Dahulu');
confirm('START THE GAME');

class Start {
  constructor() {
    this.playerName = nama;
    this.botName = 'Robot';
    this.playerOption = '';
    this.botOption = '';
    this.winner = '';
  }

  //   Mengolah pilihan Bot

  get getbotOption() {
    return this.botOption;
  }

  set setbotOption(option) {
    this.botOption = option;
  }

  //   Mengolah Pilihan Player

  get getplayerOption() {
    return this.playerOption;
  }

  set setplayerOption(option) {
    this.playerOption = option;
  }

  //   Otak Dari Bot

  botBrain() {
    const option = ['✌🏻', '✋🏻', '👊🏻'];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  //   Penentuan Pemenang
  winCalculation() {
    if (this.botOption == '✋🏻' && this.playerOption == '✌🏻') {
      return (this.winner = this.playerName);
    } else if (this.botOption == '✋🏻' && this.playerOption == '👊🏻') {
      return (this.winner = this.botName);
    } else if (this.botOption == '✌🏻' && this.playerOption == '✋🏻') {
      return (this.winner = this.botName);
    } else if (this.botOption == '👊🏻' && this.playerOption == '✋🏻') {
      return (this.winner = this.playerName);
    } else if (this.botOption == '👊🏻' && this.playerOption == '✌🏻') {
      return (this.winner = this.botName);
    } else if (this.botOption == '✌🏻' && this.playerOption == '👊🏻') {
      return (this.winner = this.playerName);
    } else {
      return (this.winner = 'SERI');
    }
  }

  //   Pemenang
  matchResult() {
    if (this.winner != 'SERI') {
      return `${this.winner} Menang`;
    } else {
      return 'DRAW!!!';
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setplayerOption = params;
  start.setbotOption = start.botBrain();
  start.winCalculation();

  const inGame = document.getElementById('inGame');
  const result = document.getElementById('result');

  inGame.textContent = '...';
  result.textContent = '';

  setTimeout(() => {
    inGame.textContent = `${start.getplayerOption} VS ${start.getbotOption}`;
    result.textContent = start.matchResult();
  }, 1000);
}
