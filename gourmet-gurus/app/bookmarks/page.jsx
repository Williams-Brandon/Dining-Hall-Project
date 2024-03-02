import React from 'react'
import BookmarkedItemCard from '@components/Bookmarks/BookmarkedItemCard.jsx'
import ResponsiveAppBar from "@components/Navbar/ResponsiveAppBar";

const images = ['https://i.ibb.co/WzgV5qq/image-Nathan-Shih-3.jpg'];

const page = () => {
    return (
        <>
            <h1>Your Bookmarked Favorites</h1>
            <BookmarkedItemCard img={images[0]} name={'Ramen'} />
            <BookmarkedItemCard img={images[0]} name={'Ramen'} />
            <BookmarkedItemCard img={images[0]} name={'Ramen'} />
        </>
    )
}

export default page