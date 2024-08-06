import Data from "../models/data.js";

export default class TestController {
  static getAllTests(req, res) {
    try {
      const data = Data.getAllData();

      res.status(200).json({
        success: true,
        body: data,
        message: "Data successfully fetched",
      });
    } catch (error) {
      res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
  }

  static postData(req, res) {
    const data = req.body;
    console.log("\nData that received from receiver-app:\n", data);
  }
}
