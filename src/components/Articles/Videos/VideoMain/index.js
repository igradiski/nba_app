import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

const VideoMain = () => {
    return (
        <div>
            <VideosList
                type="card"
                title={false}
                loadMore={true}
                start={0}
                amount={10}
            />
        </div>
    );
};

export default VideoMain;