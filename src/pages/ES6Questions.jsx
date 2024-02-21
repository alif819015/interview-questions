/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ES6Questions = () => {
  return (
    <Container>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium bg-white">
          1. Tell me about Es6. Or what ES6 features did you use?
        </div>
        <div className="collapse-content bg-white">
          <p>
            ES6 Features: ES6 (ECMAScript 2015) introduced several new features
            to JavaScript, including arrow functions, classes, let and const for
            variable declarations, template literals, and destructuring
            assignments.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2.What are the differences between var, let, and const?
        </div>
        <div className="collapse-content">
          <p>
            Differences between var, let, and const: <br />
            1. var has function scope and can be redeclared and reassigned.{" "}
            <br />
            2. let has block scope and can be reassigned but not redeclared
            within the same block. <br />
            3. const has block scope and cannot be reassigned or redeclared
            within the same block.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3.Why will you use default parameters?
        </div>
        <div className="collapse-content">
          <p>
            Default Parameters: Default parameters allow functions to be called
            without passing arguments for certain parameters. They provide
            fallback values if no value is provided explicitly.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. How does the Spread operator work?
        </div>
        <div className="collapse-content">
          <p>
            Spread Operator: The spread operator (...) is used to expand
            elements of an iterable (like an array) into individual elements. It
            is commonly used for array literals, function arguments, and object
            literals.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What is a Prototype chain?
        </div>
        <div className="collapse-content">
          <p>
            Prototype Chain: The prototype chain is a mechanism in JavaScript
            that allows objects to inherit properties and methods from other
            objects. It enables the concept of inheritance in JavaScript.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6.Difference between class and object.
        </div>
        <div className="collapse-content">
          <p>
            Difference between Class and Object: <br />
            1. A class is a blueprint for creating objects with predefined
            properties and methods. <br />
            2. An object is an instance of a class, representing a specific
            instance with its own unique properties and methods.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. Explain Call by value vs call by reference .
        </div>
        <div className="collapse-content">
          <p>
            Call by Value vs Call by Reference: <br />
            Call by Value: Copies the value of the actual parameter into the
            formal parameter. <br />
            Call by Reference: Passes the address of the actual parameter into
            the formal parameter, allowing direct modification of the actual
            parameter.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What is a Higher-order Function?
        </div>
        <div className="collapse-content">
          <p>
            Higher-order Function: A higher-order function is a function that
            takes one or more functions as arguments or returns a function as
            its result. Examples include map, filter, and reduce.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. What is the API? Difference between Get vs post?
        </div>
        <div className="collapse-content">
          <p>
            API stands for Application Programming Interface. It is a set of
            protocols, routines, and tools that software developers use to build
            and interact with applications or systems. In simpler terms, it is a
            way for different applications to communicate with each other and
            exchange data or functionality. <br />
            Difference between Get vs Post: <br />
            1. GET requests are intended to retrieve data from a server and do
            not modify the server's state. On the other hand, POST requests are
            used to send data to the server for processing and may modify the
            server's state. <br />
            2. GET method request can be saved as a bookmark in the browser
            whereas POST method request can not be saved as a bookmark in the
            browser. <br />
            3. Request made through the GET method is stored in the cache memory
            of the Browser. & POST method is not stored in the cache memory of
            the Browser.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10.Difference between local storage and Session storage.
        </div>
        <div className="collapse-content">
          <p>
            Difference between Local Storage and Session Storage: <br />
            1. Local Storage: Data persists even after the browser is closed and
            is accessible across multiple windows and tabs. <br />
            2. Session Storage: Data persists only for the duration of the
            session (until the browser is closed or the tab is closed).
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. What are cookies? And why will you use it?
        </div>
        <div className="collapse-content">
          <p>
            Cookies: Cookies are small pieces of data stored in the browser that
            are sent with every request to a specific domain. They are commonly
            used for session management, user authentication, and tracking user
            behavior.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. What is object-oriented programming?
        </div>
        <div className="collapse-content">
          <p>
            Object-Oriented Programming (OOP): OOP is a programming paradigm
            based on the concept of "objects," which can contain data and
            methods. It focuses on the creation of objects that interact with
            each other to solve complex problems.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. When will you return something from a function?
        </div>
        <div className="collapse-content">
          <p>
            When the function completes (finishes running), it returns a value,
            which is a new string with the replacement made. The return
            statement ends the function execution and specifies a value to be
            returned to the function caller.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. Difference between Array vs LinkedList.
        </div>
        <div className="collapse-content">
          <p>
            Difference between Array vs LinkedList:
            <br />
            1. Arrays store elements in contiguous memory locations and provide
            constant-time access to elements using an index. <br />
            2. Linked lists store elements as nodes, with each node containing a
            value and a reference to the next node. Access time varies based on
            the position of the element.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          15. How will you debug a JavaScript application?
        </div>
        <div className="collapse-content">
          <p>
            Debugging a JavaScript Application: Debugging involves identifying
            and fixing errors or issues in a JavaScript application using tools
            like browser developer tools, console.log statements, breakpoints,
            and debugging utilities.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          16. What is template literal in ES6?
        </div>
        <div className="collapse-content">
          <p>
            Template Literal in ES6: Template literals allow embedding
            expressions and multiline strings in JavaScript. They are enclosed
            in backticks (`) and support interpolation using ${}.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          17. Difference between Spread Operator and rest operator.
        </div>
        <div className="collapse-content">
          <p>
            Difference between Spread Operator and Rest Operator: <br />
            1. Spread Operator: Expands elements of an iterable into individual
            elements. <br />
            2. Rest Operator: Gathers individual elements into an array or
            object.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          18. What is destructuring?
        </div>
        <div className="collapse-content">
          <p>
            Destructuring: Destructuring is a JavaScript feature that allows
            unpacking values from arrays or objects into individual variables.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          19. Tell me about Ternary Operators.
        </div>
        <div className="collapse-content">
          <p>
            Ternary Operators: Ternary operators are conditional operators that
            evaluate a condition and return one value if true and another if
            false. They are written in the form condition ? value1 : value2.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          20. Difference between regular function and array function.
        </div>
        <div className="collapse-content">
          <p>
            Difference between Regular Function and Arrow Function: <br />
            1. Regular Function: Has its own "this" context and cannot be used
            as a constructor function. <br />
            2. Arrow Function: Inherits the "this" context from its parent scope
            and cannot be used as a constructor function.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          21. find() vs filter().
        </div>
        <div className="collapse-content">
          <p>
            The find method returns the first element in an array that passes a
            specific condition. The output is a single element, not an array. If
            no element passes the condition, undefined is returned. <br />
            The filter method creates a new array with all elements that pass a
            specific condition. If no elements pass the condition, an empty
            array is returned.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          22. What do you mean by IIFE?
        </div>
        <div className="collapse-content">
          <p>
            Immediately Invoked Function Expression (IIFE): An IIFE is a
            JavaScript function that is executed immediately after it is
            defined. It is often used to create a new scope and avoid polluting
            the global namespace.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ES6Questions;
