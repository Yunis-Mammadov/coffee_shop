import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";

const PageContainer=({children})=>{
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
} 

export default PageContainer;