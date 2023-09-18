import { NextApiRequest, NextApiResponse } from "next"
import { Deta } from "deta"

export default async function handler(req: NextApiRequest, res: NextApiResponse){    
    const deta = Deta(); //instantiate with Data Key or env DETA_PROJECT_KEY
    
    const db = deta.Base("simple_db");
    await db.put({ name: "alex", age: 77 });
    // We will use "one" as a key.
    await db.put({ name: "alex", age: 77 }, "one");
    // The key could also be included in the object itself.
    await db.put({ name: "alex", age: 77, key: "one" });

    // Store simple types.
    await db.put("hello, worlds");
    await db.put(7);
    // "success" is the value and "smart_work" is the key.
    await db.put("success", "smart_work");
    await db.put(["a", "b", "c"], "my_abc");
    
    // Put expiring items.
    // Expire in 300 seconds.
    await db.put({ name: "alex", age: 21 }, "alex21", { expireIn: 300 });
    // Expire at date.
    await db.put({ name: "max", age: 28 }, "max28", { expireAt: new Date("2023-01-01T00:00:00") });
    const item = await db.get('one');
    res.end(item)
}