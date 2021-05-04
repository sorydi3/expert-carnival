/**
 * Import crypto-js/SHA256 library
 */
 const SHA256 = require('crypto-js/sha256');

 /**
  * Class with a constructor for block 
  */
 class Block {
 
     constructor(data){
         this.id = 0;
         this.nonce = 144444;
           this.body = data;
           this.hash = "";
     }
     
     /**
      * Step 1. Implement `generateHash()`
      * method that return the `self` block with the hash.
      * 
      * Create a Promise that resolve with `self` after you create 
      * the hash of the object and assigned to the hash property `self.hash = ...`
      */
       // 
       generateHash() {
           // Use this to create a temporary reference of the class object
           let self = this;
            //Implement your code here
            let promise = new Promise(function(myResolve,myReject){
                // code that may take longuer here
                var hash_ = SHA256(JSON.stringify(self)).toString(); // hassh of this block

                if(hash_.toString().length>0){
                    self.hash = hash_;
                    myResolve(self);
                }else{
                    myReject("Error");
                }
         })
         return promise;
     }
 }
 
 // Exporting the class Block to be reuse in other files
 module.exports.Block = Block;