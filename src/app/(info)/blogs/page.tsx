import React from 'react'
import PrimaryHero from '@/components/common/PrimraryHero'
import Navbar from '@/components/navbar/Navbar'
import NewsCategory from '@/components/news/NewsCategory'
const page = () => {
  return (
    <div>
        <PrimaryHero
            title="Recent Blogs"
        subtitle="INSIGHTS"
        // imageUrl="https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/64388bfcbb62bba79cd12140_07-Millennium%20-%20Villa.jpg"
        imageUrl="/contact.jpeg"
        />
        <Navbar />
        <NewsCategory/>
    </div>
  )
}

export default page