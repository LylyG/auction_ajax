## Normal Mode

This application is an auction site, and although it doesn't do much now, it will do more and more over time. You will note that you can view a list of all items for sale, can make new items, and can make bids on items.

Tonight, your assignment is to modify the bidding page. Currently, to see if anyone else has bid, you have to refresh the entire page. Also, if you place a bid yourself, the page refreshes to display the changes. You will be using AJAX to allow both of those behaviors to occur without page reload.

To be specific:

The place bid form should be remote, and should (a) update the highest bid and (b) update the next bid field to be $10 higher than the max bid.
Every 15 seconds, these same two areas should update if someone else places a new bid.
In order to test the case of "someone else" placing a bid, feel free to have the app open in two different tabs. You can make a bid in one and then check that the other one updates automatically.
