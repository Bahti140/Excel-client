import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const About = (props: Props) => {

  return (
    <div className='text-black dark:text-white'>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className='text-gradient'>Becodemy?</span>
      </h1>
      <br />
      <div className='w-[95%] 800px:w-[85%] m-auto'>
        <p className='text-[18px] font-Poppins'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio nostrum corporis architecto saepe debitis veniam ducimus quasi libero repellat molestiae vel accusantium atque adipisci nulla aspernatur, magnam qui delectus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis nesciunt modi quam numquam natus repudiandae, eligendi dolor perferendis maxime rem rerum autem nisi ab deleniti fuga, culpa recusandae assumenda!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum, voluptate omnis cupiditate sed itaque sequi fugit laboriosam reiciendis totam non, dignissimos blanditiis beatae quisquam a aperiam iste enim molestias?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt assumenda nostrum laudantium quas corrupti id vero repellendus neque aut minima esse ratione accusantium ducimus ab excepturi, ex, architecto iusto illo.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio nostrum corporis architecto saepe debitis veniam ducimus quasi libero repellat molestiae vel accusantium atque adipisci nulla aspernatur, magnam qui delectus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis nesciunt modi quam numquam natus repudiandae, eligendi dolor perferendis maxime rem rerum autem nisi ab deleniti fuga, culpa recusandae assumenda!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum, voluptate omnis cupiditate sed itaque sequi fugit laboriosam reiciendis totam non, dignissimos blanditiis beatae quisquam a aperiam iste enim molestias?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt assumenda nostrum laudantium quas corrupti id vero repellendus neque aut minima esse ratione accusantium ducimus ab excepturi, ex, architecto iusto illo.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis sed sint debitis? Molestias illum ad eos distinctio nobis, modi, nesciunt maxime eligendi accusantium deserunt ullam totam impedit quae porro?
        </p>
        <br />
        <span className='text-[22px]'>Bahti</span>
        <h5 className='text-[18px] font-Poppins'>Founder and CEO of Becodemy</h5>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default About