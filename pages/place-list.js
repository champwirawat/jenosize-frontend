import Image from "next/image";
import { connect } from "react-redux";
import Button from "../components/Button";
import { deletePlace } from "../redux/actions/placeAction";

const PlaceList = ({ placeList, deletePlace }) => {
  const loadPlaceImg = (photoReference) => {
    const apiKey = "AIzaSyCm_4HQFULzz6v-9SO34BAs2YJI6XmB_64";
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  };

  return (
    <>
      <div className="place-container p-2">
        <div>
          {placeList.map((data, index) => (
            <div
              key={`${data.place_id}${index}`}
              className="md:flex gap-4 py-4 border-b-2"
            >
              <div className="w-full max-w-md">
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
                <p className="md:mt-0 mt-2 text-2xl font-bold mb-1">
                  {data.name}
                </p>
                <p>{data.formatted_address}</p>
                <div className="flex justify-center md:justify-start mt-2">
                  <Button color="danger" onClick={() => deletePlace(data)}>
                    Delete
                  </Button>
                </div>
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

const mapStateToProps = (state) => ({ placeList: state.place.list });
const mapDispatchToProps = { deletePlace };
export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
