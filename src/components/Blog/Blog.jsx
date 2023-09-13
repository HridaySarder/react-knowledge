import PropTypes from 'prop-types';
import { BsBookmarksFill } from 'react-icons/bs';
const Blog = ({blog, handleAddToBookmark, handleMarkAsread}) => {
  const {id,title, cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  return (
    <div className='mb-20 mt-4'>
      <img className='w-full mb-8' src={cover} alt={`Cover picture of tile ${title}`} />
      <div className='flex justify-between my-5'> 
        <div className='flex items-center gap-2'>
<img className='w-14' src={author_img} alt="" />
<div>
  <h5 className='text-2xl font-bold'>{author}</h5>
  <p>{posted_date}</p>
</div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}
           className='ml-2 text-2xl text-violet-600'>
            <BsBookmarksFill></BsBookmarksFill>
            </button>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {
hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
        }
      </p>
      <button
      onClick={() => handleMarkAsread(id,reading_time)}
      className='text-purple-600 font-bold underline'>Mark As read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
 handleAddToBookmark: PropTypes.func,
 handleMarkAsread: PropTypes.func
}
export default Blog;