let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote:
      '"Genius is one percent inspiration and ninety-nine percent perspiration."',
    person: "Thomas Edison",
  },
  {
    quote: '"You can observe a lot just by watching."',
    person: "Yogi Berra",
  },
  {
    quote: '"A house divided against itself cannot stand."',
    person: "Abraham Lincoln",
  },
  {
    quote: '"Difficulties increase the nearer we get to the goal."',
    person: "Johann Wolfgang von Goethe",
  },
  {
    quote: '"Fate is in your hands and no one elses"',
    person: "Byron Pulsifer",
  },
  {
    quote: "Be the chief but never the lord.",
    person: "Lao Tzu",
  },
  {
    quote: '"Nothing happens unless first we dream."',
    person: "Carl Sandburg",
  },
  {
    quote: '"Well begun is half done."',
    person: "Aristotle",
  },
  {
    quote: '"Life is a learning experience, only if you learn."',
    person: "Yogi Berra",
  },
  {
    quote: '"Self-complacency is fatal to progress."',
    person: "Margaret Sangster",
  },
  {
    quote: '"Peace comes from within. Do not seek it without."',
    person: "Buddha",
  },
  {
    quote: '"What you give is what you get."',
    person: "Byron Pulsifer",
  },
  {
    quote: '"We can only learn to love by loving."',
    person: "Iris Murdoch",
  },
  {
    quote: '"Life is change. Growth is optional. Choose wisely."',
    person: "Karen Clark",
  },
  {
    quote: '"You will see it when you believe it."',
    person: "Wayne Dyer",
  },
  {
    quote: '"Today is the tomorrow we worried about yesterday."',
    person: "Karthick Kumar",
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
