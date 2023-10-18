# VoTogether Design System

<p align="center"><img src='https://github.com/VoTogether-Design-System/design-system/assets/81199414/7f260b72-5588-41aa-9200-a493e8aa89c3' width='110px' height='110px' ></p>

> VoTogether-Design-System is a comprehensive library of common components that features our implementation of [VoTogether](https://votogether.com/).

## Installation

**Install the package in your project directory with:**

```
npm i votogether-design-system
```

**If you want to install devDependencies, try the script below.**

```
npm i -D votogether-design-system
```

## Getting Started

**1. Wrap your own components(ex. App) with `VDSProvider`.**

```tsx
import { VDSProvider } from 'votogether-design-system';

<VDSProvider>
  <App />
</VDSProvider>;
```

**2. Import components from package.**

```tsx
import { RoundButton } from 'votogether-design-system';
// import { RoundButton, SquareButton } from 'votogether-design-system';

export default function SomeComponent() {
  // ...
  return;
  <RoundButton>+</RoundButton>;
}
```

## Usage Example

**For example, Team VoTogether is currently using this package.**

```tsx
import { ResponsiveFlex } from 'votogether-design-system';

export default function SomeComponent() {
  // ...
  return (
    <div>
      <ResponsiveFlex
        breakpoint='678px'
        ratio={70}
        $smGap='20px'
        $lgGap='30px'
        $smPadding='60px 15px 0px 0px'
        $lgPadding='20px 80px 40px 60px'
      >
        <S.LeftSide>Left Side of Flex</S.LeftSide>
        <S.RightSide>Right Side of Flex</S.RightSide>
      </ResponsiveFlex>
    </div>
  );
}
```

[Reference1](https://github.com/woowacourse-teams/2023-votogether/blob/dev/frontend/src/App.tsx)

[Reference2](https://github.com/woowacourse-teams/2023-votogether/blob/dev/frontend/src/components/PostForm/index.tsx)

[Reference3](https://github.com/woowacourse-teams/2023-votogether/blob/dev/frontend/src/pages/admin/PendingReportPage/index.tsx)

## Links

[storybook](https://votogether-design-system.github.io/design-system)

[npm](https://www.npmjs.com/package/votogether-design-system)

## Contributors
    <table>
      <tr>
     <td align="center"><a href="https://github.com/inyeong-kang"><img src="https://avatars.githubusercontent.com/u/113416448?v=4" width="100px;" alt=""/><br /><sub><b>수아</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/inyeong-kang"><img src="https://avatars.githubusercontent.com/u/80146176?v=4" width="100px;" alt=""/><br /><sub><b>우스</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/inyeong-kang"><img src="https://avatars.githubusercontent.com/u//81199414?v=4" width="100px;" alt=""/><br /><sub><b>제로</b></sub></a><br /></td>
     </tr>
   </table>


## License

- Code and documentation copyright 2023 the VDS Contributors.
- Code released under the MIT License.

### Keywords

[React 18](https://react.dev), [TypeScript](https://www.typescriptlang.org/), [Vite](https://ko.vitejs.dev/guide/), [styled-components](https://styled-components.com/), [storybook](https://storybook.js.org/)
