import{a as d,S as g,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="57437063-5e57d580090076aea82d313f5",y="https://pixabay.com/api/";function b(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:r}).then(i=>i.data)}const c=document.querySelector(".gallery"),a=document.querySelector(".loader");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:p,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${s}</span></p>
          <p class="info-item"><b>Comments</b><span>${p}</span></p>
          <p class="info-item"><b>Downloads</b><span>${m}</span></p>
        </div>
      </li>
    `).join("");f(),c.insertAdjacentHTML("beforeend",r),L.refresh()}function f(){c&&(c.innerHTML="")}function w(){a&&a.classList.remove("is-hidden")}function E(){a&&a.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){l.warning({message:"Please fill in the search field!",position:"topRight"});return}f(),w(),b(r).then(i=>{if(i.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(i.hits)}).catch(i=>{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{E(),u.reset()})}
//# sourceMappingURL=index.js.map
