import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const books = useSelector((store) => store.book.items);
  return (
    <nav className="border-b-8 relative border-red-500 font-cfont py-4 shadow-lg px-8 flex items-center justify-between">
      <div className="logo flex w-[20rem]  items-center cursor-pointer">
        <h2 className="font-bold text-xl">Online Library</h2>
        <img className="w-8" src="/libraryLogo.png" alt="Library logo" />
      </div>
      {/* 
      ul 
      flex-direction: column;
    position: absolute;
    top: 70px;
    text-align: left;
    align-items: self-start;
    background: #0098ff;
    height: 12rem;
    width: 100%;
    left: 0px;
    padding: 20px; */}

      <ul className="links flex font-bold gap-8 bg-red-400 sm:bg-green-300 sm:items-center  items-start justify-end flex-col absolute top-[70px] h-[12rem] sm:h-auto left-0 p-5 sm:p-0 w-full sm:static sm:flex-row">
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/browseBooks"}>Browse Books ({books.length})</Link>
        </li>
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/addBook"}>Add Book </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
