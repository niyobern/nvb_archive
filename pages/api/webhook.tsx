import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function webHook(req: NextApiRequest, res: NextApiResponse){ 
    const data = req.body.data
    if (data.status === "successful"){
        const verify = await axios.get(`https://api.flutterwave.com/v3/transactions/${data.id}/verify`)
        if (verify.data.status === "success"){
            return
        }
    }
    res.status(200).json({message: "received"})
}