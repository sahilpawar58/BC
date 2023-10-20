/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// server.js

const Blockchain = require('./blockchain');
const Block = require('./block');

const blockchain = new Blockchain();

for(let i=0; i<5; i++){
    const newData = 'BLOCK CHAIN'+i;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);
