# Exercise 7 - Customizing Devin

#### Duration: 30 minutes

## 🎯 Learning Objectives

By the end of this exercise, you will:

- Explain what Devin skills are and how they shape Devin's behavior
- Create custom skills for this project
- Use skills to guide Devin's behavior and responses
- Configure Devin settings for organizational workflows
- See how Devin can be tailored to specific development needs

## 🍎 Scenario: Limiting Redundancy in The Daily Harvest's workflows

By now, things are running pretty smoothly at The Daily Harvest. Your team is utilizing Devin to efficiently learn and develop new features and bug fixes, subagents have been utilized for routine fixes and additions to free up developers' hands for more complex work, and MCPs have been integrated to ensure the information your team _and_ Devin needs are always available. However, amidst the productivity, you've noticed an issue that, while small at first, has become more noticeable with the most glaring improvements taken care of...

It began when you asked Devin to spin up a new test suite for a customer support utility and you received tests written using the Jest framework when your company uses Vitest. You later received functionality from Devin that utilized the wrong version of an API for your payment processor.

You've begun to notice that every new context in which you utilize Devin—new terminal sessions, different subagent tasks, or using resources drawn from MCPs to create improved functionality—require you to regurgitate a copy-pasted list of do's and don'ts regarding style guides, package versions, and response formatting to ensure Devin provides an answer that is not just functional but also correct for your organizational standards. There has to be a better way to ensure Devin knows which rules to follow, and some diving into the internet leads you to a perfect solution: Devin skills.

## 📄 Introduction to Devin Skills

Devin Skills are customizable behavior packages that can be created and stored at different levels:

1. **Project-level skills**: Stored in `.devin/skills/` directory within a project
2. **User-level skills**: Stored in the user's Devin configuration directory
3. **Built-in skills**: Pre-configured skills provided by Devin

Skills allow you to define specific behaviors, patterns, and capabilities that Devin should follow when working on your projects. Using natural language, skills can:
- Define coding standards and conventions
- Specify preferred frameworks and libraries
- Set response formatting preferences
- Provide project-specific context and guidelines
- Grant additional tool permissions for specific tasks

### A Rudimentary Example

Imagine that you have created a very simple skill file at `.devin/skills/code-style/SKILL.md` that reads,

```md
When generating code for this project, always follow these conventions:
- Use TypeScript for all new files
- Follow the existing naming conventions in the codebase
- Include proper error handling
- Add comments for complex logic
```

What you will now see from Devin is code that consistently follows these conventions across all interactions.

## ⚙️ Step 1: Exploring Existing Skills

Before we create our own skills, let's explore what skills are already available in this project.

__Instructions:__

1. Check if there are any existing skills in the project:

   ```
   Are there any existing Devin skills configured for this project?
   ```

2. Ask Devin to list available skills:

   ```
   List all the available skills that I can use.
   ```

3. If there are built-in skills available, ask Devin to explain what they do:

   ```
   What does the [skill name] skill do? When should I use it?
   ```

## 📝 Step 2: Creating a Custom Skill

Now let's create a custom skill that will help Devin understand our project's specific requirements and conventions.

__Instructions:__

1. Ask Devin to help you create a custom skill for this project:

   ```
   Help me create a custom skill for The Daily Harvest project that defines:
   - The tech stack (React, TypeScript, Vite, Vitest)
   - Coding conventions and style guidelines
   - Testing requirements
   - Any project-specific rules or preferences
   ```

2. Devin will help you create a skill file in the `.devin/skills/` directory. The skill file should be named appropriately (e.g., `project-conventions/SKILL.md`).

3. Review the generated skill file. Are there any results you think are out of place? Are there any guidelines that you might not have previously considered for this kind of project?

4. If needed, ask Devin to refine the skill:

   ```
   Can you update the skill to include additional guidelines about [specific topic]?
   ```

## 💭 Step 3: Using the Custom Skill

Now that we have a custom skill ready to guide Devin to greatness, let's use it to plan and implement a feature.

__Instructions:__

1. Ask Devin to use the custom skill you created:

   ```
   Use the project-conventions skill to help me plan a new feature for adding user reviews to products.
   ```

2. Observe how Devin's response follows the guidelines established in your skill file.

3. Ask Devin to implement the feature using the skill:

   ```
   Using the project-conventions skill, implement the user reviews feature according to the plan.
   ```

