# Travel-Site 🌍

A modern, responsive travel agency website built to showcase tours, destinations, and user reviews. The site features a clean design, interactive elements, and a user-friendly interface to help users plan their next adventure.

![Travel-Site Screenshot](https://via.placeholder.com/800x400.png?text=Travel+Site+Screenshot)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
Travel-Site is a front-end web application designed for a fictional travel agency, "Wonder Tour." It provides information about travel destinations, tour packages, and allows users to leave reviews. The site is fully responsive and includes animations for a polished user experience.

## Features
- **Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices.
- **Interactive User Reviews**: Users can submit reviews with a name and text, displayed dynamically on the page.
- **Modern UI/UX**: Clean layout with smooth transitions and hover effects.
- **Navigation**: Fixed header with links to Home, About, Tours, Gallery, Blog, and Contact pages.
- **Footer with Quick Links**: Includes contact info, popular news, and social media icons.
- **Animations**: Fade-in, slide-in, and zoom-in effects for visual appeal.

## Technologies
- **HTML5**: Semantic markup for structure.
- **CSS3**: Custom styles with Flexbox, Grid, and media queries for responsiveness.
- **JavaScript**: Dynamic functionality, including user review submission.
- **Fonts**:
  - Open Sans (via local import)
  - Roboto Mono (via Google Fonts for footer)
- **External Libraries**:
  - Font Awesome (for icons in footer contact section)
- **Tools**:
  - Visual Studio Code
  - Git & GitHub for version control

## Installation
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/travel-site.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd travel-site
   ```

3. **Open the project**:
   - Open `index.html` in a web browser directly, or
   - Use a local server (recommended for proper asset loading):
     ```bash
     npx live-server
     ```
     Install `live-server` globally if not already installed:
     ```bash
     npm install -g live-server
     ```

4. **Ensure internet access**:
   - The site uses Google Fonts and Font Awesome, requiring an internet connection.

## Usage
- **Browsing**: Navigate through sections like Home, About, Our Tours, and User Reviews using the fixed header.
- **Adding Reviews**:
  - Fill in the name and review text fields in the "Add User Review" section.
  - Click the "Submit" button to add a review, which appears dynamically in the reviews section.
- **Responsive Testing**: Resize the browser or use developer tools to test responsiveness on different screen sizes.
- **Animations**: Scroll through the page to trigger fade-in and slide-in animations on various elements.

## Project Structure
```plaintext
travel-site/
├── images/                   # Static assets (e.g., cave.jpg, team images)
├── index.html                # Main page with tours, reviews, and footer
├── about.html                # Placeholder for About page
├── style.css                 # Global styles, animations, and responsive design
├── prev.txt                  # JavaScript code for user reviews functionality
├── README.md                 # Project documentation
```

### Key Files
- **`index.html`**: Contains the main content, including the hero section, tours, user reviews, and footer.
- **`style.css`**: Defines styles for layout, typography, animations, and responsiveness.
- **`prev.txt`**: Includes JavaScript for handling user review submissions (to be integrated into a `.js` file).

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request on GitHub.

Please ensure your code follows the existing style and includes appropriate comments.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

✨ **Happy Traveling!** ✨
