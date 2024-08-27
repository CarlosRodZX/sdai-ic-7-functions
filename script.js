// Type node script.js in the codespaces console to run this file. Make sure to save before running it. CTRL + ` will open the console if you don't see it.
function isEligibleForFreeShipping(purchaseAMount, isMember) {

    //Declare freeShipping variable and assigning it's value 

    let isEligibleForFreeShipping

    if (isMember === true) {

        freeShipping = true;
    
    } else if (purchaseAmount >= 50) {
    
        freeShipping = true; 
    
    } else {
    
        freeShipping = false;
    }


    // Message about eligibility 
    
    if (freeShipping === true) {

        console.log("You are eligible for free shipping."); 
    
    } else {
    
        console.log("You are NOT eligible for free shipping.");
    }


}



// Test cases
 isEligibleForFreeShipping(30, true);  // You are eligible for free shipping.
  isEligibleForFreeShipping(60, false); // You are eligible for free shipping.
  isEligibleForFreeShipping(40, false); // You are not eligible for free shipping.
 isEligibleForFreeShipping(10, true);  // You are eligible for free shipping.