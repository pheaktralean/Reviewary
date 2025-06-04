# Reviewary

## File Structure
1. client  - this is for React app
    - src/pages: storing the (html) = *.jsx
    - src/styles: storing the styles
    - src/components: storing reusable UI components
    - src/App.js: main app layout
    - src/index.js: react app entry point
    - tailwind.config.js: Tailwind settings
    - postcss.config.js: for tailwind postcss integration
    - package.json: react dependencies
2. server - this is for Backend
    - app.py: main entry point that starts your Flask
    - config.py: Flask settings (database url, secret key)
    - models/review.py: SQLAlchemy models (user, review)
    - routes/reviews.py: API route handler (like /api/reviews)
    - requirements.txt: list of dependencies for backend
3. README.md: 
4. .gitignore

