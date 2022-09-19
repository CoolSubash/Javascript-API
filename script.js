let Searchbtn = document.querySelector('#search')
let container = document.querySelector('.main-container-country')
let html = ``

function datafetch() {
  let SearchCountry = document.querySelector('#search-country')
  if (SearchCountry.value.length < 3) {
    alert('Please  Enter a Valid name of Country')
  } else {
    let dataresponse = fetch(
      `https://restcountries.com/v3.1/name/${SearchCountry.value}`,
    )
    dataresponse
      .then((responsedata) => {
        return responsedata.json()
      })
      .then((predata) => {
        const [realdata] = predata
        console.log(realdata)

        html = `
          <div class="country-information">
    
              
    <div class="country">
     <div class="country-flag">
         <figure>
             <img src=${realdata.flags.png} alt="">
         </figure>
     </div>
     <div class="country-details">
         <div class="details-hold"><span>🕋</span><span style="margin:0px 8px">Country Name: </span> <span class="country-name">${realdata.name.common}</span></div>
         <div class="details-hold"><span>🏛</span><span style="margin:0px 8px">Capital City: </span> <span class="capital-name">${realdata.capital[0]}</span></div>
         <div class="details-hold" style="margin:10px 0px"><span>👩🏾‍🤝‍🧑🏼</span> <span style="">Population:</span><span class="population-number">${realdata.population}</span></div>
           
     </div>
    </div>
    </div>
    
    
    
    `
        container.insertAdjacentHTML('afterbegin', html)
        SearchCountry.value = ''
      })
      .catch((err) => {
        alert("Page not found"+err);
      })
  }
}

Searchbtn.addEventListener('click', () => {
  datafetch()
})

let body = document.querySelector('body')
body.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    datafetch()
  }
})
