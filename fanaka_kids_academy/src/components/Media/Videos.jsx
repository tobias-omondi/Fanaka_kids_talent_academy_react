import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/videos/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data); // Fixed setVideos
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div className="container mx-auto px-2 py-2">
      <h2 className="text-center text-3xl font-bold mb-8 text-red-800">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <video
              src={`http://127.0.0.1:8000${video.video}`}
              controls
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