4. Review the implementation to ensure it follows the conventions defined in your skill.

## 💪 Extra Credit: Advanced Skill Customization

### Tool Permissions

Skills can also grant additional tool permissions to Devin for specific tasks. This allows you to create specialized skills that have access to tools that Devin might not use by default.

__Instructions:__

1. Ask Devin about tool permissions in skills:

   ```
   How can I configure tool permissions in a custom skill?
   ```

2. Create a specialized skill that grants specific tool permissions for a particular task. For example, a skill for database operations:

   ```
   Create a skill called database-operations that grants permission to use database-related tools and provides guidelines for safe database operations.
   ```

### Skill Invocation Patterns

Skills can be invoked in different ways depending on your needs:

- **Automatic invocation**: Skills can be configured to automatically invoke based on context
- **Manual invocation**: You can explicitly ask Devin to use a specific skill
- **Conditional invocation**: Skills can be invoked based on specific conditions or file patterns

__Instructions:__

1. Ask Devin about different skill invocation patterns:

   ```
   What are the different ways I can invoke skills? Can I make skills invoke automatically?
   ```

2. Configure your custom skill to invoke automatically when working on specific file types or in specific directories.

### Project Rules Files

In addition to skills, Devin supports project rules files that can define project-specific guidelines and workflows. These are typically stored in `.devin/rules/` or similar directories.

__Instructions:__

1. Check if there are any existing project rules:

   ```
   Are there any project rules files configured for this project?
   ```

2. Ask Devin to help you create a project rules file:

   ```
   Help me create a project rules file that defines:
   - Git workflow conventions
   - Code review requirements
   - Testing standards
   - Deployment procedures
   ```

## 🎁 Optional Task: Creating Specialized Skills

Let's create some specialized skills for different aspects of development:

### Documentation Skill

Create a skill specifically for documentation tasks:

```
Create a skill called documentation-writer that helps generate high-quality documentation including:
- README files
- API documentation
- Code comments
- User guides
```

### Testing Skill

Create a skill specifically for testing tasks:

```
Create a skill called test-expert that helps with:
- Writing comprehensive unit tests
- Setting up test environments
- Mocking dependencies
- Analyzing test coverage
```

### Debugging Skill

Create a skill specifically for debugging tasks:

```
Create a skill called debugger that helps with:
- Analyzing error messages
- Identifying root causes
- Suggesting fixes
- Preventing similar issues
```

## 🏆 Exercise Wrap-up

In this exercise, we explored how to customize Devin's behavior using skills and configuration files. By creating custom skills, we were able to guide Devin's responses to better align with our project's specific needs and conventions.

### Reflection Questions

- What types of skills would be most valuable for your daily development workflow?
- How might skills help maintain consistency across different team members using Devin?
- What are some common patterns or guidelines that you could codify into skills for your organization?

### Key Takeaways

- Devin skills can be used to limit repetition in your prompts and ensure consistent behavior
- Skills can both reinforce context and define response formats
- Skills can be stored at different levels to enforce rules with different scopes
- Skills can grant additional tool permissions for specialized tasks
- Project rules files complement skills by defining broader workflow guidelines

## 🎉 Conclusion

Congratulations! You have now completed all seven exercises in the Devin Labs series. You should now have a solid understanding of how to leverage Devin's various capabilities, tools, and customization options to enhance your development workflow. Keep experimenting with these features to discover new ways they can assist you in your coding journey!

### 🚀 What You've Learned:

1. **Lab 1**: Setting up Devin and understanding the project
2. **Lab 2**: Using Devin to explore and understand unfamiliar codebases
3. **Lab 3**: Leveraging Devin's code editing capabilities for testing
4. **Lab 4**: Using Devin's autonomous mode for goal-oriented development
5. **Lab 5**: Scaling development with parallel subagents
6. **Lab 6**: Extending Devin's capabilities with MCP servers
7. **Lab 7**: Customizing Devin with skills and configuration

### 🎯 Next Steps:

- Continue exploring Devin's capabilities in your own projects
- Create custom skills that match your team's specific needs
- Experiment with different MCP servers to integrate your development tools
- Share your learnings with your team to improve collective productivity

Thank you for completing the Devin Hands-on Lab! 🍎
