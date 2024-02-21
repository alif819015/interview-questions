/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const AdvanceTopic = () => {
  return (
    <Container>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1.Promise, Callback Function
        </div>
        <div className="collapse-content">
          <p>
          Callback functions are functions passed as arguments to other functions, to be executed later. They are commonly used in asynchronous JavaScript operations. <br />
          Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous programming by providing a more readable and manageable syntax compared to nested callbacks.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          2. Array Methods
        </div>
        <div className="collapse-content">
          <p>
            <li>Array methods are built-in functions in JavaScript for performing common operations on arrays.</li>
            <li>Examples include map(), filter(), reduce(), forEach(), find(), some(), every(), sort(), and more. These methods make it easier to manipulate and iterate over array elements efficiently.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. Async/Await, Asynchronous Task
        </div>
        <div className="collapse-content">
          <p>
            <li>Async/Await is a modern JavaScript feature that allows you to write asynchronous code in a more synchronous-like manner.</li>
            <li>It simplifies asynchronous programming by using the keywords async and await to pause execution until a Promise is settled, making code easier to read and write.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. DOM (Document Object Model)
        </div>
        <div className="collapse-content">
          <p>
          The DOM is a programming interface for web documents. It represents the structure of HTML documents as a tree of objects, where each object corresponds to a node in the document. <br />
          JavaScript can manipulate the DOM to dynamically change the content, structure, and style of web pages in response to user interactions or other events.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. Lifting State Up
        </div>
        <div className="collapse-content">
          <p>
            <li>Lifting state up is a pattern used in React for managing shared state among multiple components by moving it to their closest common ancestor.</li>
            <li>By lifting state up, you can ensure that multiple components stay in sync with each other and maintain a single source of truth for the shared state.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. This Keyword
        </div>
        <div className="collapse-content">
          <p>
            <li>In JavaScript, the this keyword refers to the object that is currently executing the function.</li>
            <li>Its value depends on how a function is called: in global scope, this refers to the global object; in a method, this refers to the object the method belongs to; in a function, this refers to the global object (in non-strict mode) or undefined (in strict mode).</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. Ajax in JavaScript.
        </div>
        <div className="collapse-content">
          <p>
            <li>AJAX (Asynchronous JavaScript and XML) is a technique used in web development to send and receive data from a server asynchronously without interfering with the current page.</li>
            <li>It allows for dynamic updating of content without requiring a full page reload, improving user experience and interactivity.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. Prototype Inheritance
        </div>
        <div className="collapse-content">
          <p>
            <li>Prototype inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects via a prototype chain.</li>
            <li>Each object has a prototype object, and when a property or method is accessed on an object, JavaScript searches the object's prototype chain to find the property or method.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. Strict Mode
        </div>
        <div className="collapse-content">
          <p>
            <li>Strict mode is a feature in JavaScript that enables a stricter set of rules and behaviors for code execution.</li>
            <li>It helps catch common coding mistakes, prevents certain actions, and promotes writing more secure and optimized code.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. React Hooks
        </div>
        <div className="collapse-content">
          <p>
            <li>React Hooks are functions that allow functional components to use state and other React features without writing a class.</li>
            <li>They enable the use of state and lifecycle methods in functional components, promoting code reuse and improving component encapsulation.</li>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AdvanceTopic;
