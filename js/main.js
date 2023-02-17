function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return 0;
  } else if (min > max) {
    [max, min] = [min, max];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(0, 10);


function getRandomFloat(min, max, fractionDigits) {
  if (min < 0 || max < 0) {
    return 0;
  } else if (min > max) {
    [max, min] = [min, max];
  }
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return (
    Math.round((Math.random() * (max - min) + min) * fractionMultiplier) /
    fractionMultiplier
  );
}

getRandomFloat(1,10 , 3);

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Большое', 'Маленькое', 'Темное', 'Светлое', 'Чистое', 'Грязное', 'Лучше не рассматривать этот вариант', 'Самое самое']
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getPin = () => {
  const avatarNumber = getRandomInteger(1, 10);
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  }; 


  return {
    author: {
      avatar: `img/avatars/user${avatarNumber < 10 ? `0${avatarNumber}` : avatarNumber}.png`
    },
    offer: {
      title: 'Pin',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(1000, 100000),
      type: TYPE[getRandomInteger(0, TYPE.length -1)],
      rooms: getRandomInteger(1, 3),
      guests: getRandomInteger(1, 10),
      checkin: CHECKIN[getRandomInteger(0, CHECKIN.length -1)],
      checkout: CHECKOUT[getRandomInteger(0, CHECKOUT.length -1)],
      features: FEATURES[getRandomInteger(0, FEATURES.length -1)],
      description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length -1)],
      photos: PHOTOS[getRandomInteger(0, PHOTOS.length -1)],
    },
    location,

  }
};
