import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },

  value: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true
   },

   created_at: {
    type: Date,
    default: Data.now
   },

   updated_at: {
    type: Date,
    default: Data.now
   }
});

const Data = mongoose.model("Data", dataSchema);

export default Data;
