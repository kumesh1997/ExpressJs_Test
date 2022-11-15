import express from "express";
// import Connection from "../Connection";

// const dbConnect = Connection.getDb();


// dbConnect
//     .collection("users")
//     .insertOne(user, function (err, result) {
//       if (err) {
//         res.status(400).send("Error inserting matches!");
//       } else {
//         console.log(`Added a new User with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });

let data = [
    {
        FirstName: 'Tharindu Kumesh',
        Age: 25,
    },
    {
        FirstName: 'A',
        Age: 20,
    },
    {
        FirstName: 'B',
        Age: 30,
    }

]

export const getUser = (req, res) => {
    res.send(data);
}

// export const addUser = (req, res) => {
//     const user = req.body;
//     data.push(user);
//     res.send(`user ${user.FirstName} added`);
// }


export const addUser = (req, res) => {
    const user = req.body;
    data.push(user);
    res.send(`user ${user.FirstName} added`);
}
export const deleteUser = (req, res) => {
    const { name } = req.params;
    data = data.filter((user) => user.FirstName != name);
    res.send(`user ${name} deleted`)
}

export const updateUser = (req, res) => {
    console.log(req.body)
    const { FirstName, Age } = req.body;
    try {
        const user = data.find((user) => user.FirstName == FirstName )
        user.Age = Age;
        res.send(`user ${FirstName} was updated `)
    } catch (error) {
        console.log(error)
    }
    
}