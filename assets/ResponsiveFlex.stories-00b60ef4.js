import{s,a as r,j as o}from"./styled-components.browser.esm-a0a1784b.js";import{t as n}from"./theme-9f42aa46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const A=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({gap:e})=>e};

  width: 100%;
  height: 100%;

  margin: ${({smmargin:e})=>e};
  padding: ${({smpadding:e})=>e};

  @media (min-width: ${n.breakpoint.sm}) {
    flex-direction: row;
    margin: ${({lgmargin:e})=>e};
    padding: ${({lgpadding:e})=>e};
  }
`,C=s.div`
  width: 100%;
  height: ${({ratio:e})=>`${e}%`};

  @media (min-width: ${n.breakpoint.sm}) {
    width: ${({ratio:e})=>`${e}%`};
    height: 100%;
  }
`,G=s.div`
  width: 100%;
  height: ${({ratio:e})=>`${e}%`};

  @media (min-width: ${n.breakpoint.sm}) {
    width: ${({ratio:e})=>`${e}%`};
    height: 100%;
  }
`;function i({breakpoint:e=n.breakpoint.sm,gap:z="10px",ratio:u=50,smmargin:E="10px",smpadding:I="10px",lgmargin:O="10px",lgpadding:W="10px",children:g}){return g.length!==2?r("div",{children:"ResponsiveFlex component needs two children."}):o(A,{breakpoint:e,gap:z,smmargin:E,smpadding:I,lgmargin:O,lgpadding:W,children:[r(C,{ratio:u,children:g[0]}),r(G,{ratio:100-u,children:g[1]})]})}try{i.displayName="ResponsiveFlex",i.__docgenInfo={description:"",displayName:"ResponsiveFlex",props:{breakpoint:{defaultValue:{value:"theme.breakpoint.sm"},description:"breakpoint that arranges children from horizontal to vertical (min-width: breakpoint)",name:"breakpoint",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"10px"},description:"gap between two children",name:"gap",required:!1,type:{name:"StringPixel"}},ratio:{defaultValue:{value:"50"},description:`ratio of left-sided child(first index of children)
unit is percent (ex. 40%)
(if 70%, right-sided is automatically 30%)`,name:"ratio",required:!1,type:{name:"number"}},smmargin:{defaultValue:{value:"10px"},description:"margin of Flex when width is less than breakpoint",name:"smmargin",required:!1,type:{name:"StringPixel"}},smpadding:{defaultValue:{value:"10px"},description:"padding of Flex when width is less than breakpoint",name:"smpadding",required:!1,type:{name:"StringPixel"}},lgmargin:{defaultValue:{value:"10px"},description:"margin of Flex when width is no less than breakpoint",name:"lgmargin",required:!1,type:{name:"StringPixel"}},lgpadding:{defaultValue:{value:"10px"},description:"padding of Flex when width is no less than breakpoint",name:"lgpadding",required:!1,type:{name:"StringPixel"}},children:{defaultValue:null,description:"children of Flex, The number of children should be 2",name:"children",required:!0,type:{name:"[ReactNode, ReactNode]"}}}}}catch{}const U={component:i},a=s.div`
  height: 100px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #b2a592;
`,t=s.div`
  height: 50px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #d5c8ae;
`,d={render:()=>o(i,{breakpoint:n.breakpoint.sm,children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},p={render:()=>o(i,{breakpoint:n.breakpoint.md,children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},c={render:()=>o(i,{breakpoint:n.breakpoint.sm,ratio:70,children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},l={render:()=>o(i,{breakpoint:n.breakpoint.sm,ratio:70,lgmargin:"20px",children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},x={render:()=>o(i,{breakpoint:n.breakpoint.sm,ratio:70,lgpadding:"20px",children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},m={render:()=>o(i,{breakpoint:n.breakpoint.sm,ratio:70,smmargin:"20px",children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})},h={render:()=>o(i,{breakpoint:n.breakpoint.sm,ratio:70,smpadding:"20px",children:[r(a,{children:"FirstBox"}),r(t,{children:"SecondBox"})]})};var B,F,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(b=(F=d.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var S,k,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.md}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(f=(k=p.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,w,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var R,$,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} lgmargin={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(P=($=l.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var T,_,q;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} lgpadding={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,j,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} smmargin={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var M,N,D;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} smpadding={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(D=(N=h.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const X=["Default","BreakpointTablet","RatioForFirstBoxSeventy","LargeMarginTwentyPixel","LargePaddingTwentyPixel","SmallMarginTwentyPixel","SmallPaddingTwentyPixel"];export{p as BreakpointTablet,d as Default,l as LargeMarginTwentyPixel,x as LargePaddingTwentyPixel,c as RatioForFirstBoxSeventy,m as SmallMarginTwentyPixel,h as SmallPaddingTwentyPixel,X as __namedExportsOrder,U as default};
//# sourceMappingURL=ResponsiveFlex.stories-00b60ef4.js.map
