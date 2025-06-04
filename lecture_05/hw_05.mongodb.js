// 1. Создание базы данных
use("shop");

// 2. Создание коллекции
// db.createCollection('products');

// 3. Добавление одного документа
// db.products.insertOne(
//     {name:"Iphone 16 pro max", price:1300, category:"phone"}
// );

// 4. Добавление нескольких документов
// db.products.insertMany([
//   { name: "Samsung Galaxy S24", price: 799, category: "phone" },
//   { name: "Google Pixel 8", price: 699, category: "phone" },
//   { name: "MacBook Air M3", price: 1099, category: "laptop" },
//   { name: "Dell XPS 13 Plus", price: 1199, category: "laptop" },
//   { name: "Lenovo ThinkPad X1 Carbon Gen 11", price: 1299, category: "laptop" },
//   { name: "Apple AirPods Pro (2nd Gen)", price: 249, category: "accessory" },
//   { name: "Logitech MX Master 3S Mouse", price: 99, category: "accessory" }
// ]);

// 5. Вывод всех товаров
// db.products.find();

// 6. Поиск товара по названию
// db.products.findOne(
//     {name:'Iphone 16 pro max'}
// );

// 7. Фильтрация товаров по цене
// db.products.find(
//     {price:{$gt:600}}
// );

// 8. Обновление данных товара
// db.products.updateOne(
//     {name:"MacBook Air M3"},
//     {$set:{price:1300}}
// );

// 9. Удаление одного товара категории laptop дороже 1100
// db.products.deleteOne({
//   $and: [
//         {category: "laptop"},
//         {price: {$gte: 1100}}
//     ],
// });

// 10. Удаление товаров по условию
// db.products.deleteMany(
//     {price:{$lt:600}}
// );

// 11. Создание индекса
// db.products.createIndex({name:1});
// db.products.getIndexes();

// 12. Подсчет количества товаров
// db.products.countDocuments();

// 13. Поиск товаров в ценовом диапазоне
// db.products.find({
//     $and:[
//         {price:{$gte:600}},
//         {price:{$lte:1000}},
//     ]
// });

// 14. Фильтрация по категории
// db.products.find({category:'laptop'});

// 15. Добавление нового поля ко всем товарам
// db.products.updateMany(
//     {},
//     {$set:{stock:50}}
// );

// 16. Добавление товара с вложенным документом
// db.products.insertOne(
//     {price:45000, category:'car', details:{brand:'BYD', model:'Han'}}
// );

// 17. Поиск товаров с определенным полем
// db.products.find({details:{$exists:true}});

// 18. Массовое обновление цен
// db.products.updateMany({},{$mul:{price:1.1}});

// 19. Добавление массива в товары
// db.products.updateMany(
//     {},
//     {$set:{review:['Первый отзыв']}}
// );

// 20. Добавление отзыва в массив
// db.products.updateMany(
//     {category:'laptop'},
//     {$push:{review:'Второй отзыв'}}
// );

// db.products.insertMany([
//   {
//     name: "Volkswagen Tiguan",
//     price: 25000,
//     category: "car",
//     review: [{ text: "Просто хорошее авто", rate: 4 }]
//   },
//   {
//     name: "Toyota Camry",
//     price: 27000,
//     category: "car",
//     review: [{ text: "Надёжный и комфортный", rate: 5 }]
//   },
//   {
//     name: "Tesla Model 3",
//     price: 39000,
//     category: "car",
//     review: [
//       { text: "Маск сошел с ума", rate: 1 },
//       { text: "Ведро с болтами", rate: 2 }
//     ]
//   },
//   {
//     name: "BMW 3 Series",
//     price: 41000,
//     category: "car",
//     review: [{ text: "Отличная управляемость", rate: 5 }]
//   },
//   {
//     name: "Hyundai Tucson",
//     price: 26000,
//     category: "car",
//     review: [{ text: "Отличный выбор за свои деньги", rate: 4 }]
//   }
// ]);

// 21. Поиск товаров с определенным рейтингом
// db.products.find({'review.rate':5});
// db.products.aggregate({
//     $match:{'review.rate':5}
// });

// 22. Удаление вложенных данных
// db.products.updateMany(
//     {category:'laptop'},
//     {$unset:{review:''}}
// );

// 23. Создание новой коллекции и добавление данных
// db.orders.insertOne(
//     {title:'Order #1', price:25, status:'pending'},
// );

// 24. Обновление данных в коллекции заказов
// db.orders.updateOne(
//     {status:'pending'},
//     {$set:{status:'shipped'}}
// );

// 25. Подсчет заказов по статусу
// db.orders.countDocuments({status:'shipped'});


// db.orders.insertMany([
// { title: "Order #2", price: 27, status: "shipped", products: ["Phone", "Mouse"] },
// { title: "Order #3", price: 35, status: "shipped", products: ["Laptop", "AirPods"] },
// { title: "Order #4", price: 50, status: "shipped", products: ["Keyboard", "Monitor", "Webcam"] },
// ]);

// 26. Удаление заказов с определенными товарами
// db.orders.deleteMany({products:'Phone'});

// 27. Создание связи между заказами и пользователями
// db.users.insertOne({name:'User #1', pass:'NB23124', email:'user1@gmail.com'});
// db.orders.updateMany(
//     {},
//     {$set:{user_pass:'NB23124'}}
// );

// 28. Объединение данных из двух коллекций по полю паспорта
// db.orders.aggregate([
//     {
//         $lookup:{
//             from:'users',
//             localField:'user_pass',
//             foreignField:'pass',
//             as:'user_info'
//         }
//     },
//     {
//         $project:{
//             _id:0,
//             'user_info._id':0
//         }
//     },
// ]);

// 29. Сортировка товаров по цене
// db.products.find({price:{$gt:100}}).sort({price:-1});

// 30. Создание уникального индекса
// db.customers.createIndex({email:1}, { unique: true });