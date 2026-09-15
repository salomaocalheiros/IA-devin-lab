# Exercise 5 - Agentic Coding with Devin Subagents

#### Duration: 45 minutes

## 🎯 Learning Objectives

By the end of this exercise, you will:
- Understand Devin's subagent capabilities and their autonomous nature
- Learn to delegate parallel tasks to multiple subagents
- Experience the full autonomous development workflow from task assignment to completion
- Monitor and interact with multiple subagents working simultaneously
- Review and iterate on AI-generated code using standard development workflows
- Understand security, limitations, and best practices for using subagents


## 🍎 Scenario: Freeing Up Your Hands with Subagents

 The Daily Harvest is growing rapidly, but development bandwidth is becoming a bottleneck. Your manager has heard about Devin's new subagent capabilities—autonomous AI developers that can work independently on different tasks simultaneously, just like having multiple team members.

Today, you'll explore this revolutionary feature by:
- Creating multiple development tasks for Daily Harvest's e-commerce improvements
- Assigning tasks to different subagents that work in parallel
- Watching subagents work autonomously in their own development contexts
- Reviewing and iterating on subagent work through standard code review processes
- Managing multiple autonomous workflows simultaneously

## ⌨️ Introduction to Devin Subagents

Unlike the single-agent approach we've used so far, Devin's subagent capabilities allow you to spawn multiple autonomous agents that can work on different tasks in parallel. Rather than engaging in a back and forth, iterative approach with a single agent, utilizing subagents involves delegating multiple tasks simultaneously and letting them work independently.

Devin subagents can...
- Fix bugs in parallel
- Implement incremental new features simultaneously
- Improve test coverage across different modules
- Update documentation while developing features
- Address technical debt in multiple areas

## 📝 Step 1: Assigning Tasks to Subagents

The first step in utilizing subagents is to define multiple tasks that can be worked on in parallel.

### Instructions:

1. In your terminal, ask Devin to work on adding a _Contact Us_ page to the application. Feel free to add any specific requirements or acceptance criteria you wish. A sample prompt is shown below:

<details>

  <summary>Example Task</summary>

  ```
  I need you to implement a Contact Us page for The Daily Harvest application. The page should include:
  - A form with fields for name, email, and message
  - Validation for all required fields
  - Integration with the existing routing system
  - Styling that matches the current design
  - Proper error handling and user feedback
  ```

</details>

### 🚀 How Subagents Work:

**1. Task Assignment & Activation:**
- Assign tasks to Devin using natural language prompts
- Devin spawns independent subagents for parallel execution
- Each subagent works in its own context with access to the codebase

**2. Autonomous Development:**
- Each subagent analyzes the codebase independently
- Plans implementation approach for its specific task
- Creates branches or works on different files simultaneously
- Writes and commits code incrementally

**3. Quality Assurance:**
- Each subagent runs existing tests and linters
- Creates new tests when appropriate
- Validates changes against repository standards
- Documents reasoning in commit messages

**4. Integration & Review:**
- Subagents report completion status
- Provides detailed logs showing decision-making process
- Requests review of completed work
- Responds to feedback and iterates based on comments


## 👀 Step 2: Monitoring Multiple Subagents

Now that you have Devin working on multiple tasks, let's follow along with their progress:

1. Observe Devin's output as it manages multiple subagents working in parallel
2. Each subagent will report its progress independently
3. Notice how Devin coordinates the work of multiple agents without conflicts
4. While subagents are working, you can monitor their progress by reading their output logs
5. Here you can see all the steps each subagent is taking to address its assigned task, including code changes, test runs, and any challenges it encounters
6. Back in the main Devin session, you can also watch as Devin updates you on the overall progress of all subagents
7. Once subagents have completed their work, Devin will present you with a summary of all changes made

Note: Depending on the complexity of the tasks, this process may take some time. Be patient as subagents work through their tasks autonomously. Remember, normally you would be free to work on other tasks while subagents handle these issues in the background. In the meantime, feel free to explore the optional tasks below.

## 🎁 Optional Task: Become Your Own Tech Lead

While subagents are working autonomously on your first set of tasks, this is the perfect time to experience what it's like to be a tech lead delegating tasks to your AI team members. Just as a tech lead would distribute work across their team, you can now assign different types of tasks to multiple subagents based on complexity and priority.

Try assigning additional tasks to new subagents while the first ones are working. Here are some ideas for tasks you can assign:
- Improve the shopping cart to make it easier for users to adjust quantities of items
- Add a search bar to the product listing page
- Add categories to the product page to make it easier to find specific types of products
- Write comprehensive documentation for the API endpoints
- Optimize the performance of the product loading process
- Anything you think would improve the Daily Harvest e-commerce experience!

### Pro Tips for Effective Delegation:
- Be specific in your task descriptions - clear requirements lead to better outcomes
- Set clear acceptance criteria in your tasks
- You can even use Devin to help plan out the tasks before assigning them
- Start with smaller, well-defined tasks before moving to complex features

This parallel workflow mimics real-world team dynamics where a tech lead can keep multiple developers busy with different priorities while focusing on higher-level architecture and planning decisions.

## 🎁 Optional Task: Different Subagent Profiles

Now that you've seen how to assign tasks to subagents, here are additional ways you can interact with subagent capabilities. Feel free to pick one or more of the methods below to create and assign new tasks to subagents.

### Exploration Subagent

The exploration subagent profile is optimized for read-only tasks like codebase exploration, research, and search. Use this when you need to understand code, trace dependencies, or answer questions about the codebase without making changes.

