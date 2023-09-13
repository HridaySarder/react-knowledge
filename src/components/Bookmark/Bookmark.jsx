import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  
  return (
    <div className='bg-gray-300 p-4 m-4 rounded-xl'>
      <h3 className='text-2xl'>Bookmark:</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object
}
export default Bookmark;