db.createCollection('users')


db.users.insertOne({
    name: 'john',
    age: 20,
    email:'skashdohaoshd',
    genero : "m"
})
db.users.insertOne({
    name: 'deklan',
    age: 20,
    email:'asbjabksd',
    genero : "m"
})
db.users.insertOne({
    name: 'johnfsd',
    age: 10,
    email:'skafsdfsdffshdohaoshd',
    genero : "f"
})
db.users.insertOne({
    name: 'john',
    age: 200,
    email:'skashdohaoshd',
    genero : "f"
})
db.users.insertOne({
    name: 'johdsdfsn',
    age: 110,
    email:'skashdohaoshd',
    genero : "m"
})

db.users.insertOne({
    name: "angie2",
    genero:"s",
    email:"holanosoycandidato@lozer.com"
})


//busquedas
//todos los usuarios  
db.users.find();
//DIFERENTE DE 
db.users.find({age :{$ne :20}});
//IGUAL A :
db.users.find({age: {$eq :20}});
db.users.find({age:20});

//mayor que 
db.users.find({age :{$gt :40}});
//menor que
db.users.find({age :{$lt: 20}});
//mayo o igual a :
db.users.find({age :{$gte :40}});
//menor o igual a 
db.users.find({age :{$lte: 20}});
//buscar entre rangos.
db.users.find({age : {$in : [10,40,200]}})
//negacionpara y excepcionesderegla
db.users.find( {age : { $nin :[ 5,10,40]}})
//verificar si un campo está creado dentro de un "objeto"
db.users.find({age : {$exists : false}})

//Se utiliza para buscar documentos donde un
//campo coincide con una expresión regular.
db.users.find({name :{$regex :  /^sbjab/}});


db.users.insertOne({
    nombres :"deSSkls2",
    apellidos: "dsjansdett",
    correo :"deklan@deklan",
    ciudad :"medellin",
    país  :"India",
    edad : 25,
    altura : 160,
    peso : 180
})

//tarea
//punto1 
db.users.find({edad: {$eq :30}});
//punto2

db.users.find(
    {$or:
    [
        {país:"Londres"},
        {país:"Paris"}
    ]    
    })
//punto 3
db.users.find(
    {
        $and:[
            {salario : {$gt : 2000}},
            {edad:{$lt:30}}
        ]        
    }    
)
//punto4
db.users.find(
    {
        $and:[
            {país:"España"},
            {salario : {$gt : 3000}}
        ]        
    }    
)

//punto5
db.users.find({edad : {$in : [25,30,35]}})

//punto 6 
db.users.find({país: {$ne: "Colombia"}});

//punto 7 
db.users.find({
    $and:[
        {país:"Londres"},
        {salario : {$gt :2500}}
        
    ],
    $or:[
        {edad : {$gt :30}}
    ]
})


db.users.find({
    $and: [
      { país: "Londres" },
      { salario: { $gt: 2500 } }
    ],
    $or: [
      { edad: { $gt: 30 } }
    ]
  })

  db.users.find({
    $and: [
      { país: "Londres" },
      { $or: [
        { salario: { $gt: 2500 } },
        { edad: { $gt: 30 } }
      ]}
    ]
  })
//punto8




//punto8
db.users.find({
    $and:[
        {país : "Australia"},
        {peso : {$gt : 140} },
        
    ]
})

//punto 9
db.users.find({
    $or : [
        {país : {$ne : "Londres"} },
        {país : {$ne : "Paris"}}
    ]
})

//punto10
db.users.find({
    $or:[
        {salario : {$lt : 2000}},
        {edad : {$gt : 40}}
    ]
})
//punto 11

db.users.find({
    $and:[
        {país : "Canadá"},
        {salario  :{ $gt :4000}}
    ],
    $or:[
        {altura : { $gt : 180}}
    ]
})

//punto12
db.users.find({
    país: "Italia",
    edad: { $gte: 20, $lte: 30 }
})


//punto13
db.users.find({correo : {$exists : false}})

//punto 14´
db.users.find({
    país: "Francia",
    salario: { $gte: 3000, $lte: 5000}
})


//punto15
db.users.find({
    país: "Brasil",
    $or:[
        {peso : {$lt :120}},
        {peso : {$gt :140}}
    ]
})

//punto 16
db.users.find({
    $or:[
        {país : "Argentina"},
        {país : "Chile"},
        {$and:[
            {edad : {$lt : 25}}
        ]}
    ]
})

//punto17

db.users.find({país : {$ne : "España", $ne :"Mexico"},$and:[
    {salario:{$lt : 3000}}
]})


//punto 18
db.users.find({
    $and: [
        { country: 'Alemania' },
        {
            $or: [
                { salary: { $lt: 4000 } },
                { age: { $gt: 35 } }
            ]
        }
    ]
});
//punto19
db.users.find({
    $and:[
        {país : {$ne : "Colombia"}},
        {altura: {$lt : 170}}
    ]
})

//punto20
db.users.find({
    $and:[
        {país : "India"},
        {salario :{$exists:false}}
    ]
})