# Inscribe Architects - Modern Architecture Website

A stunning, modern website redesign for Inscribe Architects built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Lightning Fast Performance**: Built with Next.js 14 for optimal performance
- **Modern Animations**: Smooth, eye-catching animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Interactive UI**: Engaging user interface with hover effects and transitions
- **Glass Morphism**: Modern glass-morphism design elements
- **3D Effects**: CSS 3D transforms for depth and engagement
- **Dark Theme**: Elegant dark theme with accent colors

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Optimization**: Next.js Image
- **Font**: Inter & Space Grotesk
- **Language**: JavaScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/inscribe-architects.git
cd inscribe-architects
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
inscribe-architects/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── home/             # Home page sections
│   ├── ui/               # Reusable UI components
│   └── common/           # Common components
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Design Features

### Animations
- Smooth page transitions
- Parallax scrolling effects
- Interactive hover animations
- Loading animations
- Scroll-triggered animations

### UI Components
- Glass morphism cards
- Gradient buttons
- Animated navigation
- Interactive portfolio grid
- Testimonial slider
- Contact form with validation

### Performance Optimizations
- Lazy loading images
- Code splitting
- Optimized fonts
- Minified CSS/JS
- Static generation where possible

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization

1. **Colors**: Edit the color palette in `tailwind.config.js`
2. **Fonts**: Update fonts in `app/layout.js`
3. **Content**: Modify content in `lib/constants.js`
4. **Animations**: Adjust animations in `lib/animations.js`

## 📱 Pages

- **Home**: Hero section, services, portfolio showcase, testimonials
- **About**: Company story, values, timeline, team
- **Services**: Detailed service offerings with features
- **Portfolio**: Filterable project gallery with modal views
- **Contact**: Contact form, information, and location

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License.

## 👥 Credits

- Design & Development: [Your Name]
- Original Client: Inscribe Architects
- Founded by: Shelly Kakkar

## 📞 Contact

For any queries regarding this project:
- Email: info@inscribearchitects.com
- Phone: +91-9814224971
- Address: Ludhiana, Punjab, India

---

Built with ❤️ using Next.js and Tailwind CSS