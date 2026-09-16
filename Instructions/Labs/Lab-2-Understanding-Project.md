# Exercise 2 - Exploring the Codebase with Devin

#### Duration: 30 minutes

## 🎯 Learning Objectives

By the end of this exercise, you will:
- Use Devin to understand unfamiliar codebases
- Learn how to efficiently navigate and analyze project structure with AI assistance
- Understand how to identify build processes, testing frameworks, and dependencies
- Develop strategies for onboarding to new projects using Devin

## 🍎 Scenario: Your First Day at The Daily Harvest

Welcome to your first day as a developer at The Daily Harvest! Your manager has just given you access to the e-commerce repository, but like any new team member, you need to understand:
- What does this application actually do?
- How is the code organized and structured?
- What technologies and frameworks are being used?
- How do I build, run, and test the application?

As a modern developer, you'll leverage Devin to accelerate your onboarding process and get productive quickly.

## 🤖 Introduction to Devin

Devin is an AI-powered command-line assistant that helps you understand code, generate implementations, and solve development challenges. Unlike traditional IDE-based AI assistants, Devin operates as an autonomous agent that can read files, search codebases, execute commands, and make targeted edits based on your requests.

### Devin CLI Modes

Devin CLI has **5 built-in permission modes** and **3 agent-modes** that control how Devin interacts with your system:

#### Permission Modes

**Normal** (Default)
- Auto-approves read-only tools within the current directory
- Asks for permission for write/execute operations
- Use: `/normal` or `/mode normal`

**Accept Edits**
- Auto-approves file edits within the workspace
- Still prompts for other operations like shell commands

**Smart**
- Auto-approves file edits like Accept Edits
- Uses a fast model to decide if other actions are safe to run without asking
- Still prompts for anything not clearly safe
- High-risk categories (package installs, git mutations, rm, sudo, destructive cloud operations, sensitive files) always prompt
- Use: `/smart` or `/mode smart`
- Can also start in smart mode: `devin --permission-mode smart`

**Bypass**
- Auto-approves all operations including shell commands
- Unrestricted file writes and network access
- Use when you trust the agent with your whole machine
- Use: `/bypass` or `/mode bypass`

**Autonomous**
- Requires `--sandbox` (only available in sandbox sessions)
- Auto-approves shell commands, but contained by the sandbox
- File writes still prompt (granting a scope expands the sandbox)
- Network access filtered by sandbox domain allow/deny lists
- Ideal for unattended execution with OS-enforced limits
- Use: `/autonomous` or `/mode autonomous`

#### Agent Modes

**Normal** (Default)
- Full access to all tools for comprehensive development tasks

**Plan**
- Read-only mode for exploration and planning
- Use: `/plan` or `/mode plan`
- Perfect for understanding code without making changes

**Ask**
- Question-answering mode focused on explanations
- Use: `/ask` or `/mode ask`
- Ideal for learning and clarification

### How Devin Works:
- **Command-line interface**: Interact with Devin through natural language prompts in your terminal
- **Autonomous operation**: Devin can perform multiple steps to accomplish your requests
- **Context awareness**: Devin maintains awareness of your project structure and dependencies
- **Multi-modal capabilities**: Devin can read files, search code, run commands, and edit code
- **Flexible permissions**: Choose the right mode for your safety and workflow needs

For exploring an unfamiliar codebase, Devin is ideal because it allows you to:
- Query specific files or code patterns without making changes (use `/plan` mode)
- Get high-level explanations of project structure and purpose
- Understand dependencies, build processes, and testing strategies
- Ask follow-up questions to deepen your understanding

## 🔍 Step 1: Understanding the Project Purpose

Let's start by getting a high-level understanding of what this application does.

### Instructions:
1. Open your terminal in the project directory
2. Ask Devin some questions to help you understand the application as it is currently working.

If you get stuck, try using these sample prompts to explore the project:

<details>
  <summary>Sample Prompts</summary>

  ```
  What is the main purpose of this application? What does it do?
  ```

  ```
  Can you give me a high-level overview of this project's features and functionality?
  ```

  ```
  What type of application is this? Is it a web app, API, desktop app, or something else?
  ```

</details>

### 💡 What to Expect from Devin

When you ask these questions, Devin will analyze your workspace and provide insights such as:
- **Application Type**: Whether it's an e-commerce site, API, web application, etc.
- **Core Features**: Key functionality like user authentication, product catalogs, payment processing
- **Technology Stack**: Programming languages, frameworks, and architectural patterns in use
- **Business Domain**: The industry or use case the application serves

