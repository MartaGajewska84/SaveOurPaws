import image1 from '../public/pet-12.png'
import image2 from '../public/pet-7.png'

const animalsForAdoption = [
  {
    id: 1,
    slug: 'daisy',
    name: 'Daisy',
    image: image1,
    type: 'American Fuzzy Lop',
    age: 3,
    readyForAdoption: true,
    description:
      'Daisy has a gentle and affectionate disposition, often seeking out cuddles and affection from his human companions. However, she also has a streak of independence and can be quite stubborn when she sets her mind to something.',
    healthy: true,
  },
  {
    id: 2,
    slug: 'whiskers',
    name: 'Whiskers',
    image: image2,
    type: 'Domestic Cat',
    age: 2,
    readyForAdoption: false,
    description:
      "Whiskers is a sophisticated and independent cat with a hint of mystery about him. He's confident and self-assured, carrying himself with an air of regal dignity. Despite his independent nature, Whiskers forms strong bonds with his human companions and enjoys their company, especially when it comes to lounging together in a sunny spot or engaging in interactive play sessions. He's a skilled hunter at heart, often displaying his prowess by stalking and pouncing on toy mice or feathers.",
    healthy: true,
  },
];

export default animalsForAdoption
