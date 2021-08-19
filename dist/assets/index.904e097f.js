var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))d.call(t,a)&&c(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));import{s as p,A as o,R as n,a as f}from"./vendor.059f8f20.js";const m=["/assets/card_1.1ec13929.jpg","/assets/card_2.813af869.jpg","/assets/card_3.e96319b1.jpg","/assets/card_4.bd6beb6b.jpg","/assets/card_5.795ca649.jpg","/assets/card_6.f312cec0.jpg","/assets/card_7.7cd646f1.jpg","/assets/card_8.32fcb593.jpg"],g=p.div`
  position: relative;
  perspective: 1000px;

  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`,b=o`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
`,u=p.img`
  ${b}

  z-index: ${e=>e.flipped?2:1};
  transform: ${e=>e.flipped?"rotate(0deg)":"rotateY(180deg)"};
`,j=p.img`
  ${b}

  z-index: ${e=>e.flipped?1:2};
  transform: ${e=>e.flipped?"rotateY(180deg)":"rotate(360deg)"};
  position: absolute;
  top: 0px;
  left: 0px;
`,v=({card:e,callback:t})=>n.createElement(g,{onClick:()=>{e.clickable&&t(e)}},n.createElement(u,{flipped:e.flipped,src:e.frontImage,alt:""}),n.createElement(j,{flipped:e.flipped,src:e.backImage,alt:""})),k=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`,y=()=>{const[e,t]=n.useState([...m,...m].map(((e,t)=>({id:`card${t}`,flipped:!1,backImage:"/assets/card_back.3f633007.jpg",frontImage:e,clickable:!0,matchingCardId:t<m.length?`card${t+m.length}`:"card"+(t-m.length)}))).map((e=>[Math.random(),e])).sort(((e,t)=>e[0]-t[0])).map((e=>e[1])));const[a,r]=n.useState(!1),[i,d]=n.useState(0),[c,p]=n.useState(void 0);n.useEffect((()=>{i===e.length/2&&(r(!0),console.log(a))}),[i]);const o=e=>{if(t((t=>t.map((t=>t.id===e.id?s(l({},t),{flipped:!0,clickable:!1}):t)))),c){if(c.matchingCardId===e.id)return d((e=>e+1)),t((t=>t.map((t=>t.id===c.id||t.id===e.id?s(l({},t),{clickable:!1}):t)))),void p(void 0);setTimeout((()=>{t((t=>t.map((t=>t.id===c.id||t.id===e.id?s(l({},t),{flipped:!1,clickable:!0}):t))))}),1e3),p(void 0)}else p(l({},e))};return n.createElement("div",null,n.createElement(k,null,e.map((e=>n.createElement(v,{key:e.id,card:e,callback:o})))))};f.render(n.createElement(n.StrictMode,null,n.createElement(y,null)),document.getElementById("root"));
