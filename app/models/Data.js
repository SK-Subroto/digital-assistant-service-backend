const mongoose = require("mongoose");

const field = {
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },

    // common field
    status: {
        // true or false
        type: Boolean,
        default: true
    },
    existence: {
        // true and false
        type: Boolean,
        default: true
    },
};

const appAssistantSchema = mongoose.Schema(field, { timestamps: true });

module.exports = mongoose.model("DigitalAssistant", appAssistantSchema);
