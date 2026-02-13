# Project Guidelines

## Code Style

- **TypeScript strict mode** with ES2020 target and bundler module resolution
- **ESLint 9 flat config** with Expo preset + Prettier integration
- Run `npm run lint` and `npm run format` before committing
- Use explicit React imports (e.g., `import React from 'react'`)

## Architecture

Following [Expo folder structure best practices](https://expo.dev/blog/expo-app-folder-structure-best-practices). Start minimal, expand as needed:

```
src/
  app/          # Expo Router file-based routing (screens/layouts)
  components/   # Reusable UI components
  utils/        # Utility functions
```

**Expand incrementally** as the app grows:
- `hooks/` - Custom React hooks (`use-app-state.ts`, `use-theme.ts`)
- `screens/` - Complex screen components when route files get large
- `server/` - API route utilities if using Expo API routes (`+api.ts`)
- `constants.ts`, `theme.ts` - App-wide configuration

**Key principles:**
- **Expo Router 6** handles navigation via file structure in `src/app/`
- **NativeWind 4 + Tailwind 3** for styling (no separate style files)
- **React 19 + New Architecture** enabled - no `forwardRef` needed
- **Platform extensions**: Use `.web.tsx`, `.native.tsx` for platform-specific code
- **Colocate tests**: Place `*.test.ts` files next to source files

## Build and Test

| Command | Purpose |
|---------|---------|
| `npm start` | Start Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run on Web |
| `npm run lint` | Lint code |
| `npm run format` | Format with Prettier |

**Installing packages**: Always use `npx expo install <package>` instead of `npm install` - it ensures SDK-compatible versions.

See [12 tips for setting up your next Expo project](https://expo.dev/blog/12-tips-for-setting-up-your-next-expo-project) for additional best practices.

## Project Conventions

### Imports
- Use `@/` path alias for imports from `src/` (e.g., `@/components/Button`)
- Import `global.css` only in [src/app/_layout.tsx](../src/app/_layout.tsx)

### Components ([src/components/](../src/components/))
- **Named exports**: `export function Button` not `export default`
- **Props types**: Name as `{ComponentName}Props` extending native props
- **Prop-driven variants**: Use props like `size`, `theme` for styling variants
- Example pattern from [Button.tsx](../src/components/Button.tsx):
  ```tsx
  export type ButtonProps = PressableProps & {
    theme?: 'primary' | 'secondary' | 'tertiary';
  };
  export function Button({ theme = 'primary', className, ...props }: ButtonProps) { }
  ```

### Screens ([src/app/](../src/app/))
- **Default exports** required by Expo Router
- Name functions as `{Name}Screen` (e.g., `HomeScreen`)

### Styling
- Use `cn()` from `@/utils/cn` for conditional class merging:
  ```tsx
  className={cn('base-classes', condition && 'conditional-class', className)}
  ```
- Apply classes via `className` prop with conditional `&&` patterns
- Custom colors use bracket notation: `bg-[#007AFF]`

## API Integration

**Current approach**: Plain `fetch` + custom hooks (learning fundamentals first)
- Create wrapper function in `src/utils/api.ts` for base URL and default headers
- Build custom hooks in `src/hooks/` for data fetching (e.g., `use-products.ts`)
- Handle loading/error states manually

**Future migration**: TanStack Query (when ready for advanced patterns)
- Provides automatic caching, refetching, and loading states
- Migrate when feeling pain from manual cache management or duplicate requests
