(()=>{"use strict";const t=()=>{const t=document.querySelector(".main");t.textContent="",t.appendChild((()=>{const t=document.createElement("div");t.classList.add("main");const e=document.createElement("img");return e.src="../dist/images/scallop.png",e.alt="scallop dish",t.appendChild(e),t})())},e=()=>{const e=document.createElement("nav");e.classList.add("nav");const n=document.createElement("button");n.classList.add("home-button"),n.textContent="Home",n.addEventListener("click",(()=>{t()}));const a=document.createElement("button");a.classList.add("menu-button"),a.textContent="Menu",a.addEventListener("click",(()=>{(()=>{const t=document.querySelector(".main");t.textContent="",t.appendChild((()=>{const t=document.createElement("div");t.classList.add("menu");const e=document.createElement("h3");e.textContent="Chef's tasting: $195/person";const n=document.createElement("img");n.src="../dist/images/crab-salad.jpeg",n.alt="crab salad";const a=document.createElement("p");a.textContent="Crab, Nasturtium, Soft Herbs";const c=document.createElement("img");c.src="../dist/images/lamb.jpeg",c.alt="quail and carrot";const d=document.createElement("p");d.textContent="Quail, Celeriac, Carrot, Sorrel";const o=document.createElement("img");o.src="../dist/images/ice-cream.jpeg",o.alt="ice cream";const s=document.createElement("p");return s.textContent="Vanilla, Raspberry, Date, Pea Shoots",t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(c),t.appendChild(d),t.appendChild(o),t.appendChild(s),t})())})()}));const c=document.createElement("button");return c.classList.add("about-button"),c.textContent="About",c.addEventListener("click",(()=>{(()=>{const t=document.querySelector(".main");t.textContent="",t.appendChild((()=>{const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="Reservations: 333.666.9999";const n=document.createElement("p");n.textContent="123 Main St";const a=document.createElement("img");return a.classList.add("map"),a.src="../dist/images/location.png",a.alt="Eggplant restuarant location",t.appendChild(e),t.appendChild(n),t.appendChild(a),t})())})()})),e.appendChild(n),e.appendChild(a),e.appendChild(c),e};(()=>{const n=document.querySelector("#content"),a=(()=>{const t=document.createElement("div");return t.classList.add("header"),t.textContent="Yonder Tavern",t.appendChild(e()),t})();n.appendChild(a);const c=(()=>{const t=document.createElement("div");return t.classList.add("main"),t})();n.appendChild(c);const d=(()=>{const t=document.createElement("div");t.classList.add("footer");const e=document.createElement("p");return e.innerHTML='© 2022 <a href="https://github.com/trroev">trroev</a>',t.appendChild(e),t})();n.appendChild(d),t()})()})();