const newsPortal = () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`
  fetch(url)
    .then(res => res.json())
    .then(data => portal(data.data))
}



function portal(news) {
  // console.log(news);
  const info = document.getElementById('info');
  // console.log(info);
  news.forEach(element => {
    // console.log(element);
    const div = document.createElement('div');
    div.classList = 'col-md-12 mt-0 blog_area';
    div.innerHTML = `
        <div class="card blogpost">
        <div class="row">
          <div class="col-md-3">
            <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text bodytext">${element.details.slice(0, 250)}</p>
              <div class="row ">
                <di class="col-md-12 athr">
                    <div class="author">
                        <div class="imgbox">
                          <img src="${element.author.img}" alt="">
                        </div>
                        <div>
                          <h6 class="author_title" id="authorname">${element.author.name}</h6>
                          <p class="card-text">${element.author.published_date}</p>
                       </div>
                 </div>
                    <div id="view">
                      <i class="fa-solid fa-eye">${element.total_view}</i>
                    </div>
            
      
                    <div id="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                   <div>
                    <button class="btn btn-primary" onclick="goDetails('${element._id}')" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                   </div>
                  </div>
            </div>
        </div>
      </div>
</div>
        `;
    info.appendChild(div);
  });
}

function goDetails(newData) {
  let url = `https://openapi.programming-hero.com/api/news/${newData}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data[0]))
}
function displayDetails(database) {
  console.log(database.thumbnail_url);
  const detilsContainer = document.querySelector('#details')
  const info = document.getElementById('info');
  const div = document.createElement('div');
  div.classList = 'col-md-9';
  div.innerHTML = `
  
  <div class="card my-3">
              <img src="${database.image_url}" height="400px" class="card-img-top detailsImg" alt="...">
              <div class="card-body">
                <h5 class="card-title">${database.title}</h5>
                <p class="card-text">${database.details}</p>
                <div class="col-md-12 athr">
                    <div class="author">
                        <div class="imgbox">
                          <img src="${database.author.img}" alt="">
                        </div>
                        <div>
                          <h6 class="author_title" id="authorname">${database.author.name}</h6>
                          <p class="card-text">${database.author.published_date}</p>
                       </div>
                 </div>
                    <div id="view">
                      <i class="fa-solid fa-eye">${database.total_view}</i>
                    </div>

                    <div id="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                  <div class="share">
                    <i class="fa-solid fa-share-nodes">85</i>
                  </div>
              </div>
          </div>
     </div>
  </div>
  
  `;

  detilsContainer.appendChild(div)
  info.innerText = '';
}
newsPortal();