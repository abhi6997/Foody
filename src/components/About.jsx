import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="w-screen relative h-[50vh]">
        <img
          src="https://jibekjolu.us/wp-content/uploads/catering.jpg"
          alt=""
          className="w-full h-full"
        />

        <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-bold text-[7vw] text-white">
          Who we are
        </h1>
        <div className=" top-0 absolute w-screen bg-black h-[50vh] opacity-50"></div>
      </div>
      <div className=" flex flex-col gap-5 px-[10rem] py-[4rem]">
        <h1 className=" text-4xl font-bold">
          Driving the Force of{" "}
          <span className=" text-yellow-500">assortment</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dignissimos laudantium quas reprehenderit ut, eveniet, minima hic
          blanditiis doloribus debitis delectus quod expedita dicta. Ipsum eos,
          qui, cumque harum facere labore quam laudantium distinctio eius porro
          voluptatibus dignissimos pariatur officiis sit vitae corporis sed
          beatae reiciendis hic. Libero facere iure laboriosam harum
          perspiciatis incidunt, dolorum veniam?{" "}
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row w-screen px-[10rem] py-[2rem]  ">
        <div className=" w-full lg:w-[50%] flex flex-col gap-5 ">
          <h1 className=" text-3xl font-bold">Who are we ?</h1>
          <p className=" text-gray-700 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat
            consequatur quas nobis ad quibusdam earum quasi, animi esse quae in
            assumenda hic atque cupiditate ipsa vero eos aspernatur magni minima
            iure soluta ullam reprehenderit praesentium sequi! Dignissimos,
            dolor! Reiciendis sed ullam accusantium optio, ducimus quisquam ea,
            quasi dicta tenetur necessitatibus nulla fugit id ipsam, delectus
            fuga perspiciatis libero sint error minima beatae adipisci dolore?
            Soluta, vel quia! Alias, aut dolorum? Eveniet quod adipisci quidem
            architecto, quisquam nobis voluptates, dolorem quae vero perferendis
            voluptate eius maxime dolor provident porro suscipit tempora odit
            accusamus doloribus modi ab aspernatur! Optio, id architecto! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae
            incidunt perferendis, corporis sunt error odio ipsam aut dolore eum.
            Optio, mollitia iste, et ratione explicabo possimus magni nesciunt
            accusamus, animi odit nam. Nobis quas nostrum mollitia quo deserunt
            nam quisquam eius impedit, eum ipsa nesciunt adipisci vitae aliquam
            aut amet distinctio nemo. Alias nisi voluptates temporibus laborum.
            Quaerat nihil repellat dolore amet a cupiditate in explicabo sint
            tempora debitis accusantium, sit est totam excepturi, ex recusandae
            pariatur vitae? Blanditiis similique natus consequuntur veritatis
            facere neque eaque quidem rerum, vero debitis totam? Ullam maiores
            nisi, iure magni ipsam voluptates officia.
          </p>
        </div>
        <div className=" w-full lg:w-[50%] flex justify-center items-center">
          <img
            src="https://i.pinimg.com/originals/76/41/c4/7641c47698ce173ee4bfa4ae2c530d9c.jpg"
            alt=""
            className=" w-[80%] h-[80%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
