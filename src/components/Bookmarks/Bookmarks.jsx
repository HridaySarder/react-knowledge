import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
  // console.log("hello: ",bookmarks);
  return (
    <div className="md:w-1/3 ml-5">
      <div>
        <h2 className='text-4xl'>Reading Time:{readingTime}</h2>
      </div>
      <h4 className="text-3xl">Bookmarks: {bookmarks.length}</h4>
      {
        bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;