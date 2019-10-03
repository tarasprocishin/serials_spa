const viwe = data => `
 <ul class="list">
 ${data
   .map(
     el => `
   <li
   class="list_item"  
   data-show-id=${el.id}
   data-element="show-element"
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
    <p>Origin country: ${el.origin_country.map(el => el)}</p>
    <p>First air date: ${el.first_air_date}</p>
    <p>  ${el.overview}</p>
    </div>

   </li>
 `
   )
   .join("")}
 </ul>
`;
export default viwe;
