# Exercise 4 - Devin: Goal-Oriented Development

#### Duration: 45 minutes

## 🎯 Learning Objectives

By the end of this exercise, you will:
- Understand what Devin's autonomous capabilities are and when to use them
- Learn how Devin's Normal mode differs from Plan mode
- Experience how Devin autonomously makes changes across multiple files
- Use Devin to achieve a specific, measurable goal (80%+ code coverage)
- Observe and understand Devin's decision-making process
- Apply best practices for delegating complex tasks to AI agents

## 🤖 What is Devin's Autonomous Mode?

Devin represents a significant evolution in AI-assisted development. Unlike traditional chat-based AI assistants, **Devin operates autonomously to achieve larger, goal-oriented tasks** through a command-line interface.

### Key Features:
- 🎯 **Goal-Oriented**: Works toward specific, measurable objectives
- 🔄 **Autonomous Operation**: Makes decisions and changes without constant guidance
- 📁 **Multi-File Awareness**: Understands and modifies multiple files simultaneously
- 🧠 **Advanced Reasoning**: Leverages sophisticated AI models for complex reasoning
- 📊 **Progress Tracking**: Monitors and reports progress toward goals
- 🔍 **Context Understanding**: Maintains awareness of project structure and dependencies

### When to Use Devin's Autonomous Mode:
- ✅ Large refactoring tasks across multiple files
- ✅ Implementing complete features end-to-end
- ✅ Achieving specific metrics (coverage, performance, security)
- ✅ Complex code migrations or upgrades
- ✅ Comprehensive documentation generation

### Devin's Modes:
- **Normal Mode**: Full autonomy to use all tools freely (editing, searching, running commands)
- **Plan Mode**: Explore the codebase, ask clarifying questions, and create a plan without making changes

## 🍎 Scenario: Boosting The Daily Harvest's Test Coverage

After your excellent work in Exercise 3 writing unit tests, your team lead at The Daily Harvest has assigned you a critical pre-release task: **achieve 80% or higher code coverage across the entire project**.

The challenge? There are multiple components, utilities, and modules that need comprehensive testing. Manually identifying and writing tests for each uncovered area would take a lot of work. This is the perfect scenario for Devin's autonomous capabilities!

### Your Mission:
Use Devin to automatically:
- 🔍 Analyze the current codebase and identify coverage gaps
- 📝 Generate comprehensive test suites for uncovered code
- 🎯 Achieve the 80% coverage target efficiently
- 📊 Ensure all new tests follow project conventions and pass

## 🚀 Step 1: Assessing Current Coverage

Before we delegate to Devin, let's understand our starting point.

