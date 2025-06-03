use("cohort60_db");

// добавили пользователя с именем
// db.users.insertOne({ name: "Oleksa" });
// db.users.insertOne({ name: "Oleksa", age: "35", adress: {city:'Berlin'} });

// db.users.insertMany([
//     {name:'Dave', age:32},
//     {name:'John', age:18},
//     {name:'Kianu', age:45},
// ])

// db.users.insertOne({
//   name: "Will",
//   age: 20,
//   hobbys: ["music", "serfing", "hacking"],
// });

// db.users.find();
// db.users.find().limit(3);
// db.users.find().sort({name:1});
// db.users.find().sort({name:-1});
// db.users.find().sort({name:-1, age:1});
// пропустить одного юзера
// db.users.find().skip(1);
// db.users.find({age:45});

// db.users.insertMany([
//     {name:'Dude', age:32},
//     {name:'Johny', age:18},
//     {name:'Ann', age:32},
// ])

// db.users.findOne({age:32});
// lt - less then
// db.users.find({age:{$lt:18}});
// lte - less then or Equal
// db.users.find({age:{$lte:18}});
// gte - great then or Equal
// db.users.find({age:{$gte:45}});
// $eq - Equal
// db.users.find({name:{$eq:"Ann"}});
// $ne - not Equal
// db.users.find({name:{$ne:"Dude"}});
// db.users.find({age:{$ne:18}});

// вторым параметром задаем те поля, которые хотим вывести
// {name: 1}: Это второй аргумент метода find,
// который представляет собой проекцию (projection).
// Проекция определяет, какие поля должны быть включены в результат.
// В данном случае {name: 1} означает,
// что в результате запроса будут включены только поле name.
// Поле _id будет включено по умолчанию, если не указано другое.
// db.users.find({age:32},{name:1});
// db.users.find({age:32},{name:1, _id:0});

// Оператор $in
// db.users.find({name:{$in:["Ann", "Dave"]}});

// Not in
// Оператор $nin
// db.users.find({name:{$nin:["Dave", "Ann", "John", "Johny", "Will"]}});

db.users.find({$and:[{age:32}, {name:{$ne:"Ann"}}]});




