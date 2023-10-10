import{s as $,j as b,a as s}from"./styled-components.browser.esm-a0a1784b.js";import{r as k}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const a=(t,e)=>{const[n,o]=k.useState(t);return{selectedButton:n,firstButton:{text:t,event:()=>o(t)},secondButton:{text:e,event:()=>o(e)}}},C={sm:{height:"40px"},md:{height:"60px"},lg:{height:"80px"},free:{height:"100%"}},j=$.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  height: ${t=>C[t.$size].height};
  border: 1.5px solid var(--primary-color);
  border-radius: 4px;
`,B=$.button`
  border-radius: 4px;

  height: calc(100% - 10px);
  width: calc(100% - 10px);

  background-color: ${t=>t.$isSelected&&"var(--primary-color)"};
  color: ${t=>t.$isSelected?"white":"var(--primary-color)"};

  font: var(--text-caption);
  letter-spacing: 1px;

  cursor: pointer;
`;function r({size:t,selectedButton:e,firstButton:n,secondButton:o}){const l=()=>{e!==n.text&&n.event()},p=()=>{e!==o.text&&o.event()};return b(j,{$size:t,children:[s(B,{onClick:l,$isSelected:e===n.text,children:n.text}),s(B,{onClick:p,$isSelected:e===o.text,children:o.text})]})}try{r.displayName="ToggleSwitch",r.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"free"'}]}},selectedButton:{defaultValue:null,description:"",name:"selectedButton",required:!0,type:{name:"string"}},firstButton:{defaultValue:null,description:"",name:"firstButton",required:!0,type:{name:"ButtonInfo"}},secondButton:{defaultValue:null,description:"",name:"secondButton",required:!0,type:{name:"ButtonInfo"}}}}}catch{}const E={component:r},c=()=>{const{selectedButton:t,firstButton:e,secondButton:n}=a("first","second");return s(r,{size:"sm",selectedButton:t,firstButton:e,secondButton:n})},i=()=>{const{selectedButton:t,firstButton:e,secondButton:n}=a("first","second");return s(r,{size:"md",selectedButton:t,firstButton:e,secondButton:n})},u=()=>{const{selectedButton:t,firstButton:e,secondButton:n}=a("first","second");return s(r,{size:"lg",selectedButton:t,firstButton:e,secondButton:n})},d=()=>{const{selectedButton:t,firstButton:e,secondButton:n}=a("first","second");return s("div",{style:{height:"100px"},children:s(r,{size:"free",selectedButton:t,firstButton:e,secondButton:n})})};var m,g,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    selectedButton,
    firstButton,
    secondButton
  } = useToggleSwitch('first', 'second');
  return <ToggleSwitch size='sm' selectedButton={selectedButton} firstButton={firstButton} secondButton={secondButton} />;
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    selectedButton,
    firstButton,
    secondButton
  } = useToggleSwitch('first', 'second');
  return <ToggleSwitch size='md' selectedButton={selectedButton} firstButton={firstButton} secondButton={secondButton} />;
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,v,y;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const {
    selectedButton,
    firstButton,
    secondButton
  } = useToggleSwitch('first', 'second');
  return <ToggleSwitch size='lg' selectedButton={selectedButton} firstButton={firstButton} secondButton={secondButton} />;
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,_,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const {
    selectedButton,
    firstButton,
    secondButton
  } = useToggleSwitch('first', 'second');
  return <div style={{
    height: '100px'
  }}>
      <ToggleSwitch size='free' selectedButton={selectedButton} firstButton={firstButton} secondButton={secondButton} />
    </div>;
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const F=["SizeS","SizeM","SizeL","SizeFree"];export{d as SizeFree,u as SizeL,i as SizeM,c as SizeS,F as __namedExportsOrder,E as default};
//# sourceMappingURL=ToggleSwitch.stories-79535513.js.map
