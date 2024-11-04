import { CONSTANTS } from "@/utilities/constants";
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="loading-circle" id="circle-1"></div>
          <div className="loading-circle" id="circle-2"></div>
        </div>
        <p>{CONSTANTS.LOADER.LOADING_TEXT}</p>
      </div>
    </div>
  );
};

export default Loader;