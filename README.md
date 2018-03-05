# PizzeriaUnoJS
Your job is to create a React application for a new pizza restaurant called PizzerioUno. They take pride in how their website looks like and want everyone to be able to order and enjoy their pizza through the website. This is where you come in! You are the newly hired web developer they wan’t for this mission! Please do NOT disappoint them

## job

### Functionality (80%)

* - [x] (10%) Implement a site where you can look at pizzas on the menu (e.g. http://localhost:3500/pizzas)

* - [ ] (10%) All pizzas on the menu contain a link to a detailed page for each pizza, where extra information is provided. (e.g. http://localhost:3500/pizzas/1)

* - [ ] (10%) Implement a site where you can look at different offers for pizza (e.g. http://localhost:3500/offers)

* - [ ] (10%) Implement a site where you can look at information on the place PizzeriaUno(e.g. http://localhost:3500/about)

* - [ ] (10%) Implement a site where you can look at all pizzas you have added to the cart. Cart items should be stored either in localStorage or cookie and retrieved when the user comes back. (e.g. http://localhost:3500/cart)

* - [ ] (5%) The navigation bar should contain a logo (you can provide any image you find suitable) and four links

    * - [ ] Menu

    * - [ ] Offers

    * - [ ] About us

    * - [ ] Cart

* - [ ] (25%) A user needs to go through the following steps when buying a pizza:
    1. - [ ] Selects a pizza/s from menu or select previous order which can be retrieved at(http://localhost:3500/orders/:telephone)
    2. - [ ] When selection is finished, he gets an option to go to checkout. The checkout should also be available in the cart
    3. - [ ] In the first step of checkout the user needs to decide if he wants to pickup the pizza or have it delivered
    4. - [ ] If he decides to have it delivered, the next step will be to input the following information: name, address, city, telephone and postal code 
    5. - [ ] If he decides to pickup, the next step will be to input only the name and telephone
    6. - [ ] At the final step he gets a review of his order and if he is satisfied he can click a button to confirm.
    7. - [ ] When the confirm button is clicked he is redirected to a confirmation site, which should tell him his pizza is going in the oven. The order should be stored in theserver (e.g. http://localhost:3500/orders [POST]). You choose on what format the order should be, and therefore you need to adjust the Order.js file located on server /models/Order.js to fit your standards. 
    8. - [ ] Information about the user should be stored in either cookie or localStorage. 
    9. - [ ] Forms should be properly validated

### Structure (20%): 
* - [ ] (5%) All components should be tested 
* - [ ] (5%) Components which receive props should have PropTypes set 
* - [ ] (2.5%) All PropTypes should be documented 
* - [ ] (2.5%) Constants should be used to identify each action processed by the reducers 
* - [ ] (5%) State which many components use should be stored in a Redux store by using
actions and reducers
