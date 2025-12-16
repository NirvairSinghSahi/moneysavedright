# Troubleshooting Blank Page

If you're seeing a blank page, check the following:

## 1. Check Browser Console
Open Developer Tools (F12) and check the Console tab for errors.

## 2. Verify Dependencies
Make sure you've run:
```bash
npm install
```

## 3. Check if Dev Server is Running
```bash
npm run dev
```
You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

## 4. Verify Assets
Make sure these files exist:
- `public/assets/images/logo.jpeg`
- `public/assets/images/hero_section.webp`

## 5. Common Issues

### CSS Not Loading
- Check that all CSS files exist in `src/assets/css/`
- Verify imports in `src/main.jsx`

### JavaScript Errors
- Check browser console for import errors
- Verify all component files exist
- Check for syntax errors

### React Router Issues
- Make sure you're accessing `http://localhost:3000/` (with trailing slash)
- Try `http://localhost:3000/home` to test routing

## 6. Quick Test
Add this to `src/App.jsx` temporarily to test if React is working:

```jsx
function App() {
  return <div><h1>React is Working!</h1></div>
}
```

If this shows, React is working and the issue is with components/routing.

