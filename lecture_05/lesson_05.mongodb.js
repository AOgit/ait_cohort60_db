use("cogort60_lection_05");

// db.animals.insertMany([
//   {kind: "tiger", weight: 300, name: "Alan", predatory: true},
//   {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
//   {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
//   {kind: "shark", weight: 400, name: "Sharp", predatory: false},
//   {kind: "shark", weight: 450, name: "John", predatory: false},
//   {kind: "panda", weight: 200, name: "Po", predatory: false},
// ]);

// Update
// $set, $inc, $rename, $push, $pull, $unset

// Изменим свойство predatory у акул - на true
// UPDATE MANY - обновит все документы соответствующие фильтру
// первый filter - параметр поиска
// второй - сами изменения

// db.animals.updateMany({kind:"shark"}, {$set:{predatory:true}});

// INC - increment увеличивает значение на указанную величину
// давайте увеличим значение веса всех животных на три
// db.animals.updateMany({}, {$inc:{weight:3}});

// RENAME - переименовать имя свойства
// переименуем у всех животных weight в kg

// db.animals.updateMany({}, {$rename:{weight:"kg"}});

// UPDATE ONE - изменить одну запись - первый документ
// изменим имя конкретного объекта по ид

// db.animals.updateOne(
//     {_id:ObjectId('683ffad21d4c9af12901d906')},
//     {$set:{name:'Prapor Kovalsky'}},
// )

// добавим всем хищникам новое поле - еда - массив стрингов
// db.animals.updateMany({predatory:true}, {$set:{food:['fish', 'meat', 'squid']}});
// db.animals.updateMany({predatory:true}, {$unset:{food:[]}});

// PUSH - добавить в массив
// добавили "wolf" в массив еды

// db.animals.updateOne(
//     {kind:'tiger'},
//     {$push:{food:"wolf"}}
// );

// PULL - забрать из массива
// как убрать squid из массива

// db.animals.updateOne(
//     {kind:'tiger'},
//     {$pull:{food:'squid'}}
// );

// UNSET - убрать само свойство

// db.animals.updateOne({kind:'chicken'}, {$unset:{predatory:''}});

// DELETE  - deleteOne, deleteMany
// один параметр - фильтр - кого желаем удалить
// удалим акулу по id

// db.animals.deleteOne({_id:ObjectId('683ffad21d4c9af12901d908')});

// добавим динозавра
// db.animals.insertOne({kind:'t-rex', kg:2008});
// db.animals.deleteMany({kind:'t-rex'});

// AGGREGATION
// pipeline -
// Основные стадии (этапы, stages) обработки - операторы
// $match фильтрация
// $sort сортировка
// -1 по убыванию
// 1 по возрастанию
// $project проекция
// $limit лимитирование
// $skip пропустить (документы)

// $sample получить произвольные документы
// $count возвращает ко-во документов
// db.animals.aggregate([
//     {$match:{predatory:true}}
// ]);

// db.animals.aggregate([
//     {$match:{predatory:true}},
//     {$sort:{kg:-1}}
// ]);

// Как получить самого тяжелого нехищника

// db.animals.aggregate([
//     {$match:{predatory:false}},
//     {$sort:{kg:-1}},
//     {$limit:1}
// ]);

// третий по тяжести хищник

// db.animals.aggregate([
//     {$match:{predatory:true}},
//     {$sort:{kg:-1}},
//     {$skip:2},
//     {$limit:1}
// ]);

// 2 самых тяжелых хищника
// db.animals.aggregate([
//     {$match:{predatory:true}},
//     {$sort:{kg:-1}},
//     {$skip:1},
//     {$limit:2}
// ]);

// db.animals.aggregate([
//     {$match:{kg:5}},
//     {$project:{name:1, kg:1, food:1, _id:0}}
// ]);

// посчитать кол-во травоядных
// db.animals.aggregate([
//     {$match:{predatory:false}},
//     {$count:'number_of_planteaters'}
// ]);

// db.animals.aggregate([
//     {$sample:{size:1}}
// ]);

// Lookup в MongoDB — это оператор агрегации,
// который позволяет объединить две коллекции на основе общего поля.

// Он выполняет операцию левого внешнего соединения двух коллекций,
// объединяя документы на основе указанного поля.
// Этот оператор позволяет агрегационной структуре извлекать
// документы из одной коллекции и сопоставлять их с документами
// из другой коллекции.

// Результатом является массив объединённых документов,
// где каждый документ из исходной коллекции содержит поле массива,
// заполненное соответствующими документами из целевой коллекции.

// Lookup особенно полезен для создания более сложных и всеобъемлющих запросов,
// которые включают данные из нескольких коллекций в базе данных MongoDB.

// db.posts.insertOne({
//   _id: ObjectId("65c6096e0451b42a2273e13c"),
//   likes: 10,
//   text: "Hi, I am glad to be on likedin",
// });

// db.comments.insertMany([
//   {
//     email: "fish@mail.com",
//     message: "Oh, you are here! Wonderful!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
//   {
//     email: "eidelman@mail.com",
//     message: "Hey, man!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
//   {
//     email: "eidelman@mail.com",
//     message: "P.S. love you so!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
// ]);


// Что делает этот запрос:
// Проходит по всем документам коллекции comments.
// Для каждого комментария берёт значение поля post_id.
// Ищет в коллекции posts документ(ы), у которых _id совпадает с post_id.
// Добавляет к каждому комментарию новое поле post_info, содержащее массив соответствующих постов
//  (чаще всего это будет массив из одного элемента, если post_id уникален).
// db.comments.aggregate([
//   {$lookup: {
//     from: "posts", // куда будем подсматривать - коллекция
//     localField: "post_id", // как называется в колл. комменте
//     foreignField: "_id",   // как называется в колл. посте
//     as: 'post_info'
//   }},
//   {$project: {
//     message:1,
//     'post_info.text':1,
//     _id:0
//   }}
// ]);

// GROUP

// db.posts.insertMany([
//   {
//     likes: 10,
//     text: "Hi, I am glad to be on likedin",
//     category: "science",
//   },
//   {
//     likes: 2,
//     text: "Hi, I am glad to be on likedin",
//     category: "music",
//   },
//   {
//     likes: 3,
//     text: "Hi, I am glad to be on likedin",
//     category: "music",
//   },
// ]);

// db.posts.aggregate([
// //   {$match: {category: "music"}},
//   {$group: {_id: "$category", likeTotal: {$sum: "$likes"}}}
// ]);


// db.kids.insertMany([
//   {name: "John", age: 5, gender: "boy"},
//   {name: "Anna", age: 6, gender: "girl"},
//   {name: "Leyla", age: 4, gender: "girl"},
//   {name: "Frieda", age: 3, gender: "boy"},
//   {name: "Bob", age: 5, gender: "boy"},
// ]);

// средний возраст по полу
// db.kids.aggregate([
//   {$group: {_id: "$gender", averageAge: {$avg: "$age"}}}
// ]);

// минимальный возраст по полу
// db.kids.aggregate([
//   {$group: {_id: "$gender", minAge: {$min: "$age"}}}
// ]);

// максимальный возраст по полу
// db.kids.aggregate([
//   {$group: {_id: "$gender", maxAge: {$max: "$age"}}}
// ]);

db.animals
    .find({predatory:true})
    .sort({kg:-1})
    .skip(1)
    .limit(1);