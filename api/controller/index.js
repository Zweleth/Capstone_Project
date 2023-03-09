import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {User, Order,
Perfume} from '../model/index.js'
import { Router } from 'express'

// code to fix error: __dirname is not defined
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

// Create a client instance
const user = new User();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Client's Route
// Login
route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
})

// get all clients: works
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});

// get a user : works
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});

// Update : works
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register : works
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete : works
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});


// Fetch all perfumes
const perfumes = new Perfume();

route.get('/perfumes', (req, res)=> {
    perfumes.fetchPerfumes(req, res);
})

// Fetch a single perfume
route.get('/perfume/:id', (req, res) => {
    perfumes.fetchPerfume(req, res);
})

// Add a new perfume
route.post('/perfumes', bodyParser.json(), (req, res)=> {
    perfumes.addPerfume(req, res);
})

// Update a product
route.put('/perfume/:id', bodyParser.json(), (req, res)=> {
    perfumes.updatePerfumes(req, res);
})

// Delete a product
route.delete('/perfume/:id', (req, res)=> {
    perfumes.deletePerfume(req, res);
})


// // =====Purchase======
// const purchase = new Purchase();

// // Fetch all purchases
// route.get('/purchases', (req, res)=> {
//     purchase.fetchPurchases(req, res);
// })

// // Fetch a single purchase
// route.get('/purchase/:id', (req, res) => {
//     purchase.fetchPurchase(req, res);
// })

// // Add a new purchase
// route.post('/purchases', bodyParser.json(), (req, res)=> {
//     purchase.createPurchase(req, res);
// })

// // Update a purchase
// route.put('/purchase/:id', bodyParser.json(), (req, res)=> {
//     purchase.updatePurchase(req, res);
// })

// // cancel a purchase
// route.delete('/purchase/:id', (req, res)=> {
//     purchase.cancelPurchase(req, res);
// })

export default route;