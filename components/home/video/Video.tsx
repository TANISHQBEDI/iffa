import { PLAYLIST_ID } from "@/lib/constants";

const Video = () => {
    const src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&mute=1&loop=1&playsinline=1&modestbranding=1&rel=0&index=0&controls=0`;

    return (
        <div className="absolute inset-0">
            <iframe
                src={src}
                title="YouTube playlist"
                style={{ border: "none", pointerEvents: "none" }}
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write; gyroscope; accelerometer; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
            />
        </div>
    );
};

export default Video;