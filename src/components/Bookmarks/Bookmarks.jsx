import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <h4 className="text-3xl">Bookmark: {bookmarks.length}</h4>
     
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}
export default Bookmark;