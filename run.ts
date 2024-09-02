
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'
import { afterEach } from 'node:test';

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
};

(async () => {

    const client = new MongoClient(process.env.MONGOURL);

    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        const db = client.db(process.env.MONGODB_DB);


        let s = await db.collection("students")
        await s.insertOne({
            fname:"afrah",
            lname:"mohammadi",
            age:19,
        })
       
        

    } catch {
        console.log("Failed to connect to Mongo Server.")
    }
})()



