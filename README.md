# 🛡️ Digital Engineering Workspace — Muhammed Aslah K

Welcome to my corner of the internet. This started as a portfolio because, apparently, every student needs one. Somewhere along the way, though, it turned into something more useful to me — a place to keep my projects, experiments, notes, and whatever cybersecurity rabbit hole I'm currently stuck in.
It’s part portfolio, part workspace, and occasionally a place where I put things before I forget them.

**Live Deployment:** [https://portfolio-smoky-five-55.vercel.app/](https://portfolio-smoky-five-55.vercel.app/)

---

## 📖 The Story Behind This Space

Honestly, it started because I kept hearing the same advice as a student:
**"You should have a portfolio."**
So... I made one.
At first, it was just the usual stuff — projects, skills, certifications, resume, and all the things you're apparently supposed to put on a portfolio when you're trying to stand out.
But after a while, I started feeling that something was missing. It showed what I had done, but not the journey behind it — the questions, mistakes, failed experiments, random ideas, and those moments when something finally works after hours of wondering what went wrong.
So I thought, why not make it more than just a portfolio?
I wanted a place where I could keep my work, write down what I'm learning, document my cybersecurity journey, and simply put my thoughts somewhere instead of letting them disappear from my head.
Something I can come back to years later and see where I started, how I changed, and hopefully how far I've come.
Maybe it will also be useful to someone else along the way.
Sometimes it starts with:
**"Apparently I need a portfolio."**
And then, somehow, it becomes something much bigger.
That is how this project started.
And that's why I decided to build it this way.

## 🧭 What You'll Actually Find Here

A traditional portfolio only shows the final result. It never shows the questions asked, the mistakes made, or the moments where something finally clicked after hours of debugging. Those moments are a huge part of learning, and honestly, they're often the most interesting part. 

So instead of a static resume, think of this as my engineering notebook. Here is what is inside:

- 🧠 **Projects & Scripts:** This is where I stash my cybersecurity lab experiments, major security implementations, and custom PowerShell/Python automation tools so I don't lose them.
- 📓 **The Learning Journal:** I write to slow down. If I can explain an idea clearly, I understand it. Here, I write about Blue Teaming, SOC Operations, Threat Hunting, Windows Internals, Digital Forensics, and the random questions that send me down rabbit holes.
- 🌱 **A Living Record:** I'm still at the beginning of my cybersecurity journey. Some entries will end with clear conclusions; others will leave me with more questions than I started with. This workspace will grow, evolve, and change with me. 

I'd rather document the process honestly than only publish polished success stories.

---

## 🛠 Tech Stack

### Frontend Core
- React 18
- Vite (Single Page Application)
- React Router

### Content & Styling
- MDX 
- Tailwind CSS 
- Framer Motion 

### Deployment & Infrastructure
- Vercel 
- GitHub 

---

## 📁 Project Structure

```text
📦 digital-engineering-workspace
┣ 📂 content                  # lab logs & write-ups
┃ ┣ 📂 projects               
┃ ┣ 📂 journal                
┃ ┗ 📂 scripts                
┣ 📂 public                   
┃ ┣ profile.jpg               
┃ ┣ resume.pdf                
┃ ┗ og-default.jpg            
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ SEO.jsx                 
┃ ┃ ┣ EngineeringDock.jsx     
┃ ┃ ┗ layout/Layout.jsx       # Core wrapper & navigation
┃ ┣ App.jsx                   # Router 
┃ ┣ Portfolio.jsx             
┃ ┗ main.jsx                  # React DOM entry point
┣ vercel.json                 # SPA routing configuration
┣ tailwind.config.cjs         
┣ index.html                  
┗ package.json
```

---

## 🚀 Local Development

To run this workspace locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ASLAH-K/portfolio.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

---
*© 2026 Muhammed Aslah K. Digital Engineering Workspace.*
