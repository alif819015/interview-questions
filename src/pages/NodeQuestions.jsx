/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const NodeQuestions = () => {
  return (
    <Container>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">1.What is Nodejs?</div>
        <div className="collapse-content">
          <p>
            Node.js is a powerful framework developed on Chrome’s V8 JavaScript
            engine that compiles the JavaScript directly into the native machine
            code. It is an open-source, cross-platform runtime environment for
            executing JavaScript code.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">2.Node vs javascript.</div>
        <div className="collapse-content">
          <p>
            Ans: JavaScript is primarily used for client-side programming, while
            Node. js allows developers to build server-side applications using
            JavaScript <br />
            <li>
              JavaScript is a programming language for scripting within web
              browsers whereas NodeJS is a runtime environment enabling
              server-side JavaScript execution.
            </li>
            <li>
              Javascript executes client-side, handling interactions and dynamic
              content. NodeJS is used for building server-side applications.
            </li>
            <li>
              JavaScript is used for front-end development, including user
              interface interactions. Node.js is commonly used for back-end
              development, powering web servers, APIs, and real-time
              applications.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3.Nodejs single threaded or multi threaded?
        </div>
        <div className="collapse-content">
          <p>
            Node.js is a single-threaded application with event looping for
            async processing. It follows a single-threaded event loop model to
            optimize resource utilization and provide high concurrency. It can
            efficiently manage and process many I/O operations without the need
            for complex thread management
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4.NodeJs is blocking or non-blocking?
        </div>
        <div className="collapse-content">
          <p>
            Node.js is non-blocking, meaning that it doesn't wait for I/O
            operations (such as reading files or making network requests) to
            complete before moving on to execute other code. Instead, it
            utilizes an event-driven, asynchronous architecture.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">5.What is Npm?</div>
        <div className="collapse-content">
          <p>
            NPM stands for Node Package Manager, responsible for managing all
            the packages and modules for Node.js.Command line utility to install
            packages do version management and dependency management of Node.js
            packages.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">6.sql vs nosql.</div>
        <div className="collapse-content">
          <p>
            Ans: SQL (Structured Query Language) and NoSQL (Not Only SQL) are
            two types of database management systems, each with its own
            characteristics, strengths, and use cases:
            <li>
              SQL is structured data in tables with a fixed schema whereas NoSQL
              is a flexible data model (key-value, document, wide-column,
              graph).{" "}
            </li>
            <li>
              Utilizes SQL for querying and manipulating data and NoSQL for
              various query languages specific to each database type.
            </li>
            <li>
              SQL is typically vertically scalable whereas NoSQL is typically
              horizontally scalable.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7.what will you do if the server side crushes?
        </div>
        <div className="collapse-content">
          <p>
            <li>
              Identify the Issue: Determine the cause of the crash by examining
              logs and error messages.
            </li>
            <li>
              Restart the Server: Restart the server to restore functionality
              temporarily.
            </li>
            <li>
              Fix the Root Cause: Address the underlying issue causing the
              crash, such as bugs in code, resource limitations, or external
              dependencies.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8.How does the API work?
        </div>
        <div className="collapse-content">
          <p>
            API stands for Application Programming Interface. It is a set of
            protocols, routines, and tools that software developers use to build
            and interact with applications or systems.it is a way for different
            applications to communicate with each other and exchange data or
            functionality.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">9.What is CRUD?</div>
        <div className="collapse-content">
          <p>
            CRUD stands for Create, Read, Update, and Delete, which are the four
            basic operations performed on data in a database or application.
            <li>
              Create: This operation involves inserting new data into a database
              or application.
            </li>
            <li>
              Read: This operation involves retrieving existing data from a
              database or application.
            </li>
            <li>
              Update: This operation involves modifying existing data in a
              database or application.
            </li>
            <li>
              Delete: This operation involves removing existing data from a
              database or application.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">10.Get vs post.</div>
        <div className="collapse-content">
          <p>
            The key difference between get vs post:
            <br />
            <li>
              GET - retrieves a representation of a resource. POST method is
              called when you have to add a child resource.
            </li>
            <li>
              GET-method data is visible in the URL, potentially less secure
              whereas POST-method is More secure as data is not visible in the
              URL.
            </li>
            <li>
              GET-method caching is possible, making it suitable for retrieving
              data whereas POST-method data is not cached by default.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11.What is the difference between PUT and Patch?
        </div>
        <div className="collapse-content">
          <p>
            Ans: The main difference between the PUT and PATCH HTTP methods is
            their semantics and usage for updating resources in RESTful APIs.{" "}
            <br />
            <li>
              PUT replaces the entire resource whereas PATCH updates part of the
              resource.
            </li>
            <li>
              PUT requires sending the entire resource. PATCH can send only the
              modified fields, reducing payload size.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12.How will you secure an API?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Securing an API implements various measures to protect it from
            unauthorized access, data breaches, and other security threats. To
            secure an API. we need to follow some steps. <br />
            <li>
              Authentication: Ensure strong methods like API keys, OAuth, or JWT
              tokens to verify client identity.
            </li>
            <li>
              Authorization: Define access controls based on roles, permissions,
              or scopes to limit actions users can perform.
            </li>
            <li>
              API Keys Management: Securely manage and rotate keys, tokens, and
              credentials.
            </li>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NodeQuestions;
