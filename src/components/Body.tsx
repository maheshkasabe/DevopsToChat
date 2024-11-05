import Link from "next/link"
import img from "../../public/Logo.png"
import github from "../../public/github.png"
import twitter from "../../public/twitter.png"
import { Features } from "@/constants"

const Body = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      
        <div className='flex flex-col justify-center items-center m-40 p-20'>
          <p className='whitespace-nowrap display-inline text-xs font-semibold border-2 border-[#5D3FD3] pr-4 p-2 pl-4 m-3 rounded-2xl shadow-lg'> Powerd by <u className="font-bold">NextJS</u>  </p>
          <p className='text-7xl font-semibold text-center m-5'>Chat with your K8s Clusters <br/> in seconds</p>
          <p className='m-5'>Have a conversation with your CI/CD, Cloud Provider, and Kubernetes Clusters for free</p>
          <button className='whitespace-nowrap display-inline text-xl font-semibold border-2 pr-8 p-2 pl-8 m-3 rounded-3xl shadow-lg bg-black text-white'>Get Started </button>

        </div>

        <div className='flex flex-col justify-center items-center m-10 p-20'>
            <p className="font-semibold text-6xl mb-20">How it works</p>
              <div className="flex flex-row">
                {
                  Features.map((feature) => {
                    return (
                      <div className="flex flex-col text-center m-10">
                        <img src={feature.image} alt="logo" className='ml-20 w-40 h-40' />
                        <p className="text-2xl font-semibold mb-5">{feature.title}</p>
                        <p>{feature.description}</p>
                        <button className='whitespace-nowrap display-inline text-xl font-semibold border-2 pr-8 p-2 pl-8 m-3 rounded-3xl shadow-lg bg-white text-black'>Get Started </button>
                      </div>
                    )
                  })
                }
              </div>
        </div>

        <div className='flex flex-col justify-center items-center m-40 p-20 text-center'>
          <p className='text-7xl m-10'>Proudly open-source</p>
          <p className='text-2xl m-5'>Our source code is available on GitHub - feel free to read, review, <br/> or contribute to it however you want!</p>
          <button className='flex flex-row justify-center items-center whitespace-nowrap display-inline text-xl font-semibold border-2 pr-8 p-2 pl-8 m-3 rounded-3xl shadow-lg'> <img src={github.src} alt="logo" className='w-8 h-8 p-1 rounded-full' /> GitHub </button>
        </div>

        <hr className="m-5 border-gray-400" style={{ width: "95%", height: "100%", color: "black" }} />

        <div className='flex flex-row justify-between w-full pr-10 pl-10 '>
          <img src={img.src} alt="logo" className='w-45 h-20 rounded-full' /> 
          <p className='whitespace-nowrap text-m font-semibold pt-4 m-3'> Powerd by <u className="font-bold">NextJS</u>  </p>
            <div className='flex flex-row justify-center items-center'>
            <Link href="/"><img src={twitter.src} alt="logo" className='w-6 h-6 m-1 rounded-full' /> </Link>
            <Link href="/"><img src={github.src} alt="logo" className='w-6 h-6 m-1 rounded-full' /> </Link>
            </div>
          
        </div>
    </div>
  )
}

export default Body