**To use the exploration subagent:**
```
Use an exploration subagent to analyze the current architecture of the payment processing system and identify potential security vulnerabilities.
```

### General Purpose Subagent

The general purpose subagent has full tool access (read, write, edit, exec) and can perform any task that requires write access or running commands with side effects. Use this for code changes, running commands, or any task that modifies the codebase.

**To use the general purpose subagent:**
```
Use a general purpose subagent to implement the new feature for user profile management.
```

### Background vs Foreground Subagents

You can choose to run subagents in the background (where you continue working while they complete tasks) or in the foreground (where you wait for completion).

**Background subagent:**
```
Launch a background subagent to optimize the database queries in the checkout process.
```

**Foreground subagent:**
```
Run a foreground subagent to fix the critical bug in the shopping cart that's blocking users.
```


## 🎁 Optional Task: Using Subagents for Security Analysis

So far, we've looked at utilizing subagents to handle improved functionality. Now, we are going to see how they handle resolving security vulnerabilities.

### Security Analysis with Subagents

Before having Devin tackle some security flaws, we need to understand what vulnerabilities might exist in the codebase.

__Instructions:__

1. Ask Devin to use a subagent to analyze the codebase for potential security vulnerabilities
2. You can use a prompt like:

```
Use a subagent to analyze the eCommApp codebase for potential security vulnerabilities. Focus on:
- Input validation issues
- SQL injection risks
- XSS vulnerabilities
- Authentication and authorization problems
- Sensitive data exposure
```

3. Review the security analysis report provided by the subagent
4. Ask Devin to use another subagent to fix the identified vulnerabilities
5. Review the fixes and test them to ensure they don't introduce new issues

At this point, resolution of security vulnerabilities has moved into a similar workflow as with our other changes. You can review the changes, test them, and integrate them into your codebase following your standard development process.

## 👀 Step 3: Reviewing Subagent Work

Once subagents have completed work on their assigned tasks, it's time to review their changes. Just like with human developers, it's important to ensure that the code meets your team's standards and requirements.


__Instructions:__

1. Review the summary of changes provided by Devin after all subagents complete their work
2. Notice that Devin has provided detailed descriptions of the changes made by each subagent
3. Review the code changes made by each subagent. Look for:
   - Correctness: Does the code function as intended?
   - Quality: Is the code clean, well-structured, and maintainable?
   - Tests: Are there sufficient tests covering the new functionality?
4. If you find any issues or areas for improvement, you can ask Devin to make corrections
5. If you request changes, Devin can re-launch the relevant subagent to address your feedback autonomously
6. Once you are satisfied with the changes, you can integrate them into your main branch using your standard Git workflow

### Scaling Development with Subagents

Subagents aren't just for fixing individual issues - they can help your organization scale development at scale:

- **Parallel Development**: Multiple subagents can work on different features simultaneously, dramatically increasing development velocity
- **Specialized Tasks**: Assign different subagents to specialized tasks (testing, documentation, optimization) while maintaining oversight
- **Risk Mitigation**: Subagents can work on experimental features in parallel without blocking the main development workflow



## 🏆 Exercise Wrap-up

Congratulations! You've successfully used Devin subagents to autonomously implement new functionality in a codebase. You've experienced the full workflow from task assignment to code review, gaining insight into how AI can augment your development process.

### Reflection Questions:
1. What types of tasks will you delegate to subagents in your projects?
2. When reviewing subagent work, what stood out as particularly well done? What areas could use improvement?
3. Should subagents be the only developers working on features? If so, what are the trade-offs of foregoing human developers? If not, how might you supplement your current development process with subagents?
4. Which subagent profile (exploration vs general purpose) did you find most convenient or effective?
5. How does using subagents for security analysis compare to traditional methods of vulnerability assessment?

## Key Takeaways:

### 🎯 Subagents as Your AI Team Members
- **Treat subagents like developers**: Assign tasks with clear requirements, acceptance criteria, and context just as you would for any team member
- **Leverage autonomous work**: Subagents can work independently while you focus on other tasks, truly scaling your development capacity
- **Multiple profile options**: Use exploration subagents for research, general purpose for code changes - choose what fits your workflow best

### 🔄 Quality Assurance & Review Process
- **Code review remains essential**: Even AI-generated code benefits from human oversight for correctness, maintainability, and alignment with project goals
- **Iterative improvement**: Subagents respond to feedback and can refine their work based on your comments, creating a collaborative development loop
- **Transparent decision-making**: Logs provide visibility into subagents' reasoning and approach, helping you understand and trust the process

### 🚀 Scaling Development Workflows
- **Tech lead mindset**: Delegate multiple tasks across different complexity levels while maintaining oversight and architectural decisions
- **Security integration**: Subagents can handle security analysis and remediation as part of your existing security workflows
- **Standard development processes**: All work flows through familiar development and review processes, maintaining your team's existing standards

### 💡 Best Practices for Success
- **Be specific in requirements**: Clear, detailed task descriptions lead to better implementation outcomes
- **Start small and scale up**: Begin with well-defined tasks before moving to complex features
- **Combine human and AI review**: Use both subagents' automated capabilities and human oversight for comprehensive code quality
- **Monitor and guide**: While subagents work autonomously, periodic check-ins help ensure alignment with your goals

## 🔮 Coming Up Next:

In Exercise 6, we'll take a look at bringing additional context to Devin through the use of **MCP Servers** to provide new functionality and information to smooth out your workflows.

#### You have successfully completed the lab. Click on **Next >>** to continue to the next lab.

![](../../media/next-page.png)
