import NavBar from "../components/navbar";
import Footer  from "./footer";
const layout = ({children})=> {
    return (
    <div className="content">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
    </div>   
    )
};

export default layout;