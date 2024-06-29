const express = require('express');
const mongoose = require('mongoose');
const port = 80;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require("./models/user.model.js");
const Listings = require("./models/Listings.modles.js");

app.post('/validate-email', async (req, res) => {
    const email = req.body.email;
    const user = await users.findOne({ Email: email });
    if (user) {
        return res.status(400).json({ message: 'Email already in use' });
    }
    else {
        res.status(200).json({ message: 'Email available' });
    }
});

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.fullname;
    const PhoneNumber = req.body.phone;
    const Emirates = req.body.emirate;
    const City = req.body.city;
    const Address = req.body.address;
    const POBox = req.body.pobox;
    const Nationality = req.body.nationality;
    const DOB = req.body.dob;
    const Gender = req.body.gender;
    const PreferredLanguage = req.body.language;

    const user = users({
        name: username,
        Email: email,
        Password: password,
        PhoneNumber: PhoneNumber,
        Emirates: Emirates,
        City: City,
        Address: Address,
        POBox: POBox,
        Nationality: Nationality,
        DOB: new Date(DOB),
        Gender: Gender,
        PreferredLanguage: PreferredLanguage
    });

    try {
        await user.save();
        console.log('User has been successfully saved to the database.');
        res.status(200).json({ UserAdded: true });
    } catch (error) {
        console.log('User SignUp Failed.');
        res.status(500).json({ UserAdded: false });
    }
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await users.find({ Email: email, Password: password });
    if (user.length == 0) {
        console.log("No Such User Found");
        res.status(500).json({ loginSuccess: false });
    } else {
        console.log(user[0].name);
        console.log(password);
        res.status(200).json({
            loginSuccess: true,
            user: {
                name: user[0].name,
                email: user[0].Email
            }
        });
    }
});

app.post('/Add_Sell_listings', async (req, res) => {
    const Action_Type = "Sell";
    const Property_Type =  req.body.Property_Type;
    const Area =  req.body.Area;
    const City =  req.body.City;
    const Size =  req.body.Size;
    const Price =  req.body.Price;
    const No_of_bedrooms =  req.body.No_of_bedrooms;
    const No_of_bathrooms =  req.body.No_of_bathrooms;
    const description =  req.body.description;
    const Condition =  req.body.Condition;

    const newListing = Listings({
        Property_Type:Property_Type,
        Action_Type:Action_Type,
        Area:Area,
        City:City,
        Size:Size,
        Price:Price,
        No_of_bedrooms:No_of_bedrooms,
        No_of_bathrooms:No_of_bathrooms,
        description:description,
        Condition:Condition
    });

    try {
        await newListing.save();
        console.log('Listing has been successfully saved to the database.');
        res.status(200).json({ ListingAdded: true });
    } catch (error) {
        console.log('Listing creation failed.', error);
        res.status(500).json({ ListingAdded: false });
    }
});


app.post('Add_Rent_listings', async (req, res) => {
    const Action_Type = "Rent";
    const Property_Type =  req.body.Property_Type;
    const Area =  req.body.Area;
    const City =  req.body.City;
    const Size =  req.body.Size;
    const Price =  req.body.Price;
    const No_of_bedrooms =  req.body.No_of_bedrooms;
    const No_of_bathrooms =  req.body.No_of_bathrooms;
    const description =  req.body.description;
    const Condition =  req.body.Condition;

    const newListing = Listings({
        Property_Type:Property_Type,
        Action_Type:Action_Type,
        Area:Area,
        City:City,
        Size:Size,
        Price:Price,
        No_of_bedrooms:No_of_bedrooms,
        No_of_bathrooms:No_of_bathrooms,
        description:description,
        Condition:Condition
    });

    try {
        await newListing.save();
        console.log('Listing has been successfully saved to the database.');
        res.status(200).json({ ListingAdded: true });
    } catch (error) {
        console.log('Listing creation failed.', error);
        res.status(500).json({ ListingAdded: false });
    }
});

// app.post('Add_listings', async (req, res) => {

// });


mongoose.connect('mongodb://localhost:27017/RealEstate').then(() => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`The server ${port} has been connected`);
    })
}).catch(() => {
    console.log("Database not connected");
});