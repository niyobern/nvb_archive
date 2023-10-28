import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function webHook(req: NextApiRequest, res: NextApiResponse){ 
    const data = req.body.data
    if (data.status === "successful"){
        const verify = await axios.get(`https://api.flutterwave.com/v3/transactions/${data.id}/verify`)
        if (verify.data.status === "success" && verify.data.amount === data.amount && verify.data.currency === data.currency){
            const prefix = "jiprovisional_sub_key_"
            const tx_ref = data.tx_ref
            const key = tx_ref.slice(prefix.length, tx_ref.length)
            axios.post('https://nvb_backend-1-z3745144.deta.app/subscription/pay/', {"sub": key, "amount": data.amount}, { headers: {"APISecret": `${process.env.API_SECRETE}`}})
        }
    }
    res.status(200).json({message: "received"})
}