Devin's responses will be based on analyzing your codebase structure, configuration files, dependencies, and code patterns. The more specific your questions, the more targeted and useful the responses will be.

## 🏗️ Step 2: Analyzing Project Structure

Now let's understand how the code is organized and what the folder structure tells us.

### Instructions:
Ask Devin some questions to help you understand the organization of the codebase. If you get stuck, try using these sample prompts to explore the project:

<details>
  <summary>Sample Prompts</summary>

  ```
  How is this project structured? Can you explain the main folders and their purposes?
  ```

  ```
  What are the most important files I should understand as a new developer on this project?
  ```

  ```
  Are there any configuration files I should be aware of? What do they control?
  ```

</details>

### 💡 What to Expect from Devin

When you ask these questions, Devin will analyze the files and folders in your workspace and provide a structural breakdown, including:
- **Folder Roles**: Explanations of what code lives in main directories like `src/`, `tests/`, `public/`, or `components/`.
- **Key Files**: Identification of critical files such as `package.json`, `README.md`, or main entry points (e.g., `index.js`, `main.py`).
- **Architectural Patterns**: Insights into how the project is organized (e.g., MVC, layered architecture, microservices).
- **Configuration Details**: Information about configuration files like environment variables (`.env`), build configuration (e.g., `webpack.config.js`), or database connection settings.

Devin's response helps new developers quickly orient themselves by providing a map of the codebase organization.

## 💻 Step 3: Identifying Technologies and Frameworks

Understanding the tech stack is crucial for knowing what skills you'll need and how to work effectively.

### Instructions:
Ask Devin some questions to help you understand the technologies and frameworks used within the codebase.

If you get stuck, try using these sample prompts to explore the project

<details>
  <summary>Sample Prompts</summary>

  ```
  What programming languages are used in this project?
  ```

  ```
  What frameworks and libraries does this project depend on? Can you explain what each major one does?
  ```

  ```
  What's the package.json/requirements.txt/build.gradle telling me about the dependencies?
  ```

</details>

If Devin mentions any technologies you're unfamiliar with, don't hesitate to ask follow-up questions! Remember, Devin isn't just for understanding your specific codebase—it's your **onboarding buddy**, **technical sounding board**, and **intelligent search engine** all rolled into one.

<details>
  <summary>Sample Follow-up Prompts</summary>

  ```
  Can you explain what [framework name] is and why it might be used in this type of project?
  ```

  ```
  What are the key benefits of using [library name] over other similar libraries?
  ```

  ```
  How does [technology name] work at a high level?
  ```
</details>

## 🔨 Step 4: Understanding the Build Process

Now let's figure out how to actually build and run this application.

### Instructions:

Ask Devin how to build your codebase. If you get stuck you can use the below sample prompts:

<details>
  <summary>Sample Prompts</summary>

  ```
  How do I build this project? What are the build commands?
  ```

  ```
  What do I need to install or set up before I can run this project locally?
  ```

  ```
  Are there any environment variables or configuration I need to set up?
  ```

  ```
  How do I start the development server or run the application?
  ```

</details>

### ⚙️ Try It Yourself:
1. Follow the build instructions Devin provided
2. Try to start the development server
3. If you encounter errors, ask Devin for help troubleshooting

