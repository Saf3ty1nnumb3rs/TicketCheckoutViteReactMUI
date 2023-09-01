# Ticket Purchasing

This application was made using vite, React, Material UI, with Typescript.
Routing was implemented using React Router DOM.
Forms were made with Formik. Validation with Yup.
Internationalization was set up using react-intl.
Testing is set up and functional. From the root of the application enter `yarn jest` to run the test suite.

The application is built around a central layout and utilizes a context based state management. You will see within the ProviderWrapper and the AppLayout a series of nested components and providers that wraps the core of the application and makes various state objects available throughout the application.
The most complete form interactions can be found in the Add/Edit Payment method dialog seen on the checkout page. It is complete with validation and error messaging. You will not be able to submit your changes with invalid data (including expired card dates). Additionally, you may not submit your order until you have cart content, a selected payment method, and you have acknowledged TOS.

Feel free to click around the app.

## Cloning the Repository

1. **Navigate to the Repo**: Open GitHub and go to the repository you want to clone.
2. **Get URL**: Click the "Code" button, then copy the HTTPS URL.
3. **Open Terminal**: Open your command line or terminal.
4. **Navigate to Folder**: Use `cd your-folder-name` to navigate into the folder where you want the repo.
5. **Clone**: Run `git clone https://github.com/Saf3ty1nnumb3rs/TicketCheckoutViteReactMUI.git`.
6. **Enter Repo**: Type `cd TicketCheckoutViteReactMUI` to enter the repo directory.
7. **Install Dependencies**: Run `npm install` or `yarn` (based on what you use) to install dependencies.
8. **Run App**: Usually, `npm dev` or `yarn dev` will run the app.

## Forking the Repository

1. **Navigate to the Repo**: Open GitHub and go to the repository you want to fork.
2. **Fork**: Click the "Fork" button at the top-right corner.
3. **Your Fork**: You'll be redirected to your fork of the repository.
4. **Clone**: Now follow the cloning steps above to get this fork on your local machine.

After this, you can make changes, push them back to your fork, and then make a pull request to the original repo if you'd like to contribute.

PS: all of the socials in the footer are actually functional. Yay! Fun.
