import Container from "../components/Shared/Container/Container";

const NodeQuestions = () => {
  return (
    <Container>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1.What is Nodejs?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Node.js is an open-source, cross-platform JavaScript runtime
            environment and library to run web applications outside the client’s
            browser. Ryan Dahl developed it in 2009.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2.Node vs javascript.
        </div>
        <div className="collapse-content">
          <p>
            Ans: JavaScript is primarily used for client-side programming, while
            Node. js allows developers to build server-side applications using
            JavaScript <br />
            Node: <br />
            i. Nodejs is not a language it is a cross-platform open-source
            server-side runtime environment. <br />
            ii. Nodejs supports creating highly scalable server-side JavaScript
            applications which are event-driven and asynchronous. Nodejs helps
            to create back-end services. <br />
            iii. NodeJs uses V8 engine which enables it to parse and run
            JavaScript code. <br />
            iv. NodeJs are generally used for cross-platform data-intensive
            real-time applications. <br />
            <br />
            Javascript: <br />
            i. Java script is a lightweight object-oriented scripting language
            it is used to build a dynamic HTML page <br />
            ii. All browsers have an in-built JavaScript engine. <br />
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
            Ans: Nodejs is single-threaded but behind the scenes its behavior is
            multithreaded. Nodejs has two concepts asynchronous and nonblocking
            I/O. Nodejs can handle more than one request. Nodejs can’t handle at
            the same time more than one CPU-intensive task. And libuv library is
            used for multithreaded tasks.
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
            Ans: Node.js is non-blocking. Node.js operates on a single thread
            and utilizes an event-driven, non-blocking I/O model. This means
            that Node.js can handle multiple connections and I/O operations
            concurrently without getting blocked, allowing it to serve many
            clients efficiently.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">5.What is Npm?</div>
        <div className="collapse-content">
          <p>
            Ans: npm stands for Node Package Manager. It is the default package
            manager for Node.js, used for installing, managing, and sharing
            packages and libraries. npm is a command-line tool that comes
            bundled with Node.js installation.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6.sql vs nosql.
        </div>
        <div className="collapse-content">
          <p>
            Ans: SQL (Structured Query Language) and NoSQL (Not Only SQL) are
            two types of database management systems, each with its own
            characteristics, strengths, and use cases:
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
            Ans: I will think fast and see what could be the cause of the
            problem then Restart the Server: <br />
            Implement Fixes: <br />
            Monitor for Stability: Continuously monitor the server and
            application performance after the restart to ensure stability and
            prevent further crashes. Use monitoring tools to track resource
            utilization, error rates, and other relevant metrics.
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
            Ans: APIs work by sharing data between applications, systems, and
            devices. This happens through a request and response cycle. A user
            initiates a request for data by interacting with an application. The
            request is sent to the API, which retrieves the data and returns it
            to the user.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9.What is CRUD?
        </div>
        <div className="collapse-content">
          <p>
            Ans: CRUD stands for Create, Read, Update, and Delete. It represents
            the four basic operations that can be performed on data in a
            persistent storage system, such as a database.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10.Get vs post.
        </div>
        <div className="collapse-content">
          <p>
            Ans: GET Method: <br />
            i. The GET method is used to request data from a specified resource.{" "}
            <br />
            ii. When a client sends a GET request to the server, it retrieves
            data from the server without modifying it. <br />
            iii. GET requests are typically used for fetching data, such as
            retrieving a web page, fetching search results, or accessing
            resources that are read-only. <br />
            <br />
            POST Method: <br />
            i. The POST method is used to submit data to be processed by a
            specified resource. <br />
            ii. When a client sends a POST request to the server, it submits
            data to the server, which may result in the creation of a new
            resource, update of an existing resource, or execution of a
            server-side operation.
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
            <br />
            PUT Method: <br />
            i. The PUT method is used to update or replace an existing resource
            entirely with a new representation. <br /> <br />
            PATCH Method: <br />
            i. The PATCH method is used to apply partial modifications to an
            existing resource.
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
            i. Always Use a Gateway. <br />
            ii. Always Use a Central OAuth Server. <br />
            iii. Only Use JSON Web Tokens Internally. <br />
            iv. Use Scopes for Coarse-Grained Access Control. <br />
            v. Use Claims for Fine-Grained Access Control at the API Level.{" "}
            <br />
            vi. Trust No One. <br />
            vii. Create or Reuse Libraries for JWT Validation. <br />
            viii. Do Not Mix Authentication Methods. <br />
            ix. Protect All APIs <br />
            x. Issue JWTs for Internal Clients Inside Your Network <br />
            xi. Use JSON Web Key Sets for Key Distribution <br />
            xii. Keep Your Tokens Secure
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NodeQuestions;
