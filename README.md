# Walter Ruganzu - Portfolio Website

A modern, high-performance portfolio website built with React, featuring stunning 3D animations, smooth transitions, and a cloud-native architecture.

## 🚀 Features

- **3D Hero Section**: Interactive 3D sphere using React Three Fiber
- **Smooth Animations**: Powered by Framer Motion and React Spring
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Modern Tech Stack**: React 18+, Vite, Three.js
- **Serverless Contact Form**: Ready for deployment with Vercel/Netlify/AWS Lambda
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Spring** - Physics-based animations
- **React Three Fiber** - 3D graphics with Three.js
- **React Intersection Observer** - Scroll-triggered animations

### Backend (Serverless)
- **Vercel Functions** / **Netlify Functions** / **AWS Lambda**
- Contact form handler with email integration

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/walterruganzu/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Manual Deployment

Build the project and upload the `dist` folder to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage

## 📧 Contact Form Setup

The contact form requires a serverless function to handle submissions. The example function is located at `api/contact.js`.

### Option 1: SendGrid (Recommended)

1. Sign up for [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Add environment variable:
```bash
SENDGRID_API_KEY=your_api_key_here
```

4. Install SendGrid:
```bash
npm install @sendgrid/mail
```

5. Uncomment the SendGrid code in `api/contact.js`

### Option 2: AWS SES

1. Set up AWS SES
2. Configure AWS credentials
3. Install AWS SDK:
```bash
npm install @aws-sdk/client-ses
```

### Option 3: Resend

1. Sign up for [Resend](https://resend.com/)
2. Get your API key
3. Install Resend:
```bash
npm install resend
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.jsx** - Name, title, description
2. **src/components/Expertise.jsx** - Skills and certifications
3. **src/components/Projects.jsx** - Your projects
4. **src/components/Journey.jsx** - Professional timeline
5. **src/components/Contact.jsx** - Contact information and social links
6. **src/components/Footer.jsx** - Footer links and information

### Colors and Styling

Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Animations

Adjust animation settings in:
- `src/index.css` - Global animations
- Individual component files - Component-specific animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimization

The portfolio is optimized for performance:

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Assets**: Compressed images and minified code
- **Efficient Animations**: GPU-accelerated animations
- **Lighthouse Score**: 90+ on all metrics

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
portfolio/
├── api/                    # Serverless functions
│   └── contact.js         # Contact form handler
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Loader.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Expertise.jsx
│   │   ├── Projects.jsx
│   │   ├── Journey.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## 🐛 Troubleshooting

### 3D Scene Not Rendering

If the 3D sphere in the hero section doesn't render:
1. Check browser WebGL support
2. Update graphics drivers
3. Try a different browser

### Animations Not Working

1. Clear browser cache
2. Check for JavaScript errors in console
3. Ensure all dependencies are installed

### Contact Form Not Working

1. Verify serverless function is deployed
2. Check environment variables
3. Review function logs for errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Walter Ruganzu**
- Full-Stack Developer & Cloud Specialist
- 5+ Years Experience
- AWS Certified Cloud Practitioner

### Connect
- GitHub: [@walterruganzu](https://github.com/walterruganzu)
- LinkedIn: [Walter Ruganzu](https://linkedin.com/in/walterruganzu)
- Email: walter.ruganzu@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons and images from Unsplash
- Animation libraries: Framer Motion, React Spring
- 3D graphics: Three.js, React Three Fiber

---

Built with ❤️ by Walter Ruganzu
