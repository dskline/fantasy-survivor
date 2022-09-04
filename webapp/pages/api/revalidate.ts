import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    if (req.query.path) {
      await res.revalidate(`${req.query?.path}`);
    }
    return res.json({ revalidated: true });
  } catch {
    return res.status(500).send("Error revalidating");
  }
};
export default handler;
