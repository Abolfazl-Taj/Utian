import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Article from "../Pages/Article/Article";
import EditArticle from "../Pages/EditArticle/EditArticle";
import AddArticle from '../Pages/AddArticle/AddArticle'
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const  Routes  = [
    {path:"/" , element:<Home/>},
    {path:"/about" , element:<About/>},
    {path:"/article/:id" , element:<Article/>},    
    {path:"/editarticle/:id" , element:<EditArticle/>},
    {path:"/creatarticle" , element:<AddArticle/>},
    {path:"/login" , element:<Login/>},
    {path:"/register" , element:<Register/>},
]
export default Routes