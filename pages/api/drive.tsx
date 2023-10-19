import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse){ 
// const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
    const payload = {
        phone_number: '0785501924',
        amount: 1500,
        currency: 'RWF',
        email: 'JoeBloggs@acme.co',
        tx_ref: "mumaboko3867ahhferc",
        order_id: "3"
    }
    const resp = await axios.post("https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda", payload, { headers: {"Authorization": `Bearer ${process.env.FLW_SECRET_KEY}`, "Content-Type": "application/json"}})
    console.log(resp.data)
    res.end("end")
}