import Image from "next/image";
const VImages = () => {
  return (
    <div className="image1">
      <Image
        src="/valo1.JPG"
        className="curvedimg"
        alt="An example image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default VImages;
