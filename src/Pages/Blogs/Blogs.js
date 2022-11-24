import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="question-answer-container pt-5 mx-30">
          <h1 className="text-2xl text-center font-medium">
            Questions and Answers
          </h1>
          <div className="question-container">
            <div className="question-answer">
              <h3 className="text-2xl font-medium mb-3">
                Question-1:  What are the different ways to manage a state in a React application?
              </h3>
              <p>
              There are four main types of state you need to properly manage in your React apps:
                <br />
                1. Local state <br />
                2. Global state <br />
                3. Server state <br />
                4. URL state
                <br /> <br />
                <strong>Local (UI) state –</strong> Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                <strong>Global (UI) state –</strong> Global state is data we manage across multiple components.

                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                Sometimes state we think should be local might become global. <br />

                <strong>Server state –</strong> Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                <strong>URL state –</strong> Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
              </p>
            </div>
            <div className="question-answer">
              <h3 className="text-2xl font-medium mb-3">
                Question-2:  How does prototypical inheritance work?
              </h3>
              <p>
              Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
              </p>
            </div>
            <div className="question-answer">
              <h3 className="text-2xl font-medium mb-3">
                Question-3: What is a unit test? Why should we write unit tests?
              </h3>
              <p>
              Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. 

                Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.
                <br />
                There are two types of unit testing:
                <br />
                <strong>Manual:</strong> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them. <br />
                <strong>Automated:</strong> This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
              <br />
              <br />

              To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests: <br />

            1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system. <br />
            2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. <br />
            3. It simplifies the debugging process. <br />
            4. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. <br />
            5. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. <br />
            6. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application. <br />
            7. In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. 
              </p>
            </div>
            <div className="question-answer">
              <h3 className="text-2xl font-medium mb-3">
                Question-4: React vs. Angular vs. Vue?
              </h3>
              <p><strong>Angular is a framework developed by Google:</strong> Google also uses Angular internally, hence we'll not see Angular disappear over night. It will be maintained and continuously improved <br />
                <strong>React is a library built by Facebook:</strong> Facebook also uses React internally, hence we'll not see React disappear over night. It will be maintained and continuously improved <br />
                <strong>Vue is a "standalone" project</strong> that is not built inside of any company. It used to be a one-man show (Evan You, its founder) but those days are long gone. Nowadays, it has a dedicated team of core contributors that work on Vue.</p>
              <p> <br />

                <span className='font-bold'>Angular:</span> 
                <br /> 
                Angular definitely is the "biggest" framework of the three. It's sometimes even called a "platform" rather than a framework. <br />

                Why? <br />

                Because Angular out of the box includes support for a lot of things. It helps you (= the developer) with controlling the UI, reacting to user input, validating user input in forms, routing, state management sending Ajax Http requests, providing offline support & PWA capabilities, testing, building your application, managing multiple applications and connecting them and much, much more! <br />

                All frameworks have the goal of making it easier for you, as a developer, to build reactive, complex user interfaces. But Angular gives you the full set of tools for that. It doesn't stop after DOM manipulation support - it adds the above-mentioned features to help you with any aspect you could require in apps you're working on. <br />

                In addition, there's an official CLI which helps you with creating and managing Angular projects, with keeping them up-to-date, with adding dependencies and even with deployment! <br />

                In its core, Angular is all about building re-usable user interface components which you then control with Angular and which you can combine with other components to build an entire user interface from those Angular-controlled components.
              <br /> <br />
              <span className='font-bold'>React:</span> 
                <br />
                Where Angular gives you everything, React gives you only one thing: A library for rendering content to the DOM and controlling it efficiently thereafter. It's also all about components and all about building user interfaces from components. It also gives you all the "tools" you need to define what should be rendered in which way under which circumstances. <br />

                But it does not include built-in form validation support. It does not include a router (for rendering different components based on URL changes) and it does not ship its own Http client. It has some state management support built-in but not for all scenarios. It also does not come with any other special features and it's definitely "slimmer" than Angular in that regard. For those features, you have to rely on the (arguably quite active) React community.

              <br /> <br />
              <span className='font-bold'>Vue:</span> 
                <br />
                Vue is a framework which kind of sits between React and Angular. It's not as "big" as Angular but it definitely includes more features than React does. Vue does give you built-in state management and it also ships with a built-in router. It does, however, not include form validation or Http client functionalities. <br />

                Just like Angular and React, the core of Vue is all about building user interfaces by combining re-usable components. But beyond that, it gives you a bit more than React and a bit less than Angular.
                
              </p>
            </div>
          </div>
        </div>
    );
};

export default Blogs;