---
prev:
  text: Hello World
  link: ./04_hello.md 
next:
  text: Use Strict
  link: ./06_use-strict.md
---
# Tooling

We will learn and use following professional developer tools through the course.

## Firefox and Chrome DevTools

The most significant developer tools are web browsers and their developer tools.  Firefox and  Chrome DevTools developer consoles are accessed by pressing the F12 key. The default tab is console and other developer tools like inspector and debugger are on other tabs. Using the browser console is an interactive way of learning. We can directly type our code and run it inside the browser.

### Web Console

![console](https://firefox-source-docs.mozilla.org/_images/landingpage_console.png)
In the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.

<https://firefox-source-docs.mozilla.org/devtools-user/>

::: tip
**Errors are our friends**

Developers should read all error messages and learn from them.
:::

To see errors and get a lot of other useful information about scripts, “developer tools” have been embedded in browsers.

Developer tools allow us to see errors, run commands, examine variables.

Press F12 The developer tools will open on the Console tab by default.

## CodePen and JsFiddle

[CodePen](https://codepen.io/features/) and [JsFiddle](https://jsfiddle.net/) are web based development environments.

Web-based development environments are great tools to try out our ideas and start your projects without a hassle.
They allow us to write code in the browser and see the results of it as we build. They are online code editors for front-end developers learning to code.

All source codes of our course are published in codepen. You can edit and try your developments.

::: tip
We will use pure JavaScript which is sometimes called Vanilla JavaScript.
We will learn all JavaScript Fundamentals using Visual Studio Code but I will share example codes using editable public CodePen Pens.
:::

## Node.js

![node](./img/nodejs.png)

 [Node.js](https://nodejs.dev/) is the cross-platform environment that lets developers write command line tools and server-side scripts outside of a browser.

## Visual Studio Code

![code](./img/visualstudiocodelogo.png)

As a professional developer, you will use an IDE (Integrated Development Environment) and most certainly [Visual Studio Code](https://code.visualstudio.com/)

* Syntax Coloring
* Error and Warning Marks
* Format Document

**Git Support:** Resources can be pulled from Git Hub Repo online and vice-versa; saving can be done too. Resource pulling also means cloning the code which is made available on the internet. This code can later be changed and saved.

**Terminal Support:** Most of the times, the user needs to start from the root of the directory to start with a particular action, in-built terminal or console provides user support to not to switch in-between two screens for the same.

**Intelli-Sense:** It can detect if any snippet of code is left incomplete. Also, common variable syntaxes and variable declarations are made automatically. Ex: If a certain variable is being used in the program and the user has forgotten to declare, intelli-sense will declare it for the user.

## Linters

We will find and fix problems in your JavaScript code using  [ESLint](https://eslint.org/)

We will dive deep on Code Quality in **Literature** section of Javascript for Re-Beginners course.

**For now check out:** [awesome-eslint](https://github.com/dustinspecker/awesome-eslint)

## Vite

While targeting browser, we will use [Vite](https://vitejs.dev/) for Web Frontend Tooling
