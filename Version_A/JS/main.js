document.addEventListener("DOMContentLoaded", () => {
  
  pintarCard();
  pintarBotones();
  filtrachione();

});

const urlBase = "../imagenes/";
const arrayCards = [
  ["viajes-1.jpg", "Viaje Uno", "Playa"],
  ["viajes-2.jpg", "Viaje Dos", "Playa"],        
  ["viajes-3.jpg", "Viaje Tres", "Carteles"],  
  ["viajes-4.jpg", "Viaje Cuatro", "Río"],
  ["viajes-5.jpg", "Viaje Cinco", "Río"],        
  ["viajes-6.jpg", "Viaje Seis", "Río"], 
  ["viajes-7.jpg", "Viaje Siete", "Castillo"], 
];


const pintarBotones = () => {
  const botones = document.querySelector("#botones");
  const button = document.createElement("button");
  const categorias = [];

  arrayCards.forEach(card => {
    if (!categorias.includes(card[2])) {
      categorias.push(card[2]);
      const button = document.createElement("button");
      button.textContent = card[2];
      botones.append(button);
    }
  });

  button.textContent = "Ninguno";
  botones.append(button);
   
  return botones
};

const filtrachione = () => {

  botones.addEventListener("click", (ev) => {
    if (ev.target.tagName === "BUTTON") {  // EN MINUSCULAS NO FUNCIONA, EQUISCUUUUUUUUUUUUUUUUUUUUUUUUUU
      const categoria = ev.target.textContent;
      const cardFotos = document.querySelector("#imagenes");
      const mensajeDiv = document.querySelector("#msgfiltro")
      cardFotos.innerHTML = "";
 

      arrayCards.forEach((item) => {
        if (categoria === "Ninguno") {
          cardFotos.innerHTML = "";
          const mensaje = document.createElement("P");
          mensaje.textContent = `Filtrando por: ${categoria}`;
          mensajeDiv.appendChild(mensaje);
        } else{
          if (item[2] === categoria) {
            const card = document.createElement("ARTICLE");
            const cardImg = document.createElement("IMG");
            cardImg.src = `${urlBase}/viajes/${item[0]}`;
            cardImg.alt = `${urlBase}/viajes/${item[1]}`;
            const cardh3 = document.createElement("H2");
            cardh3.textContent = item[1];
            card.append(cardh3, cardImg);
            cardFotos.append(card);
            const mensaje = document.createElement("P");
            mensaje.textContent = `Filtrando por: ${categoria}`;
            mensajeDiv.appendChild(mensaje);
          }
        }
      });
    }
  });
}

const pintarCard = () => {
  const cardFotos = document.querySelector("#imagenes");

  arrayCards.forEach((item) => {
    const card = document.createElement("ARTICLE");
    const cardImg = document.createElement("IMG");
    cardImg.src = `${urlBase}/viajes/${item[0]}`;
    cardImg.alt = `${urlBase}/viajes/${item[1]}`;
    const cardh3 = document.createElement("H2");
    cardh3.textContent = item[1];

    card.append(cardh3, cardImg);
    cardFotos.append(card);
  });
};








