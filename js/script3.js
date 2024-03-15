//PRUEBAS MALDITAS


// const paises = document.getElementById("countries-list");
// let link = 'https://restcountries.com/v3/all';


// // // document.addEventListener("DOMContentLoaded", () => {
// // //     fetchPaises();
// // })


// function fetchPaises() {
//     fetch('https://restcountries.com/v3/all')
//     .then((response) => {
//         if (!response.ok) {
//         throw new Error("No funciona la movida!");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         const paisNames = data.map(item => item.name.common);
//         paisNames.sort((nombreA, nombreB) => {
//             return (nombreA < nombreB) ? -1 : ((nombreA > nombreB) ? 1 : 0);
//         });
//         console.log(paisNames);
//     })

//     .catch((error) => {
//         console.log ( 'Error no se puedo obtener');
//     });
// };
// let pais = '';
// function showPaises(paises){
//     listPaises.innerHTML = "";
//     data.forEach((pais) => {
//         const liPais = document.createElement("li");
//         const imgBandera = document.createElement("img");
//         imgBandera.src = data.flag;
//         liPais = data.name.common

        

//         liPais.appendChild(imgBandera);

//     });
// };
// fetchPaises();
// showPaises();






// const paisesList = document.getElementById("countries-list");

// function fetchPaises() {
//     fetch('https://restcountries.com/v3/all')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("No funciona la movida!");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         const paisNames = data.map(item => item.name.common);
//         const paisFlags = data.map(item => item.flags[0]); 
//         const sortedPaisNames = paisNames.slice().sort((a, b) => a.localeCompare(b)); 
//         const sortedPaisFlags = sortedPaisNames.map(name => {
//             const index = paisNames.indexOf(name);
//             return paisFlags[index];
//         }); 
//         console.log(sortedPaisNames);
//         console.log(sortedPaisFlags);
//         showPaises(sortedPaisNames, sortedPaisFlags); 
//     })
//     .catch((error) => {
//         console.log('Error no se pudo obtener');
//     });
// };
// function showPaises(paisNames, paisFlags){
//     paisNames.forEach((paisName, index) => { 
//         const liPais = document.createElement("li");
//         const imgBandera = document.createElement("img");
        
//         imgBandera.src = paisFlags[index]; 
//         liPais.textContent = paisName; 
//         liPais.appendChild(imgBandera);
//         paisesList.appendChild(liPais); 
//     });
// };

// function selectorFlagDom() {
//     paisesList.addEventListener('click', (e) => {
//         const clickedLi = e.target.closest('li');
//         if (!clickedLi) return; 
//         const clickedH2 = clickedLi.querySelector('h2 ').textContent;
//         console.log(clickedH2);
//     });
// }



// fetchPaises();
// selectorFlagDom()