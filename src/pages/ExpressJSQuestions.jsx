/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ExpressJSQuestions = () => {
  return (
    <Container>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1.What is Express js?
        </div>
        <div className="collapse-content">
          <p>
            AAns: Express.js is the most popular web framework for Node.js. It
            makes it easier to organize your application’s functionality with
            middleware and routing. It is designed for building web applications
            and APIs.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2.What are queries in Express JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In Express.js, queries are parameters passed in the URL of an
            HTTP GET request. They`re accessed using req.query on the server
            side and are commonly used for passing data from the client to the
            server for filtering or additional context. Query parameters are
            key-value pairs included in the URL after the “?” symbol, and they
            are separated by “&” symbols.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. Why Do you use try catch in Express JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In Express.js, try...catch blocks are used to catch errors and
            prevent them from crashing the application, ensuring smoother
            operation even when things go wrong during asynchronous tasks like
            database queries or API calls.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. Mention some features of Express JS.
        </div>
        <div className="collapse-content">
          <p>
            Ans: Express.js is a powerful and popular web framework for Node.js,
            offering a wide range of features that make it ideal for building
            web applications and APIs. <br />
            Here are some brief features of Express.js: <br />
            i. Middleware: Easily integrates middleware functions. <br />
            ii. Routing: Simple and flexible HTTP routing. <br />
            iii. Error Handling: Built-in and custom error handling support.{" "}
            <br />
            iv. Middleware Ecosystem: A rich collection of middleware modules.{" "}
            <br />
            v. Request Parsing: Parses HTTP request data. <br />
            vi. Session Management: Provides session middleware. <br />
            <br />
            Overall, Express.js offers a powerful and flexible framework for
            building web applications and APIs in Node.js, with features
            designed to streamline development and improve productivity. Its
            minimalist design and extensive ecosystem make it a popular choice
            among developers for building modern web applications.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. Why do we use Express JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: We use Express.js for building web applications and APIs
            quickly and efficiently. It simplifies the process of handling HTTP
            requests, routing, middleware integration, and more, making it ideal
            for creating scalable and feature-rich server-side applications in
            JavaScript. <br />
            <br />
            Overall, Express.js is a powerful and flexible framework for
            building web applications and APIs in Node.js, offering simplicity,
            flexibility, performance, and a large ecosystem of tools and
            libraries. It is widely used by developers around the world for a
            wide range of projects, from small prototypes to large-scale
            production applications.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. Difference between Node JS and Express JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Node.js is the runtime environment that allows you to run
            JavaScript on the server, while Express.js is a framework that runs
            on top of Node.js, providing utilities and tools for building web
            applications and APIs. You can use Express.js to streamline the
            development process and leverage its features for building robust
            server-side applications in JavaScript. <br />
            <br />
            Node.js and Express.js are both widely used technologies in the
            JavaScript ecosystem, particularly for server-side development.
            However, they serve different purposes and are often used together.{" "}
            <br />
            Node.js: <br />
            i. Node.js is a runtime environment that allows you to execute
            JavaScript code outside of a web browser. It`s built on the V8
            JavaScript engine from Google Chrome. <br />
            ii. It provides an event-driven architecture and non-blocking I/O
            operations, making it lightweight and efficient for building
            scalable network applications. <br />
            iii. Node.js enables you to write server-side code using JavaScript,
            which was traditionally reserved for client-side scripting. <br />
            <br />
            Express.js: <br />
            i. Express.js is a web application framework for Node.js. It
            provides a robust set of features for building web and mobile
            applications, including routing, middleware support, template
            engines, and more. <br />
            ii. It simplifies the process of building web servers and APIs by
            providing a high-level abstraction over Node.js`s HTTP module.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. What is Middleware in Express JS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Middleware functions in Express.js are functions that have
            access to the request and response objects. They can modify the
            request/response, perform additional processing, and pass control to
            the next middleware in the chain.
            <br />
            Middleware functions in Express.js are used to: <br />
            i. Execute code before handling the request. <br />
            ii. Manipulate request and response objects. <br />
            iii. End the request-response cycle. <br />
            iv. Call the next middleware function in the stack. <br />
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. Explain what is CORS in Express jS?
        </div>
        <div className="collapse-content">
          <p>
            Ans: CORS (Cross-Origin Resource Sharing) in Express.js is a
            security feature that controls which origins (websites) are allowed
            to access resources on a server. It helps prevent unauthorized
            access to resources and ensures safe communication between client
            and server.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9.What are the different types of HTTP requests?
        </div>
        <div className="collapse-content">
          <p>
            Ans: HTTP (Hypertext Transfer Protocol) These HTTP methods provide a
            standardized way for clients to interact with resources on web
            servers. Each method has its specific semantics and use cases, and
            understanding them is essential for building RESTful APIs and web
            applications. <br />
            <br />
            GET: <br />
            i. Used to retrieve data from a specified resource. <br />
            ii. GET requests should only retrieve data and should not have any
            other effect on the server. <br />
            <br />
            POST: <br />
            i. Used to submit data to be processed to a specified resource.{" "}
            <br />
            ii. POST requests can be used to create new resources, submit form
            data, or upload files. <br />
            <br />
            PUT: <br />
            i. Used to update or replace the entire content of a specified
            resource. <br />
            ii. The target resource`s URI provided in the request should be the
            same as the one that will be updated. <br />
            <br />
            PATCH: <br />
            i. Similar to PUT, but it applies partial modifications to a
            resource. <br />
            ii. It`s typically used when you want to apply only partial
            modifications to an existing resource. <br />
            <br />
            DELETE: <br />
            i. Used to delete a specified resource. <br />
            ii. DELETE requests indicate that the client wants to remove the
            resource identified by the request URI.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10.What is the use of app.use in Express JS?
        </div>
        <div className="collapse-content">
          <p>
          app.use() in Express.js is used to add middleware functions to the application's request processing pipeline. It applies these middleware functions to all incoming requests, allowing for common tasks like parsing request bodies or serving static files.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ExpressJSQuestions;
