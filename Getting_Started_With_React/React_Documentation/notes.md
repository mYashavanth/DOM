Q1) What is React?
==> React is an open-source JavaScript library for building user interfaces (UI) on websites. It helps developers create interactive and dynamic web pages efficiently.

Q2) Who made React?
==> React was developed and is maintained by Facebook. It was created by Jordan Walke, a software engineer at Facebook, and it was first released as an open-source project in 2013. Since then, React has gained widespread adoption in the web development community and is actively maintained by Facebook along with contributions from the open-source community.

Q3) What is Babel?
==> Babel is like a language translator for JavaScript. It takes modern, fancy JavaScript code that developers write and turns it into older,   plain JavaScript that works in all web browsers. This way, developers can use the latest JavaScript features without worrying about compatibility issues.

Q4) How does Babel convert html code in React into valid code?
==> Babel doesn't convert HTML code into React. Babel is like a translator for React's special code (called JSX) into regular JavaScript.
    In React, you write something that looks like HTML, but it's actually special code called JSX. Babel helps turn that JSX into regular JavaScript that the web browser can understand. Once it's in regular JavaScript, React can use it to show things on the web page. So, Babel is like a bridge between JSX and regular JavaScript for React to work properly.

Q5) What is ReactDOM used for? Write an example?
==> ReactDOM is like a special tool in React that helps you put your React components onto a web page. Here's a simple example:
    Imagine you have a webpage with a <div> element that has a class of "root" where you want to display your React component.
Exapmle: 
const element = React.createElement("div", {
    className: "root",
    children: "Carpe Diem",
    })
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(element)

Q6) What are the packages that you need to import for react to work with?
==> 'react', 'react-dom' packages are the fundamental dependencies for building React applications. 
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    beble is additional to use jsx.
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

Q7) How do you add react to a web application?
==> Install Required Software: Make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download them for free from the internet.

Create a New React App: Use a tool called create-react-app to set up a new React project. It's like creating a folder with all the necessary files and settings for React. You give your project a name when you create it.

Open Your Project: Go into the project folder you just created using your computer's command prompt or terminal.

Start the Development Server: Run a command that starts a special server for your React app. This server allows you to see your React app in a web browser.

Write Your Website: Create or modify React components to build your website. Components are like building blocks for your webpage.

Show Your Website: Use React's special tool called ReactDOM to show your components on your webpage. You typically do this in a file called index.js.

Q8) What is React.createElement?
==> React.createElement is a fundamental function in React that is used to create and return a React element, which represents a piece of the user interface. It's commonly used when writing React components in JavaScript, particularly when you're not using JSX or when you need to create elements dynamically.

Q9) What are the three properties that createElement accept?
==> React.createElement(type, [props], [...children]);
type: The type of the element you want to create. It can be a string representing an HTML tag (e.g., 'div', 'h1') for native elements or the reference to a custom React component.

props: An object containing the properties (or props) that you want to pass to the element.

children: Any additional elements or text content that you want to nest inside the element.

Ex: const element = React.createElement('h1', { className: 'greeting' }, 'Hello, React!');

Q10) What is the meaning of render and root?
==> Render:
Think of "render" as the action of showing something on a web page. In React, it means turning your React components into what people can see on the screen.

Root:
"Root" is like a special spot on the web page where your React stuff will appear. It's the place where your React app starts. You usually give it  a name, like "root," and tell React to put your app there.