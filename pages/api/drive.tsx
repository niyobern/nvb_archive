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
    const data ={
            tx_ref: "mugw2-es-1ra01maty1zo",
            amount: "10000",
            currency: "RWF",
            redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a"
            },
            customer: {
                email: "niyobern@outlook.com",
                phonenumber: "0786082841",
                name: "Bernard Niyomugabo"
            },
            customizations: {
                title: "NVB",
                logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
            }
        }  
    const resp = await axios.post("https://api.flutterwave.com/v3/payments", data, { headers: {"Authorization": `Bearer ${process.env.FLW_SECRET_KEY}`, "Content-Type": "application/json"}})
    console.log(resp.data)
    res.end("end")
}