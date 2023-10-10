import{s as t,j as h,a as r}from"./styled-components.browser.esm-a0a1784b.js";import{t as i}from"./theme-9f42aa46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const u=t.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media (min-width: ${i.breakpoint.sm}) {
    gap: 12px;
  }
`,n=t.div`
  border-radius: 4px;

  background-color: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;

  animation: 1.7s ${i.animation.skeletonGradientWave} linear infinite;
`,x=t(n)`
  height: ${e=>e.$isLarge?"40vh":"30vh"};

  @media (min-width: ${i.breakpoint.sm}) {
    height: ${e=>e.$isLarge?"44vh":"34vh"};
  }
`,f=t(n)`
  height: 4vh;

  @media (min-width: ${i.breakpoint.sm}) {
    height: 6vh;
  }
`,k=t(n)`
  height: 2vh;

  @media (min-width: ${i.breakpoint.sm}) {
    height: 4vh;
  }
`;function a({isLarge:e}){return h(u,{tabIndex:0,"aria-label":"현재 페이지의 내용을 불러오는 중입니다.",children:[r(x,{$isLarge:e}),r(f,{}),r(k,{})]})}try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{isLarge:{defaultValue:null,description:"",name:"isLarge",required:!0,type:{name:"boolean"}}}}}catch{}const _={component:a},o={render:()=>r(a,{isLarge:!0})},s={render:()=>r(a,{isLarge:!1})};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Skeleton isLarge={true} />
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Skeleton isLarge={false} />
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const $=["FirstBoxLarge","FirstBoxSmall"];export{o as FirstBoxLarge,s as FirstBoxSmall,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=Skeleton.stories-b7542e60.js.map
