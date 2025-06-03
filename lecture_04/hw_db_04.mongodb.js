// Выбираем базу для использования
use("lesson_04");

// Создаем коллекцию из 10 напитков с тегами
db.drinks.insertMany([
  {
    name: "Rom",
    degree: 0,
    price: 15,
    volume: 0.7,
    alcohol: true,
    created: new Date(),
    tags: ["cocktail", "strong", "tropical"],
  },
  {
    name: "Whiskey",
    degree: 40,
    price: 30,
    volume: 0.5,
    alcohol: true,
    created: new Date(),
    tags: ["strong", "evening", "neat", "classic"],
  },
  {
    name: "Vodka",
    degree: 42,
    price: 20,
    volume: 0.5,
    alcohol: true,
    created: new Date(),
    tags: ["strong", "party", "mixable", "neutral"],
  },
  {
    name: "Beer",
    degree: 5,
    price: 3,
    volume: 0.5,
    alcohol: true,
    created: new Date(),
    tags: ["light", "refreshing", "casual", "cold"],
  },
  {
    name: "Wine",
    degree: 12,
    price: 10,
    volume: 0.75,
    alcohol: true,
    created: new Date(),
    tags: ["dinner", "romantic", "dessert", "refined"],
  },
  {
    name: "Juice",
    degree: 0,
    price: 4,
    volume: 1.0,
    alcohol: false,
    created: new Date(),
    tags: ["non-alcoholic", "healthy", "fruit", "breakfast"],
  },
  {
    name: "Water",
    degree: 0,
    price: 1,
    volume: 0.5,
    alcohol: false,
    created: new Date(),
    tags: ["hydration", "non-alcoholic", "neutral", "essential"],
  },
  {
    name: "Cider",
    degree: 6,
    price: 5,
    volume: 0.5,
    alcohol: true,
    created: new Date(),
    tags: ["fruity", "light", "refreshing", "casual"],
  },
  {
    name: "Cola",
    degree: 0,
    price: 2,
    volume: 0.33,
    alcohol: false,
    created: new Date(),
    tags: ["soft drink", "carbonated", "non-alcoholic", "sweet"],
  },
  {
    name: "Gin",
    degree: 37.5,
    price: 25,
    volume: 0.7,
    alcohol: true,
    created: new Date(),
    tags: ["strong", "botanical", "cocktail", "dry"],
  },
]);

// Ищем самый дорогой напиток
db.drinks.find().sort({price:-1}).limit(1);
// Ищем 3 самых дешевых напитков
db.drinks.find().sort({price:1}).limit(3);
// Ищем название самого крепкого напитка
db.drinks.find({},{name:1, _id:0}).sort({degree:-1}).limit(1);
// Ищем имена всех напиткoв одновременно с тегами `strong` и `cocktail`
db.drinks.find({$and:[{tags:{$eq:'strong'}}, {tags:{$eq:'cocktail'}}]},{name:1, _id:0});