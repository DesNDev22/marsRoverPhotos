// API zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H
// API from Mars rovers curiosity, opportunity and spirit
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// ONLY NAVIGATION CAMERA SINCE THAT'S THE ONLY AVAILABLE FOR THE 3 ROVERS

const APIKey = 'zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H'
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const picDate = document.querySelector('#searchDate').value
  const rover = document.querySelector('input[name="rover"]:checked').value
  let createSection = ''  
  picDate == '' ? url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=NAVCAM&api_key=${APIKey}` :
                  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${picDate}&camera=NAVCAM&api_key=${APIKey}`;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let createSection = ''
        let photos = data.photos
        if (photos.length > 0) {
          Object.keys(photos).forEach(key => {
            // Modify DOM with picture section 
            createSection += `<div class="photo"><a href="${photos[key].img_src}" target="blank"><img class="images" src="${photos[key].img_src}" alt="Mars picture"></a>
            </div>`
          })
      } else {
        createSection = "<h1>NO PICTURES FOUND FOR THE SELECTIONS!"
      }
      document.querySelector(".grid-pictures").innerHTML = createSection
    })
      .catch(err => {
          console.log(`error ${err}`)
      });
}