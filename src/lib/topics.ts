
interface Topic {
  title: string;
  slug: string;
  description: string;
  content: string;
}

interface TopicsCollection {
  [key: string]: Topic[];
}

// Topics organized by categories
export const TOPICS: TopicsCollection = {
  "getting-started": [
    {
      title: "Introduction to React",
      slug: "introduction-to-react",
      description: "Learn the basics of React and get started with your first component",
      content: `
# Introduction to React

React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and allows you to create reusable UI components.

## Why React?

- **Declarative:** React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere:** You can develop new features without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## Your First React Component

Let's create a simple "Hello World" component:

\`\`\`jsx
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

export default HelloWorld;
\`\`\`

### JSX Explained

The code above uses JSX, which is a syntax extension for JavaScript. It looks like HTML in your JavaScript code, but it's actually JavaScript under the hood. When your code is compiled, JSX is transformed into regular JavaScript:

\`\`\`javascript
import React from 'react';

function HelloWorld() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, World!'),
    React.createElement('p', null, 'Welcome to React')
  );
}

export default HelloWorld;
\`\`\`

## Using Your Component

To use this component in your application:

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);
\`\`\`

This will render your HelloWorld component inside the DOM element with id 'root'.

## Conclusion

You've just created your first React component! This is the foundation of React development. Everything in React is built from components, from simple UI elements to entire pages.

In the next sections, we'll explore how to add props, state, and interactivity to your components.
`
    },
    {
      title: "Components and Props",
      slug: "components-and-props",
      description: "Learn about React components and how to use props",
      content: `
# Components and Props

React components are the building blocks of a React application. Props are the mechanism that allows components to communicate with each other.

## Components

In React, there are two types of components:

1. **Functional Components** (also called "function components")
2. **Class Components**

### Functional Components

These are simpler and more common in modern React applications:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Class Components

While less common in modern React, class components are still important to understand:

\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
\`\`\`

## Props

Props (short for "properties") are how React components pass data to each other. Props are read-only - a component must never modify its own props.

### Passing Props

\`\`\`jsx
// Parent component
function App() {
  return <Welcome name="Sara" />;
}

// Child component
function Welcome(props) {
  // props = { name: "Sara" }
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Destructuring Props

For cleaner code, you can destructure props:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
\`\`\`

### Default Props

You can specify default values for props:

\`\`\`jsx
function Welcome({ name = "Guest" }) {
  return <h1>Hello, {name}</h1>;
}

// Or the traditional way
Welcome.defaultProps = {
  name: "Guest"
};
\`\`\`

### Props with Different Data Types

Props can be of any data type:

\`\`\`jsx
function UserProfile({ name, age, isAdmin, hobbies, address }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? "Yes" : "No"}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      <p>
        {address.street}, {address.city}
      </p>
    </div>
  );
}

// Usage
<UserProfile 
  name="John"
  age={25}
  isAdmin={true}
  hobbies={['Reading', 'Running', 'Coding']}
  address={{ street: "123 Main St", city: "Chicago" }}
/>
\`\`\`

### Children Prop

The special prop \`children\` contains the content between component's opening and closing tags:

\`\`\`jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is some content inside the card.</p>
  <button>Click Me</button>
</Card>
\`\`\`

## One-Way Data Flow

Props enforce a one-way data flow, from parent to child components. This makes your application more predictable and easier to debug.

When the parent component changes the props it passes to a child component, the child will re-render with the new props.

## Conclusion

Props allow React components to be reusable and composable. You can pass data down the component tree, enabling you to build complex UIs from simple components.

In the next section, we'll learn about state, which lets components manage their own data.
`
    }
  ],
  "core-concepts": [
    {
      title: "Understanding Hooks",
      slug: "understanding-hooks",
      description: "Master React hooks to manage state and side effects in your components",
      content: `
# Understanding React Hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks were added in React 16.8 and allow you to use React features without writing a class.

## Why Hooks?

Before hooks, you needed to use classes for:
- State management
- Lifecycle methods
- Reusing stateful logic between components

Hooks solve these problems by:
- Allowing state in functional components
- Providing lifecycle capabilities to functional components
- Making it easier to reuse and share logic between components

## Basic Hooks

### useState

The useState hook allows you to add state to functional components.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with initial value of 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

In this example:
- \`count\` is our state variable
- \`setCount\` is the function that updates the state
- \`0\` is the initial value for our state

### useEffect

The useEffect hook lets you perform side effects in function components. It replaces lifecycle methods like \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
    
    // Optional cleanup function (similar to componentWillUnmount)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

The dependency array \`[count]\` tells React to only re-run the effect when the \`count\` value changes. If you pass an empty array \`[]\`, the effect runs only once after the initial render.

### useContext

The useContext hook lets you access React context without nested components.

\`\`\`jsx
import React, { useContext } from 'react';

// Create a context
const ThemeContext = React.createContext('light');

function ThemedButton() {
  // Use the context
  const theme = useContext(ThemeContext);
  
  return <button className={theme}>Themed Button</button>;
}

// Usage
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

## Additional Hooks

React provides several other built-in hooks:

- \`useReducer\` - An alternative to useState for complex state logic
- \`useCallback\` - Returns a memoized callback to optimize performance
- \`useMemo\` - Returns a memoized value to avoid expensive calculations
- \`useRef\` - Creates a mutable reference that persists across renders
- \`useLayoutEffect\` - Similar to useEffect, but fires synchronously after all DOM mutations

## Custom Hooks

One of the most powerful features of hooks is the ability to create your own custom hooks, which let you extract component logic into reusable functions.

\`\`\`jsx
// Custom hook for form handling
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}

// Usage
function SignupForm() {
  const name = useFormInput('');
  const email = useFormInput('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.value, email.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" {...name} />
      <input type="email" placeholder="Email" {...email} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Rules of Hooks

There are two important rules you must follow when using hooks:

1. **Only call hooks at the top level** of your function component, not inside loops, conditions, or nested functions.
2. **Only call hooks from React function components** or custom hooks, not from regular JavaScript functions.

Following these rules ensures that hooks maintain their state between different renders of your component.

## Conclusion

Hooks have revolutionized how we write React components, making them more concise, easier to understand, and more reusable. By mastering hooks, you can write cleaner functional components that have all the capabilities of class components.
`
    },
    {
      title: "State Management",
      slug: "state-management",
      description: "Learn different approaches to manage state in React applications",
      content: `
# State Management in React

State management is one of the most important aspects of React applications. As your application grows, managing state becomes increasingly complex. In this guide, we'll explore different approaches to state management in React.

## Component State

### Local State with useState

For simple components, React's built-in \`useState\` hook is often sufficient:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
\`\`\`

### Complex State with useReducer

For more complex state logic, \`useReducer\` provides a Redux-like reducer pattern:

\`\`\`jsx
import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
\`\`\`

## Prop Drilling

The simplest way to share state between components is to pass it down as props:

\`\`\`jsx
function ParentComponent() {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
}

function ChildComponent({ user }) {
  return (
    <div>
      <GrandchildComponent user={user} />
    </div>
  );
}

function GrandchildComponent({ user }) {
  return <h1>Hello, {user.name}!</h1>;
}
\`\`\`

This works for small applications but can become unwieldy in larger ones, leading to "prop drilling" - passing props through many levels of components.

## Context API

React's Context API provides a way to share values between components without explicitly passing props:

\`\`\`jsx
import React, { createContext, useState, useContext } from 'react';

// Create a context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Consumer component using useContext hook
function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <button onClick={() => setUser({ name: 'Jane' })}>
        Change to Jane
      </button>
    </div>
  );
}

// Usage
function App() {
  return (
    <UserProvider>
      <div>
        <UserProfile />
      </div>
    </UserProvider>
  );
}
\`\`\`

Context is great for sharing global data like themes, user information, or language preferences.

## External State Management Libraries

For larger applications, you might consider these popular state management libraries:

### Redux

Redux is a predictable state container that helps you write applications that behave consistently:

\`\`\`jsx
// Redux store setup
import { createStore } from 'redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

// React integration with Redux (using react-redux)
import { Provider, useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`

### Zustand

Zustand is a small, fast, and scalable state management solution:

\`\`\`jsx
import create from 'zustand';

// Create store
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}));

// Usage in component
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`

### Jotai

Jotai takes an atomic approach to state management:

\`\`\`jsx
import { atom, useAtom } from 'jotai';

// Define atom
const countAtom = atom(0);

// Usage in component
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
\`\`\`

## Choosing the Right Approach

When deciding how to manage state in your React application, consider:

1. **Complexity of state**: Simple state can use useState, complex state might need useReducer or external libraries.
2. **Scope of state**: Is the state local to a component or needed globally?
3. **Team familiarity**: What solutions is your team comfortable with?
4. **App size**: Larger apps generally benefit from more structured state management.

It's also common to use a combination of approaches - Context for global UI state, Redux for complex business logic, and local state for component-specific concerns.

## Conclusion

React offers multiple ways to manage state, from simple useState for component-local state to powerful libraries like Redux for complex global state. By understanding the strengths and weaknesses of each approach, you can choose the right solution for your specific needs.
`
    }
  ],
  "advanced-topics": [
    {
      title: "Component Patterns",
      slug: "component-patterns",
      description: "Explore different component patterns to structure your React applications",
      content: `
# React Component Patterns

Component patterns are reusable solutions to common problems in React development. Understanding these patterns will help you write more maintainable, flexible, and scalable components.

## Compound Components

Compound components work together to form a complete UI. They share state implicitly and provide a more declarative API.

### Example: Tabs Component

\`\`\`jsx
import React, { createContext, useState, useContext } from 'react';

// Create context
const TabContext = createContext();

// Main component
function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabContext.Provider>
  );
}

// Sub components
Tabs.List = function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabContext);
  
  return (
    <button 
      className={activeIndex === index ? 'tab active' : 'tab'} 
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

Tabs.Panels = function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
};

Tabs.Panel = function TabPanel({ children, index }) {
  const { activeIndex } = useContext(TabContext);
  
  return activeIndex === index ? (
    <div className="tab-panel">{children}</div>
  ) : null;
};

// Usage
function App() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
        <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel index={0}>Content for Tab 1</Tabs.Panel>
        <Tabs.Panel index={1}>Content for Tab 2</Tabs.Panel>
        <Tabs.Panel index={2}>Content for Tab 3</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
\`\`\`

## Render Props

The render props pattern involves a component that takes a function as a prop. This function returns a React element and calls it instead of implementing its own render logic.

### Example: Mouse Tracker

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return render(position);
}

// Usage
function App() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <MouseTracker render={position => (
        <p>The mouse position is ({position.x}, {position.y})</p>
      )} />
    </div>
  );
}
\`\`\`

## Higher-Order Components (HOC)

A Higher-Order Component is a function that takes a component and returns a new enhanced component.

### Example: withAuth HOC

\`\`\`jsx
import React, { useContext } from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null
});

// Higher Order Component
function withAuth(Component) {
  return function WithAuthComponent(props) {
    const auth = useContext(AuthContext);
    
    if (!auth.isAuthenticated) {
      return <div>Please log in to view this content</div>;
    }
    
    return <Component {...props} user={auth.user} />;
  };
}

// Usage
function UserProfile({ user }) {
  return <div>Hello, {user.name}!</div>;
}

const AuthenticatedUserProfile = withAuth(UserProfile);

function App() {
  return (
    <AuthContext.Provider value={{ isAuthenticated: true, user: { name: 'John' } }}>
      <AuthenticatedUserProfile />
    </AuthContext.Provider>
  );
}
\`\`\`

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions.

### Example: useForm Hook

\`\`\`jsx
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  
  function handleSubmit(onSubmit) {
    return (e) => {
      e.preventDefault();
      onSubmit(values);
    };
  }
  
  return { values, errors, handleChange, handleSubmit };
}

// Usage
function SignupForm() {
  const { values, handleChange, handleSubmit } = useForm({ email: '', password: '' });
  
  const submitForm = (formValues) => {
    console.log('Form submitted with:', formValues);
  };
  
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
\`\`\`

## Props Collection and Getters

This pattern provides a collection of props to spread onto elements or functions to call to get props.

### Example: useToggle Hook with Props Getters

\`\`\`jsx
import { useState, useCallback } from 'react';

function useToggle(initialState = false) {
  const [on, setOn] = useState(initialState);
  
  const toggle = useCallback(() => setOn(state => !state), []);
  const reset = useCallback(() => setOn(initialState), [initialState]);
  
  // Props getter for the toggle button
  const getTogglerProps = useCallback(
    ({ onClick, ...props } = {}) => ({
      'aria-pressed': on,
      onClick: e => {
        // Call the provided onClick first (if any)
        onClick && onClick(e);
        // Then call our toggle function
        toggle(e);
      },
      ...props,
    }),
    [toggle, on]
  );
  
  return {
    on,
    toggle,
    reset,
    getTogglerProps,
  };
}

// Usage
function App() {
  const { on, getTogglerProps } = useToggle();
  
  return (
    <div>
      <p>The button is {on ? 'on' : 'off'}</p>
      <button {...getTogglerProps({ 'aria-label': 'Toggle', className: 'btn' })}>
        Toggle
      </button>
    </div>
  );
}
\`\`\`

## State Reducer Pattern

This pattern gives control back to the user of your component by allowing them to handle state changes.

### Example: useToggle with State Reducer

\`\`\`jsx
import { useReducer, useCallback } from 'react';

// Action types
const TOGGLE = 'TOGGLE';
const RESET = 'RESET';

function toggleReducer(state, action) {
  switch (action.type) {
    case TOGGLE:
      return { on: !state.on };
    case RESET:
      return { on: false };
    default:
      return state;
  }
}

function useToggle({ reducer = toggleReducer } = {}) {
  const [{ on }, dispatch] = useReducer(reducer, { on: false });
  
  const toggle = () => dispatch({ type: TOGGLE });
  const reset = () => dispatch({ type: RESET });
  
  return { on, toggle, reset };
}

// Usage with custom reducer
function App() {
  // Custom reducer that prevents toggling more than 5 times
  function customReducer(state, action) {
    const changes = toggleReducer(state, action);
    if (changes.on && state.toggleCount >= 5) {
      return { ...state, on: false };
    }
    return { ...changes, toggleCount: state.toggleCount + 1 };
  }
  
  const { on, toggle } = useToggle({ reducer: customReducer });
  
  return (
    <div>
      <p>The button is {on ? 'on' : 'off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
\`\`\`

## Controlled Components

Controlled components give the parent component full control over the child component's state.

### Example: Controlled Input

\`\`\`jsx
import React from 'react';

function ControlledInput({ value, onChange }) {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => onChange(e.target.value)} 
    />
  );
}

// Usage
function Form() {
  const [name, setName] = React.useState('');
  
  return (
    <div>
      <ControlledInput value={name} onChange={setName} />
      <p>Hello, {name}!</p>
    </div>
  );
}
\`\`\`

## Conclusion

These component patterns provide different ways to solve common problems in React development. By understanding these patterns, you can create more flexible, reusable, and maintainable components.

Choose the pattern that best fits your use case:

- **Compound Components**: For components with related sub-components
- **Render Props**: For sharing behavior between components
- **Higher-Order Components**: For adding features to components
- **Custom Hooks**: For reusing stateful logic
- **Props Collection/Getters**: For flexible component APIs
- **State Reducer**: For inversion of control over state
- **Controlled Components**: For parent control over child state

Many React libraries combine multiple patterns to create flexible and powerful APIs.
`
    },
    {
      title: "Performance Optimization",
      slug: "performance-optimization",
      description: "Tips and techniques to optimize your React application performance",
      content: `
# Performance Optimization in React

Optimizing the performance of your React applications is crucial for providing a smooth user experience. This guide covers various techniques to improve React performance.

## Identifying Performance Issues

Before optimizing, identify bottlenecks using:

1. **React DevTools Profiler**: Visualizes component renders and helps identify wasted renders
2. **Performance Tab in Chrome DevTools**: Measures overall application performance
3. **Lighthouse**: Provides performance scores and improvement suggestions

## Component Rendering Optimization

### React.memo

Use \`React.memo\` to prevent unnecessary re-renders of functional components:

\`\`\`jsx
import React from 'react';

const MovieCard = React.memo(function MovieCard({ title, poster, rating }) {
  console.log(\`Rendering MovieCard: \${title}\`);
  
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <span>Rating: {rating}/10</span>
    </div>
  );
});

// Usage
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}
\`\`\`

React.memo performs a shallow comparison of props. For complex props, provide a custom comparison function:

\`\`\`jsx
const areEqual = (prevProps, nextProps) => {
  return prevProps.movie.id === nextProps.movie.id && 
         prevProps.movie.rating === nextProps.movie.rating;
};

const MovieCard = React.memo(function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <span>Rating: {movie.rating}/10</span>
    </div>
  );
}, areEqual);
\`\`\`

### useMemo and useCallback

\`useMemo\` memoizes expensive calculations, while \`useCallback\` memoizes function references:

\`\`\`jsx
import React, { useState, useMemo, useCallback } from 'react';

function SearchableList({ items }) {
  const [query, setQuery] = useState('');
  
  // Memoize expensive filtering operation
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  
  // Memoize event handler function
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  
  return (
    <div>
      <input 
        type="text" 
        value={query}
        onChange={handleSearch}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Code Splitting and Lazy Loading

Split your bundle into smaller chunks and load components only when needed:

\`\`\`jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

## Windowing for Long Lists

For long lists, render only visible items using libraries like \`react-window\`:

\`\`\`jsx
import React from 'react';
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}
\`\`\`

## Optimizing Context

Context causes all consumers to re-render when the context value changes. Split your contexts or use memoization:

\`\`\`jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

// Split contexts
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John' });
  const [theme, setTheme] = useState('light');
  
  // Memoize context values to prevent unnecessary renders
  const userValue = useMemo(() => ({ user, setUser }), [user]);
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  
  return (
    <UserContext.Provider value={userValue}>
      <ThemeContext.Provider value={themeValue}>
        <Dashboard />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
\`\`\`

## Using Web Workers

Move CPU-intensive operations off the main thread:

\`\`\`jsx
import React, { useState, useEffect } from 'react';
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';

// Create a worker factory
const createWorker = createWorkerFactory(() => import('./worker'));

function DataProcessor() {
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);
  const worker = useWorker(createWorker);
  
  async function processData(data) {
    setProcessing(true);
    
    try {
      const result = await worker.processData(data);
      setResult(result);
    } finally {
      setProcessing(false);
    }
  }
  
  return (
    <div>
      <button onClick={() => processData(largeDataset)} disabled={processing}>
        {processing ? 'Processing...' : 'Process Data'}
      </button>
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
}
\`\`\`

## Optimizing Images and Assets

Optimize images and assets to reduce load times:

1. Use responsive images with \`srcset\`
2. Lazy load images as they enter the viewport
3. Utilize next-gen image formats (WebP, AVIF)
4. Implement a CDN for faster delivery

\`\`\`jsx
import React from 'react';

function OptimizedImage({ src, alt, width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      srcSet={\`
        \${src.replace('.jpg', '-small.jpg')} 500w,
        \${src.replace('.jpg', '-medium.jpg')} 800w,
        \${src} 1200w
      \`}
      sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
    />
  );
}
\`\`\`

## Debouncing and Throttling

Use debouncing and throttling for events that fire frequently:

\`\`\`jsx
import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  // Debounce the search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      console.log(\`Searching for: \${searchTerm}\`);
      // Call API with search term
      fetch(\`/api/search?q=\${searchTerm}\`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, 500),
    []
  );
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Server-Side Rendering (SSR) or Static Site Generation (SSG)

Consider using frameworks like Next.js for SSR or SSG to improve initial load performance:

- **Server-Side Rendering**: The HTML is generated on the server for each request
- **Static Site Generation**: The HTML is pre-rendered at build time

## Conclusion

Performance optimization in React is a continuous process. Start with the techniques that address your specific bottlenecks:

1. First, measure and identify performance issues
2. Use React's built-in optimization features like memo, useMemo, and useCallback
3. Implement code splitting for large applications
4. Use windowing for long lists
5. Optimize context usage
6. Consider web workers for CPU-intensive operations
7. Optimize assets like images
8. Implement debouncing/throttling for frequent events
9. Consider SSR or SSG for better initial load performance

Always measure the impact of your optimizations to ensure they're providing real benefits without unnecessarily complicating your code.
`
    }
  ],
  "practical-guides": [
    {
      title: "Styling in React",
      slug: "styling-in-react",
      description: "Different approaches to styling your React components",
      content: `
# Styling in React

React offers many ways to style your components. Each approach has its own advantages and trade-offs. In this guide, we'll explore different styling methods and when to use them.

## 1. CSS and Stylesheet Imports

The simplest approach is to write standard CSS and import it into your React components.

\`\`\`css
/* styles.css */
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.button:hover {
  background-color: #45a049;
}
\`\`\`

\`\`\`jsx
// Button.js
import React from 'react';
import './styles.css';

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
\`\`\`

**Pros:**
- Familiar for developers with CSS background
- Full access to CSS features
- Easier to migrate existing styles

**Cons:**
- No scoping by default (styles leak into other components)
- Class name conflicts possible
- No dynamic styling based on props without extra work

## 2. Inline Styles

React allows you to define styles directly in your component using JavaScript objects:

\`\`\`jsx
import React from 'react';

function Button({ children, onClick, color }) {
  const buttonStyle = {
    backgroundColor: color || '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  const hoverStyle = {
    ...buttonStyle,
    backgroundColor: color ? adjustColor(color, -10) : '#45a049'
  };
  
  const [style, setStyle] = React.useState(buttonStyle);
  
  return (
    <button 
      style={style}
      onClick={onClick}
      onMouseEnter={() => setStyle(hoverStyle)}
      onMouseLeave={() => setStyle(buttonStyle)}
    >
      {children}
    </button>
  );
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  // Implementation omitted for brevity
  return color;
}

export default Button;
\`\`\`

**Pros:**
- No need for separate CSS files
- Style isolation (styles only affect the component)
- Easy to make styles dynamic based on props
- No class name conflicts

**Cons:**
- No CSS features like media queries, keyframes, etc.
- No pseudo-classes like \`:hover\` (requires JavaScript handlers)
- Potential performance issues with complex styles
- Less maintainable for large style sets

## 3. CSS Modules

CSS Modules scope CSS by automatically creating unique class names:

\`\`\`css
/* Button.module.css */
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.button:hover {
  background-color: #45a049;
}
\`\`\`

\`\`\`jsx
// Button.js
import React from 'react';
import styles from './Button.module.css';

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
\`\`\`

**Pros:**
- Local scope (styles don't leak)
- Uses regular CSS syntax
- Access to all CSS features
- Prevents class name conflicts

**Cons:**
- Additional build configuration
- No built-in way to style based on props
- Complex conditional styling requires multiple classes

## 4. CSS-in-JS Libraries

Libraries like styled-components and Emotion allow you to write CSS directly in your JavaScript:

### Example with styled-components:

\`\`\`jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: \${props => props.color || '#4CAF50'};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: \${props => props.color ? darkenColor(props.color) : '#45a049'};
  }
\`;

function Button({ children, onClick, color }) {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

// Helper function to darken colors
function darkenColor(color) {
  // Implementation omitted for brevity
  return color;
}

export default Button;
\`\`\`

**Pros:**
- Component-scoped styles (no leakage)
- Dynamic styling based on props
- Full access to CSS features
- Access to JavaScript within styles
- No class name conflicts
- Support for themes

**Cons:**
- Additional library dependency
- Performance impact for complex applications
- Steeper learning curve
- Runtime cost (for some libraries)

## 5. Utility-First CSS (Tailwind CSS)

Tailwind CSS provides pre-defined utility classes that you combine to style elements:

\`\`\`jsx
import React from 'react';

function Button({ children, onClick, color }) {
  const baseClasses = "px-8 py-4 rounded text-white font-medium text-center";
  const colorClass = color === "red" ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700";
  
  return (
    <button 
      className={\`\${baseClasses} \${colorClass} transition duration-300 ease-in-out\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
\`\`\`

**Pros:**
- Rapid development
- Consistent design
- Responsive design built-in
- No context switching between files
- Reduced CSS bundle size

**Cons:**
- HTML can become verbose
- Learning curve for utility class names
- Less semantic class names
- Requires configuration for custom designs

## 6. CSS Preprocessors (SASS/SCSS)

CSS preprocessors extend CSS with variables, mixins, and more:

\`\`\`scss
// Button.scss
$primary-color: #4CAF50;
$hover-color: #45a049;

.button {
  background-color: $primary-color;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: $hover-color;
  }
  
  &.secondary {
    background-color: #008CBA;
    
    &:hover {
      background-color: #007B9A;
    }
  }
}
\`\`\`

\`\`\`jsx
// Button.js
import React from 'react';
import './Button.scss';

function Button({ children, onClick, variant }) {
  const buttonClass = variant === 'secondary' ? 'button secondary' : 'button';
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
\`\`\`

**Pros:**
- Enhanced CSS capabilities
- Variables, mixins, and nesting
- Better organization with partials
- Can work with any styling approach

**Cons:**
- Requires preprocessing step
- Same scoping issues as regular CSS
- Additional build configuration

## 7. React's clsx or classnames Utility

The clsx or classnames libraries help manage multiple conditional class names:

\`\`\`jsx
import React from 'react';
import clsx from 'clsx';
import './styles.css';

function Button({ children, onClick, variant, disabled, size }) {
  const buttonClass = clsx(
    'button',
    {
      'button-primary': variant === 'primary',
      'button-secondary': variant === 'secondary',
      'button-disabled': disabled,
      'button-large': size === 'large',
      'button-small': size === 'small'
    }
  );
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
\`\`\`

**Pros:**
- Cleaner conditional class names
- Works with any CSS approach
- Easy to read and maintain

**Cons:**
- Additional library dependency
- Doesn't solve CSS scoping issues on its own

## Choosing the Right Approach

Consider these factors when choosing a styling approach:

- **Team experience**: Use what your team is comfortable with
- **Project size**: Complex projects benefit from scoped solutions
- **Performance needs**: Consider runtime cost vs. development speed
- **Design system needs**: Component libraries benefit from CSS-in-JS
- **Browser support**: Ensure compatibility with target browsers

### Best Practices

Regardless of the styling approach:

1. **Component-based styles**: Keep styles close to components
2. **Consistent naming**: Adopt a naming convention (BEM, SMACSS, etc.)
3. **Mobile-first**: Design for mobile then enhance for larger screens
4. **Design tokens**: Use variables for colors, spacing, etc. for consistency
5. **Avoid specificity wars**: Keep selectors as simple as possible
6. **Style isolation**: Prevent styles from affecting other components

## Conclusion

There's no "best" styling solution for all React applications. The right approach depends on your specific project needs, team preferences, and development goals. Many projects even combine multiple approaches - for example, using Tailwind CSS for layouts and styled-components for complex interactive elements.

Consider starting with a simpler approach and evolving as your needs grow. And remember: good styling should enhance your application without making development more difficult.
`
    },
    {
      title: "React Router",
      slug: "react-router",
      description: "Implement client-side routing in your React applications",
      content: `
# React Router

React Router is the standard routing library for React applications. It enables the creation of single-page applications with navigation without page refreshes.

## Basic Concepts

React Router has three main components:
- **Routers** (like \`BrowserRouter\`, \`HashRouter\`)
- **Route matchers** (like \`Route\`, \`Switch\`)
- **Navigation** (like \`Link\`, \`NavLink\`, \`Redirect\`)

## Installation

To add React Router to your project:

\`\`\`bash
npm install react-router-dom
\`\`\`

## Basic Routing

Let's set up basic routing for a simple application:

\`\`\`jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const NotFound = () => <h1>404: Page Not Found</h1>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
\`\`\`

## Router Types

React Router provides different router implementations:

1. **BrowserRouter**: Uses HTML5 history API (pushState, replaceState)
2. **HashRouter**: Uses URL hash (for legacy browsers)
3. **MemoryRouter**: Keeps history in memory (useful for testing)
4. **StaticRouter**: For server-side rendering

## Nested Routes

You can nest routes to create more complex layouts:

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Layout component
function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>© 2025</footer>
    </div>
  );
}

// Dashboard layout
function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/analytics">Analytics</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

// Dashboard pages
const DashboardOverview = () => <h2>Dashboard Overview</h2>;
const DashboardAnalytics = () => <h2>Analytics</h2>;
const DashboardSettings = () => <h2>Settings</h2>;
const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## Route Parameters

Route parameters allow you to capture values from the URL:

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Product component using route parameters
function Product() {
  const { productId } = useParams();
  return <h1>Product Details: {productId}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## Query Parameters

Use the \`useSearchParams\` hook to work with query parameters:

\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const filter = searchParams.get('filter') || 'all';
  
  function handleSearchChange(e) {
    setSearchParams({ q: e.target.value, filter });
  }
  
  function handleFilterChange(newFilter) {
    setSearchParams({ q: query, filter: newFilter });
  }
  
  return (
    <div>
      <h1>Search Results</h1>
      <input 
        value={query} 
        onChange={handleSearchChange} 
        placeholder="Search"
      />
      
      <div>
        <button 
          onClick={() => handleFilterChange('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => handleFilterChange('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => handleFilterChange('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>
      
      <p>
        Showing {filter} results for "{query}"
      </p>
    </div>
  );
}
\`\`\`

## Programmatic Navigation

Use \`useNavigate\` hook to navigate programmatically:

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    // Process login
    const success = true;
    
    if (success) {
      // Redirect after successful login
      navigate('/dashboard');
      
      // Optional: Replace current entry in history stack
      // navigate('/dashboard', { replace: true });
      
      // Optional: Pass state to the next page
      // navigate('/dashboard', { state: { from: 'login' } });
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## Accessing Navigation State

You can access the state passed during navigation with \`useLocation\`:

\`\`\`jsx
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const from = location.state?.from || 'direct access';
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You got here from: {from}</p>
    </div>
  );
}
\`\`\`

## Protected Routes

Implement authentication with protected routes:

\`\`\`jsx
import { Navigate, useLocation } from 'react-router-dom';

// Auth context for the application
const AuthContext = React.createContext(null);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  
  const value = { user, login, logout };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Protected route component
function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  
  if (!auth.user) {
    // Redirect to login, but save the current location
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  return children;
}

// Login page that redirects back to the protected page
function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page the user was trying to visit
  const from = location.state?.from || '/';
  
  function handleSubmit(e) {
    e.preventDefault();
    // Login logic here
    auth.login({ username: 'user' });
    // Redirect back
    navigate(from, { replace: true });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <button type="submit">Login</button>
    </form>
  );
}

// App with protected routes
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
\`\`\`

## Active Links

Use \`NavLink\` to style the active navigation link:

\`\`\`jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  // Define the styling function
  const getLinkClass = ({ isActive }) => {
    return isActive ? 'active-link' : 'link';
  };
  
  return (
    <nav>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={getLinkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={getLinkClass}>
        Contact
      </NavLink>
    </nav>
  );
}
\`\`\`

## Handling 404 Pages

Use a catch-all route to handle 404 pages:

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
\`\`\`

## Route Configuration

For complex applications, you can define your routes in a separate configuration:

\`\`\`jsx
import { useRoutes } from 'react-router-dom';

// Route configuration
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <DashboardOverview /> },
          { path: 'analytics', element: <Analytics /> },
          { path: 'settings', element: <Settings /> }
        ]
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

function App() {
  // Use the route configuration
  const element = useRoutes(routes);
  return element;
}
\`\`\`

## Lazy Loading Routes

Improve performance with lazy loading:

\`\`\`jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

## Scroll Restoration

Implement scroll restoration for navigation:

\`\`\`jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Use in your app
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Routes */}
    </BrowserRouter>
  );
}
\`\`\`

## Conclusion

React Router provides a comprehensive solution for handling navigation in React applications. It allows you to:

- Create dynamic, client-side routing
- Handle nested layouts
- Work with URL parameters and query strings
- Implement authentication and protected routes
- Enhance user experience with active links and smooth transitions
- Optimize performance with code splitting

With these features, you can build complex, multi-page applications while maintaining the speed and responsiveness of a single-page application.
`
    }
  ],
  "ecosystem": [
    {
      title: "React Ecosystem",
      slug: "react-ecosystem",
      description: "Discover popular libraries and tools in the React ecosystem",
      content: `
# React Ecosystem

The React ecosystem is rich with libraries, tools, and frameworks that extend React's capabilities. This guide covers essential tools and libraries that work with React to build modern web applications.

## State Management

### Redux

Redux is a predictable state container for JavaScript applications, commonly used with React for managing application state.

\`\`\`jsx
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Component with Redux
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

// App with Redux Provider
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`

Redux is ideal for:
- Large applications with complex state
- Apps where many components need the same state
- When you need time-travel debugging
- When you need predictable state updates

### Redux Toolkit

Redux Toolkit simplifies Redux development with utilities to reduce boilerplate:

\`\`\`jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;  // Immer allows "mutating" state
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

// Actions and Reducer
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// Configure store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// Component
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
\`\`\`

### Zustand

Zustand is a small, fast state management solution with a simple API:

\`\`\`jsx
import create from 'zustand';

// Create a store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));

// Component using the store
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
\`\`\`

### Recoil

Recoil is a state management library from Facebook designed specifically for React:

\`\`\`jsx
import { RecoilRoot, atom, useRecoilState } from 'recoil';

// Define atom
const countState = atom({
  key: 'countState',
  default: 0
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
\`\`\`

## Data Fetching

### React Query

React Query simplifies data fetching, caching, and state management:

\`\`\`jsx
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function Todos() {
  const { isLoading, error, data } = useQuery('todos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
\`\`\`

### SWR

SWR is a React hooks library for data fetching with built-in caching and revalidation:

\`\`\`jsx
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Todos() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher);
  
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Form Handling

### Formik

Formik helps with form state, validation, and submission:

\`\`\`jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          
          <div>
            <Field name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          
          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
\`\`\`

### React Hook Form

React Hook Form is a performant, flexible form validation library:

\`\`\`jsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required')
});

function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('firstName')} placeholder="First Name" />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      
      <div>
        <input {...register('lastName')} placeholder="Last Name" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      
      <div>
        <input {...register('email')} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## UI Libraries

### Material-UI

MUI (formerly Material-UI) is a popular React UI framework implementing Google's Material Design:

\`\`\`jsx
import { Button, TextField, Container, Grid, Typography } from '@mui/material';

function LoginForm() {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
\`\`\`

### Chakra UI

Chakra UI is a simple, modular component library with accessibility features:

\`\`\`jsx
import { ChakraProvider, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function LoginForm() {
  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="8">
        <form>
          <FormControl id="email" mb="4">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          
          <FormControl id="password" mb="6">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          
          <Button colorScheme="blue" w="full" type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}
\`\`\`

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that can be used with React:

\`\`\`jsx
function LoginForm() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        
        <button 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
\`\`\`

## CSS-in-JS

### Styled Components

Styled Components lets you write actual CSS in your JavaScript:

\`\`\`jsx
import styled from 'styled-components';

// Create styled components
const Container = styled.div\`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
\`;

const Title = styled.h2\`
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
\`;

const Input = styled.input\`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
  }
\`;

const Button = styled.button\`
  width: 100%;
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #3182ce;
  }
\`;

function LoginForm() {
  return (
    <Container>
      <Title>Login</Title>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Sign In</Button>
      </form>
    </Container>
  );
}
\`\`\`

### Emotion

Emotion is a flexible CSS-in-JS library with great performance:

\`\`\`jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const container = css\`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
\`;

const title = css\`
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
\`;

const input = css\`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
  }
\`;

const Button = styled.button\`
  width: 100%;
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #3182ce;
  }
\`;

function LoginForm() {
  return (
    <div css={container}>
      <h2 css={title}>Login</h2>
      <form>
        <input css={input} type="email" placeholder="Email" />
        <input css={input} type="password" placeholder="Password" />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
\`\`\`

## Testing

### Jest and React Testing Library

Jest is a JavaScript testing framework, commonly used with React Testing Library for testing React components:

\`\`\`jsx
// Button.jsx
import React from 'react';

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

### Cypress

Cypress is an end-to-end testing framework:

\`\`\`javascript
// cypress/integration/login.spec.js
describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('user@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should show error with invalid credentials', () => {
    cy.get('input[type="email"]').type('invalid@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid email or password').should('be.visible');
  });
});
\`\`\`

## Build Tools and Development

### Vite

Vite is a fast, modern build tool for React applications:

\`\`\`bash
# Create a new Vite React project
npm create vite@latest my-react-app -- --template react-ts

# Navigate to the project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Create React App

Create React App is a traditional way to set up a React project:

\`\`\`bash
# Create a new React app
npx create-react-app my-app

# Navigate to the project
cd my-app

# Start development server
npm start
\`\`\`

## Meta-Frameworks

### Next.js

Next.js is a React framework for production with server-side rendering, static site generation, and more:

\`\`\`jsx
// pages/index.js - Next.js page example
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Created with Next.js" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <Link href="/about">About</Link>
      </main>
    </div>
  );
}

// Data Fetching with Next.js
export async function getStaticProps() {
  // Fetch data at build time
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}
\`\`\`

### Remix

Remix is a newer React framework focused on web standards and modern UX:

\`\`\`jsx
// app/routes/index.jsx - Remix route example
import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';

export async function loader() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return json({ data });
}

export default function Index() {
  const { data } = useLoaderData();
  
  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <Link to="/about">About</Link>
      
      <div>
        {data.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

## Animation

### Framer Motion

Framer Motion is a production-ready animation library for React:

\`\`\`jsx
import { motion } from 'framer-motion';

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="card"
    >
      <h2>Animated Card</h2>
      <p>This card animates in and out, and on hover.</p>
    </motion.div>
  );
}
\`\`\`

### React Spring

React Spring is a physics-based animation library:

\`\`\`jsx
import { useSpring, animated } from 'react-spring';

function AnimatedCard() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });
  
  return (
    <animated.div style={props} className="card">
      <h2>Animated Card</h2>
      <p>This card animates with physics-based springs.</p>
    </animated.div>
  );
}
\`\`\`

## Conclusion

The React ecosystem continues to evolve with new libraries and tools emerging regularly. When building a React application, consider:

1. **Project requirements**: Choose tools based on what your application needs
2. **Team familiarity**: Use tools your team is comfortable with
3. **Bundle size**: Be mindful of how many dependencies you add
4. **Maintenance**: Check if libraries are actively maintained
5. **Learning curve**: Consider the time needed to learn new tools

By leveraging these ecosystem tools, you can build powerful, performant, and maintainable React applications more efficiently.
`
    }
  ]
};
