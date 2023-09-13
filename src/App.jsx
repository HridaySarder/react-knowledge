import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };
  const handleMarkAsread = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const reamingBookMarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookMarks(reamingBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsread={handleMarkAsread}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
