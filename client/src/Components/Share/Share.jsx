import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
export default function Share() {
  return (
    <>
      <div
        className="card mt-3 mb-5"
        style={{
          width: "100%",
          boxShadow: "0px 0px 16px -8px rgb(0, 0, 0, 0.6)",
        }}
      >
        <div className="d-flex my-2 ml-3">
          <img
            src="/assets/2.jpeg"
            alt=""
            style={{ height: "60px", width: "60px" }}
            className="rounded-circle"
          ></img>
          <div style={{ width: "15px" }}></div>
          <div className="d-flex align-items-center" style={{ width: "85%" }}>
            <input
              placeholder="What's in your mind name?"
              className="form-control border-0"
            />
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-around">
          <div
            className="d-flex justify-content-around mt-1 mb-3 ml-2"
            style={{ width: "70%" }}
          >
            <div className="d-flex align-items-center">
              <PermMedia htmlColor="tomato" />
              <span className="pl-2">Photo or Video</span>
            </div>
            <div className="d-flex align-items-center">
              <Label htmlColor="blue" />
              <span className="pl-2">Tag</span>
            </div>
            <div className="d-flex align-items-center">
              <Room htmlColor="green" />
              <span className="pl-2">Location</span>
            </div>
            <div className="d-flex align-items-center">
              <EmojiEmotions htmlColor="goldenrod" />
              <span className="pl-2">Feelings</span>
            </div>
          </div>
          <div className="bg-warning mt-1 mb-3" style={{ width: "10%" }}>
            <button className="btn btn-success btn-block rounded-4">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
