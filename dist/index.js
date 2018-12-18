"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, hash, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "2020202020", "", "희송아~사랑해 보고 싶어 ㅠㅠ", 123456);
let blockchain = [genesisBlock];
//console.log(blockchain);
const getBlockchain = () => blockchain;
// 블록체인의 마지막 배열 값 = 최근 블록
const getLatestBlock = () => blockchain[blockchain.length - 1];
//# sourceMappingURL=index.js.map