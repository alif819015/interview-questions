/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const NextJSQuestions = () => {
  return (
    <Container>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1.What is Next.js? And what are its main features?
        </div>
        <div className="collapse-content">
          <p>
          Next.js is a React framework for building server-side rendered (SSR) or statically generated (SSG) web applications. <br />
          Its main features include automatic code splitting, hot code reloading, file-based routing, API routes, built-in CSS and Sass support, and dynamic imports.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          2. How does Next.js differ from create-react-app?
        </div>
        <div className="collapse-content">
          <p>
          Next.js is a framework for building full-stack React applications with server-side rendering (SSR) or static site generation (SSG), whereas create-react-app is a tool for setting up a client-side React application with a development environment and build pipeline.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. What is Next.js and is it different from React?
        </div>
        <div className="collapse-content">
          <p>
          Next.js is a React framework that enhances React applications with features like server-side rendering (SSR), static site generation (SSG), and routing.
            <br />
            React is a JavaScript library for building user interfaces.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4.What is SSR and when to use it in Next.js applications?
        </div>
        <div className="collapse-content">
          <p>
          SSR (Server-Side Rendering) is a technique where web pages are generated on the server and sent to the client already populated with content. <br />
          SSR is useful for improving performance, SEO, and user experience, especially for content-heavy websites or applications with dynamic data.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What are the different data fetching methods in Next.js? And would you use each one?
        </div>
        <div className="collapse-content">
          <p>
          The different data fetching methods in Next.js include getStaticProps, getStaticPaths, getServerSideProps, and getInitialProps. <br />
          Each method is used depending on whether you need to fetch data at build time (SSG) or request time (SSR), and whether the data is dynamic or static.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. What is the significance of app.js and document.js files in Next.js?
        </div>
        <div className="collapse-content">
          <p>
          _app.js is used to initialize pages. It allows for setting up custom layouts, global CSS, and additional data fetching logic. <br />
          _document.js is used to customize the HTML document for each page. It's used for adding external stylesheets, scripts, and meta tags.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. How do you handle routing in the Next.js?
        </div>
        <div className="collapse-content">
          <p>
          Routing in Next.js is handled using file-based routing. Each page component corresponds to a route based on its file name in the pages directory.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What are the benefits of using Next.js?
        </div>
        <div className="collapse-content">
          <p>
          Benefits of using Next.js include improved performance, SEO, developer experience, code splitting, built-in CSS support, and server-side rendering.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. Explain how dynamic routes work in the Next.js?
        </div>
        <div className="collapse-content">
          <p>
          Dynamic routes in Next.js allow for creating pages with dynamic URLs by using brackets in the file name. The data for dynamic routes can be fetched using getStaticProps or getServerSideProps.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. What is server-side rendering and is it important?
        </div>
        <div className="collapse-content">
          <p>
          Server-side rendering (SSR) is the process of rendering web pages on the server instead of the client.
            <br />
            SSR is important for improving performance, SEO, and user experience by sending fully populated HTML content to the client.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. Explain the concept of prefetching of the Next.js and How it impacts performance?
        </div>
        <div className="collapse-content">
          <p>
          Prefetching in Next.js refers to the automatic fetching of data for pages linked by the user. <br />
          It improves performance by preloading necessary data and assets, reducing the latency when navigating between pages.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. Explain the purpose of "static site generation" (SSG) and "server-side rendering" (SSR) in the context of Next.js, and when would you use each approach?
        </div>
        <div className="collapse-content">
          <p>
          SSG generates HTML pages at build time, suitable for content that doesn't change often.
            <br />
            SSR generates HTML pages on each request, suitable for dynamic or frequently changing content.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. What are the key differences between client-side rendering (CSR) and server-side rendering (SSR) in Next.js?
        </div>
        <div className="collapse-content">
          <p>
          CSR renders pages in the browser using JavaScript, while SSR renders pages on the server and sends HTML to the client.
            <br />
            SSR improves initial load time and SEO, while CSR provides faster subsequent page loads.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. What are the performance optimization techniques you can use in a Next.js application, and why are they important?
        </div>
        <div className="collapse-content">
          <p>
          Performance optimization techniques include code splitting, lazy loading, image optimization, and caching.
            <br />
            They are important for improving page load times, reducing bandwidth usage, and enhancing user experience.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          15. How do you create dynamic routes in the Next.js?
        </div>
        <div className="collapse-content">
          <p>
          Dynamic routes in Next.js can be created by adding brackets to the file name in the pages directory, indicating dynamic segments in the URL path. For example, [id].js creates a dynamic route with an id parameter.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NextJSQuestions;
