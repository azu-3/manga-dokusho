// #region (preset) array for books objects
const link1 ='https://static.telepedia.net/witchhatatelierwiki/thumb/7/79/Volume_14_Cover_English.jpg/1200px-Volume_14_Cover_English.jpg';
const link2 ='https://static.wikia.nocookie.net/frieren/images/0/0e/Volume_1.png/revision/latest?cb=20200729190240';
const link3 = 'https://static.wikia.nocookie.net/witchrivseries/images/7/77/JP_Volume_1.png/revision/latest/scale-to-width-down/1200?cb=20251223140614';
const link4 = 'https://www.hachette.co.uk/wp-content/uploads/2024/11/hbg-title-secrets-of-the-silent-witch-vol-1-manga-56.jpg';
const link5 = 'https://upload.wikimedia.org/wikipedia/en/c/c3/Witch_Watch_volume_1_cover.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original';
const link6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ7rIy1nY-fiUvgGOg4R8o-EupzbY2EBlpwqghgMaNA&s=10';
const link7 = 'https://static.wikia.nocookie.net/bullet-of-magic/images/7/7d/JP_Volume_6.png/revision/latest?cb=20251117053217';

const seriesCollection = [
  {
    title: 'Witch Hat Atelier',
    author: 'Kamome Shirahama',
    genre: 'Fantasy',
    status: false,
    coverImage: link1,
    rating: 1,
  },
  {
    title: `Frieren: Beyond Journey's End`,
    author: 'Kanehito Yamada',
    genre: 'Sci-Fi',
    status: false,
    coverImage: link2,
    rating: 2,
  },
  {
    title: 'WITCHRIV',
    author: 'Hakuri',
    genre: 'Romance',
    status: false,
    coverImage: link3,
    rating: 3,
  },
  {
    title: 'Secrets of the Silent Witch',
    author: 'Hakuri',
    genre: 'Romance',
    status: false,
    coverImage: link4,
    rating: 3,
  },
  {
    title: 'WITCH WATCH',
    author: 'Hakuri',
    genre: 'Romance',
    status: false,
    coverImage: link5,
    rating: 3,
  },
  {
    title: 'Burn the Witch',
    author: 'Hakuri',
    genre: 'Romance',
    status: true,
    coverImage: link6,
    rating: 3,
  },
  {
    title: 'Ichi the Witch',
    author: 'Hakuri',
    genre: 'Romance',
    status: false,
    coverImage: link7,
    rating: 3,
  },
];
// #endregion (preset) array for books objects

export { seriesCollection };