import Data from "../models/connectionModels.js";

export async function storData(data, items) {
  const dataEntries = Object.entries(data);

  try {
    for (let item of items) {
      const { key, type } = item;
      const index = parseInt(item.index.trim(), 10);

      if (type === 'array') {
        for (let [dataKey, dataValue] of dataEntries) {
          if (dataKey === key && Array.isArray(dataValue) && index < dataValue.length) {
            const dataToStore = createDataToStore(dataKey, dataValue[index]);
            try {
              const newData = new Data(dataToStore);
              await newData.save();
            } catch (error) {
              console.warn(`Failed to save data at index ${index}: ${error.message}`);
            }
          }
        }
      } else if (type === 'property') {
        for (let [dataKey, dataValue] of dataEntries) {
          if (dataKey === key) {
            const dataToStore = createDataToStore(dataKey, dataValue);
            try {
              const newData = new Data(dataToStore);
              await newData.save();
            } catch (error) {
              console.warn(`Failed to save data: ${error.message}`);
            }
          }
        }
      } else if (type === 'arrayOfObject') {
      } else {
        console.warn(`Invalid type: ${type} not defined in system`);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

function createDataToStore(name, value) {
  return {
      name,
      value
  };
}
