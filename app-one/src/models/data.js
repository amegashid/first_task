import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class Data{
    static getAllData() {
        try { 
            const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
            return data
        } catch (error) {
            throw{
                status: 500,
                message: `Failed read data from sender model: ${error.message}`
            }
        }
    }
}

export default Data;