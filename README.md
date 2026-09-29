# 🌐 Automated Static Website with CI/CD

![Deploy Static Website](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=github-actions)
![Node.js](https://img.shields.io/badge/node-%3E%3D20.0.0-339933?logo=node.js)

A beginner-friendly demonstration of a **Continuous Integration (CI)** and **Continuous Deployment (CD)** pipeline built with standard web technologies and **GitHub Actions**.

Whenever changes are pushed to the `main` branch, GitHub Actions automatically executes automated static checks. If all tests pass, the site is deployed directly to **GitHub Pages**.

---

## 🚀 Features

* **Continuous Integration (CI):** Automated node-based testing suite that validates HTML structure and CSS links before publishing.
* **Continuous Deployment (CD):** Zero-downtime deployment directly to GitHub Pages upon passing tests.
* **Lightweight Setup:** Built using plain HTML, CSS, and vanilla JavaScript—no heavy framework required.

---

## 📂 Project Structure

```text
static-web-demo/
├── src/
│   ├── index.html       # Primary HTML web page
│   └── style.css        # Stylesheet
├── tests/
│   └── site.test.js     # Automated CI static test suite
├── .github/
│   └── workflows/
│       └── main.yml     # GitHub Actions CI/CD workflow config
├── package.json         # Node.js project metadata & test scripts
└── README.md            # Project documentation
```

---

## ⚙️ How the CI/CD Pipeline Works

```text
[ Developer Push ] 
       │
       ▼
[ GitHub Actions Runner ]
       │
       ├──► Stage 1: Continuous Integration (CI)
       │    ├── Checkout Repository Code
       │    ├── Setup Node.js Environment
       │    └── Execute `npm test` (File & Link Validation)
       │
       └──► Stage 2: Continuous Deployment (CD)
            ├── Triggered ONLY if Stage 1 Passes ✅
            ├── Package /src directory
            └── Publish Live to GitHub Pages
```

---

## 🛠️ Local Development & Testing

You can run and test this project locally on your machine before pushing changes to GitHub.

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/static-web-demo.git
cd static-web-demo
```

### 2. Run Automated Tests
Execute the local test suite using Node.js:
```bash
npm test
```

**Expected Output:**
```text
🔍 Running CI test suite...
[PASSED] All static tab content checks passed successfully!
```

---

## 📋 Setup & Deployment Guide

To host your own version of this automated website on GitHub:

1. **Fork or Push** this repository to your GitHub account.
2. Go to your repository's **Settings** tab on GitHub.
3. Select **Pages** from the left sidebar.
4. Under **Build and deployment > Source**, choose **GitHub Actions**.
5. Push a new commit to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: trigger pipeline"
   git push origin main
   ```
6. Navigate to the **Actions** tab on GitHub to monitor the pipeline execution in real time!

---

## 📄 License

This repository does not include a `LICENSE` file. Check with the source project maintainer before redistributing it.