### Instructions:
1. **Run the existing test suite** to see current coverage (make sure you're in the **eCommApp** directory first):
   ```bash
   npm test -- --coverage
   ```

2. **Review the coverage report** that displays in the terminal. Note:
   - Overall coverage percentage
   - Which files have low coverage
   - Which lines are uncovered

3. **Note** the current coverage percentage - you'll compare this to the final result!

## 🤖 Step 2: Activating Devin's Autonomous Mode

Now let's put Devin to work on our coverage goal.

### Instructions:

1. **Ensure you're in Normal mode** (the default mode for Devin)
2. **Provide your goal-oriented prompt** (example below):

<details>
<summary>Sample Devin Prompt</summary>

```
I need you to help me achieve 80% code coverage for The Daily Harvest project. Please:

1. Analyze the current test coverage across all files
2. Identify components, functions, and modules that lack adequate testing
3. Generate comprehensive unit tests for uncovered code paths
4. Ensure all new tests follow the existing testing patterns and conventions
5. Make sure all tests pass and actually improve coverage
6. Continue working until we reach at least 80% overall coverage

Please work autonomously and let me know your progress as you go. Focus on business logic, utility functions, and React components first.
```

</details>

3. **Submit the prompt** and let Devin begin working.

## 👀 Step 3: Observing Devin in Action

This is where Devin truly shines! Watch as it works autonomously, **behaving like a real developer** working toward your goal.

### What You'll Observe:

**🔍 Analysis Phase:**
- Devin examines your project structure like a developer would
- Identifies files with low/no test coverage by analyzing existing tests
- Plans its testing strategy and prioritizes high-impact areas
- Reviews existing code patterns to maintain consistency

**⚡ Execution Phase:**
- Creates new test files or enhances existing ones across multiple components
- **Runs tests automatically** to verify its work
- Writes tests for multiple components simultaneously with awareness of dependencies
- Makes real-time adjustments based on test results and build feedback

**🔧 Self-Healing Capabilities:**
- **Automatically fixes build failures** it encounters during development
- **Resolves test failures** by analyzing error messages and adjusting code
- **Handles dependency issues** by installing missing packages or adjusting imports
- **Iterates on solutions** when initial attempts don't work, just like a human developer would

**📊 Progress Reporting:**
- Updates you on coverage improvements with specific metrics
- Reports any issues or blockers it encounters and how it's addressing them
- Suggests additional areas that need attention based on its analysis
- Shows you its decision-making process and next steps

### Instructions:
1. **Monitor Devin's work** - don't interrupt unless there's an error
   - If Devin encounters an error, simply restart the analysis
   - Watch the terminal output to see Devin's progress
   - You might need to provide additional guidance if Devin gets stuck
2. **Watch the file explorer** - you'll see new test files being created in real-time
3. **Check Devin's status updates** - it will report progress toward the 80% goal with detailed feedback
4. **Note the multi-file coordination** - observe how it handles dependencies between tests and maintains project consistency
5. **Observe the self-healing** - watch how it responds to and fixes any build or test failures it encounters
6. **You're always in control** - remember that you can:
   - **Review all changes** before accepting them
   - **Keep or discard individual files** Devin creates
   - **Easily undo the work** using Git if Devin misses the mark or goes in the wrong direction
   - **Guide Devin** with additional instructions if needed


## 🔧 Step 4: Reviewing and Refining Devin Results

Devin will work toward the 80% goal, but you should review its work.

### Instructions:

1. **Run coverage again** to verify the improvement:
   ```bash
   npm test -- --coverage
   ```

2. **Compare before/after results:**
   - Starting coverage: ____%
   - Final coverage: ____%
   - Goal achieved? ✅/❌

3. **Review the generated tests:**
   - Open a few of the new test files
   - Check if they follow your project's testing patterns
   - Verify test quality and comprehensiveness

4. **If coverage is still below 80%**, ask Devin to continue:
    <details>
    <summary>Sample Devin Prompt</summary>

    ```
    Current coverage is at X%. Please continue working to reach our 80% goal. Focus on the remaining uncovered areas.
    ```

    </details>

## 🎯 Step 5: Understanding Devin Decision-Making

Let's gain insight into how Devin approached this complex task.

### Instructions:

**Ask Devin to explain its strategy:**
<details>
<summary>Sample Devin Prompt</summary>

```
Can you explain your approach to achieving the code coverage goal? What was your strategy for:
- Prioritizing which files to test first
- Deciding what types of tests to write
- Handling dependencies between different components
- Ensuring tests followed our project conventions
```

</details>

**Follow up with specific questions about its decisions:**
<details>
<summary>Sample Devin Prompt</summary>

```
What were the biggest challenges you encountered while working toward the 80% coverage goal? How did you handle edge cases or complex components?
```

</details>


## 🎓 Best Practices for Devin's Autonomous Mode

Based on this exercise, here are key practices for effective Devin usage:

### ✅ Do:
- **Set clear, measurable goals** (like "80% coverage")
- **Provide context** about project conventions and requirements
- **Let Devin work autonomously** - avoid micro-managing
- **Review results** before considering the task complete
- **Ask for explanations** to understand Devin's reasoning

### ❌ Don't:
- **Interrupt frequently** - let Devin complete its work cycles
- **Give vague instructions** - be specific about desired outcomes
- **Skip verification** - always test that Devin's work achieves your goal
- **Ignore errors** - address any issues Devin reports

## 🚀 Real-World Applications

Consider how you might use Devin's autonomous capabilities in your actual development work:

**🏢 Enterprise Scenarios:**
- Legacy code modernization across hundreds of files
- Implementing comprehensive security scanning and fixes
- Migrating entire codebases to new frameworks or standards
- Achieving compliance requirements (accessibility, security, performance)

**🚀 Startup Scenarios:**
- Rapidly implementing MVPs with proper test coverage
- Scaling applications while maintaining code quality
- Adding comprehensive error handling and monitoring
- Preparing codebases for production deployment

## 🏆 Exercise Wrap-up

Congratulations! You've successfully used Devin to achieve a complex, goal-oriented development task.

### Reflection Questions:
1. What surprised you most about Devin's autonomous capabilities?
2. How would Devin change your approach to large refactoring tasks?
3. What types of development goals would you delegate to Devin in real projects?
4. How did Devin's autonomous approach compare to your manual development process?
5. Which mode of Devin (Normal or Plan) do you find most useful for different scenarios?

### Key Takeaways:
- Devin's autonomous mode is particularly effective for complex, multi-file tasks that require a high level of coordination and autonomy.
- Setting clear goals and providing context are crucial for maximizing the effectiveness of Devin.
- Reviewing and validating the output of Devin is essential to ensure quality and adherence to project standards.

## 🔮 What's Next?

In Exercise 5, we'll take things further by exploring how Devin can work autonomously using subagents to handle parallel tasks and complex development workflows.

#### You have successfully completed the lab. Click on **Next >>** to continue to the next lab.

![](../../media/next-page.png)
