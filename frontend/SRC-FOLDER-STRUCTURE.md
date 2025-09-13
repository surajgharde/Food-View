Suggested frontend folder structure (matches your screenshot):

frontend/src/
  App.jsx
  main.jsx
  assets/
    react.svg
  pages/
    auth/
      UserRegister.jsx
      UserLogin.jsx
      FoodPartnerRegister.jsx
      FoodPartnerLogin.jsx
  routes/
    AppRoutes.jsx
  styles/
    auth-shared.css
    theme.css
  App.css

Notes:
- `pages/auth/*` contains the four auth pages.
- `styles/` contains shared CSS and theme variables.
- Update any imports to point to these new paths; `AppRoutes.jsx` is already updated.
