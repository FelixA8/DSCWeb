import Image from "next/image";
import Link from "next/link";

const NewPost = () => {
    const //HARD CODE
    articles = [
      {
        _id: "1",
        authorid: "a1",
        imageid:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
        subtitle: "lorem ipsum",
        text: "tetxt",
        title: "Title",
      },
    ];
    return <section className="hidden xl:block align-middle space-x-3 p-10 pr-0 overflow-x-auto whitespace-nowrap mb-5 ">
    <div className="w-[400px] h-[250px] items-stretch inline-block">
      <h2 className="text-left text-2xl lg:text-6xl font-medium text-[#2A6FA6] w-fit">
        New <br />
        Posts
      </h2>
      <p className="text-left text-[#494949] font-semibold text-opacity-50 h-auto break-all whitespace-normal mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        hendrerit nisi sed
      </p>
      <Link
        href={"/articles"}
        className="bg-[#41ABC3] w-fit px-8 py-2 rounded-3xl text-white font-medium tracking-wide mt-2"
      >
        Learn more
      </Link>
    </div>
    {articles.map((article, Key) => {
      return (
        <div
          className="w-[400px] h-[250px] items-stretch inline-block hover:cursor-pointer active:translate-y-1.5 hover:translate-y-0.5"
          key={Key}
        >
          <Link className="hidden" href={"/articles/" + article._id}></Link>
          <div className="w-full h-full relative">
            <Image
              alt={"/articles/" + article._id}
              src={
                article.imageid
              }
              quality={25}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                position: "absolute",
              }}
              fill={true}
              className="rounded-2xl border border-gray-500 border-opacity-30 mx-auto"
            />
          </div>
          <div className="w-4/5 bg-opacity-70 mx-auto mt-1 rounded-full border-t-4 border-[#494949] border-opacity-30"></div>
        </div>
      );
    })}
  </section>
}
export default NewPost