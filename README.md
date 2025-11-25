# A-Yacht-For-Hampton 🥚⚓

Welcome aboard! This is the official landing page for Hampton's luxury yacht - a distinguished gentleman with an egg for a head who has dedicated his life to the art of luxury sailing. *Don't worry, we're not yolking around here!*

## Overview

Experience the most *eggsciting* maritime adventure on the web! This landing page features Hampton, a unique character with an egg-shaped head, sailing his magnificent yacht across animated ocean waters. But beware - even the smoothest sailing can hit rough waters, and Hampton's egg might just crack under pressure!

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS animations
- **React**: 18.x with Hooks

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lukeabela38/A-Yacht-For-Hampton.git

# Navigate to project directory
cd A-Yacht-For-Hampton

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Working Features ✨

- **Animated Yacht & Hampton Character**: Beautifully crafted CSS animations showing Hampton sailing his yacht with smooth floating motions
- **Thunderstorm Animation**: Click "Weather the Storm" to witness a dramatic thunderstorm sequence with:
  - Dark storm clouds rolling in
  - Animated rain effects
  - Lightning flashes with sound effects
  - Rough storm waves
  - Violent yacht rocking
  - **Egg Cracking Animation**: Watch as Hampton's egg head progressively cracks and breaks apart during the storm!
- **Sign-up Counter**: A live counter pane showing continuously increasing sign-ups (fake numbers, but *eggcellent* for social proof!)
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation**: Elegant navigation with smooth scroll effects
- **Contact Form**: Functional contact form for booking voyages with Hampton
- **Ocean Background**: Animated ocean waves creating a realistic maritime atmosphere
- **Feature Cards**: Interactive feature cards with hover effects and scroll-triggered animations
- **Easter Eggs**: Click on Hampton's egg head for a surprise spin animation!

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and animations
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main page component
└── components/
    ├── About.tsx           # About section
    ├── Contact.tsx         # Contact form
    ├── Features.tsx        # Features grid with scroll animations
    ├── Footer.tsx          # Footer component
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero section with buttons
    ├── OceanBackground.tsx # Animated ocean background
    ├── SignupCounter.tsx   # Live counter pane
    ├── ThunderstormOverlay.tsx # Storm effects
    └── Yacht.tsx           # Yacht with Hampton character
```

## Known Bugs 🐛

- **Egg Cracking State**: Once Hampton's egg cracks during the thunderstorm, it doesn't automatically reset. Refresh the page to see the intact egg again. *We're working on a shell-repair feature!*
- **Thunder Sound on Mobile**: Web Audio API thunder effects may not work on all mobile browsers due to autoplay restrictions
- **Rain Performance**: On older devices, the 200+ rain drops might cause slight performance issues. *It's raining cats and dogs, but mostly code!*
- **Counter Overflow**: The sign-up counter doesn't have a maximum limit - it will keep counting indefinitely. *We're not scrambling to fix this one!*

## Changelog 📝

### v2.0.0 - Next.js Migration (2024)
- **Major Refactor**: Migrated from static HTML/CSS/JS to Next.js 14
- Converted to TypeScript for type safety
- Implemented React components with hooks
- Added Tailwind CSS for styling
- Improved code organization and maintainability
- Enhanced animations with CSS and React state management

### v1.0.0 - Initial Release (2024)
- **Initial Release**: *An Eggsciting Release!*
  - Created landing page with animated yacht and Hampton character
  - Implemented thunderstorm animation feature
  - Added egg cracking animation sequence
  - Integrated sign-up counter with continuous incrementing
  - Added responsive design for all screen sizes
  - Implemented smooth scrolling navigation
  - Created contact form for voyage bookings
  - Added ocean wave animations
  - Included feature cards with hover effects
  - Added easter egg interactions (click the egg head!)

## Contributing

Want to help improve Hampton's voyage? Feel free to submit issues or pull requests! Just remember: *Don't put all your eggs in one basket* - test thoroughly before submitting.

## License

This project is open source. Feel free to use it, but please give credit where credit is due. *After all, we're not trying to egg you on!*

## Fun Facts

- Hampton's egg head is perfectly balanced for optimal sailing aerodynamics
- The thunderstorm animation was inspired by real maritime adventures (and a few broken eggs)
- The sign-up counter uses advanced algorithms to generate *eggstraordinary* numbers
- Every click on Hampton's egg head sends positive vibes to the universe (probably)

---

*"Smooth sailing is just a state of mind... until your egg cracks!"* - Hampton, probably

**Note**: No eggs were harmed in the making of this landing page. However, Hampton's egg has been through quite a lot during development. 🥚💔
