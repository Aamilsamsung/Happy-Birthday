/**
 * Birthday tribute for Sinaj, 27 November 2026, lovingly made by Aamil.
 * Photos are deliberately placeholders until family images are provided.
 */
export const person = {
  name: 'Sinaj',
  shortName: 'Dad',
  birthday: '27 November 2026',
  photo: '/photos/sinaj.jpeg',
  photoAlt: 'A gold birthday placeholder awaiting a photo of Sinaj',
};
export const sender = { name: 'Aamil', signature: 'With all my love, your son Aamil' };
export const littleLetter = {
  from: 'Aamil',
  date: '27 · 11 · 2026',
  greeting: 'My dearest Dad,',
  paragraphs: [
    'Happy Birthday, Dad. You have been my first hero, my greatest teacher, and the person I can always count on.',
    'I may not say it enough, but I notice your sacrifices, your hard work, and all the ways you put our happiness before your own.',
    'I hope I can make you as proud of me as I am to be your son. May this year bring you peace, health, and every happiness you deserve.',
  ],
  closing: 'Always your son,',
  signature: 'Aamil',
  stamp: '/photos/gold-seal.svg',
};
export const bigLetter = {
  coverTo: 'To My Dad, Sinaj',
  coverTitle: 'Happy Birthday',
  coverSubtitle: '27 November 2026 · A letter from Aamil',
  heading: 'Dear Dad,',
  paragraphs: [
    'Happy Birthday to my first hero, my strongest support, and the man I will always look up to.',
    'I may not say it every day, but everything you do for me means more than words can express. Your sacrifices, your hard work, and your unconditional love are things I will never take for granted.',
    'One of my biggest dreams is to become someone who makes you proud and gives you all the happiness you deserve. Every lesson you have taught me is something I carry with me.',
    'If I could choose my father in every lifetime, I would choose you every single time. May this year bring you good health, peace, laughter, and countless reasons to smile.',
    'Happy Birthday, Dad. I love you more than words can ever explain.',
  ],
  signature: sender.signature,
};
export const loveNotes = [
  'Happy Birthday, Dad! Today is all about celebrating you.',
  'Thank you for believing in me, even when I doubt myself.',
  'Your sacrifices have given me opportunities I never want to take for granted.',
  'You have taught me that strength can be quiet and kindness can be powerful.',
  'I hope the years ahead bring you the same happiness you give our family.',
  'No matter how old I get, I will always be your son.',
  'Making you proud will always be one of my biggest dreams.',
  'If I could choose my dad again, I would choose you. Every time.',
];
export const home = {
  greeting: 'To my hero, Sinaj',
  date: person.birthday,
  letterButton: 'Open your birthday letter',
  notesButton: 'Little notes from Aamil',
  scrapbookLabel: 'Our Family Memories',
};
const memory = (title, date, caption, image, imageAlt) => ({
  title, date, caption, image: '/photos/memory-' + image + '.jpeg',
  imageAlt, imageFit: 'cover'
});
export const memories = [
  memory('Our family', 'The people who love you', 'Every moment together becomes a memory worth keeping.', 1, 'Placeholder for a family photograph'),
  memory('Your smile', 'The little things', 'Some of the best moments are simply seeing you happy.', 2, 'Placeholder for a smiling photograph of Dad'),
  memory('Growing up with you', 'A lifetime of learning', 'The lessons you have taught me will always stay with me.', 3, 'Placeholder for a childhood memory'),
  memory('Ordinary days', 'Beautiful memories', 'The everyday moments matter more than we realize.', 4, 'Placeholder for a candid family photograph'),
  memory('Your strength', 'Always inspiring', 'You have shown me what dedication and love look like.', 5, 'Placeholder for a photo of Dad'),
  memory('Today, we celebrate you', '27 November 2026', 'Another year of memories, laughter and love. Happy Birthday, Dad.', 6, 'Placeholder for a birthday photograph'),
];
export const timeline = [
  { date: 'From the beginning', title: 'My first hero', text: 'Before I knew what a hero was, I already had one at home.' },
  { date: 'Growing up', title: 'The lessons you gave me', text: 'From the smallest things to the biggest decisions, your guidance has shaped who I am.' },
  { date: 'Through every challenge', title: 'My strongest support', text: 'Your care and steady encouragement have meant more than I can ever say.' },
  { date: 'Every new chapter', title: 'A promise to make you proud', text: 'I will keep learning, growing and working to turn your hopes for me into something beautiful.' },
  { date: '27 November 2026', title: 'Today is yours, Dad', text: 'Wishing you peace, good health, love and the happiness you deserve.', highlight: true },
];
export const reasons = [
  { front: 'Your kindness', back: 'You care deeply for people, often without expecting anything in return.' },
  { front: 'Your strength', back: 'Even when things are hard, you keep going. That inspires me.' },
  { front: 'Your patience', back: 'You have helped me learn, make mistakes and become better.' },
  { front: 'Your sacrifices', back: 'I know so much of what you do is for our family. I will never forget that.' },
  { front: 'Your guidance', back: 'Your advice stays with me long after our conversations end.' },
  { front: 'Your love', back: 'Knowing you are there is one of the greatest gifts in my life.' },
];
export const wishes = [
  'May every new day bring you peace and a reason to smile.',
  'May your health stay strong and your heart stay light.',
  'May all the kindness you have given come back to you many times over.',
  'May you have more moments of rest, joy and laughter.',
  'May your dreams and hopes find their way into reality.',
  'May our family make many more beautiful memories together.',
  'May you always know how loved and appreciated you are.',
  'May this birthday be the beginning of your happiest year yet.',
];
export const scrapbook = {
  title: 'Our Family Memories',
  intro: 'A little collection of the moments, lessons and love that remind me how lucky I am to call you my dad. Memories we will always treasure.',
  footer: 'Made with love, a little code, and a whole lot of gratitude. — Aamil',
};
