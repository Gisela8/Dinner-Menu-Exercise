// variables Menu items and prices
const bottegaMenu = {
    desayuno:{
      mainCourses: [ 
        {name:"sandwiches", price: 12.50},
        {name: "Croissants", price: 10.50},
        {name: "Tostas", price: 11,50}],
      sideCourses1:[
          {name:"applecake", price: 2.50},
          {name:"carrotcake", price: 3.50},
          {name: "muffins", price: 11,50} ],
       
      sideCourses2:[
        {name:"coffee small-size", price: 1.50},
        {name:"coffee  medium-size", price: 2.50},
        {name:"cofffe big-size", price: 3.50}
    ]
    },
    comida:{
        mainCourses:[
          {name:"Poke-Thai", price: 12.49}
          {name:"Pizza-vegana", price: 12.50}
          {name:"Waldorf-salad", price: 12.60}   
        ],
        sideCourses1:[
         {name:"apple-chips", price: 5.40}, 
         {name:"potate-chips", price: 4.40},
         {name:"boniato chips", price: 3.40} 
        ],

        sideCourses2:[
        {name:"Tiramisu", price: 10.35},
        {name:"chocolate mousse", price: 9.63},
        {name:"fruits", price:4.65}   
       
    ],
    cena:{
      mainCourses:[
        {name:"Besugo", price: 50.36},
        {name:"Merluza", price: 40.45},
        {name:"Txangurro", price: 50.36}  
    ],
      sideCourses1:[
        {name:"Pimientos", price:10.50},
        {name:"Pintxos", price:11.52},
        {name:"Ensaladas", price:}
    ],
      sideCourses2:[
        {name:"Gâteau Basque", price:}
        {name:"Pantxineta", price:3},
        {name:"Sachertorte", price:}  
    ]   
    }
  };

// Comments for the food choices 
function gereratecomment(){
const comments=[
   "Buena elección" 
   "Super apetitoso"
   "Rico, rico"
   "Está muy muy bueno"
   "mmmmm que bueno...."
   "Una apuesta segura"
];
return comments[Math.floor(Math.random() * comments.length)];
}
//3.funcion to display the menu options
function getMenuItem(menu, type) {
    return bottogaMenu[menu][type]
        .map(item => `${item.name} - ${item.price}€`)
        .join;
}

//4.function to select an item and get a comment
function selectItem(menu, type, item) {
    const item = bottegaMenu[menu][Type].find(it => it.name.toLowerCase() === item.toLowerCase());
    if (!item) {
        return null;
    }
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    alert(`${randomComment}`);
    return item;
  }
//5.function to calculate the total and create an invoice
function createinvoice(mainCourses, sideCourses1, sideCourses2) {
    let totalCost = mainCourses.price + sideCourses1.price + sideCourses2.price;
    let invoice = `Bottega Restaurant /n/n Su factura:\n Primer plato: 
    ${mainCourse.name} - ${mainCourse.price}€\n Segundo Plato : ${sideCourse1.name} - ${sideCourse.price}€\n Postre: ${sideCourses2.name} - ${sideCoureses2.price}€\n`;
    invoice += `\nTotal: ${totalCost}€`;
    return invoice;
  }
// 6 Bucle hasta que el usuario de una entrada horaria válida
let formatcorrect = false;
let hours;
let minutes;

while (!formatcorrect){
    hours = prompt(" ¡¡¡Hola, Bienvenido!!, ¿Qué desea tomar?(Formato HH:MM)");
    if(moment(minutes, "hh:MM, true).isValid()){
      formatcorrect=true;
    }
    else{
      alert("formato incorrecto. Por favor, utilice el siguiente formato HH:MM");
    }
//7.Function to determine meal depending on time
if (hours>=7 && hours <=12) {
  return "desayuno";
}else if (hours >=13 && hours<=17){
  return "comida";
}else if (hours >=18 && hours<=24){
  return "cena";
} else{
  return null;
}
}

//8. Main function to run the menu selection
function mostrarMenu() {
  const menuPeriodoActual = menu[periodoActual].menuPrincipal;
  let menuTexto = `Menú de ${menu[periodoActual].titulo}:\n\n`;

for (const plato in menuPeriodoActual) {
  const nombrePlato = `${plato.charAt(0).toUpperCase()}${plato.slice(1)}`;
  const precioPlato = `€${menuPeriodoActual[plato].toFixed(2)}`;
  menuTexto += `${nombrePlato}: ${precioPlato}\n`;
}

  alert(menuTexto);
}

function mostrarMenu(menu) {
  let mensajeAlerta = `Menú ${menu.titulo}\n\n`;
  mensajeAlerta += "Platos principales:\n";
  
  for (const plato of Object.values(menu.principal)) {
    mensajeAlerta += `- ${plato.descripcion} €${plato.precio.toFixed(2)}\n`;
  }
  mensajeAlerta += "\nAcompañamientos:\n";
  for (const acomp of Object.values(menu.acompañamiento)) {
    mensajeAlerta += `- ${acomp.comida} €${acomp.precio.toFixed(2)}\n`;
  }
  mensajeAlerta += "\nBebidas:\n";
  for (const bebida of Object.values(menu.bebida)) {
    mensajeAlerta += `- ${bebida.comida} €${bebida.precio.toFixed(2)}\n`;
  }
  alert(mensajeAlerta);
}//9. run the menu selection process



