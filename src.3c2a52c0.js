parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"gGOP":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=e.default.length-1,a={galleryWrap:document.querySelector(".gallery, js-gallery"),galleryItems:r(e.default),lightbox:document.querySelector(".lightbox"),lightboxImg:document.querySelector(".lightbox__image")};function r(e){return e.map(({preview:e,original:t,description:n},a)=>`<li class="gallery__item">\n<a\nclass="gallery__link"\nhref="${t}"\n>\n<img\nclass="gallery__image"\ndata-index="${a}"\nsrc="${e}"\ndata-source="${t}"\nalt="${n}"\n/>\n</a>\n</li>`).join("")}a.galleryWrap.insertAdjacentHTML("beforeend",a.galleryItems),a.galleryWrap.addEventListener("click",l);let i=0;function l(e){e.preventDefault(),"IMG"===e.target.nodeName&&(o(),i=Number(e.target.dataset.index)),g(e)}function o(){a.lightbox.classList.add("is-open"),a.lightbox.addEventListener("click",c),window.addEventListener("keydown",s)}function d(){a.lightbox.classList.remove("is-open"),window.removeEventListener("keydown",s)}function c(e){"BUTTON"!==e.target.nodeName&&"DIV"!==e.target.nodeName||(d(),u("",""))}function s(e){"Escape"===e.code&&(d(),u("",""))}function g(e){u(e.target.dataset.source,e.target.alt)}function u(e,t){a.lightboxImg.src=e,a.lightboxImg.alt=t}function m(t){"ArrowLeft"===t.code&&(i-=1)<0&&(i=n),"ArrowRight"===t.code&&(i+=1)>n&&(i=0);const a=e.default[i];u(a.original,a.description)}window.addEventListener("keydown",m);
},{"./gallery-items.js":"q5Rn"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/gallery-items.js"),require("./js/task-9.js");
},{"./js/gallery-items.js":"q5Rn","./js/task-9.js":"gGOP"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.3c2a52c0.js.map