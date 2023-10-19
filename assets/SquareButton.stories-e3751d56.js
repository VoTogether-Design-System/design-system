import{s as g,a as o}from"./styled-components.browser.esm-a0a1784b.js";import{t as B}from"./theme-9f42aa46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const b={fill:"var(--primary-color)",blank:"var(--primary-color)",gray:"#67727E"},_={fill:"white",blank:"var(--primary-color)",gray:"white"},S={fill:"var(--primary-color)",blank:"white",gray:"#67727E"},k=g.button`
  display: block;

  width: 100%;
  height: 100%;
  border: 2px solid ${({$theme:r})=>b[r]};
  border-radius: 8px;

  color: ${({$theme:r})=>_[r]};
  background-color: ${({$theme:r})=>S[r]};

  font: var(--text-caption);

  cursor: pointer;

  @media (min-width: ${B.breakpoint.sm}) {
    font: var(--text-body);
  }
`;function e({theme:r,children:y,...f}){return o(k,{$theme:r,...f,children:y})}try{e.displayName="SquareButton",e.__docgenInfo={description:"",displayName:"SquareButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"blank"'},{value:'"fill"'},{value:'"gray"'}]}}}}}catch{}const C={component:e,decorators:[r=>o("div",{style:{width:"100px",height:"50px"},children:r()})]},t={render:()=>o(e,{theme:"blank",children:"확 인"})},a={render:()=>o(e,{theme:"fill",children:"버 튼"})},n={render:()=>o(e,{theme:"gray",children:"버 튼"})};var l,s,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <SquareButton theme="blank">확 인</SquareButton>
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <SquareButton theme="fill">버 튼</SquareButton>
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SquareButton theme="gray">버 튼</SquareButton>
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const w=["ColorBlank","ColorFill","ColorGray"];export{t as ColorBlank,a as ColorFill,n as ColorGray,w as __namedExportsOrder,C as default};
//# sourceMappingURL=SquareButton.stories-e3751d56.js.map
