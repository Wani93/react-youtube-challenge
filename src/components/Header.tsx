import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');

  useEffect(() => setText(keyword || ''), [keyword]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    navigate(`/videos/${text}`);
  };
  const handleClick = () => {
    if (!text) {
      return;
    }
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full flex center h-10 mt-2">
      <Link to="/" className="flex items-center cursor-pointer mr-5">
        <AiFillYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-neutral-800 rounded-tl-3xl rounded-bl-3xl"
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="flex justify-center items-center rounded-tr-3xl rounded-br-3xl w-10 bg-neutral-600"
        >
          <AiOutlineSearch className="w-5 h-5" />
        </button>
      </form>
    </header>
  );
};

export default Header;
