# LAB - Class 36 / 37 / 38 / 39

## Project: Application State with Redux

### Author: Ike Steoger

### Problem Domain

- In the first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.
- In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.
- In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.
- In phase 4, we will be completing work on our Virtual Store by adding two full page views to the application: Product Details and Checkout.

> - As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
> - As a user, I want to choose a category and see a list of all available products matching that category.
> - As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.
> - As a user, I want to choose from products in the list and add them to my shopping cart.
> - As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
> - As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
> - As a user, I want to be able to remove an item from my shopping cart.
> - As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
> - As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.
> - As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
> - As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ikesteoger/storefront/actions)
<!-- - [back-end server url](http://xyz.com) (when applicable) -->
- [front-end application](https://codesandbox.io/p/github/IkeSteoger/storefront/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljrv7g42000b356pnd8dcbav%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljrv7g42000d356porkhi2y6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljrv7g42000b356pnd8dcbav%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljrv7g41000a356pbofsdugf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cljrv7g42000b356pnd8dcbav%2522%252C%2522activeTabId%2522%253A%2522cljrv7g41000a356pbofsdugf%2522%257D%252C%2522cljrv7g42000d356porkhi2y6%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljrv7g42000c356p0ct58rjh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522id%2522%253A%2522cljrv7g42000d356porkhi2y6%2522%252C%2522activeTabId%2522%253A%2522cljrv7g42000c356p0ct58rjh%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

### Collaborators

Ryan Gallaway  
Reece Renninger  
Kaeden O'meara  
Nick Mullaney  
Ryan Eastman  

### Setup

<!-- #### `.env` requirements

For now I have none and do not require one -->

#### How to initialize/run your application

- Run `npm i` and then `npm start`

<!--- #### How to use your library (where applicable) --->

#### Features / Routes

- Display products from pre-generated state that can be changed when user clicks categories.
- Allow users to add products to a cart and display the number of items in the cart & the items currently in cart.
- Allow users to see current stock quantities & hold them for reserve if added to cart.
- Allow users to remove products from the cart and insert them back into inventory.
- Allow users to see their cart on a separate page with a total cost.
- Allow users to view details of products on a separate page with more information about the product.

<!-- - GET : `/hello` - specific route to hit -->

#### Tests

- Run `npm test` to see tests running.

#### UMLs

##### UML Lab 39

![UML39](./src/assets/uml39.png)

##### UML Lab 38

![UML38](./src/assets/uml38.png)

##### UML Lab 37

![UML37](./src/assets/uml37.png)

##### UML Lab 36

![UML36](./src/assets/uml36.png)
