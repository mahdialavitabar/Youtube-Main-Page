// @ts-ignore
//prettier-ignore
'use client';
import Header from '@/components/Header'
import Layout from '../components/Layout'
import Sidebar from '@/components/Sidebar'
import Videos from '@/components/Videos'
import Categories from '@/components/Categories'
import Grid from '@/components/grid';

const Home = () => {
  return (
    <div className='flex justify-center items-center'><Grid/></div>
  //   <Layout>    
  //   <Header />   
  //   <Categories/>   
  //   <div className="flex">
  //     <Sidebar />
  //     <div className="flex-1 overflow-y-scroll">       
  //       <Videos />
  //     </div>
  //   </div>
  // </Layout>
  )
}

export default Home