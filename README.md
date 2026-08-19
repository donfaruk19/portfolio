# Abdullahi Umar Faruk | Portfolio

A modern, responsive portfolio website showcasing security expertise, technical skills, and innovative projects.

## 🎯 Features

- **Modern Design** - Clean, professional aesthetic with dark theme and neon green accents
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Hero Section** - Eye-catching introduction with compelling call-to-action
- **About Me** - Professional background with key statistics and highlights
- **Skills & Expertise** - Organized skill categories with detailed listings
- **Experience Timeline** - Visual representation of career milestones and achievements
- **Featured Projects** - Showcase of 6 major projects with descriptions and technology tags
- **All Repositories** - Complete listing of 12+ GitHub repositories with filtering by language
- **Certificates Gallery** - Professional certifications and achievements with category filtering
- **Skills Endorsements** - Visual skill endorsements with progress bars
- **Contact Methods** - Multiple ways to get in touch (Email, LinkedIn, GitHub)
- **Contact Form** - Direct message form for inquiries
- **Smooth Animations** - Elegant transitions and scroll-triggered animations
- **Accessibility** - Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Grid, and Flexbox
- **JavaScript (Vanilla)** - Dynamic filtering, smooth scrolling, and animations
- **Font Awesome** - Icon library (6.4.0)

## 📁 Project Structure

```
portfolio/
├── index.html           # Main portfolio page
├── certificates.html    # Certificates & achievements gallery
├── style.css            # Main stylesheet
├── script.js            # Main page JavaScript
├── certificates.js      # Certificates page JavaScript
└── README.md            # This file
```

## 🎨 Design System

### Color Scheme
- **Background Dark**: `#0a0a0a` - Main background
- **Background Secondary**: `#121212` - Section backgrounds
- **Card Background**: `#161616` - Card and component backgrounds
- **Text Main**: `#e0e0e0` - Primary text color
- **Text Secondary**: `#b0b0b0` - Secondary text color
- **Accent Color**: `#00ff41` - Hacker green (primary accent)
- **Accent Light**: `#33ff66` - Lighter green (highlights)
- **Border Color**: `#2a2a2a` - Border and divider color

### Typography
- **Font Family**: Segoe UI, JetBrains Mono, Courier New, monospace
- **Line Height**: 1.6 for body text
- **Headings**: Bold weight (700) with consistent hierarchy

## 📄 Pages

### 1. **index.html** - Main Portfolio
- Navigation with smooth scrolling
- Hero section with introduction
- About section with personal information
- Skills section (Security, Technical, AI/ML, Professional)
- Experience timeline
- Featured projects (6 showcase projects)
- All repositories section with language filtering
- Contact section with form
- Footer with social links

### 2. **certificates.html** - Certificates Gallery
- Hero section for certifications page
- Professional certifications with filtering (Security, Development, Data, Management)
- Awards and achievements showcase
- Skills endorsements with visual progress bars
- Same navigation and footer as main page

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. No build process required - open `index.html` in your web browser
3. Customize the content with your information

### Customization

#### Update Personal Information
Edit these fields in `index.html`:
- Name and titles (lines 15-16)
- About section content (lines 77-89)
- Contact email and social links (lines 295-309)

#### Update for Certificates Page
Edit these fields in `certificates.html`:
- Certificate details in `.cert-card` sections
- Achievement descriptions
- Skills endorsement percentages

#### Change Color Scheme
Modify CSS variables in `style.css`:
```css
:root {
    --accent: #your-color;
    --accent-light: #your-light-color;
    /* Update other colors as needed */
}
```

#### Add Project Links
Update project card links in the Projects section (around line 193-268 in index.html):
```html
<a href="your-project-link" target="_blank" class="project-link">
    View Project <i class="fas fa-arrow-right"></i>
</a>
```

#### Add Repository Links
Repository links are automatically populated from the `repositories` array in `script.js`. Update the array with your actual repositories.

#### Add Certificate Links
Update the certificate links in `certificates.html` by modifying the `href` attribute in the `.cert-link` elements.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

All sections adapt fluidly to different screen sizes with optimized layouts.

## ✨ Key Features Explained

### 1. **Smooth Navigation**
- Sticky navbar that stays at the top while scrolling
- Smooth scroll animations when clicking navigation links
- Active state indicators for current section

### 2. **Repository Filtering**
- Filter repositories by programming language (Python, JavaScript, TypeScript, HTML)
- "All" filter to show complete repository list
- Dynamic rendering with repository cards showing:
  - Repository name with GitHub link
  - Description
  - Programming language
  - Star count
  - External link to repository

### 3. **Certificate Filtering**
- Filter certificates by category (Security, Development, Data, Management)
- Beautiful certificate cards with:
  - Visual placeholder image
  - Certificate name and issuing organization
  - Issue date
  - Detailed description
  - Relevant skills/tags
  - Link to view full certificate

### 4. **Contact Form**
- Interactive contact form with validation
- Fields: Name, Email, Subject, Message
- Form submission handling with user feedback
- Responsive design for all devices

### 5. **Animations & Effects**
- Fade-in animations on page load
- Scroll-triggered section animations
- Hover effects on cards and buttons
- Smooth transitions throughout
- Endorsement bar animations

### 6. **Skill Endorsements**
- Visual progress bars for skill endorsements
- Shows endorsement count
- Animated fill on scroll
- Color-coded with accent color

## 🔧 JavaScript Functionality

### script.js (Main Page)
- Repository data array with 12+ repositories
- Repository filtering and rendering
- Smooth scrolling for navigation
- Intersection observer for animations
- Contact form handling
- Navbar scroll effects

### certificates.js (Certificates Page)
- Certificate filtering by category
- Smooth filter transitions
- Endorsement bar animations
- Navigation and scroll effects
- Active link highlighting

## 📊 Repository Management

Add or remove repositories by editing the `repositories` array in `script.js`:

```javascript
{
    name: 'project-name',
    description: 'Project description',
    language: 'Python',
    url: 'https://github.com/username/project',
    stars: 5
}
```

## 🎓 Certificate Management

Update certificates in `certificates.html` by editing the `.cert-card` divs:
- Change certificate name, issuer, and date
- Update description and skills
- Modify category with `data-cert-category` attribute

## 📈 Performance Optimizations

- Minimal dependencies (only Font Awesome for icons)
- CSS Grid and Flexbox for efficient layouts
- CSS variables for easy theming
- Smooth animations with hardware acceleration
- Lazy loading considerations for images

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA-friendly navigation
- Keyboard navigation support
- Color contrast compliance
- Readable font sizes
- Descriptive link text

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This portfolio is licensed under the Creative Commons Zero v1.0 Universal License.

## 📞 Support & Customization

For questions about customizing this portfolio:
1. Check the inline comments in the code
2. Review the CSS variables for styling
3. Modify the JavaScript arrays for content management
4. Update HTML sections for structure changes

## 🔗 Links

- **Live Demo**: https://donfaruk19.github.io/portfolio/
- **GitHub Repository**: https://github.com/donfaruk19/portfolio
- **Author**: Abdullahi Umar Faruk

---

**Last Updated**: August 2026

**Version**: 2.0 - Major Redesign
- Complete UI overhaul with modern design
- Added repositories section with filtering
- Added certificates and achievements gallery
- Enhanced contact section with form
- Improved animations and transitions
- Full mobile responsiveness
