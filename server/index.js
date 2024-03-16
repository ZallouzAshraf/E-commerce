const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { fail } = require("assert");

app.use(express.json());
app.use(cors());

// DataBase Connection
mongoose.connect(
  "mongodb+srv://ashrafjallouz:Achraf2024@cluster0.ow9rokr.mongodb.net/AshShopping"
);

// Image Storage
const storage = multer.diskStorage({
  destination: "./uploadImages",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//EndPoint For Images
app.use("/uploadImages", express.static("uploadImages"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/uploadImages/${req.file.filename}`,
  });
});

// Create User Schema
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Endpoint Register User
app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "User With This Email is Already Exist",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  //Saving User in DB
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_token");
  res.json({ success: true, token });
});

//Endpoint Login User
app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const pass = req.body.password === user.password;
    if (pass) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_token");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email" });
  }
});

// Create Product Schema
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  available: {
    type: Boolean,
    default: true,
  },
});

//Endpoint Adding Product
app.post("/AddProduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProduct = products.slice(-1)[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Product Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Endpoint Deleting Product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Endpoint Getting All Product
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

//Endpoint New Collection
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  res.send(newcollection);
});

//Endpoint Popular Women
app.get("/popularwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular = products.slice(0, 4);
  res.send(popular);
});

//fetch User
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Session Expired" });
  } else {
    try {
      const data = jwt.verify(token, "secret_token");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "Use Valid Token" });
    }
  }
};

//Adding Products in Cart
app.post("/addtocart", fetchUser, async (req, res) => {
  console.log("Added ", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findByIdAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});

//Endpoint Remove Product
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("Removed ", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await User.findByIdAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

//Enpoint get Cart
app.post("/getcart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.listen(port, () => {
  console.log("Server Working on Port " + port);
});
