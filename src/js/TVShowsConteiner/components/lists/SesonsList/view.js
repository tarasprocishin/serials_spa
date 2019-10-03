const viwe = data => `
<ul class="list">
${data
  .map(
    el => `
  <li
  class="list_item"  
  data-season-id=${el.season_number}
  data-element="season-element"
  >
  <picture>
   <img
   class="poster"
   src="https://image.tmdb.org/t/p/w500/${el.poster_path}"
   onerror="this.src = 'https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/drink.jpg'"
   data-element="link"
   alt="poster for ${el.name}"
  >
  </picture>
 
   <div class="description">
   <a 
   data-element="link"
   class="title" 
   >${el.name}</a><br>
   <p>Air date: ${el.air_date} | Eppisode count: ${el.episode_count}</p>
   <p>  ${el.overview || ""}</p>
   </div>
  </li>
`
  )
  .join("")}
</ul>
`;

export default viwe;
