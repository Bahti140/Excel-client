import { styles } from "../../../app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge university",
    comment:
      "The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). he e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000).",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Student | Cambridge university",
    comment:
      "he e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). he e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). ",
  },
  {
    name: "Jay Gibs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Student | Cambridge university",
    comment:
      "technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” he e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). ",
  },

  {
    name: "Uzza Galen",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Student | Cambridge university",
    comment:
      "The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). ",
  },
  {
    name: "Irina Sheik",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Student | Cambridge university",
    comment:
      "The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). ",
  },
  {
    name: "Igor Ivanov",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    profession: "Student | Cambridge university",
    comment:
      "The e learning definition according to experts in education and educational technology is “the delivery of training and education via networked interactivity and a range of other knowledge collection and distribution technologies” (Fry, 2000). ",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/asets/business.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See what they say about us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi
            ab libero nam iure nulla veritatis accusantium debitis laboriosam
            hic! Excepturi similique voluptatum fuga fugiat praesentium natus,
            recusandae odio asperiores?
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
