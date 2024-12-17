//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no 
// console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
const hotelImBrasil = data.filter((objeto) => {
  return objeto.country === "Brasil"
})

console.log(hotelImBrasil)


function filterCountry(array) {
  return; } 
// // console.log(filterCountry(data));


// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
const hotelPrices = data.filter((objeto) => {
  return objeto.price >= 200
})
console.log(hotelPrices)


function filterPrice(array) {
  return;}
// console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
const hotelOpem = data.filter((objeto) => {
  return objeto.isOpen === true
})
console.log(hotelOpem)

function filterIsOpen(array) {
  return;}
// console.log(filterIsOpen(data));

//#DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, 
// crie outra função para verificar as datas disponíveis para agendamento nesse hotel 
// (isAvaliable).
const filterHotelName = data.filter((objeto) => {
  return objeto.name === "Copacabana Palace"
})
console.log(filterHotelName);

const objetoNovo = filterHotelName[0]
const filterToBook = objetoNovo.toBook.filter((aberto) => {
  return aberto.isAvailable
})
console.log(filterToBook);
