const SHA256 = require('crypto-js/sha256'); // import the sha256 library
/*
>
> BLOCK CLASS
> CLASS WITH A CONSTRUCTOR FOR A BLOCK DATA MODEL
>
*/
class Block{
    constructor(data){
        this.hash="0x00000000";
        this.height=0;
        this.body=data;
        this.time=0;
        this.previousblockhash="0xffffff";
    }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class BlockChain{
    constructor(){
        this.chain=[];
        this.addBlock(new Block("First block in chain - GENESIS BLOCK"));
    }
    
    /**
     * 
     * @param {*} block 
     * @notice Add a block to the chain
     */
    addBlock(newblock) {
        newblock.height =this.chain.length; // GET THE HEIGHT OF THE BLOCK

        newblock.time = new Date().getTime().toString().slice(0,-3); //GET THE CURREN TIME

        if(this.chain.length > 0){ // MAKE SURE THE GENESIS BLOCK WAS PREVIOUSLY ADDED  
            newblock.previousblockhash = this.chain[this.chain.length-1].hash;
        }

        newblock.hash = SHA256(JSON.stringify(newblock)).toString();
        this.chain.push(newblock);
    }

    /**
     * @Notice create the first block of the chain
     */
    createGenesisBlock() {
        
    }
    /**
     * @Notice get the last minted block from the chain
     */
    getLastBlock() {
        
    }

    /**
     * @Notice check wether a block is valid or not
     */
    validateBlock(){

    }

    /**
     * @Notice check the validity of the chain
     */
    validateChain(){

    }

}