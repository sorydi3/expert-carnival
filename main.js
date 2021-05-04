import sha256 from 'crypto-js/sha256'
data1="BlockChain rock!"
const dataObject = {
    id:1,
    body:"THIS IS THE BODY OF THE BLOCK!",
    time: new Date().getTime().toString().slice(0,-3)

};


function generateHash(obj){
    return sha256(obj)
}


console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);