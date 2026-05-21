# Himanshu Kumar - Portfolio Website

A modern, fully responsive portfolio website showcasing my work as a Frontend Developer and Cybersecurity Enthusiast. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, glassmorphism-inspired UI with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Theme toggle with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation support
- **Contact Form**: Working contact form with validation using react-hook-form
- **Performance Optimized**: Lazy loading and optimized assets

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **React Icons** - Icon library
- **Lucide React** - Additional icons
- **React Router** - Client-side routing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kumarhimanshu2006/Portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://yourprofileviewer.netlify.app/)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🖼️ Customization

### Change Profile Photo

Replace the file at `src/assets/profile.jpg` with your own photo (recommended size: 800x800px).

### Update Resume

Replace `src/assets/resume.pdf` with your own resume PDF file.

### Modify Content

All content is located in the components folder:
- `Hero.tsx` - Landing section
- `About.tsx` - About me section
- `Skills.tsx` - Skills and expertise
- `Projects.tsx` - Featured projects
- `Experience.tsx` - Work experience
- `Education.tsx` - Educational background
- `Contact.tsx` - Contact form and information

### Configure Contact Form

The contact form currently logs to console. To make it functional:

1. **Using Formspree**:
   - Sign up at [Formspree](https://formspree.io/)
   - Get your form endpoint
   - Update the form action in `Contact.tsx`

2. **Using Netlify Forms**:
   - Add `netlify` attribute to the form
   - Add hidden input: `<input type="hidden" name="form-name" value="contact" />`

## 📝 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── public/             # Public assets
├── index.html          # HTML template
└── package.json        # Dependencies
```

## 🎨 Color Scheme

The portfolio uses a teal/cyan accent color with a carefully crafted design system. You can customize colors in:
- `src/index.css` - CSS variables for colors, gradients, and shadows
- `tailwind.config.ts` - Tailwind color configuration

## ⚡ Performance

- Lighthouse Score: 90+ (desktop)
- Optimized images and lazy loading
- Code splitting with React Router
- Efficient animations with Framer Motion

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: himanshu.089kr@gmail.com
- **Phone**: +91-6206922498
- **Location**: Nawada, Bihar 805130

---

Built with ❤️ by Himanshu Kumar
