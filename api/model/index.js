// database configuration
import db from '../config/index.js'

// bcrypt module
import {hash, compare, hashSync, genSaltSync} from 'bcrypt'

// middleware for creating a token
import createToken from '../middleware/AuthenticateClient.js'

// create a User class
export class User {
    // log in
    login(req, res){
        const {email, password} = req.body;
        const qryStr = `
            SELECT user_id, first_name, last_name, gender, phone_number, email, password, user_role, image_url
            FROM Users
            WHERE email = '${email}';
        `;
        db.query(qryStr, async (err, data) => {
            console.log(data);
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: 'Incorrect email address.'
                })
            }
            else {
                await compare(password, data[0].password, (_err, _result) => {
                    if (_err) throw _err;
                    // create a jw token
                    const jwToken = createToken({
                        email, password
                    });

                    // saving 
                    res.cookie('LegitClient', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    });

                    if(_result) {
                        res.status(200).json({
                            msg: 'Logged in',
                            jwToken,
                            result: data[0]
                        });
                    }
                    else {
                        res.status(401).json({
                            err: 'You entered an invalid password or did not register.'
                        })
                    };
                })
            }
        });
    }

    // fetch Clients
    fetchUsers(req, res){
        const qryStr = `
        SELECT user_id, first_name, last_name, gender, phone_number, password, email, user_role, image_url
        FROM Users;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Clients
    fetchUser(req, res){
        const qryStr = `
        SELECT user_id, first_name, last_name, gender, phone_number, password, email, user_role, image_url
        FROM Users
        WHERE user_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async createUser(req, res) {
        // payload: data from the user
        let detail = req.body;
        console.log(detail);

        // hashing the password
        let salt = genSaltSync(15); 
        console.log(detail.password);
        detail.password = await hash(detail.password, salt);

        // this information will be used for client authentication
        let user = {
            emailAddress: detail.email,
            userPassword: detail.password
        }

        // sql query
        const qryStr = 'INSERT INTO Users SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            const jwToken = createToken(user);
            // This token will be saved in the cookie.
            // duration in milliseconds
            res.cookie('LegitClient', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({msg: 'User successfully registered'});
        }) 
    }

    // update client details
    updateUser(req, res) {
        let data = req.body;
        if( (data.password !== null) || (data.password !== undefined)){
            data.password = hashSync(data.password, 15);
        }
        const qryStr = `
            UPDATE Users
            SET ?
            WHERE user_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "User record has been updated."
            });
        });
    }
    
    // delete a client record
    deleteUser(req, res) {
        const qryStr = `
            DELETE FROM Users
            WHERE user_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'User record has been removed successfully.'
            });
        });  
    }
}

// create a Vehicles class
export class Perfume {
    // fetch all Vehicles
    fetchPerfumes(req, res){
        const qryStr = `
        SELECT perfume_id, perfume_name, price, description, gender, image_url
        FROM Perfumes;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Vehicle
    fetchPerfume(req, res){
        const qryStr = `
        SELECT perfume_id, perfume_name, price, description, gender, image_url
        FROM Perfumes
        WHERE perfume_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async addPerfume(req, res) {
        // payload: data from the user
        let detail = req.body;
        console.log(detail);

        // sql query
        const qryStr = 'INSERT INTO Perfumes SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(200).json({msg: 'Perfume successfully added'});
        });
    }

    // update client details
    updatePerfumes(req, res) {
        let data = req.body;
        const qryStr = `
            UPDATE Perfumes
            SET ?
            WHERE perfume_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Perfume record has been updated."
            });
        });
    }
    
    // delete a client record
    deletePerfume(req, res) {
        const qryStr = `
            DELETE FROM Perfumes
            WHERE perfume_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Perfume record has been removed successfully.'
            });
        });  
    }
}

// create a Purchase
export class Order {
    // fetch all Vehicles
    fetchOrders(req, res){
        const qryStr = `
        SELECT order_id, user_id, perfume_id
        FROM Orders;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Vehicle
    fetchOrder(req, res){
        const qryStr = `
        SELECT order_id, user_id, perfume_id
        FROM Orders
        WHERE order_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async createOrders(req, res) {
        // payload: data from the user
        let detail = req.body;

        // sql query
        const qryStr = 'INSERT INTO Orders SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(201).json({msg: 'Purchase created successfully.'});
        });
    }

    // update client details
    updateOrder(req, res) {
        let data = req.body;
        const qryStr = `
            UPDATE Orders
            SET ?
            WHERE order_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Your purchase has been updated successful."
            });
        });
    }
    
    // delete a client record
    cancelOrder(req, res) {
        const qryStr = `
            DELETE FROM Orders
            WHERE order_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Purchase has been canceled successfully.'
            });
        });  
    }
}
