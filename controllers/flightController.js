const { v4: uuidv4 } = require('uuid');
const allFlights = require('../models/Flight');

let users = allFlights.flightDetails

exports.getUsers = (req,res) => {
    console.log(users);
    res.send(users);
}

exports.createUser = (req,res) => {
    const user = req.body;
    users.push({...user, id:uuidv4()});

    console.log('Post route reached');
    res.send(`flight with title '${user.title}' has been added to the database`)

}

exports.getUser = (req,res) => {
    const { id } = req.params;

    let foundUser = users.find((user) => user.id == id)
    res.send(foundUser);
}

exports.deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`flight with id '${id}' has been deleted.`)
}

exports.updateUser = (req,res) => {
    const { id } = req.params;
    const { title, time, price, date } = req.body;

    const user = users.find((user) => user.id == id);

    if(title){
        user.title = title;
    }
    if(time){
        user.time = time;
    }
    if(price){
        user.price = price;
    }
    if(date){
        user.date = date;
    }

    res.send(`user with id ${id} has been updated`)

}