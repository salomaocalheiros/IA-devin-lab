# Exercise 1 - Lab Overview and Setup

#### Duration: 15 minutes

## Overall Lab Objectives

This 4-hour hands-on lab is designed to give developers practical experience using **Devin** as an AI-powered assistant throughout the Software Development Life Cycle (SDLC). You will explore how Devin can improve developer productivity, code quality, and security—from feature planning and prototyping to implementation, code review, and remediation.

Through a series of guided, real-world exercises, you will learn how to:
- Understand Devin's role across all phases of the SDLC
- Plan new features and define success criteria with Devin
- Use AI-powered code completions and editing via command line
- Leverage Devin's different modes (Normal and Plan) for different development tasks
- Delegate tasks to Devin subagents to multiply development impact
- Review code at scale using Devin's analysis capabilities
- Detect and fix security vulnerabilities using Devin
- Extend Devin's capabilities with Model Context Protocol (MCP) servers
- Optimize Devin performance using custom skills and configuration

## Welcome to The Daily Harvest

🍎 **Your Mission: Develop your daily pick of fresh code!**

Congratulations! You've just been hired as a software developer at **The Daily Harvest**, an exciting new startup that's revolutionizing the way fresh fruit is sold. Your company specializes in creating websites that allow orchards to sell their products to those who will never drive to a store.

### Your Role

As a new developer on the team, you'll be working on extending the functionality of the website and ensuring that it is well-tested. The company has recently adopted **Devin** as part of its development workflow, and you'll be learning how to leverage this AI-powered assistant to accelerate your productivity and code quality.

### The Challenge Ahead

Throughout this lab, you'll help The Daily Harvest tackle real development challenges:
- Understanding and navigating the existing codebase effectively
- Enhancing test coverage across critical application components
- Planning and implementing a robust shopping cart system for the e-commerce platform
- Maintaining high code quality standards across the development team
- Identifying and resolving security vulnerabilities

Your manager has emphasized that speed to market is crucial in the competitive fruit-selling space, but code quality and security cannot be compromised. This is where Devin becomes your secret weapon—helping you write better code faster while maintaining the high standards that fruit lovers expect from The Daily Harvest.

Let's get started and grow some ripe code together! 🍊

## Setting Up Your Development Environment

### Cloning the Repository

To get started with this hands-on lab, you'll need to clone the repository to your local machine.

1. Navigate to the **IA-devin-lab** repository in a web browser:

   ```
   https://github.com/salomaocalheiros/IA-devin-lab
   ```

2. Click the green **Use this template** button to create your own copy, or **Fork** the repository if you want to contribute.

3. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YOUR_USERNAME/IA-devin-lab.git
   cd IA-devin-lab
   ```

### Prerequisites

Before starting the lab, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Visual Studio Code** or your preferred code editor
- **Devin CLI** - Follow the installation instructions from the official Devin documentation

### Installing Dependencies

1. Navigate to the application directory:

   ```bash
   cd eCommApp
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Verify the installation by running the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Setting Up Devin

1. **Install Devin CLI**: Follow the official installation instructions for your operating system from the Devin documentation.

2. **Verify Installation**: Open your terminal and run:

   ```bash
   devin --help
   ```

   You should see the Devin CLI help output, confirming the installation was successful.

3. **Configure Devin**: If required, configure Devin with your API keys or authentication credentials following the official documentation.

4. **Test Devin**: Try a simple command to ensure Devin is working properly:

   ```bash
   devin "Hello, can you help me with coding?"
   ```

## Optional: IDE Integration

If you prefer using Devin within your IDE:
- **Visual Studio Code**: Install the Devin extension (if available) from the VS Code Marketplace
- **Other Editors**: Check the Devin documentation for available integrations

## Getting Help

If you encounter any issues during this lab:
- Check the [Devin documentation](https://devin.ai) for troubleshooting guides
- Review the project README for specific setup instructions
- Search for similar issues in the project's GitHub Issues section
- Consult the official documentation for React, TypeScript, and other technologies used

## Summary

In this lab, you successfully set up your development environment, cloned the repository, installed dependencies, and configured Devin for the hands-on exercises.

#### You have successfully completed the lab. Proceed to **Lab 2 - Understanding Project** to continue.
