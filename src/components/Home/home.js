import React from 'react';
import NewsSlider from '../widgets/newsSlider/slider.js';
// import NewsList from '../widgets/NewsList/newsList';
// import VideosList from '../widgets/VideosList/videoList.js';

const Home = () => {
  return (
    <div>
      {
        <NewsSlider
          type="featured"
          start={0}
          amount={6}
          settings={{
            dots: false,
          }}
        />
        /* <NewsList type="card" loadmore={true} start={3} stop={3} />{' '}
      <VideosList type={true} loadmore={true} start={0} amount={3} />{' '} */
      }
    </div>
  );
};

export default Home;
