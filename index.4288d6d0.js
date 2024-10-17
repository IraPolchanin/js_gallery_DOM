var e=document.querySelector(".gallery__list"),t=document.querySelector(".gallery__large-img");e.addEventListener("click",function(e){e.preventDefault();var r=e.target;if("IMG"===r.tagName&&(r=r.parentNode),"A"===r.tagName){var a=new URL(r.getAttribute("href"),window.location.origin).href;t.src=a}});
//# sourceMappingURL=index.4288d6d0.js.map
