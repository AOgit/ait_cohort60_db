use('hw_05');

db.cars.insertMany([
  { brand: "BMW", price: 20000, model: "X5", year: 2015, horsepower: 300 },
  { brand: "Audi", price: 18000, model: "A4", year: 2015, horsepower: 220 },
  { brand: "Toyota", price: 15000, model: "Camry", year: 2018, horsepower: 200 },
  { brand: "Mercedes", price: 25000, model: "C-Class", year: 2019, horsepower: 255 },
  { brand: "BMW", price: 22000, model: "3 Series", year: 2018, horsepower: 240 },
  { brand: "Honda", price: 14000, model: "Civic", year: 2020, horsepower: 158 },
  { brand: "Audi", price: 27000, model: "Q5", year: 2020, horsepower: 261 },
  { brand: "Toyota", price: 17000, model: "Corolla", year: 2015, horsepower: 132 },
  { brand: "Ford", price: 16000, model: "Focus", year: 2017, horsepower: 160 },
  { brand: "Mercedes", price: 30000, model: "E-Class", year: 2020, horsepower: 300 }
]);

// 1. Выведите среднюю цену по брендам (задание на использование group).
db.cars.aggregate([
    {$group:{_id:"$brand", avgPrice:{$avg:"$price"}}}
]);

//  2. Выведите среднюю цену по годам.
db.cars.aggregate([
    {$group:{_id:"$year", avgPrice:{$avg:"$price"}}}
]);

// 3. Выведите максимальную мощность по брендам.
db.cars.aggregate([
    {$group:{_id:"$brand", maxPower:{$max:"$horsepower"}}}
]);

// 4. Выведите 3 самых дешевые машины.
db.cars.find().sort({price:1}).limit(3);
// или
db.cars.aggregate([
    {$sort:{price:1}},
    {$limit:3}
]);

// 5. Выведите 3 самых дорогие машины определенного бренда.
db.cars.find({brand:"Mercedes"}).sort({price:-1}).limit(3);
// или
db.cars.aggregate([
    {$match:{brand:'Mercedes'}},
    {$sort:{price:-1}},
    {$limit:3}
]);

// 6.Выведите случайный автомобиль марки бмв (или другой на ваше усмотрение).
db.cars.aggregate([
    {$match:{brand:'BMW'}},
    {$sample:{size:1}}
]);
