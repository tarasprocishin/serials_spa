const viwe = data => `
 <ul class="list">
 ${data
   .map(
     el => `
   <li
   class="list_item"  
   data-episode-id=${el.episode_number}
   data-element="episode-element"
   >
   <picture>
    <img
    class="poster"
    src="https://image.tmdb.org/t/p/w500/${el.still_path}"
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
    <p>Episode number: ${el.episode_number}</p>
    <p>Air date: ${el.air_date || ""}</p>
    <p>Eppisode count: ${el.episode_count}</p>
    <p>  ${el.overview || ""}</p>
    </div>

   </li>
 `
   )
   .join("")}
 </ul>
`;
export default viwe;
