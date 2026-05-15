import{a as d,S as f,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="55702600-e02894471d0a636b9c2f740a2",m="https://pixabay.com/api/";function h(n){return d.get(m,{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
<li class="gallery-item">
<a href="${t.largeImageURL}">
<img src="${t.webformatURL}" alt="${t.tags}" />
</a>

<div class="info">
<p><b>Likes</b><br>${t.likes}</p>
<p><b>Views</b><br>${t.views}</p>
<p><b>Comments</b><br>${t.comments}</p>
<p><b>Downloads</b><br>${t.downloads}</p>
</div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.target.elements["search-text"].value.trim();o&&(b(),L(),h(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.log(t)}).finally(()=>{w(),u.reset()}))}
//# sourceMappingURL=index.js.map
