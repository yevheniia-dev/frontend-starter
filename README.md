# Frontend Starter (Gulp · Pug · SCSS)

A clean frontend starter template focused on structured thinking,
clear separation of concerns, and a scalable approach to static websites.

This repository prioritizes architecture and maintainability over frameworks,
making it suitable for real projects and long-term growth.

---

## Key Ideas

-   Clear separation between layout, sections, and components
-   Predictable and readable project structure
-   SCSS architecture aligned with markup structure
-   JavaScript prepared for gradual transition to ES modules
-   Minimal setup without unnecessary complexity

---

## Tech Stack

-   Gulp 5 — task runner
-   Pug — HTML templating
-   SCSS (Sass) — styling
-   PostCSS + Autoprefixer
-   BrowserSync — local development server

---

## Project Structure

src/
├── pug/ Pug templates and components  
│ ├── layouts/ Global page layouts  
│ ├── templates/ Page templates  
│ ├── blocks/ Page-level sections  
│ └── components/ Reusable UI components (mixins)  
│
├── scss/ Styles mirrored to Pug structure  
│ ├── utils/ Variables and mixins  
│ ├── base/ Reset and base styles  
│ ├── layout/ Page-level layout styles  
│ ├── blocks/ Section styles  
│ ├── components/ Component styles  
│ └── style.scss Single SCSS entry point  
│
├── js/ JavaScript entry point and future modules  
│ ├── modules/ Feature-based modules (optional)  
│ ├── services/ Helpers and services  
│ └── main.js Application entry file  
│
├── img/ Images and icons  
│ ├── icons/ SVG icons and sprite  
│ └── images/ Content images  
│
└── fonts/ Local font files

---

## Development Workflow

Install dependencies:

npm install

Start local development:

npm run dev

Build production files:

npm run build

---

## Code Style

-   Tabs indentation (width: 4)
-   Prettier for automatic formatting
-   EditorConfig enabled
-   Pug files formatted manually for clarity

---

## Notes

-   Development is done only in the src directory
-   dist and node_modules are excluded from version control
-   The structure is intentionally minimal and extensible
-   Suitable for small to medium static projects

---

## Author

Yevheniia Stetsiura  
Frontend Developer, Germany

---

## License

ISC
