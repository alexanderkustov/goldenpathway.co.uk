# Project Context for AI Agents

## Project Overview
**Golden Pathway** is a UK immigration consultancy website. It is a static site built with **Astro** and **Tailwind CSS**. The site provides information about visa services, company values, and contact details.

## Tech Stack
- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 alpha, using `@import "tailwindcss";` in `global.css`)
- **Language**: TypeScript / JavaScript (in `.astro` files)
- **Package Manager**: npm / pnpm

## Project Structure
- `src/pages/`: Route components.
    - `index.astro`: The main homepage.
    - `accessibility.astro`, `complaints.astro`, `privacy.astro`, `terms.astro`: Legal and informational pages.
- `src/components/`: Reusable UI components.
    - `Navigation.astro`: Main navigation logic.
    - `WelcomeLoader.astro`: First-visit animation.
    - `Hero.astro`, `Intro.astro`, `Services.astro`, `Testimonial.astro`, `Contact.astro`: Homepage sections.
- `src/layouts/`: Page layouts.
    - `Base.astro`: The main HTML shell (includes `<head>`, SEO tags, and global scripts).
    - `Header.astro`: Site header.
    - `Footer.astro`: Site footer (includes theme toggle).
- `src/styles/global.css`: Global styles, CSS variables for theming, and Tailwind imports.

## Key Conventions

### Theming (Dark/Light Mode)
- **Implementation**: CSS variables defined in `src/styles/global.css`.
    - `:root`: Defines the default **Dark Mode** colors.
    - `.light`: Defines the **Light Mode** colors.
- **Persistence**:
    - `localStorage` key: `theme` ('light' or 'dark').
    - **Initialization**: A script in `<head>` of `Base.astro` applies the class immediately to prevent FOUC (Flash of Unstyled Content).
    - **Toggle**: Located in `Footer.astro`. It updates `localStorage` and toggles the `.light` class on `<html>`.

### Styling
- **Tailwind**: Use utility classes for most styling.
- **Colors**: Use the CSS variables defined in `global.css` (e.g., `bg-primary`, `text-text-main`, `text-gold-base`) to ensure theme compatibility.
    - **Do not hardcode hex values** in components if they need to change with the theme.
- **Typography**: Standardized font sizes for legal pages (`text-xl md:text-2xl` for body).

### Components
- **Navigation**:
    - **Homepage**: Shows anchor links (`#about`, `#services`, etc.).
    - **Other Pages**: Shows a single "Home" link pointing to `/`.
- **Welcome Loader**:
    - A "typewriter" animation that runs only on the **first visit**.
    - Controlled by `localStorage.getItem("hasVisited")`.
    - Located in `src/components/WelcomeLoader.astro` and imported in `index.astro`.

### SEO
- **Meta Tags**: Managed in `Base.astro`. Includes Open Graph and Twitter Card tags.

## Recent Changes
- **Refactoring**: `index.astro` was broken down into smaller components.
- **Light Mode**: Colors were updated to a specific high-contrast palette.
- **Loader**: Added a typewriter effect welcome loader.
- **Icons**: Removed sun/moon icons from the theme toggle; switched to uppercase text.
