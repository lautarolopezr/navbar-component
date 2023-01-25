
const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
            </li>
        </>
    );
}

export default Sections;
