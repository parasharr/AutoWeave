# AutoWeave

AutoWeave is a modern, high-performance automation platform frontend built with Next.js 16 and Tailwind CSS v4. It features a sleek, dark-moded generic aesthetic with advanced scroll animations and parallax effects.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Themes:** [Next Themes](https://github.com/pacocoursey/next-themes)
- **UI Components:** heavily customized generic components (Container Scroll, Infinite Moving Cards, Hero Parallax).

## ✨ Features

- **Modern Landing Page:** Features a hero section with a 3D container scroll animation.
- **Scroll Effects:** Smooth parallax scrolling and infinite moving element cards.
- **Responsive Design:** Fully optimized for mobile and desktop viewports.
- **Dark Mode Default:** Immersive dark theme using refined neutral palettes.
- **Performance:** Powered by Turbopack for instant development feedback.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/yourusername/autoweave.git
    cd autoweave
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3.  Set up environment variables:
    Create a `.env.local` file in the root directory and add your keys (e.g., Clerk keys):

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
    CLERK_SECRET_KEY=your_secret_key
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app`: App Router pages and layouts.
- `src/components/global`: Custom global components (Navbar, animations).
- `src/lib`: Utility functions and constants.
- `public`: Static assets (images, icons).

## 🎨 Customizing

This project uses Tailwind CSS v4, which handles configuration directly in CSS.
Check `src/app/globals.css` to modify:

- Theme variables (colors, spacing).
- Custom keyframes and animations.
- Utility extensions.

## 📄 License

[MIT](LICENSE)
