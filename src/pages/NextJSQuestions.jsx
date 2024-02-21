/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const NextJSQuestions = () => {
  return (
    <Container>
      <div className="border border-purple-700 text-center py-1 font-medium rounded-md">
        Next JS Interview Questions and Answers for the Freshers
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          1. Mostly for which type of websites is Next JS used?
        </div>
        <div className="collapse-content">
          <p>
            Several types of websites and applications can be built. But the
            most popular are-
            <li>Desktop websites</li>
            <li>Static websites</li>
            <li>Server rendered applications</li>
            <li>SEO friendly websites</li>
            <li>Progressive web applications (PWA)</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-medium">
          2. Can you use Next JS with Redux?
        </div>
        <div className="collapse-content">
          <p>
            Yes, I can use Next.js with Redux. Just install the necessary
            packages (@reduxjs/toolkit and react-redux), create your Redux store
            and reducers as usual, then wrap your Next.js app component with the
            Provider component from react-redux and pass your Redux store as a
            prop. Finally, connect your components to the Redux store using the
            connect function from react-redux.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. How can a custom error page be created in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            In order to create a custom error page, we need to follow the given
            steps-
            <br />
            An "_error.js" has to be defined in the page folder.
            <br />
            Then "_error" component of our own has to be imported rather than
            "next/error" for using our custom error page.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. Mention the benefits of implementing a serverless model.
        </div>
        <div className="collapse-content">
          <p>
            It helps in splitting the app into smaller parts called lambdas.
            Hence, it helps in improving the readability as well as scalability
            of any app. The affordability is also enhanced due to the model-
            "pay for what you use."
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What do you mean by SSR?
        </div>
        <div className="collapse-content">
          <p>
            This is server-side rendering. This enables rendering on the server
            a client-side page app, and then we can send that rendered page to
            that client. These pages get loaded faster as the browser gets
            access to them sooner.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. How can serverless mode be implemented?
        </div>
        <div className="collapse-content">
          <p>
            For implementing server-less mode, the ‘serverless’ target has to be
            added in ‘next.config.js’.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. What is meant by Styled JSX in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            We use this CSS-in-JS library for writing encapsulated and scoped
            CSS for styling Next JS components. No other component gets affected
            by introducing the styles to a component using Styled JSX. This
            allows adding, changing, and deleting the styles without any
            complications.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What do you mean by automatic code-splitting?
        </div>
        <div className="collapse-content">
          <p>
            Each page bundles as well as serves every import declared by us. And
            therefore, unnecessary code is never loaded on the pages.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. Is Next JS backend, frontend, or full-stack?
        </div>
        <div className="collapse-content">
          <p>
            Next JS is full-stack. This means that it allows rendering
            client-side as well as server-side content. And this is the reason
            it is highly valued on React, as React allows only frontend
            development without it.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. Differentiate between imperative and declarative programming. And
          what kind is used in React?
        </div>
        <div className="collapse-content">
          <p>
            In Imperative programming, we have to specify each step of building
            anything, such as a user interface. Whereas in Declarative
            programming, we just need to describe the end product, and the
            software will create it for us. It takes comparatively less effort
            and time.
            <br />
            React allows its users to do declarative programming.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. What types of pre-rendering are available in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            Next JS provides two types of pre-rendering- Server-side
            rendering(SSR) and Static Generation (SSG). <br />
            1. Static Generation (SSG): Pages are generated at build time and
            served as static files. <br />
            2. Server-Side Rendering (SSR): Pages are rendered on each request,
            allowing for dynamic content generation.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. Differentiate between the pre-rendering types available in Next
          JS.
        </div>
        <div className="collapse-content">
          <p>
            The difference lies in the generation of HTML for a page.
            <br />
            Static Generation- It generates the HTML at build time, and we can
            reuse it on each request. It is the recommended one of the two. For
            using Static generation, either the page component has to be
            exported or 'getStaticProps'
            <br />
            Server-side rendering- It generates the HTML on each request. For
            using Server-side rendering, 'getServerSideProps' has to be
            exported.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. What is the by default pre-render in Next JS? Give an example.
        </div>
        <div className="collapse-content">
          <p>
            By default, Static Generation is the pre-render available in Next JS
            without any data fetched. An example is given below-
            <br />
            <pre className="text-sm mt-2">
              <code>
                function About() ( <br />
                Return div About /div <br />) export default About
              </code>
            </pre>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. What are the main scripts in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            The main scripts which are listed in the 'package.json' file are-
            <br />
            <li>Build- It creates a ready-to-deploy app.</li>
            <li>Dev- A development server is run on localhost: 3000.</li>
            <li>Start- Our built Next application is started</li>
            <li>
              Lint- Our Next project will be 'lint' with the help of dev
              dependency. ESLint warns if the written code needs fixing.
            </li>
          </p>
        </div>
      </div>

      <div className="border border-purple-700 text-center py-1 font-medium rounded-md">
        Next JS Interview Questions and Answers for the Experienced
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          1. Which method does Next JS recommend for fetching data?
        </div>
        <div className="collapse-content">
          <p>
            Next JS provides several methods for fetching data. But the one that
            it recommends is getInitialProps. It is an async function using
            which data can be retrieved from anywhere.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2. What are the properties available in a context object that arises
          on using getInitialProps?
        </div>
        <div className="collapse-content">
          <p>
            The following properties are there-
            <li>Pathname- The path section of the URL is specified.</li>
            <li>
              asPath- A string of the actual path that is shown in the browser
              is specified.
            </li>
            <li>
              Query- It specifies the query string section that is parsed as an
              object.
            </li>
            <li>Req- It specifies the HTTP request object (server only).</li>
            <li>Res- It specifies the HTTP response object (only server)</li>
            <li>
              Err- It specifies the error object in case any error is found
              while rendering.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. Differentiate between Next JS and Create-React-App.
        </div>
        <div className="collapse-content">
          <p>
            Next.js is a React-based open-source framework that helps developers
            build server-side rendered React applications.
            <br />
            The key difference between Create-React-App and Next.js is the way
            they handle routing. React uses client-side routing, meaning the
            page transitions are handled entirely on the client-side using
            JavaScript.
            <br />
            In contrast, Next.js provides server-side routing, which means that
            the server handles the routing and sends the pre-rendered pages to
            the client, resulting in faster page loads and better SEO. Next.js
            also provides additional features like automatic code splitting,
            static site generation, and dynamic imports.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. What are the most important features introduced in Next.js 12.1?
        </div>
        <div className="collapse-content">
          <p>
            The most important features are given below-
            <br />
            <li>New Rust-based compiler</li>
            <li>Faster image optimization</li>
            <li>On-demand incremental static regeneration (Beta)</li>
            <li>Self-hosted Next JS improvements</li>
            <li>Zero-configuration Jest plugin</li>
            <li>React 18 support</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. Which key features are provided by Next JS in terms of SEO?
        </div>
        <div className="collapse-content">
          <p>
            The following perks are there-
            <br />
            <li>Jamstack compatibility</li>
            <li>Increased flexibility in designing the UX of our website</li>
            <li>Automatic static optimization</li>
            <li>Improved data security</li>
            <li>Fast static websites</li>
            <li>Responsiveness and adaptability</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. How can build-id be configured in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            For configuring build-id in Next JS, a static ID must be configured
            between our build. Therefore, the ‘generateBuildId’ function must be
            provided with the given configuration-
            <br />
            <li>
              Create or open the next.config.js file in the root of your Next.js
              project.
            </li>
            <li>
              Define the generateBuildId function within the module.exports
              object.
            </li>
            <li>
              Implement custom logic inside the generateBuildId function to
              generate the build-id. This function should return a unique
              identifier for each build.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. Explain the importance of code splitting in Next JS.
        </div>
        <div className="collapse-content">
          <p>
            Using this feature, we can split the code into several bundles.
            These will be loaded only in parallel or on demand. Smaller bundles
            allow us to control the prioritization of resource load. And it
            majorly impacts the load time.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          9. Mention the three main ways to split code.
        </div>
        <div className="collapse-content">
          <p>
            Three main ways to split code are given below-
            <br />
            <li>
              Entry Points- In this method, configurations need to be entered
              manually.
            </li>
            <li>
              Prevent Duplication- SplitChinksPlugin or Entry dependencies are
              used here for splitting chunks.
            </li>
            <li>
              Dynamic Imports- The code is split using inline function calls
              within the modules.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. How can a page directory be created inside a project?
        </div>
        <div className="collapse-content">
          <p>
            To create a page directory inside a Next.js project:
            <li>Navigate to the root directory of your Next.js project.</li>
            <li>Create a new directory named pages.</li>
            <li>
              Inside the pages directory, you can create individual page files
              with the .js, .jsx, .ts, or .tsx extension. Each file in the pages
              directory represents a route in your Next.js application.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          11. How do you create a new Next.js application?
        </div>
        <div className="collapse-content">
          <p>
            To enable AMP (Accelerated Mobile Pages) in Next.js using the
            AMP-First Pages method:
            <li>Install @ampproject/next-amp and next-compose-plugins.</li>
            <li>Create a next.config.js file.</li>
            <li>
              Configure the Next.js project using withAMP from
              @ampproject/next-amp.
            </li>
            <li>
              Define AMP-enabled pages by creating .amp.js versions of existing
              pages or adding amp: true in page metadata.
            </li>
            <li>
              Run the Next.js application. AMP-enabled pages will serve the AMP
              version when accessed from AMP-enabled platforms.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          12. Explain the Hybrid AMP Pages method to enable AMP in Next JS.
        </div>
        <div className="collapse-content">
          <p>
            The coexisting AMP version of a traditional page is allowed by the
            Hybrid AMP pages. This enables the search engine to display the AMP
            page or the version in different search results on mobile.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          13. How can CDN be set up in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            To set up a CDN in Next.js:
            <li>
              Deploy your Next.js app to a hosting platform supporting CDN, like
              Vercel.
            </li>
            <li>
              Configure your CDN provider to cache and serve static assets
              globally.
            </li>
            <li>Monitor and optimize CDN settings for better performance.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          14. What configuration option will you set if the CDN is present on a
          separate domain?
        </div>
        <div className="collapse-content">
          <p>
            If the CDN is present on a separate domain in a Next.js application,
            you can set the assetPrefix configuration option in the
            next.config.js file to specify the base URL for loading static
            assets from the CDN. <br />
            By setting the assetPrefix option to the CDN URL, Next.js will
            prepend this URL to all static asset paths, ensuring that assets are
            loaded from the CDN domain. This is useful for optimizing the
            delivery of static assets and offloading the serving of assets to
            the CDN.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          15. Can Next JS be hosted in a web server such as Nginx?
        </div>
        <div className="collapse-content">
          <p>
            Next JS is relatively more complex than static HTML files. Here, an
            application server is required to run Node JS for deploying and
            running a Next JS application. Requests have been received that need
            to be processed on the server.
          </p>
        </div>
      </div>

      <div className="border border-purple-700 text-center py-1 font-medium rounded-md">
        Frequently Asked Nest JS Interview Questions and Answers:
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          1. What are some of the major companies that use Next JS?
        </div>
        <div className="collapse-content">
          <p>
            Some of the major companies that use Next JS are given below-
            <li>Tik Tok</li>
            <li>Nike</li>
            <li>Netflix Jobs</li>
            <li>GitHub Copilot</li>
            <li>Target</li>
            <li>Twitch</li>
            <li>Hulu</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          2. List some competitors and alternatives to Next JS.
        </div>
        <div className="collapse-content">
          <p>
            Some alternatives to Next JS are listed below-
            <li>React</li>
            <li>Create React App</li>
            <li>React Router</li>
            <li>Angular Universal</li>
            <li>Gatsby</li>
            <li>Hugo</li>
            <li>LoopBack</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          3. Mention some features of Next JS.
        </div>
        <div className="collapse-content">
          <p>
            Next JS has a lot of features. Some of them are given below-
            <li>Static export is supported by it.</li>
            <li>Easy server rendering by default is available.</li>
            <li>Automatic code-splitting can be sea-ported.</li>
            <li>Full Babel and Webpack control is provided.</li>
            <li>
              We can implement it with any of the HTTP servers of Node JS.
            </li>
            <li>A simple routine of client-side content is supported by it.</li>
            <li>Easily customizable.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          4. How can different digital products be built using Next JS?
        </div>
        <div className="collapse-content">
          <p>
            Several digital products can be built, such as-
            <li>Single web pages</li>
            <li>Minimum Viable Product (MVP)</li>
            <li>SaaS products</li>
            <li>Web portals</li>
            <li>Dashboards</li>
            <li>Retail and e-commerce websites</li>
            <li>User interfaces</li>
            <li>Complex web applications</li>
            <li>Static websites</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          5. In which languages is Next JS written?
        </div>
        <div className="collapse-content">
          <p>
            Next JS is written in JavaScript, Rust, TypeScript, and React
            languages.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          6. Why is there a built-in router in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            It has its own router because of the following reasons-
            <li>
              A router based on a file system is used in reducing the
              configuration.
            </li>
            <li>
              Shallow routing is supported by it. Hence, it doesn't need the
              methods for data fetching to change the URL.
            </li>
            <li>Routers are lazy-loadable.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white"></div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          7. How can the data be fetched in Next JS?
        </div>
        <div className="collapse-content">
          <p>
            We can use multiple methods for fetching data, such as-
            <li>Server-side renders using getServerSideProps</li>
            <li>
              Client-side renders using SWR or useEffect inside the components
              of React.
            </li>
            <li>Static-side renders using getStaticProps.</li>
            <li>
              Regenerate Incremental Static using the 'revalidate' prop inside
              getStaticProps.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          8. What are the requirements for building a web app from scratch using
          React?
        </div>
        <div className="collapse-content">
          <p>
            The requirements are given below-
            <li>
              A bundler such as webpack should be there to bundle the code.
              Also, a compiler such as a babel should be there to transform the
              code.
            </li>
            <li>
              We have to optimize the productions like the splitting of code.
            </li>
            <li>
              The pages have to be statistically pre-rendered for Search Engine
              Optimization. We might need to render from the client-side and
              server-side as well.
            </li>
            <li>
              Server-side code might also have to be written to connect the data
              store and React.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
         9. Why is Next JS preferred by most of the major companies?
        </div>
        <div className="collapse-content">
          <p>
            The main reasons for this are-
            <li>It is fully extensible.</li>
            <li>No setup is required.</li>
            <li>It is ready for production.</li>
            <li>It enables server-side rendering as well.</li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-medium">
          10. What is the process of installing Next JS?
        </div>
        <div className="collapse-content">
          <p>
            <li>Node JS should be already installed in the system.</li>
            <li>
              Node JS should be already installed in the system.{" "}
              <pre className="my-2 text-sm">
                <code>mkdir my-portfolio-site <br /> cd my-portfolio-site</code>
              </pre>
            </li>
            <li>It is now initialized using the package.json file.</li>
            <li>The y flag is used by npm init- y. And the given syntax is used for installing Next.js <pre className="my-2 text-sm"><code>npm install react-dom next</code></pre></li>
            <li>Next.js app is initialized by updating the package.json by using run script languages.he given script is then added after we find the package.json file.</li>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NextJSQuestions;
