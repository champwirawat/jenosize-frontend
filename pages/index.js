import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [placeList, setPlaceList] = useState([]);

  const placeSearch = async () => {
    const resp = await axios({
      method: "get",
      url: `/api/place-search?search=${textSearch}`,
      headers: {},
    });
    console.log(resp.data);
    setPlaceList(resp.data);
  };

  const loadPlaceImg = (photoReference) => {
    const apiKey = "AIzaSyCm_4HQFULzz6v-9SO34BAs2YJI6XmB_64";
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  };

  return (
    <>
      <div className="flex gap-2 p-2">
        <TextInput onChange={(e) => setTextSearch(e.target.value)} />
        <Button onClick={placeSearch}>Search</Button>
      </div>
      <div className="place-container p-2">
        <div>
          {placeList.map((data) => (
            <div key={data.place_id} className="md:flex gap-4 py-4 border-b-2">
              <div className="w-full max-w-sm">
                <Image
                  loader={() =>
                    data.photos
                      ? loadPlaceImg(data.photos[0]["photo_reference"])
                      : data.icon
                  }
                  src="me.png"
                  layout="fill"
                  className="image"
                />
              </div>
              <div>
                <p className="md:mt-0 mt-2 text-2xl font-bold mb-1">{data.name}</p>
                <p>{data.formatted_address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .place-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .place-container > div {
            width: 100%;
            max-width: 1000px;
        }
      `}</style>
    </>
  );
};

export default Home;
