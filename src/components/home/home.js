import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';

const Home = () =>{
    return(
        <div>
            <NewsSlider
                type="featured"
                start={3}
                amount={7}
                settings={{
                    dots:false
                }}
            >
            </NewsSlider>
           <NewsList
            type="card"
            loadMore={true}
            start={3}
            amount={3}
           >
           </NewsList>
           <VideosList
            type="card"
            title={true}
            loadMore={true}
            start={3}
            amount={3}
           />

            
        </div>
    )
}

export default Home;