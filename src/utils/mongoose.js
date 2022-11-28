// to change HandleBar's object to literal object. (Security fix from handlebar: cannot access to its object directly by using this)
module.exports = {
    multipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}