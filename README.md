# PizzeriaUnoJS
Your job is to create a React application for a new pizza restaurant called PizzerioUno. They take pride in how their website looks like and want everyone to be able to order and enjoy their pizza through the website. This is where you come in! You are the newly hired web developer they wan’t for this mission! Please do NOT disappoint them

## job

### Functionality (80%)

* - [x] (10%) Implement a site where you can look at pizzas on the menu (e.g. http://localhost:3500/pizzas)

* - [x] (10%) All pizzas on the menu contain a link to a detailed page for each pizza, where extra information is provided. (e.g. http://localhost:3500/pizzas/1)

* - [x] (10%) Implement a site where you can look at different offers for pizza (e.g. http://localhost:3500/offers)

* - [x] (10%) Implement a site where you can look at information on the place PizzeriaUno(e.g. http://localhost:3500/about)

* - [x] (10%) Implement a site where you can look at all pizzas you have added to the cart. Cart items should be stored either in localStorage or cookie and retrieved when the user comes back. (e.g. http://localhost:3500/cart)

* - [x] (5%) The navigation bar should contain a logo (you can provide any image you find suitable) and four links

    * - [x] Menu

    * - [x] Offers

    * - [x] About us

    * - [x] Cart

* - [X] (25%) A user needs to go through the following steps when buying a pizza:
    1. - [x] Selects a pizza/s from menu or select previous order which can be retrieved at(http://localhost:3500/orders/:telephone)
    1. - [x] When selection is finished, he gets an option to go to checkout. The checkout should also be available in the cart
    1. - [x] In the first step of checkout the user needs to decide if he wants to pickup the pizza or have it delivered
    1. - [x] If he decides to have it delivered, the next step will be to input the following information: name, address, city, telephone and postal code 
    1. - [x] If he decides to pickup, the next step will be to input only the name and telephone
    1. - [x] At the final step he gets a review of his order and if he is satisfied he can click a button to confirm.
    1. - [x] When the confirm button is clicked he is redirected to a confirmation site, which should tell him his pizza is going in the oven. The order should be stored in theserver (e.g. http://localhost:3500/orders [POST]). You choose on what format the order should be, and therefore you need to adjust the Order.js file located on server /models/Order.js to fit your standards.
    1. - [x] Information about the user should be stored in either cookie or localStorage.
    1. - [x] Forms should be properly validated

### Structure (20%): 
* - [ ] (5%) All components should be tested
* - [ ] (5%) Components which receive props should have PropTypes set
* - [ ] (2.5%) All PropTypes should be documented
* - [x] (2.5%) Constants should be used to identify each action processed by the reducers
* - [ ] (5%) State which many components use should be stored in a Redux store by using actions and reducers

## Resources
All packages are available
## Submission
A single archive (*.zip, *.rar) containing all your code. **node_modules/** should be exluded.
## Other
A **server** is provided and can be downloaded in the **Assignment** section in Canvas. This server
should provide you with all the functionality you need, but if you want to change it, feel free. If you
change the server code, include the new server code with your submission and update the
README.md accordingly.
