import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse){ 
    if (req.method === "GET"){
        res.status(400)
    }
    const payload = {
        phone_number: req.body.phone,
        amount: req.body.price,
        currency: 'RWF',
        email: req.body.email || "joel@jiprovisional.com",
        tx_ref: `jiprovisional_sub_key_${req.body.key}`,
        order_id: req.body.key    
    }
    const resp = await axios.post("https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda", payload, { headers: {"Authorization": `Bearer ${process.env.FLW_SECRET_KEY}`, "Content-Type": "application/json"}})
    console.log(resp.data)
    res.end("end")
}