import Container from "../components/Shared/Container/Container";

const MongoDBQuestion = () => {
  return (
    <Container>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title  font-medium">
          1.What is the $ set in MongoDB?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In MongoDB, the $set operator is used to replace the value of a
            field with a specified value. $set is to update or create fields
            within a document. <br />
            Behavior: <br />
            i. If the field already exists, $set replaces its value with the
            specified value. <br />
            ii. If the field does not exist, $set creates a new field with the
            specified value. <br />
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          2.What is the purpose of a database?
        </div>
        <div className="collapse-content">
          <p>
            Ans: The purpose of a database is to efficiently and securely store,
            manage, and retrieve data. Databases serve as organized repositories
            for structured or unstructured information that can be accessed,
            manipulated, and analyzed by various applications or users. Here are
            some key purposes and functions of databases.
            <br />
            i. Data Storage <br />
            ii. Data Retrieval <br />
            iii. Data Manipulation <br />
            iv. Data Integrity <br />
            v. Concurrency Control <br />
            vi. Security <br />
            vii. Scalability and Performance <br />
            viii. Data Analysis and Reporting <br />
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          3.What do you mean by database design and database schema design?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Database design creates the blueprint for the entire database
            system, covering its architecture, organization, and implementation
            phases. <br />
            Database schema design specifically focuses on defining the
            structure and organization of individual tables within the database,
            specifying attributes, data types, constraints, and relationships.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          4. What is mongoose? How does it work? Have you ever used it?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Mongoose is a MongoDB object modeling tool designed to work in
            an asynchronous environment. It provides an elegant way to interact
            with MongoDB databases using Node.js. Here are some key points about
            Mongoose: <br />
            (a): Purpose and Features: <br />
            i. Object-Document Mapping (ODM): Mongoose allows you to define
            schemas (blueprints) for your data models, making it easier to work
            with MongoDB collections. <br />
            ii. Validation: Mongoose provides built-in validation for data
            consistency. <br />
            iii. Middleware: You can define pre-save and post-save hooks
            (middleware) to perform actions before or after saving data. <br />
            iv. Query Building: Mongoose simplifies query building and provides
            a fluent API for CRUD operations. <br />
            v. Population: Mongoose supports population, allowing you to
            reference other documents in your schema. <br />
            <br />
            How Mongoose Works: <br />
            i. Schema Definition: You define a schema using Mongoose’s Schema
            class. A schema defines the structure of your data, including
            fields, types, and validation rules. <br />
            ii. Model Creation: You create a model by compiling the schema into
            a constructor function using mongoose.model(). The model represents
            a MongoDB collection. <br />
            iii. Document Instances: You create document instances (records)
            using the model constructor. Each instance corresponds to a document
            in the collection. <br />
            iv. CRUD Operations: You can perform CRUD operations (create, read,
            update, delete) on documents using the model methods. <br />
            v. Middleware Hooks: You can attach middleware functions to the
            schema to handle events like pre-save or post-save. <br />
            vi. Connection: Mongoose establishes a connection to the MongoDB
            server using the mongoose.connect() method. <br />
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          5. Why do we use Node MongoDB with React without Mysql?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Using Node.js with MongoDB alongside React instead of MySQL
            offers several advantages: <br />
            i. JSON-Like Data Structure: MongoDB`s JSON-like format aligns well
            with JavaScript, simplifying data handling. <br />
            ii. Flexible Schema: MongoDB allows dynamic and evolving data
            structures, ideal for agile development. <br />
            iii. Scalability: MongoDB`s architecture scales horizontally,
            crucial for handling large datasets or growing user bases. <br />
            iv. NoSQL Performance: MongoDB`s NoSQL architecture offers
            high-performance read and write operations, especially for complex
            queries. <br />
            v. Document-Oriented Storage: MongoDB`s document-oriented model
            suits applications with hierarchical data structures. <br />
            vi. Developer Productivity: Consistent technology stack (JavaScript)
            across the application stack streamlines development and
            maintenance.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          6. How Does MongoDB Differ From Traditional Relational Databases?
        </div>
        <div className="collapse-content">
          <p>
            Ans: MongoDB differs from traditional relational databases in
            several key aspects: <br />
            i.Data Model: MongoDB uses a document-oriented data model, storing
            data in flexible, schema-less BSON documents, while relational
            databases use a tabular model with fixed schemas.
            <br />
            ii. Schema Flexibility: MongoDB offers schema flexibility, allowing
            documents within a collection to have varying structures, unlike
            relational databases that enforce rigid schemas.
            <br />
            iii. Query Language: MongoDB uses a query language similar to JSON,
            while relational databases use SQL.
            <br />
            iv. Normalization vs. Denormalization: MongoDB often denormalizes
            data for performance, embedding related data within a single
            document, whereas relational databases emphasize normalization.
            <br />
            v. Scalability: MongoDB is designed for horizontal scalability,
            distributing data across servers, while relational databases
            typically scale vertically by upgrading hardware.
            <br />
            vi. ACID Transactions: MongoDB supports ACID transactions at the
            document level within a single replica set, but lacks support for
            distributed transactions compared to traditional relational
            databases.
            <br />
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          7.What is a collection in MongoDB?
        </div>
        <div className="collapse-content">
          <p>
            Ans: A collection in MongoDB is like a table in a relational
            database, storing related documents. It offers flexibility in
            document structure, supports powerful querying, indexing, and
            scalability through sharding and replication.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          8. How does MongoDB store data?
        </div>
        <div className="collapse-content">
          <p>
            Ans: MongoDB stores data as BSON documents, which are binary
            representations of JSON-like data. These documents are organized
            into collections, similar to tables in relational databases. MongoDB
            supports indexing for efficient querying, sharding for horizontal
            scaling, and replica sets for data redundancy and fault tolerance.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  font-medium">
          9. What is the primary key in MongoDB?
        </div>
        <div className="collapse-content">
          <p>
            Ans: In MongoDB, the primary key is represented by the ``_id``
            field, which uniquely identifies each document within a collection.
            It`s automatically generated if not provided explicitly during
            document insertion.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default MongoDBQuestion;
