import React from "react";
import Postitem from "../Postitem/Postitem";
import "./Middlesection.css"
function Middlesection(){
      return (
        <div className="middle_part">
          <div className="posts_main_container">
            <div className="post_container">
              <Postitem/>  
            </div>
          </div>
        </div>
      );
    }
  export default Middlesection