import { NextApiRequest, NextApiResponse } from "next"
import { Deta } from "deta"

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const deta = Deta("collection-key-silkworm-88o", "c0j5ubhk5sb_5Y1Qi9XAMj5sM5cZ3tpRoKF55TgJepdV")
    const drive = deta.Drive("drive")
    drive.put("image", {data: "Try everything and go along"})
    // const resp = await drive.get("image")
    res.end("Okay")
}