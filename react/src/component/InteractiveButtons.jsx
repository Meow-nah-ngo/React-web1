import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Bookmark, Share2 } from "lucide-react";

function InteractiveButtons() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied Link");
  };

  return (
    <div className="space-x-4 mt-4 flex">
      
        <motion.button
            whileTap={{ scale: 1.2, rotate: 10 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setLiked(!liked)}
            className={`btn ${liked ? "text-red-500" : "text-gray-400"}`}>
            <Heart fill={liked ? "currentColor" : "none"} />
        </motion.button>
        
        <motion.button
            whileTap={{ scale:1.2, rotate: 10}}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setBookmarked(!bookmarked)}
            className={`btn ${bookmarked ? "text-yellow-500" : "text-gray-400"}`}>
            <Bookmark fill={bookmarked ? "currentColor" : "none"} />
        </motion.button>
        
        <motion.button
            whileTap={{ scale:1.2, rotate: -10}}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleShare} 
            className="btn text-gray-400">
            <Share2 />
        </motion.button>
    </div>
  );
}

export default InteractiveButtons;
