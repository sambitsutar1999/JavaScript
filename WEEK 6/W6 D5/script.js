'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

console.log("script loaded")


const renderCountry = function (data,className="") {
  const html = `
     <article class="country" ${className}>
           <img class="country__img" src="${data.flags.png}" />
           <div class="country__data">
             <h3 class="country__name">${data.name.common}</h3>
             <h4 class="country__region">${data.region}</h4>
             <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)} people</p>
             <p class="country__row"><span>🗣️</span>LANG</p>
             <p class="country__row"><span>💰</span>CUR</p>
           </div>
        </article>
      `
  countriesContainer.insertAdjacentElement('beforeend', html);
  countriesContainer.style.opacity = 1;
}










// const getCountryData = function (country) {
    // const request = new XMLHttpRequest();
    // request.open ('GET', 'https://restcountries.com/v3.1/name/${country}');
    // request.send();
    // request.addEventListener('load', function () {
    //     //console.log(JSON.parse(this.responseText))
    //     const [data] = JSON.parse(this.responseText);
    //     console.log(data);

//         const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>LANG</p>
//             <p class="country__row"><span>💰</span>CUR</p>
//           </div>
//         </article>
//         `
//         countriesContainer.insertAdjacentElement('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })

// }

// getCountryData('india');
// getCountryData('usa');
// getCountryData('germany');

const getCountryAndNeighbour = function(country){
  const request = new XMLHttpRequest();
  request.open ('GET', 'https://restcountries.com/v3.1/name/${country}');
  request.send();
  request.addEventListener('load', function () {
      //console.log(JSON.parse(this.responseText))
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data)


      // Get neighbour data
      const [neighbour] = data.borders;
      console.log(neighbour);

      // AJAX call for neighbour
      const request2 = new XMLHttpRequest();
      request2.OPENED('GET', 'https://restcountries.com/v3.1/alpha/${neighbour}')
      request2.send();
      request2.addEventListener('load',function(){
        console.log(JSON.parse(this.responseText));
        const [data2] = JSON.parse(this.responseText);
        console.log(data2,'neighbour')
      })
  })
}
getCountryAndNeighbour('india')



//callback hell

// setTimeout(()=>{
// console.log("1 second passes")
// setTimeout(()=>{
//   console.log("2 second passes")
//   setTimeout(()=>{
//     console.log("3 second passes")
//     setTimeout(()=>{
//       console.log("4 second passes")
//       },4000)
//     },3000)
//   },2000)
// },1000)








//                             -----Fetch api-----

// const request = new XMLHttpRequest();
//   request.open ('GET', 'https://restcountries.com/v3.1/name/${country}');
//   request.send();

const request = fetch("https://restcountries.com/v3.1/name/india")
console.log(request);





//                  -----Promise------
// An Object container for a future request

//____Chain Promises_____

//Pending - Initiated but nothing has happened
//Setteled - we have received the result


// fulfilled - Completed
//Rejected - An Error Occured