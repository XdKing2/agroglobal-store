# 🐔 AgroGlobal - Poultry & Feed Solutions

A modern ecommerce website for poultry products, homemade feed recipes, and feed-making machines.

## 📁 Project Structure

```
agroglobal/
├── public/
│   └── agroglobal-logo.svg          # Logo file
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation header
│   │   ├── Hero.jsx                 # Hero section
│   │   ├── Features.jsx             # Feature highlights
│   │   ├── ProductCard.jsx          # Individual product card
│   │   ├── ProductsSection.jsx      # Products display & filtering
│   │   ├── RecipeCard.jsx           # Recipe card
│   │   ├── RecipesSection.jsx       # Recipes display
│   │   ├── RecipeModal.jsx          # Recipe details modal
│   │   ├── Cart.jsx                 # Shopping cart sidebar
│   │   ├── Contact.jsx              # Contact section
│   │   ├── Footer.jsx               # Footer
│   │   └── Logo.jsx                 # Logo component
│   ├── data/
│   │   ├── products.js              # Product data
│   │   └── recipes.js               # Recipe data
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS config
├── postcss.config.js                # PostCSS config
└── index.html                       # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Create project folder**
   ```bash
   mkdir agroglobal
   cd agroglobal
   ```

2. **Copy all the files** I created above into their respective folders

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

This creates optimized production files in the `dist/` folder.

## ✨ Features

- ✅ Shopping cart with add/remove/update
- ✅ Product filtering by category
- ✅ Recipe details with ingredients & instructions
- ✅ Mobile responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Custom logo

## 📝 Customization

### Change Products
Edit `src/data/products.js`

### Change Recipes
Edit `src/data/recipes.js`

### Change Colors
Edit `tailwind.config.js` or use Tailwind classes in components

### Change Contact Info
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

## 🎨 Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📞 Support

For questions or issues, contact: info@agroglobal.com

---

Built with ❤️ for farmers by AgroGlobal
