# Exercise 6 - Extending Devin with MCP

#### Duration: 30 minutes

## 🎯 Learning Objectives

By the end of this exercise, you will be able to...

- Explain what MCP servers are and how they connect external knowledge to Devin
- Enable MCP integration with Devin in this project
- Use MCP server to pull a GitHub Issue into the terminal
- Ask Devin to work on that issue using MCP tools
- Understand how MCP expands Devin's capabilities

## 🍎 Scenario: Using Model Context Protocols to Gather External Information

Having spent your time at The Daily Harvest working with Devin, you are now (hopefully) quite familiar with the typical patterns with utilizing Devin. However, you have now begun to notice an unusual bottleneck in your daily workflow. In order to appropriately understand the current GitHub.com environment, you have to _go_ to GitHub. Wouldn't it be _so_ much easier if there were a way for Devin to be able to do that interfacing for you so you could spend more time focusing on your work and less time moving from your terminal to your browser back to your terminal then back to your browser once more?

Luckily, there is a tool for that!

## 🤖 Introduction to MCPs

[Model Context Protocol](https://github.com/modelcontextprotocol) acts as a mediator between your code base and external services. By combining Devin with various external systems, you can expand the knowledge Devin has access to:

- **Data stores**: Files and databases
- **Communication tools**: [Slack](https://docs.slack.dev/ai/mcp-server/)
- **Design platforms**: [Figma](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- **Project management**: [Jira](https://github.com/atlassian/atlassian-mcp-server) or [Azure DevOps](https://devblogs.microsoft.com/devops/azure-devops-mcp-server-public-preview/)
- **Cloud providers**: [Azure](https://learn.microsoft.com/azure/developer/azure-mcp-server/get-started)
- And many, many more!

Devin has native support for MCP servers, allowing you to connect to external services and use their tools directly from the command line.

### Configuring MCP with Devin

To configure MCP servers with Devin, you need to add the configuration to your Devin settings. Devin supports MCP servers through its configuration system, which can be set up at the user or project level.

## 💻 Step 1: Setting up MCP with Devin

Before we can begin to utilize MCP Servers, we need to configure them with Devin.

__Instructions:__

1. First, let's check what MCP servers are currently available. Ask Devin to list available MCP servers:

   ```
   List the available MCP servers that I can configure with Devin.
   ```

2. If you want to add a specific MCP server, you'll need to configure it in your Devin settings. The configuration typically involves:
   - Adding the server to your MCP configuration file
   - Providing any required authentication credentials
   - Specifying the tools you want to make available

3. For this exercise, we'll focus on using MCP servers that are already configured or commonly available. Let's start by asking Devin what MCP tools are currently available:

   ```
   What MCP tools are currently available for me to use?
   ```

## 🏗️ Step 2: Working with GitHub via MCP

With MCP configured, we can now begin to utilize one of the many tools that has been added to our arsenal: GitHub integration.

__Note:__ Before moving on, please make sure you have a GitHub MCP server configured or available.

<details>

  <summary>Instructions for configuring GitHub MCP server (if needed)</summary>

  If you need to configure the GitHub MCP server, you can ask Devin to help you set it up:

  ```
  Help me configure the GitHub MCP server so I can interact with GitHub repositories from the command line.
  ```

  Devin will guide you through the configuration process, which typically involves:
  - Installing the MCP server
  - Providing GitHub authentication credentials
  - Configuring the available tools
</details>

__Instructions:__

1. The GitHub MCP server provides a large number of tools for interacting with GitHub such as Actions, Issues, Security Findings, PRs, and more. Ask Devin to show you what GitHub MCP tools are available:

   ```
   What GitHub MCP tools are available for me to use?
   ```

2. Let's start by asking Devin to retrieve the list of issues for this repository. You can do this by entering the following prompt:

   ```
   Use the GitHub MCP tools to retrieve the list of open issues in my repository.
   ```

3. Devin will respond with a list of open issues in the repository including the issues we have created in previous exercises.
4. Next, let's ask Devin to create a new issue. You can do this by entering the following prompt:

   ```
   Use the GitHub MCP tools to create a new issue titled "MCP Test Issue" with the body "This is a test issue created using MCP."
   ```

5. After a moment, Devin will confirm that the issue has been created. You can verify this by navigating to the Issues tab in the GitHub repository in your web browser.


## 📖 Step 3: Using MCP for Documentation Search

MCP servers can also connect Devin to documentation sources like Microsoft Learn, allowing you to get up-to-date information and code examples directly within your terminal.

__Instructions:__

1. Ask Devin if there are any documentation MCP servers available:

   ```
   Are there any documentation MCP servers available that I can use to search for technical documentation?
   ```

2. If a Microsoft Learn or similar documentation server is available, ask Devin to retrieve information about different options for hosting this application:

   ```
   Use the available documentation MCP tools to search for and recommend options for deploying this React application.
   ```

3. Try other prompts to explore the documentation. For example, you could ask:
   - "Search the documentation for best practices for securing a React application."
   - "Find information about the steps to integrate Azure AD authentication in a web app."


### 🎁 Optional Task: Exploring Other MCP Servers

If you would like to see what your other options are, take a moment to explore available MCP servers.

1. Ask Devin to show you what other MCP servers might be available or commonly used:

   ```
   What other MCP servers are commonly available that could be useful for my development workflow?
   ```

2. If there are servers that you or your organization use on a regular basis, ask Devin about configuring them:

   ```
   Can you help me configure the [server name] MCP server for this project?
   ```

3. Even if you don't configure them immediately, ask Devin to explain what capabilities different MCP servers could provide:

   ```
   What capabilities would the [server name] MCP server provide? How could it improve my development workflow?
   ```


## 🏆 Exercise Wrap-up

Congratulations! You've successfully extended Devin's capabilities using Model Context Protocol (MCP) servers. You've experienced how MCP bridges the gap between your terminal and external services, bringing real-time data and functionality directly into your development workflow without context switching.

### Reflection Questions:

1. How did using MCP servers change your workflow compared to manually switching between your terminal and browser?
2. What types of external services or data sources would be most valuable to integrate with Devin in your daily work?
3. How might MCP servers help reduce context switching and improve developer productivity in team environments?
4. What security considerations should you keep in mind when connecting external services through MCP servers?
5. How could you use documentation MCP servers to stay updated with the latest documentation and best practices?

### Key Takeaways:

### 🔌 MCP as a Universal Connector
- **Eliminates context switching**: Access external services directly from your terminal without browser switching
- **Extensible architecture**: Connect Devin to virtually any service with an MCP server
- **Real-time data access**: Get up-to-date information from external sources without leaving your development environment

### 🛠️ Easy Configuration and Integration
- **Native MCP support**: Devin has built-in support for MCP servers
- **Flexible configuration**: Configure MCP servers at user or project level
- **Authentication handling**: Secure connection to external services with proper credential management

### 📚 Enhanced Knowledge Base
- **Documentation integration**: Access technical documentation, API docs, and knowledge bases directly in Devin
- **Issue management**: Create, retrieve, and manage GitHub issues without leaving your terminal
- **Cross-platform connectivity**: Connect to project management tools, communication platforms, and cloud services

### 🚀 Workflow Optimization
- **Reduced friction**: Streamline common tasks by bringing external tools into your development workflow
- **Consistent interface**: Use natural language to interact with all connected services through Devin
- **Scalable integration**: Start with essential services and expand based on team needs and workflow requirements


## 🔮 What's Next?

In Exercise 7, we'll take the extendability we received by using MCPs and expand that customizability further through the use of __Skills and configuration__ to ensure Devin has both a thorough understanding of our work's context _and_ the format in which we want our responses.

#### You have successfully completed the lab. Click on **Next >>** to continue to the next lab.

![](../../media/next-page.png)
