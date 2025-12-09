# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Aaryan Makwana, an Electrical Engineer. The site is a static HTML/CSS/JavaScript application that showcases projects and blog posts, hosted on GitHub Pages at https://aaryanmakwana.github.io/aaryanmakwana/

## Architecture

### Core Structure
The site uses a simple vanilla JavaScript architecture with no build tools or frameworks:

- **index.html** - Main landing page with navigation, hero section, about, projects preview, blog preview, and contact sections
- **all_projects.html** - Dedicated page displaying all projects
- **all_blogs.html** - Dedicated page displaying all blog posts
- **style.css** - Single stylesheet with responsive design (mobile breakpoint at 768px)
- **projects.js** - Data store and rendering logic for projects (13 GitHub repositories)
- **blogs.js** - Data store and rendering logic for blog articles
- **images/** - Project thumbnails and blog images
- **legacy_site/** - Previous version of the site (archived)

### Data Architecture
Projects and blogs are stored as JavaScript arrays of objects in their respective `.js` files:
- Projects have properties: `title`, `repo`, `description`, `technologies`, `link`, `image`, `category`
- Categories include: "Electrical Design", "Simulations", "Embedded System", "Robotics"
- Rendering is done via DOM manipulation in `DOMContentLoaded` event listeners

### Styling Approach
The site uses a custom color palette:
- Primary background: `#ebe9dd` (cream)
- Card/nav background: `#d4c7af` (tan)
- Card content background: `#766b5d` (brown)
- Dark accent: `#191513` (near-black)
- Text: `#766b5d` on light backgrounds, `#ebe9dd` on dark backgrounds

Uses CSS Grid for responsive card layouts with `auto-fit` and `minmax(300px, 1fr)`.

## Development Workflow

### Testing Changes
Since this is a static site with no build process:
1. Open `index.html` directly in a browser, or
2. Use a local web server: `python3 -m http.server 8000`
3. Navigate to `http://localhost:8000`

### Adding New Projects
Edit `projects.js` and add a new object to the `projects` array with all required fields. Place a corresponding image in the `images/` directory.

### Adding New Blog Posts
Edit `blogs.js` and add a new object to the `blogs` array. Set `home: true` to display on the homepage preview section.

### Deployment
The site is deployed via GitHub Pages. Changes pushed to the `main` branch are automatically published to https://aaryanmakwana.github.io/aaryanmakwana/

### Version Control
- Uses git for version control
- Main branch: `main`
- No specific branching strategy observed (direct commits to main)

## Important Notes
- No package manager, bundler, or transpilation required
- All JavaScript is vanilla ES6+
- Images are loaded locally from the `images/` directory
- Contact email in footer should be updated if changed: currently `aaryanmakwana.chat@gmail.com`
- LinkedIn and GitHub links in contact section use placeholder/actual URLs
- The footer is commented out in `index.html` (lines 86-90)
