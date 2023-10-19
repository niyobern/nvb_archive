import { NextApiRequest, NextApiResponse } from "next"

export default async function webHook(req: NextApiRequest, res: NextApiResponse){ 
    console.log(req.body)
    res.end("done")
}