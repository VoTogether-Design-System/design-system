# VoTogether Design System

<p align="center"><img src='./src/assets/votogether_logo.png' width='100px' height='100px' ></p>

> VoTogether-Design-System is a comprehensive library of common components that features our implementation of [VoTogether](https://votogether.com/).

## Installation

Install the package in your project directory with:

```
npm i votogether-design-system
```

If you want to install devDependencies, try the script below.

```
npm i -D votogether-design-system
```

## Getting Started

1. Wrap your own components(ex. App) with `VDSProvider`.

```tsx
import { VDSProvider } from 'votogether-design-system';

<VDSProvider>
  <App />
</VDSProvider>;
```

2. Import components from package.

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

For example, Team VoTogether is currently using this package.

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

## License

- Code and documentation copyright 2023 the VDS Contributors.
- Code released under the MIT License.

### Keywords

[React 18](https://react.dev), [TypeScript](https://www.typescriptlang.org/), [Vite](https://ko.vitejs.dev/guide/), [styled-components](https://styled-components.com/), [storybook](https://storybook.js.org/)
