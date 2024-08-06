import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    _id: String,
    key: String,
    index: String,
    type: String,
    data: {
        type: Map,
        of: String
    },
    identifiers: [String],
    datas: [String]
});

const settingSchema = new mongoose.Schema({
    _id: String,
    url: String,
    interval: String,
    uponChange: {
        enable: Boolean,
        value: String,
        data: {
            type: Map,
            of: String
        }
    },
    items: [itemSchema]
});

const Setting = mongoose.model('Setting', settingSchema);

async function saveSetting(data) {
    try {
        const document = new Setting(data);
        const result = await document.save();
        return result._id;
    } catch (error) {
        throw new Error(`Error saving setting: ${error.message}`);
    }
}

async function fetchSetting(_id) {
    try {
        const query = { _id }
        const data = await Setting.findOne(query);
        if (!data) {
            throw new Error('Setting not found');
        }
        return data;
    } catch (error) {
        throw new Error(`Error fetching setting: ${ error.message }`);
    }
}

async function fetchAllSetting() {
    try {
        const allData = await Setting.find({});
        return allData;
    } catch (error) {
        throw new Error(`Error fetching all settings: ${ error.message }`);
    }
}

export { saveSetting, fetchSetting, fetchAllSetting };
