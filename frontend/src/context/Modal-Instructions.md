Modal Context

First, make a folder in frontend/src called context. This folder will hold all the different context and context providers for your application. Add a file in the context folder called Modal.js. Create a React context called a ModalContext.

Create a functional component called ModalProvider that renders the ModalContext.Provider component with all the children from the props as a child. Render a div element as a sibling and right after the ModalContext.Provider.

Create a React ref called modalRef. Set the ref prop on the rendered div element to this modalRef. modalRef.current will be set to the actual HTML DOM element that gets rendered from the div. Create a component state variable called value that will be set to modalRef.current after the initial render (hint: use the useEffect hook). Pass this value as the value prop to the ModalContext.Provider component. Export the ModalProvider component. Import the ModalProvider component in frontend/src/index.js and wrap all the contents of the Root component with it.

Create a functional component called Modal that expects an onClose function and children as props. Get the value of the ModalContext into the Modal component by using the useContext hook and setting the value equal to a variable called modalNode. Render a div with an id of modal and nest a div with an id of modal-background and another div with an id of modal-content. In the modal-content div, render the children props. When the modal-background is clicked, the onClose prop should be invoked. Return null if modalNode is falsey.

The modal-background div needs to be rendered before the modal-content because it will naturally be placed "behind" the depth of the modal-content if it comes before the modal-content in the DOM tree.

To get these elements to show up in the div in the ModalProvider component, pass the rendered elements in the Modal component as the first argument of ReactDOM.createPortal and pass in the modalNode as the second argument, which is the reference to the actual HTML DOM element of the ModalProvider's div. Return the invocation of ReactDOM.createPortal. Make sure to import ReactDOM from the react-dom package.

Add a CSS file in the context folder called Modal.css. The modal div should have a position fixed and take up the entire width and height of the window. The modal-background should also take up the entire width and height of the window and have a position absolute. The modal-content div should be centered inside of the modal div by flexing the modal div and have a position of absolute. You may want to give the modal-background a background-color of rgba(0, 0, 0, 0.7) and the modal-content a background-color of white just to see them better.

Import the Modal.css file into the Modal.js context file.

Login Form Modal
Now it's time to refactor the LoginFormPage component to be a modal instead of a page.

Rename the LoginFormPage folder to LoginFormModal. Create a file called LoginForm.js in this folder and move all the code from the index.js file in the LoginFormModal file over to the LoginForm.js file. Rename the component from LoginFormPage to just LoginForm. The code for redirecting the user if there is no session user in the Redux store can be removed.

In the index.js file, import the LoginForm component. Create a functional component called LoginFormModal. Add a component state variable called showModal and default it to false. Render a button with the text Log In that, when clicked, will set the showModal state variable to true.

Import the Modal component into this file. Render the Modal component with the LoginForm component as its child only when the showModal state variable is true. Add an onClose prop to the Modal component set to a function that will change the showModal state variable to false when invoked. Export the LoginFormModal component as default from this file.

Import the new LoginFormModal component into the Navigation component. Replace the link to the login page with this LoginFormModal component.

Remove the LoginFormPage component from the App component.

It's finally time to test out your login form modal! Head to the home page, http://localhost:3000, and make sure you are logged out. Click the Log In button. The login form modal should pop up. It should close when you click anywhere outside of the form. Make sure the login functionality still works!
