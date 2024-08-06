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
    default: Date.now
   },

   updated_at: {
    type: Date,
    default: Date.now
   }
});

const data = mongoose.model("Data", dataSchema);

export default data;
