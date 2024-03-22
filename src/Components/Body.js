import image from "./game-t2.jpg";

function Body() {
  return (
    <body
      className="h-80vh w-full"
      style={{ backgroundImage: `url(${image})` }}
    ></body>
  );
}

export default Body;
