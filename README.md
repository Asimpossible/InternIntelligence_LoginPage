<<<<<<< HEAD
# 🚀 Responsive Login Page with Firebase Authentication

A modern, fully responsive **Login Page** built with **Vite, React, TypeScript, and Tailwind CSS**, featuring **Firebase authentication** for secure user sign-in and sign-up.

## ✨ Features

- 🔐 **Secure Authentication** (Login & Register with Firebase)
- ✅ **Form Validation** (Clear error messages for a smooth experience)
- 📱 **Fully Responsive** (Optimized for mobile, tablet, and desktop)
- 🎨 **Modern UI** (Styled with Tailwind CSS for a clean and aesthetic look)
- ⚡ **Fast Performance** (Built with Vite for lightning-fast development)

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Authentication:** Firebase
- **Build Tool:** Vite
---

🙏 **Thank you for checking out this project!** If you find it useful, feel free to ⭐ the repo and contribute. Happy coding! 🚀  
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 36c88ec (Registration and Login configurated)
