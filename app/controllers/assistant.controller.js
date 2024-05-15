const ValidationError = require("../exceptions/ValidationError");
const NotFoundError = require("../exceptions/NotFoundError");
const handlers = require("../exceptions/handlers");
const native = require("../helpers/native");
const AssistantDB = require("../services/AssistantDB");
const { ObjExists } = require("../validation/validationHelpers/validationHelper");

module.exports = {
    createAssistantHandler: async (req, res) => {
        try {
            req.body = Object.assign({}, req.body);
            ObjExists(["name", "text"], req.body)

            // const result = await AssistantDB.create({
            //     name: req.body.name,
            //     text: req.body.text
            // })

            // Try to update the assistant, if it doesn't exist, it will create a new one
            const result = await await AssistantDB.update(
                { name: req.body.name },
                { name: req.body.name, text: req.body.text },
                upsert = true
            )

            isUpdated = result.createdAt.toString() !== result.updatedAt.toString()

            const message = isUpdated ? "Assistant details updated" : "Assistant created successfully";
            const status = isUpdated ? 200 : 201;

            native.response(
                {
                    success: true,
                    message,
                    data: result,
                    meta: {
                        count: 0,
                    },
                    status,
                },
                req,
                res
            );
        } catch (error) {
            console.log(error.message);
            handlers(
                {
                    errorLog: {
                        location: req.originalUrl.split("/").join("::"),
                        details: `Error: ${error}`,
                    },
                    message: error.message,
                    success: false,
                    error,
                },
                req,
                res
            );
        }
    },

    sendMessagesByNameHandler: async (req, res) => {
        try {
            req.body = Object.assign({}, req.body);
            ObjExists(["name", "message"], req.body)

            // if (req.body.name) throw new ValidationError("Name is Required")
            const result = await AssistantDB.finds({
                name: req.body.name
            })
            if (result.length !== 0) {
                native.response(
                    {
                        success: true,
                        message: "Successful",
                        data: result,
                        meta: {
                            count: 0,
                        },
                        status: 200,
                    },
                    req,
                    res
                );
            } else {
                throw new NotFoundError("Assistant not found")
            }

        } catch (error) {
            console.log(error.message);
            handlers(
                {
                    errorLog: {
                        location: req.originalUrl.split("/").join("::"),
                        details: `Error: ${error}`,
                    },
                    message: error.message,
                    success: false,
                    error,
                },
                req,
                res
            );
        }
    },
};
