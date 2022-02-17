import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="xl:container mx-auto p-10 bg-white">
        <form className="mb-6">
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">Username</span>
            </label>
            <input type="text" value="input value" className="btn"/>
        </form>
        
        <div className="flex flex-row gap-2">
          <button className="leading-5 font-semibold active:bg-violet-800 
          focus:ring-violet-300 focus:ring focus:outline-none text-white text-sm 
          bg-violet-500 hover:bg-violet-600 text-center rounded-full px-5 py-2">Button</button>
          <button type="button" className="bg-violet-500 hover:bg-violet-600 focus:outline-none 
          focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 
          rounded-full font-semibold text-white">
              Save changes
          </button>
        </div>
        
    </div>
  )
}
