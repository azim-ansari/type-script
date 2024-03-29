"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => a + b;
app.get('/get', (req, res, next) => {
    console.log(add(10, 20));
    res.send('server is running on local host');
});
app.listen(3000, () => {
    console.log('server running');
});
