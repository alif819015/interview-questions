import Container from "../components/Shared/Container/Container";
/* eslint-disable react/no-unescaped-entities */
const JavascriptQuestions = () => {
    return (
        <Container id="javaScript">
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium bg-white">
          1. What is JavaScript?
        </div>
        <div className="collapse-content bg-white">
          <p>
            JavaScript is a high-level, interpreted programming language
            primarily used for adding interactivity to web pages. It runs on the
            client-side and allows for dynamic content, form validation, and
            other interactive features.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2. How does JavaScript work?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript works by running code in the browser. When you visit a
            webpage, the browser reads and executes the JavaScript instructions.
            This code can make the webpage interactive, respond to your actions,
            and communicate with the internet, enhancing your overall web
            experience.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. How does JavaScript code is executed in the Browser?
        </div>
        <div className="collapse-content">
          <p>
            In a webpage, the browser reads and runs JavaScript code. It
            executes the code line by line, handling tasks like interacting with
            the page, responding to events, and making requests to servers. This
            happens on the user's device, making web pages dynamic and
            interactive.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. What are the differences between “==” and “===” ?
        </div>
        <div className="collapse-content">
          <p>
            The double equal(‘==’) operator tests for abstract equality. It does
            the necessary type conversions before doing the equality comparison.{" "}
            <br />
            The triple equal(‘===’) operator tests for strict equality. It will
            not do the type conversion hence if the two values are not of the
            same type when compared, it will return false.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What is a callback function?
        </div>
        <div className="collapse-content">
          <p>
            Any function that is passed as an argument to another function so
            that it can be executed in that other function is called a callback
            function. In JavaScript, the way to create a callback function is to
            pass it as a parameter to another function and then call it back
            after the task is completed.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. When will you return something from a function?
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
          7. Tell me about bind, call, and apply.
        </div>
        <div className="collapse-content">
          <p>
            call(): Invokes a function with a specified this value and
            individual arguments provided as comma-separated values. <br />
            apply(): Invokes a function with a specified this value and
            arguments provided as an array or an array-like object. <br />
            bind(): Returns a new function with a bound this value and optional
            initial arguments. The bound function can be invoked later.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What is a Closure in JavaScript? How does it work?
        </div>
        <div className="collapse-content">
          <p>
            Closures are created whenever a variable that is defined outside the
            current scope is accessed from within some inner scope. It gives you
            access to an outer function’s scope from an inner function
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. What does the “this” keyword indicate in JavaScript?
        </div>
        <div className="collapse-content">
          <p>
            The “this” keyword refers to the current object in a method or
            constructor. It references the object that is executing the current
            function. If the function being referenced is a regular function,
            “this” references the global object.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10.What is Event bubbling in js?
        </div>
        <div className="collapse-content">
          <p>
            Event Bubbling is a concept in the DOM. It happens when an element
            receives an event, and that event bubbles up to its parent and
            ancestor elements in the DOM tree until it gets to the root element.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. What is an Event Loop?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript has a runtime model based on an event loop, which is
            responsible for executing the code, collecting and processing
            events, and executing queued sub-tasks. This model is quite
            different from models in other languages like C and Java.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. Explain hoisting in JavaScript.
        </div>
        <div className="collapse-content">
          <p>
            Hoisting is JavaScript's default behavior of moving all declarations
            to the top of the current scope. In JavaScript, hoisting allows you
            to use functions and variables before they're declared.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. What is a recursive function?
        </div>
        <div className="collapse-content">
          <p>
            A Recursive function can be defined as a routine that calls itself
            directly or indirectly. And, this technique is known as recursion.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. Difference between undefined and null.
        </div>
        <div className="collapse-content">
          <p>
            undefined: A variable that has not been assigned a value is of type
            undefined. A method or statement also returns undefined if the
            variable that is being evaluated does not have an assigned value.{" "}
            <br />
            null: In JavaScript, null is a special value that represents an
            empty or unknown value. It is used to indicate that a variable has
            no value or that it has been explicitly set to nothing.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          15. What are the different data types in JavaScript?
        </div>
        <div className="collapse-content">
          <p>
            There are two types of data in JavaScript. <br />
            1. Primitive data types: The predefined data types provided by
            JavaScript language are known as primitive data types. Below is a
            list of Primitive Data Types: Number, String, Boolean, Undefined,
            Null, BigInt, and Symbol. <br />
            2. Non-primitive data types: The data types that are derived from
            primitive data types of the JavaScript language are known as
            non-primitive data types. Below is a list of Non-primitive data
            types: Object, Array.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          16. What is DOM?
        </div>
        <div className="collapse-content">
          <p>
            The Document Object Model (DOM) is a programming interface for web
            documents. It allows programs and scripts to dynamically access and
            update the content, structure, and style of a document.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          17. Is JavaScript a static type or a dynamic type?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a dynamically typed language. In a dynamically typed
            language, the type of a variable is checked during run-time in
            contrast to a statically typed language, where the type of a
            variable is checked during compile-time.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          18. What is a variable?
        </div>
        <div className="collapse-content">
          <p>
            A variable in programming is like a container that holds a value or
            data. It has a name and can store different information, allowing
            developers to work with and manipulate data in their programs.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          19. What are compilers and interpreters? And what is the difference
          between them?
        </div>
        <div className="collapse-content">
          <p>
            Compiler: Translates entire source code into machine code before
            execution, resulting in separate executable files. Examples include
            C, C++, and Java. <br />
            Interpreter: Translates and executes source code line by line,
            without producing separate executable files. Examples include
            Python, JavaScript, and Ruby.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          20. What is scope? And what are block scope, global scope, and
          function scope?
        </div>
        <div className="collapse-content">
          <p>
            Scope determines the accessibility of variables, objects, and
            functions from different parts of the code. <br />
            Block scope: A block scope is created by enclosing statements or
            code within curly braces {}. Variables declared within a block
            scope, using let or const, are only accessible within that block and
            any nested blocks. <br />
            Global scope/Function Scope: The global scope is the outermost scope
            in JavaScript, where variables are declared without any specific
            block scope. It is accessible from anywhere within the program.
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
          22. map() vs forEach().
        </div>
        <div className="collapse-content">
          <p>
            Map: It transforms each element of an array by applying a given
            function and returns a new array with the transformed elements.{" "}
            <br />
            ForEach: It applies a function to each element of an array, but
            doesn't modify the original array, and doesn't return anything.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          23. What is a function in Javascript?
        </div>
        <div className="collapse-content">
          <p>
            In JavaScript, a function is a reusable block of code that performs
            a specific task or set of tasks. It is defined with a name, and it
            can take input values (parameters) and return a result. Functions
            help organize and structure code, making it modular and easier to
            maintain.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          24. Function declaration vs function expression.
        </div>
        <div className="collapse-content">
          <p>
            Function Declaration: Uses the function keyword followed by the
            function name, parameter list, and function body. Function
            declarations are hoisted, meaning they are available throughout the
            entire scope, even before their actual declaration in the code.{" "}
            <br />
            Function Expression: Assigns a function to a variable or property.
            Function expressions are not hoisted and must be defined before they
            are used.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          25. What are the break and continue statements?
        </div>
        <div className="collapse-content">
          <p>
            The break statement terminates a while or for loop completely. The
            continue statement terminates the execution of the statements within
            a while or for loop and continues the loop in the next iteration.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          26. What is the global variable?
        </div>
        <div className="collapse-content">
          <p>
            Global variables are variables that are defined outside of any
            function or block scope in a JavaScript program. They have a global
            scope, meaning they can be accessed from anywhere within the
            program, including inside functions and blocks.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          27. How to handle an asynchronous program?
        </div>
        <div className="collapse-content">
          <p>
            Asynchronous operations in JavaScript can be handled using
            callbacks, promises, or async/await. Callbacks are functions passed
            as arguments to other functions and called when an operation
            completes. Promises provide a more structured way to handle
            asynchronous operations. Async/await is a syntax introduced in ES8
            that allows writing asynchronous code in a more synchronous manner.
          </p>
        </div>
      </div>
    </Container>
    );
};

export default JavascriptQuestions;