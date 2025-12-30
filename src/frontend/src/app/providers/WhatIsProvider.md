# Markdown File

- providers are one of the most important React concepts, and once they “click”, a lot of React architecture suddenly makes sense.
- A provider is a React component that uses the Context API to pass data down the component tree without having to pass props manually at every level.
- Uses React Context under the hood
- Holds global state or configuration
- Makes it available to all child components
- Commonly used for themes, authentication, settings, etc.
- Wraps parts of the app to provide context
- Enables easier state management
- Reduces prop drilling
- Improves code organization
- Example: ThemeProvider, AuthProvider
- Usage:
  ```jsx
  <SomeProvider value={...}>
  <App />
  </SomeProvider>
  ```
- Any component inside <App /> can access that value without props.
- When SHOULD you use a provider?
  - App-wide concerns
  - Shared state across many components
  - Avoiding prop drilling
  - Cross-cutting logic
- Good provider candidates:
  - Authentication
  - User session
  - Theme
  - Localization (i18n)
  - Feature flags
  - Data fetching cache