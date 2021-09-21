Print Shop
==========

### Components

[ ] - Landing Page
    [ ] - Introduce the print shop
[ ] - Home Page
    [ ] -  dynamic Side Bar Navigation
        [ ] - Filter by Popular Design
            [ ] - onClick re-organize product display by Design Keywords
        [ ] - Filter by Deals
            [ ] - onClick re-organize product display by Deals
        [ ] - Filter by New Products
            [ ] - onClick re-organize product display by New Products
        [ ] - Filter by Search
            [ ] - text input 
                [ ] - saves keyword to local state
            [ ] - search button
                [ ] - filter through array by keywords
[ ] - Header
    [ ] - store name Heading
    [ ] - Cart button
        [ ] - navigates to current user cart
    [ ] Sign-up/log-in button
        [ ] - onclick navigate to log-in or register page 
    [ ] -  Deal Wheel
        [ ] - onclick navigate to deal wheel view
[ ] - Cart
    [ ] - Unordered list of products in the cart
        [ ] - button to remove item from cart
        [ ] - adjust number of items in cart
        [ ] - expanded information view of product
        [ ] - product price
            [ ] - price subtotal
    [ ] - Checkout Button
        [ ] - navigate to payment
    [ ] - Back button
        [ ] - navigate to products
    [ ] - Promoted products
        [ ] - similar designs or other products available with the same designs
[ ] - Deal Wheel
    [ ] - SVG of different available deals
    [ ] - Spin button
        [ ] - sends message to server to RNG an item on the wheel
        [ ] - STRETCH CSS animation of wheel spinning

### Reducers

[ ] - User
    [ ] - state: object { username: string, auth level: number, user id: number }
    [ ] - actions
        [ ] - Set user
        [ ] - Unset user
[ ] - Cart
    [ ] - state: object { current total: number, cart items: array[] }
    [ ] - actions
        [ ] - Add to cart
        [ ] - remove from cart
        [ ] - apply discount
[ ] - Products
    [ ] - state: array of objects
    [ ] - actions
        [ ] - set products

### Sagas

[ ] - Orders
[ ] - Log-in
[ ] - Sign-up
[ ] - Products
[ ] - Wheel Spin


        