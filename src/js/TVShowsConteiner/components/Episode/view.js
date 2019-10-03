const viwe = data => `
 <div class="episode">
  <div class="decription">
    <picture class="description_picture">
      <img
      class="poster_episode"
      src="https://image.tmdb.org/t/p/w500/${data.still_path}"
      onerror="this.src = 'https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/drink.jpg'"
      alt="poster for episode"
        >
    </picture>
    <div class="descrition_text" >
        <p class="title">${data.name}</p>
        <p>${data.overview}</p>
    </div>
  </div>

 <ul class="guest_stars">
 ${data.guest_stars
   .map(
     el => `
  <li class="guest_stars__item">
    <img
      class="poster__guest_stars"
      src="https://image.tmdb.org/t/p/w500/${el.profile_path}"
      onerror="this.src = 'https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/drink.jpg'"
      alt="poster for guest stars"
    >
    <p> ${el.name} </p>
  <li>  
 `
   )
   .join("") || ""}
 </ul>

 </div>
`;
export default viwe;
