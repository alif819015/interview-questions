/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ReactQuestions = () => {
  return (
    <Container>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1. What is reactjs? Tell us about advantages and disadvantages of
          using react js.
        </div>
        <div className="collapse-content">
          <p>
            Ans: React, is an open-source JavaScript library, particularly used
            for single-page applications where the user interface needs to be
            highly dynamic and responsive. React allows developers to create
            reusable UI components,
            <br />
            advantages:
            <br />
            Declarative Syntax: Component-Based Architecture: Virtual DOM:
            One-Way Data Binding:
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2. Why will you select ReactJS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: It is Fast and easy to use. React. js has the advantage of
            creating discrete components that make up the larger UI, and then
            using simple HTML and JavaScript components to create more complex
            UI functionality. Dynamic DOM can be used with React.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. What is Virtual dom? What are the differences between virtual and
          real dom?
        </div>
        <div className="collapse-content">
          <p>
            Ans: The Virtual DOM is a lightweight, in-memory representation of
            the Real DOM used in frameworks like React.js. It mirrors the
            structure of the Real DOM but allows for faster updates by batching
            changes before they're applied to the actual browser DOM. This
            improves performance by minimizing costly reflows and repaints. In
            summary, the Virtual DOM simplifies and optimizes UI updates
            compared to directly manipulating the Real DOM.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. Differences between props and state?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In React.js, both props and state are used to manage data
            within components, but they serve different purposes and have
            different characteristics.
            <br />
            Props: Props (short for properties) are read-only data that are
            passed into a component from its parent component.
            <br />
            Props are used to pass data from parent components to child
            components.
            <br />
            State: State is managed within a component and represents mutable
            data that can change over time.
            <br />
            State is initialized and managed within the component itself and can
            be modified using the setState() method.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What is the purpose of useState? When and why will you use it?
        </div>
        <div className="collapse-content">
          <p>
            Ans: useState is a fundamental hook in React used for managing state
            within functional components, enabling developers to create
            interactive and dynamic user interfaces more effectively.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. What is a context API? How does it work?
        </div>
        <div className="collapse-content">
          <p>
            Ans: The Context API in React is a mechanism for sharing data
            between components without having to explicitly pass props through
            every level of the component tree.
            <br />
            Creating Context: You define a context using React.createContext().
            This creates a context object which has a Provider and a Consumer.
            <br />
            Provider: The Provider component is used to wrap around the part of
            the component tree where you want to make the data available.
            <br />
            It accepts a value prop which is the data you want to share.
            <br />
            Consumer: The Consumer component is used to access the data provided
            by the Provider.
            <br />
            Using Context: Components that need access to the shared data can
            access it using the Consumer component within their render function.
            <br />
            Updating Context: You can update the context value by modifying the
            state within the Provider component. Any component consuming this
            context will be re-rendered with the updated value.
            <br />
            the Context API provides a way to share data across the component
            tree without having to pass props manually at every level, making
            the code cleaner and more maintainable.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. Difference between useEffect and useState?
        </div>
        <div className="collapse-content">
          <p>
            Ans: useState and useEffect are both hooks provided by React, but
            they serve different purposes: <br />
            useState: useState is used to add state to functional components.
            <br />
            It returns a stateful value and a function to update it.
            <br />
            useEffect: useEffect is used to perform side effects in functional
            components.
            <br />
            It allows you to perform operations such as data fetching, DOM
            manipulation, or subscribing to events.
            <br />
            Difference: useState is used to manage state within a component,
            allowing it to hold and update data over time.
            <br />
            useEffect is used to perform side effects in functional components,
            such as data fetching or updating the DOM, after the component has
            rendered.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What is JSX? How does it work?
        </div>
        <div className="collapse-content">
          <p>
            Ans: JSX is a syntax extension for JavaScript used in React for
            defining UI components. It allows developers to write HTML-like code
            within JavaScript, making code more readable and maintainable. JSX
            gets transpiled into regular JavaScript for browser interpretation,
            seamlessly integrating HTML-like syntax with JavaScript logic.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. Tell us about React Component lifecycle?
        </div>
        <div className="collapse-content">
          <p>
            Ans: The three phases are: Mounting, Updating, and Unmounting.
            <br />
            componentDidMount: Called after the initial rendering, used for
            setup like fetching data or initializing the component.
            <br />
            componentDidUpdate: Triggered after updates, useful for tasks like
            fetching new data or updating the DOM.
            <br />
            componentWillUnmount: Executed before component removal, for cleanup
            tasks like clearing resources or event listeners.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. What is the purpose of a custom hook? How will you create a custom
          hook? Give us an example.
        </div>
        <div className="collapse-content">
          <p>
            Ans: A custom Hook is a JavaScript function whose name starts with
            ”use” and that may be called other Hooks. It allows you to extract
            reusable logic from components and encapsulate it into a separate
            function. If you have one or multiple React hooks that will be used
            at multiple locations in a code, you should use custom React JS
            hooks. This helps in making the code more readable and making the
            code clean.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. How would you optimize a react js application?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Optimizing a React.js application involves various strategies
            to improve performance, user experience, and code maintainability.
            <br />
            Code Splitting, Bundle Optimization, Tree Shaking, Lazy Loading,
            Memoization, Optimize Renders, Optimize Network Requests,
            Virtualization, Performance Monitoring, Optimize for SEO, Optimize
            Images, Reduce Re-renders
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. How will you send data from a Child Component to the parent
          component?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In React, you can send data from a child component to a parent
            component by passing a callback function as a prop from the parent
            to the child. The child component can then invoke this callback
            function and pass the data as an argument.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. What is the best way to send 4 or more props to a child component?
        </div>
        <div className="collapse-content">
          <p>
            Ans: When 4 or more props to a child component best use to way use
            Context API. Context API allows data to be passed through a
            component tree without having to pass props manually at every level.
            This makes it easier to share data between components.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. What is React Router Dom?
        </div>
        <div className="collapse-content">
          <p>
            Ans: React Router is a JavaScript framework that lets us handle
            client and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          15. What is the State? How does it work?
        </div>
        <div className="collapse-content">
          <p>
            Ans: State is used to manage data within a component itself. When
            the state of a component changes, React will automatically re-render
            the component and any child components that depend on that state.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          16. What is props drilling?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Prop drilling occurs when a parent component passes data down
            to its children and then those children pass the same data down to
            their own children. This process can continue indefinitely.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          17. Why do we inject dependency inside a UseEfect hook?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In a useEffect hook in React, dependency injection is done to
            specify which variables or state values the effect depends on. This
            ensures that the effect runs only when those dependencies change,
            helping to manage side effects.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          18. What is the react memo()? And why will you use it?
        </div>
        <div className="collapse-content">
          <p>
            Ans: React.memo() is a higher-order component in React used for
            memoization. It memoizes functional components to prevent
            unnecessary re-rendering when the component's props remain the
            same.React.memo() when you want to avoid re-rendering a component
            unless its props change.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          19. What are the controlled components in React JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Controlled Components are those in which the form’s data is
            handled by the component’s state. A controlled component is under
            the control of the component’s state
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          20. What is the Lifting State up method in react?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Lifting state up in React involves moving the state from a
            child component to its parent component. This allows multiple child
            components to share and update the same state, ensuring
            synchronization
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          21. What are stateful and stateless components?
        </div>
        <div className="collapse-content">
          <p>
            Ans: A stateless component in React is a lightweight component that
            doesn't have its own internal state. A stateful (class) component,
            on the other hand, has its own internal state.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          22. Authentication Vs Authorization.
        </div>
        <div className="collapse-content">
          <p>
            Ans: Here are some key differences between authentication and
            authorization:
            <br />
            Authentication verifies the identity of a user or service, and
            authorization determines their access rights.
            <br />
            Authentication typically occurs first, followed by authorization.
            <br />
            Authentication confirms "who you are," while authorization answers
            the question "What can you do?"
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          23. What is the diff algorithm?
        </div>
        <div className="collapse-content">
          <p>
            Ans: A diff algorithm is a method for comparing two sets of data and
            finding the differences between them. It is commonly used in web
            development to make the rendering of dynamic user interfaces more
            efficient by only updating the parts of the interface that have
            changed.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          24. Significance of the key in react?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In React, the key attribute is crucial for efficient list
            rendering. It optimizes updates, maintains component identity,
            prevents unnecessary re-renders, and contributes to overall
            performance.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">25. What is JWT?</div>
        <div className="collapse-content">
          <p>
            Ans: JWT stands for JSON Web Token. JWT is an open standard for
            securely transmitting information between parties as a JSON object.
            It is commonly used for authorization purposes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ReactQuestions;
