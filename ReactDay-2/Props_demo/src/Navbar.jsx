import "./style.css";

let Navbar = (Props) =>{
    let navbar = Props.attr2;
    return(
        <>
        <header>
            <nav>
                <ul className="nav-parent">
                    <li><a href="">{navbar[0]}</a></li>
                    <li><a href="">{navbar[1]}</a></li>
                    <li><a href="">{navbar[2]}</a></li>
                    <li><a href="">{navbar[3]}</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar;