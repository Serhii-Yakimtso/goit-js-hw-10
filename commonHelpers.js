import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as b}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),t=document.querySelector("button[data-start]"),h=document.querySelector(".value[data-days]"),p=document.querySelector(".value[data-hours]"),y=document.querySelector(".value[data-minutes]"),S=document.querySelector(".value[data-seconds]");let s;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=Date.now()?(b.error({title:"Error",titleColor:"#fff",titleSize:"16px",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",iconUrl:"../img/error.svg",position:"topRight",backgroundColor:"#ef4040"}),t.classList.add("disabled"),t.setAttribute("disabled","")):(t.classList.remove("disabled"),t.removeAttribute("disabled",""),s=e[0].getTime())}};d();f("#datetime-picker",v);t.addEventListener("click",g);function g(){d(),L();const e=setInterval(()=>{const o=s-Date.now();if(o<=0)return clearInterval(e);T(M(o))},1e3)}function d(){t.classList.add("disabled"),t.setAttribute("disabled","")}function L(){a.classList.add("disabled"),a.setAttribute("disabled","")}function M(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:m}}function T({days:e,hours:o,minutes:r,seconds:i}){h.innerHTML=n(e),p.innerHTML=n(o),y.innerHTML=n(r),S.innerHTML=n(i)}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
