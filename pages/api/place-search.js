import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = encodeURIComponent(req.query.search);
    const apiKey = "AIzaSyCm_4HQFULzz6v-9SO34BAs2YJI6XmB_64";
    try {
      const resp = await axios({
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`,
        headers: {},
      });
      res.status(200).json(resp.data.results);
    } catch (err) {
      console.error("ERROR : ", err);
      res.status(500).json(err.message);
    }
  } else {
    res.status(404);
  }
}
