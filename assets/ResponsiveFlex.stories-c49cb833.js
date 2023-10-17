import{s,a as n,j as i}from"./styled-components.browser.esm-a0a1784b.js";import{t as o}from"./theme-9f42aa46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const H=s.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};

  gap: ${({$smGap:e})=>e};

  width: 100%;
  height: 100%;

  margin: ${({$smMargin:e})=>e};
  padding: ${({$smPadding:e})=>e};

  overflow-x: hidden;
  overflow-y: hidden;

  @media (min-width: ${({breakpoint:e})=>e}) {
    flex-direction: row;
    gap: ${({$lgGap:e})=>e};

    margin: ${({$lgMargin:e})=>e};
    padding: ${({$lgPadding:e})=>e};

    overflow-y: auto;
  }
`,J=s.div`
  width: 100%;
  height: ${({ratio:e})=>`${e}%`};

  @media (min-width: ${({breakpoint:e})=>e}) {
    width: ${({ratio:e})=>`${e}%`};
    height: 100%;
  }
`,K=s.div`
  width: 100%;
  height: ${({ratio:e})=>`${e}%`};

  @media (min-width: ${({breakpoint:e})=>e}) {
    width: ${({ratio:e})=>`${e}%`};
    height: 100%;
  }
`;function r({breakpoint:e=o.breakpoint.sm,$smGap:I="10px",$lgGap:C="10px",ratio:u=50,$smMargin:D="10px",$smPadding:z="10px",$lgMargin:E="10px",$lgPadding:O="10px",$justifyContent:W="space-between",$alignItems:A="center",children:g}){return g.length!==2?n("div",{children:"ResponsiveFlex component needs two children."}):i(H,{breakpoint:e,$smGap:I,$lgGap:C,$smMargin:D,$smPadding:z,$lgMargin:E,$lgPadding:O,$justifyContent:W,$alignItems:A,children:[n(J,{breakpoint:e,ratio:u,children:g[0]}),n(K,{breakpoint:e,ratio:100-u,children:g[1]})]})}try{r.displayName="ResponsiveFlex",r.__docgenInfo={description:"",displayName:"ResponsiveFlex",props:{breakpoint:{defaultValue:{value:"theme.breakpoint.sm"},description:"breakpoint that arranges children from horizontal to vertical (min-width: breakpoint)",name:"breakpoint",required:!1,type:{name:"`${number}px`"}},$smGap:{defaultValue:{value:"10px"},description:"gap between two children when width is less than breakpoint",name:"$smGap",required:!1,type:{name:"`${number}px`"}},$lgGap:{defaultValue:{value:"10px"},description:"gap between two children when width is no less than breakpoint",name:"$lgGap",required:!1,type:{name:"`${number}px`"}},ratio:{defaultValue:{value:"50"},description:`ratio of left-sided child(first index of children)
unit is percent (ex. 40%)
(if 70%, right-sided is automatically 30%)`,name:"ratio",required:!1,type:{name:"number"}},$smMargin:{defaultValue:{value:"10px"},description:"margin of Flex when width is less than breakpoint",name:"$smMargin",required:!1,type:{name:"MarginPadding"}},$smPadding:{defaultValue:{value:"10px"},description:"padding of Flex when width is less than breakpoint",name:"$smPadding",required:!1,type:{name:"MarginPadding"}},$lgMargin:{defaultValue:{value:"10px"},description:"margin of Flex when width is no less than breakpoint",name:"$lgMargin",required:!1,type:{name:"MarginPadding"}},$lgPadding:{defaultValue:{value:"10px"},description:"padding of Flex when width is no less than breakpoint",name:"$lgPadding",required:!1,type:{name:"MarginPadding"}},$justifyContent:{defaultValue:{value:"space-between"},description:"justify-content of Flex",name:"$justifyContent",required:!1,type:{name:"string"}},$alignItems:{defaultValue:{value:"center"},description:"align-items of Flex",name:"$alignItems",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"children of Flex, The number of children should be 2",name:"children",required:!0,type:{name:"[ReactNode, ReactNode]"}}}}}catch{}const Z={component:r},a=s.div`
  height: 100px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #b2a592;
`,t=s.div`
  height: 50px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #d5c8ae;
`,d={render:()=>i(r,{breakpoint:o.breakpoint.sm,children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},l={render:()=>i(r,{breakpoint:o.breakpoint.md,children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},p={render:()=>i(r,{breakpoint:o.breakpoint.sm,ratio:70,children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},c={render:()=>i(r,{breakpoint:o.breakpoint.sm,ratio:70,$lgMargin:"20px",children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},x={render:()=>i(r,{breakpoint:o.breakpoint.sm,ratio:70,$lgPadding:"20px",children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},m={render:()=>i(r,{breakpoint:o.breakpoint.sm,ratio:70,$smMargin:"20px",children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})},h={render:()=>i(r,{breakpoint:o.breakpoint.sm,ratio:70,$smPadding:"20px",children:[n(a,{children:"FirstBox"}),n(t,{children:"SecondBox"})]})};var B,F,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(b=(F=d.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var f,$,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.md}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var k,v,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,P,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} $lgMargin={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var M,q,T;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} $lgPadding={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(T=(q=x.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var V,_,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} $smMargin={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var G,L,N;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70} $smPadding={'20px'}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ee=["Default","BreakpointTablet","RatioForFirstBoxSeventy","LargeMarginTwentyPixel","LargePaddingTwentyPixel","SmallMarginTwentyPixel","SmallPaddingTwentyPixel"];export{l as BreakpointTablet,d as Default,c as LargeMarginTwentyPixel,x as LargePaddingTwentyPixel,p as RatioForFirstBoxSeventy,m as SmallMarginTwentyPixel,h as SmallPaddingTwentyPixel,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=ResponsiveFlex.stories-c49cb833.js.map
