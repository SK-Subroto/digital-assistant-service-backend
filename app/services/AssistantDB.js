const Data = require("../models/Data")


module.exports = {
    create: async (data) => {
        try {
            const result = await Data.create(data);

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    find: async (query, filter = {}) => {
        try {
            const result = await Data.findOne(query, filter);

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    finds: async (query, filter = {}, startIndex = null, limit = null, sort = {}) => {
        try {
            const result = await Data.find(query, filter).skip(startIndex).limit(limit).sort(sort);

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    totalCount: async (query) => {
        try {
            const result = await Data.find(query).count();

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    update: async (query, updateData, upsert = false) => {
        try {
            const options = { new: true, upsert: upsert };

            const result = await Data.findOneAndUpdate(
                query,
                updateData,
                options
            );

            return result
        } catch (error) {
            console.log(error)
            return null
        }
    },
    details: async (query) => {
        try {
            const result = await Data.findOne(query)

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    deleteOne: async (query) => {
        try {
            const result = await Data.deleteOne(query);
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    },

    deleteMany: async (query) => {
        try {
            const result = await Data.deleteMany(query);
            console.log("delete item :", result)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    },

    create: async (data) => {
        try {
            const result = await Data.create(data);

            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },

}