<details>
  <summary>Hints</summary>

  You can build the project by [opening a terminal](https://code.visualstudio.com/docs/terminal/getting-started) in Visual Studio Code and running the following commands:

  ```
  cd eCommApp
  npm install
  npm run dev
  ```
</details>

Once you have the application running locally, you can explore its functionality in your web browser at `http://localhost:3000`. See how the website compares to the high-level description Devin provided earlier! You can test basic features like browsing products, adding items to the cart, and checking out.

## 🧪 Step 5: Understanding the Testing Strategy

Testing is crucial for maintaining code quality. Let's explore what testing frameworks and practices are in place.

### Instructions:

Ask Devin how the codebase is being tested. If you get stuck you can use the below sample prompts:

<details>
  <summary>Sample Prompts</summary>

  ```
  How do I run the tests for this project? What testing frameworks are being used?
  ```

  ```
  What types of tests exist in this codebase? (unit, integration, e2e, etc.)
  ```

  ```
  Can you analyze the test coverage? Are there areas that might need more testing?
  ```

  ```
  How are tests organized? Where should I put new tests?
  ```

</details>

### 📈 Extension: Test Coverage Deep Dive
**Advanced Prompts:**

```
Can you identify which files or functions have low or missing test coverage?
```

```
What would be good candidates for adding more tests to improve coverage?
```

## 🎁 Optional Task: Building a Better README

Now that you understand the project structure and setup process, let's use Devin to improve the project documentation for future developers.

### Instructions:
1. Use Devin to analyze the current README (if it exists) and suggest improvements. See the below sample prompts if you get stuck.
2. Create or enhance documentation based on your exploration.

<details>
  <summary>Sample Prompts</summary>

  ```
  Does this project have a README? If so, what's missing that would help new developers?
  ```

  ```
  Based on our conversation about this project, can you help me create a comprehensive "Quick Start Guide" for new developers? Include setup steps, key commands, and important files to know about.
  ```

  ```
  Can you suggest a better project description and feature list for the README based on the actual codebase?
  ```

</details>

### 💡 Pro Tips for README Enhancement:
- Include actual setup commands you've tested
- Add troubleshooting sections for common issues
- Document environment requirements and dependencies
- Include links to important files and folders
- Add examples of common development tasks

### 🔄 Iterative Improvement:
After Devin generates documentation, you can refine it:

```
Can you make this setup guide more beginner-friendly?
```

```
Add a troubleshooting section for common setup issues.
```

```
Include examples of how to run different types of tests.
```

## 💡 Tips and Tricks

### 🤝 Devin as Your Learning Partner

Think of Devin as having a knowledgeable senior developer sitting next to you who's always available to answer questions. You can ask about:

**Technology Fundamentals:**

```
What is React and why is it popular for web development?
```

```
Explain the difference between REST APIs and GraphQL.
```

```
What are the pros and cons of using TypeScript vs JavaScript?
```

**Best Practices & Patterns:**

```
What's the MVC pattern and how does it apply to web development?
```

```
When should I use async/await vs Promises in JavaScript?
```

```
What are some common security considerations for web applications?
```

**Troubleshooting & Problem Solving:**

```
I'm getting this error: [paste error message]. What does it mean and how can I fix it?
```

```
What's the difference between 500 and 404 HTTP status codes?
```

```
Why might my tests be failing intermittently?
```

### 💡 Pro Tips for Effective Learning with Devin

1. **Ask "Why" Questions**: Don't just ask what something does—ask why it's used

    ```
    Why would a team choose Redux over React's built-in state management?
    ```

2. **Request Comparisons**: Understanding alternatives helps you make better decisions

    ```
    Compare Docker vs virtual machines - when would I use each?
    ```

3. **Get Context**: Ask how technologies fit into the bigger picture

    ```
    How does JWT authentication work in a typical web application flow?
    ```

4. **Seek Examples**: Request practical demonstrations

    ```
    Can you show me a simple example of how middleware works in Express.js?
    ```

### 🔍 Making the Most of Your AI Learning Buddy

**Start Broad, Then Go Deep:**
- Begin with general concepts: "What is containerization?"
- Then get specific: "How do I write a good Dockerfile for a Node.js app?"

**Don't Be Afraid to Ask "Dumb" Questions:**
- "What's the difference between a library and a framework?"
- "Why do developers use version control?"
- "What does 'full-stack' actually mean?"

**Use It as a Sanity Check:**
- "Does this approach make sense for solving [problem]?"
- "Am I overthinking this, or is there a simpler way?"
- "What are the potential downsides of this solution?"

Remember: Every expert was once a beginner. Devin gives you a judgment-free space to ask questions, explore concepts, and build your understanding at your own pace!


## 🏆 Exercise Wrap-up

Congratulations! You've successfully used Devin to:
- ✅ Understand the purpose and functionality of an unfamiliar codebase
- ✅ Analyze project structure and organization
- ✅ Identify technologies, frameworks, and dependencies
- ✅ Learn how to build, run, and test the application

### Reflection Questions:
1. How did using Devin change your approach to exploring a new codebase compared to manual exploration?
2. What types of questions were most effective for getting useful information?
3. Were there any areas where Devin's explanations needed clarification or weren't accurate?
4. How does Devin's command-line approach compare to IDE-based AI assistants?

### Key Takeaways:
- Devin can dramatically accelerate codebase onboarding
- Starting with high-level questions and drilling down works well
- Always verify critical build/setup instructions by actually trying them
- Use follow-up questions to deepen understanding of unfamiliar technologies
- Devin's autonomous approach allows for multi-step analysis without constant guidance

## 🚀 Next Steps

In the next exercise, we'll use what we've learned about the codebase to start improving test coverage and implementing new features for The Daily Harvest's e-commerce platform!

#### You have successfully completed the lab. Click on **Next >>** to continue to the next lab.

![](../../media/next-page.png)
