//Example fetch using pokemonapi.co
// API zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H
// API For earth images
//https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY
// API from Mars rovers curiosity, opportunity and spirit
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// Astronomy picture of the day
// https://api.nasa.gov/planetary/apod?api_key=zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H
/* <!--copyright:
date:
explanation:
hdurl: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_1365.jpg"
media_type: "image"
title: "The Moon through the Arc de Triomphe"
url: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_960.jpg"-->
 */

const APIKey = 'zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H'
document.querySelector('button').addEventListener('click', getFetch)
const imageURL = 'https://epic.gsfc.nasa.gov/archive/natural/'
const imageHighRes = 'png/'
const imageLowRes = 'jpg/'
const imageThumbs = 'thumbs/'
let url = ''

function getFetch(){
  const picDate = document.querySelector('input').value
  let createSection = ''  
  picDate == '' ? url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${APIKey}` :
                  url = `https://api.nasa.gov/EPIC/api/natural/date/${picDate}?api_key=${APIKey}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        Object.keys(data).forEach(key => {
          let pubDate = data[key].date
          pubDate = pubDate.substring(0,5) + pubDate.substring(5,8) + pubDate.substring(8,10) + pubDate.substring(4,5)
          pubDate = pubDate.replaceAll("-","/")
          // Modify DOM with picture section
          createSection += `<div><img class="low-res-images" src="${imageURL}${pubDate}/${imageLowRes}${data[key].image}.jpg" alt="Earth picture">
          </div>`
          document.querySelector(".grid-pictures").innerHTML = createSection
        })
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

