import NotFound from "../images/404.gif";
import "../components/css/notFound.css";

const NotFoundPage = () => {
  return( 
  <>
  <div className="imageContainer">
      <h1>&#127877; 404: Page Not Found &#127877;</h1>
  <img src={NotFound} />;
  </div>
  </>
  )
};

export default NotFoundPage;
