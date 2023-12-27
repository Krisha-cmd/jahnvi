import React,{useState} from 'react'
import './styles/Invitations.css'
import des1 from '../images/consanos.jpg'

const designs=[des1]


const Invitations = () => {

    const [selectedDesign, setSelectedDesign] = useState(null);

    const handleDesignClick = (design) => {
      setSelectedDesign(design);
    };
  
    return (
      <div className="design-gallery-container">
          <div className='Logo-design'><h1>Publications</h1></div>
        <div className="grid-container-d">
          {designs.map((design, index) => (
            <img
              src={design}
              key={index}
              className="design-item"
              onClick={() => handleDesignClick(design)}
            />
          ))}
        </div>
        <div className="selected-design-info">
          {selectedDesign && (
                  <img
                  className="selected-design-box"
                  src={selectedDesign}
                  />
          )}
        </div>
      </div>
    );
}

export default Invitations
