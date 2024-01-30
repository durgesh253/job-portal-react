import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
  <div className='h-10 w-10 m-5 ml-9 '>
  <h1 className='bg-sky-700 text-white text-center p-2 font-bold  '>D.</h1>
  </div>
 

<section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
<div className="p-8 md:p-12 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Djob, Welcom to job Portal Website
    </h2>

    <p className="hidden text-gray-500 md:mt-4 md:block">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
      sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
      quisque ut interdum tincidunt duis.
    </p>

    <div className="mt-4 md:mt-8">
      <Link
        to="login"
        className="inline-block rounded bg-sky-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Login/Register
      </Link>
    </div>
  </div>
</div>

<img
  alt="Violin"
  src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png"
  className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
/>
</section>
    </>
  )
}

export default Landing