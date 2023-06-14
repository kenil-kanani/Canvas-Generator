import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHubSquare } from '@fortawesome/free-solid-svg-icons';
// import { faGitHubSquare } from '@fortawesome/free-brands-svg-icons';



const algorithm_item = (<ul style={{ color: 'Black' }}>
    {['AEIOU', 'Empathy', 'Ideation', 'Product Development', 'Business Model', 'LNM'].map((item, index) => (
        <li className="py-2 px-4" key={index} style={{ color: 'white' }}>
            <Link to={`/${item}`}>  {item}  </Link>
        </li>
    ))}
</ul>)

const control_item = (<ul style={{ color: 'Black' }}>
    {['GitHub', 'LinkedIn', 'Twitter'].map((item, index) => (
        <li className="py-2 px-4" key={index} style={{ color: 'white' }}>
            {item}
        </li>
    ))}
</ul>)

function NavBar() {

    return (
        <nav className='bg-[#27374D] '>
            <div className=' mx-auto px-24   w-full    h-20 flex  justify-between items-center mb-[10px]'>
                {/* //- For Logo */}
                {/* <img src="" alt="" /> */}

                <div className='flex gap-32 items-center'>
                    <div style={{ color: 'white' }}>Logo</div>
                    <div style={{ color: 'white' }} className='flex items-center gap-12 text-lg'>
                        <Link to="/"> <span className='cursor-pointer'>Home</span></Link>
                        {/* <span className='cursor-pointer'>Randomize</span> */}
                        <span className="890px:hidden"><Dropdown items={algorithm_item} buttonLabel="Canvas" /></span>
                        <Link to='/Report'><span className="cursor-pointer">Report</span></Link>
                        <Link to='/AEIOUPDF'><span className="cursor-pointer">AEIOUPDF</span></Link>
                        <Dropdown items={control_item} buttonLabel="Contact Me" />
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;