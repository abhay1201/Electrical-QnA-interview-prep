# Electrical Engineering Q&A System

A modern, interactive web application for electrical engineering interview preparation and knowledge sharing. Built with React and Vite, featuring a comprehensive database of Q&A pairs across various electrical engineering topics.

![Electrical Q&A](https://img.shields.io/badge/React-18.2.4-blue) ![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Interactive Q&A Interface**: Expandable question cards with detailed answers
- **Advanced Search**: Real-time search through all questions and answers
- **Topic Filtering**: Browse questions by electrical engineering topics
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern dark UI for comfortable reading
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Live Demo

[View Live Application](https://abhay1201.github.io/Electrical-QnA-interview-prep/)

## 📋 Topics Covered

- Basic Electrical Concepts
- Circuit Analysis
- Power Systems
- Electronics
- Control Systems
- Electrical Machines
- Power Electronics
- And more...

## 🛠️ Tech Stack

- **Frontend**: React 18.2.4
- **Build Tool**: Vite 8.0.1
- **Styling**: Inline CSS with CSS-in-JS approach
- **Deployment**: GitHub Pages with GitHub Actions
- **Linting**: ESLint with React rules

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abhay1201/Electrical-QnA-interview-prep.git
   cd Electrical-QnA-interview-prep
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Initial Setup:

1. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `Electrical-QnA-interview-prep`
   - Make it public or private
   - **Do not** initialize with README, .gitignore, or license

2. **Push Code to GitHub**

   ```bash
   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit changes
   git commit -m "Initial commit: Electrical Q&A React app"

   # Add remote origin
   git remote add origin https://github.com/abhay1201/Electrical-QnA-interview-prep.git

   # Rename branch to main
   git branch -M main

   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **"GitHub Actions"**
   - Click **Save**

4. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy your app
   - Your app will be available at: `https://abhay1201.github.io/Electrical-QnA-interview-prep/`
   - Future pushes to the `main` branch will trigger automatic redeployment

### Manual Deployment

If you prefer manual deployment:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to any static hosting service**
   - Upload the `dist/` folder contents to your hosting provider
   - For GitHub Pages manual method, you can use `gh-pages` package:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📁 Project Structure

```
electrical-qa/
├── public/
│   └── vite.svg
├── src/
│   ├── components.jsx    # Reusable UI components
│   ├── data.js          # Q&A database and utility functions
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Adding New Q&A Content

To add new questions and answers:

1. Open `src/data.js`
2. Add new entries to the `qaDatabase` array
3. Follow the existing format:
   ```javascript
   {
     question: "Your question here?",
     answer: "Your detailed answer here.",
     topic: "Topic Name"
   }
   ```
4. Update `allTopics` and `topicCounts` if adding a new topic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Icons and styling inspired by modern web design principles

## 📞 Contact

- **Author**: Abhay
- **GitHub**: [@abhay1201](https://github.com/abhay1201)
- **Project Link**: [https://github.com/abhay1201/Electrical-QnA-interview-prep](https://github.com/abhay1201/Electrical-QnA-interview-prep)

---

⭐ If you find this project helpful, please give it a star!
