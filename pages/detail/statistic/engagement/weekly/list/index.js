import moment from "moment";
import {
  FaCalendarAlt,
  FaImage,
  FaPaperclip,
  FaRegClock,
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaUserAlt,
  FaImages,
} from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import Button from "../../../../../../components/Button";
import TextInput from "../../../../../../components/TextInput";

const EngagementWeeklyListDetail = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex-1 flex items-center">
          <div className="flex justify-center items-center bg-gray-300 rounded-full w-9 h-9 mr-2">
            <span className="text-white">
              <FaUserAlt />
            </span>
          </div>
          <div className="flex-1">
            <p className="font-bold">Jacob</p>
            <p className="text-xs text-detail">Daily Report</p>
          </div>
          <div>
            <p className="flex gap-1 items-center text-xs text-detail">
              <FaCalendarAlt /> {moment(new Date()).format("DD/MM/YYYY")}
            </p>
            <p className="flex gap-1 items-center text-xs text-detail">
              <FaRegClock />
              {moment(new Date()).format("HH:MM")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div>
            <p className="text-detail">Content 1</p>
            <p>
              Perspective is a lens through which we learn to see the world; it
              shapes what we see and the way we see it. The lens can clarify,
              magnify, distort or blur what we see. By changing the position of
              the lens, different aspects of the text may be foregrounded. In
              this way, perspective provides a dynamic basis for the
              relationship between composer, text and responder.
            </p>
          </div>
          <div>
            <p className="text-detail">Content 2</p>
            <p>
              To become critical thinkers and insightful readers, listeners and
              viewers, students need to understand that neither texts nor they
              themselves are neutral. We all operate through cultural and
              ideological frames that position us to accept certain views of the
              world. We need to recognise how these lenses are working so that
              we can choose to accept or dismiss the values that they entail.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-detail">Image</p>
          <div className="flex gap-2">
            <FaImage size={60} className="text-detail" />
            <FaImage size={60} className="text-detail" />
            <FaImage size={60} className="text-detail" />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-detail">Attach File</p>
          <div className="flex items-center gap-2">
            <FaPaperclip className="text-detail" />
            <p className="text-primary">upload_file.pdf</p>
          </div>
        </div>
      </div>

      <div className="flex bg-blue-100 p-1">
        <div className="flex-1 flex justify-around text-sm text-detail">
          <div className="flex-1 text-center">
            <p>Road (12)</p>
          </div>
          <div className="flex-1 text-center border-l-2">
            <p>Unroad (22)</p>
          </div>
          <div className="flex-1 text-center border-l-2">
            <p>Likes (2)</p>
          </div>
        </div>
        <div className="px-1">
          <p className="text-primary">{`View >`}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-around">
        <Button className="w-40" IconStart={FiGift} outline rounded>
          Give Point
        </Button>
        <Button className="w-40" IconStart={FaRegThumbsUp} outline rounded>
          Like
        </Button>
      </div>

      <hr className="mt-4" />

      <div className="mt-4 px-4">
        <div>
          <div className="flex justify-around ">
            <div className="flex-1 flex items-center">
              <div className="flex justify-center items-center bg-gray-300 rounded-full w-9 h-9 mr-2">
                <span className="text-white">
                  <FaUserAlt />
                </span>
              </div>
              <div className="flex-1">
                <p className="font-bold">Thomas</p>
                <p className="text-xs text-detail">Daily Report</p>
              </div>
            </div>
          </div>
          <p>I suppose his criticism was fair comment</p>
          <div className="flex items-center justify-between text-xs mt-2">
            <div className="flex items-center gap-3">
              <p className="text-detail">2 Days ago</p>
              <p className="text-blue-300">3 Like</p>
            </div>
            <div className="flex items-center gap-3 text-primary">
              <div className="flex items-center gap-1">
                <FaRegCommentAlt />
                <p>Reply</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <p>Like</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="flex justify-around ">
            <div className="flex-1 flex items-center">
              <div className="flex justify-center items-center bg-gray-300 rounded-full w-9 h-9 mr-2">
                <span className="text-white">
                  <FaUserAlt />
                </span>
              </div>
              <div className="flex-1">
                <p className="font-bold">Thomas</p>
                <p className="text-xs text-detail">Daily Report</p>
              </div>
            </div>
          </div>
          <p>I suppose his criticism was fair comment</p>
          <div className="flex items-center justify-between text-xs mt-2">
            <div className="flex items-center gap-3">
              <p className="text-detail">2 Days ago</p>
              <p className="text-blue-300">3 Like</p>
            </div>
            <div className="flex items-center gap-3 text-primary">
              <div className="flex items-center gap-1">
                <FaRegCommentAlt />
                <p>Reply</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <p>Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-4" />

      <div className="my-4 px-4 text-detail flex gap-4">
        <div className="flex items-center gap-3 text-2xl">
          <FaImages />
          <FaPaperclip />
          <p className="font-bold">@</p>
        </div>
        <div>
          <TextInput placeholder="Comment" />
        </div>
      </div>
    </>
  );
};

export default EngagementWeeklyListDetail;
