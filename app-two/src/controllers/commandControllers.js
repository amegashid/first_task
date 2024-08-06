import axios from "axios";

import { storData } from "../services/validate.js";
import { fetchSetting, saveSetting } from "../models/settingModel.js";

const SENDER_APP_URL = "http://localhost:3000";

class CommandControllers {
  static async saveToMongo(req, res) {
    // Request Object for Fetch data
    const request = {
      method: "GET",
      baseURL: SENDER_APP_URL,
      url: "/test",
    };
    try {
      const response = await axios(request);
      const data = JSON.parse(response.data.body);

      const setting = await fetchSetting('cb647a71-076c-4418-8185-4f594861ebe3')
      const items = setting.items;
      try {
        await storData(data, items);
        res.status(201).json({
          success: true,
          message: "Data processed and stored successfully",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: `An error occurred in data processing and stored:${error}`,
          error,
        });
      }
    } catch (error) {
      CommandControllers.handleRequestError(error, res);
    }
  }

  static sendToAppOne(req, res) {

  }


  static handleRequestError(error, res) {
    if (error.response) {
      // status code not in range 2**
      console.log("Response Error: ", error.response.data.message);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // Request sent but didn't receive response
      console.log("Request Error: No response received", error.request);
      res.status(500).json({
        success: false,
        message: `Request Error, No response received: ${error.request}`,
      });
    } else {
      // Other errors
      console.log("Error in sending request: ", error.message);
      res.status(500).json({
        success: false,
        message: `Error in sending request: ${error.message}`,
      });
    }
  }
}

export default CommandControllers;