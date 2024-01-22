const fs = require('fs');
const pathToFile = require('path');
const { stdin, stdout, exit } = process;

const ourFile = fs.createWriteStream(pathToFile.join(__dirname, 'text.txt'));
stdout.write(
  'Привет, дорогой проверятель)\nВводи слово, если хочешь.\nА когда тебе надоест, то введи "exit"\nили нажми Ctrl + C\n',
);

const bye = () => {
  stdout.write(
    'До скорых встреч и удачи тебе во всех начинаниях и продолжениях',
  );
  exit();
};

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    bye();
  }
  stdout.write('Введи свой текст или введи exit для выхода:\n');
  ourFile.write(data);
});

process.on('SIGINT', bye);
