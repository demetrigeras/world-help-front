import React, { useState, useEffect } from 'react';
import Charity from "../components/Charity.jsx";
import { getCharities } from "../services/charities.js";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddCharity from "./addCharity.jsx";


export default function Home() {
  const [charities, setCharities] = useState([])
  const [showModal, setShowModal] = useState(false);

  const [domesticOnly, setDomesticOnly] = useState(false);
  const [interOnly, setInterOnly] = useState(false);
  const [educateOnly, setEducateOnly] = useState(false);
  const [youthOnly, setYouthOnly] = useState(false); 
  
  const fetchCharities = async () => {
    const allCharities = await getCharities()
    setCharities(allCharities)
  }

  useEffect(() => {
    fetchCharities()
  }, [domesticOnly, interOnly, educateOnly, youthOnly])

  const handleDomestic = () => {
    setDomesticOnly(!domesticOnly);
    if (buttonOne === "rgb(73, 132, 241, 0.7") {
      setButtonOne("rgb(19, 56, 132)")
    } else {
      setButtonOne("rgb(73, 132, 241, 0.7");
    }
  }

  const handleInter = () => {
    setInterOnly(!interOnly);
    if (buttonTWO === "rgb(73, 132, 241, 0.7") {
      setButtonTwo("rgb(19, 56, 132)")
    } else {
      setButtonTwo("rgb(73, 132, 241, 0.7");
    }
  }

  const handleEducate = () => {
    setEducateOnly(!educateOnly);
    if (buttonThree === "rgb(73, 132, 241, 0.7") {
      setButtonThree("rgb(19, 56, 132)")
    } else {
      setButtonThree("rgb(73, 132, 241, 0.7");
    }
  }

  const handleYouth = () => {
    setYouthOnly(!youthOnly);
    if (buttonFour === "rgb(73, 132, 241, 0.7"){
      setButtonFour("rgb(19, 56, 132)")
    } else {
      setButtonFour("rgb(73, 132, 241, 0.7")
    }
  }


  const filteredList = (domesticOnly || interOnly || educateOnly || youthOnly)
  ? charities.filter((charity) => 
  (domesticOnly && charity.category === "Domestic Needs") ||
  (interOnly && charity.category === "International Needs") ||
  (educateOnly && charity.category === "Education") ||
  (youthOnly && charity.category === "Youth")
  ) 
  : charities;

  const [buttonOne, setButtonOne] = useState("rgb(73, 132, 241, 0.7");
  const [buttonTWO, setButtonTwo] = useState("rgb(73, 132, 241, 0.7");
  const [buttonThree, setButtonThree] = useState("rgb(73, 132, 241, 0.7");
  const [buttonFour, setButtonFour] = useState("rgb(73, 132, 241, 0.7");

 
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddCharity = () => {
    openModal();
  };
  
  return (
    <div className="homescreen">
      <div className='home-top-container'>

            <div className="title">        
              <h1>World Help</h1>
            </div>

          <p className="subTitle">Click on any chairitable organization below to make a pledge!</p>

        <div className='browse-button'>
            <button onClick={handleDomestic} style={{background: buttonOne}}>
              {domesticOnly? "Domestic Needs" : "Domestic Needs"}
            </button>
            <button onClick={handleInter} style={{background: buttonTWO}}>
              {interOnly ? "International Needs" : "International Needs"}
            </button>
            <button onClick={handleEducate} style={{background: buttonThree}}>
              {educateOnly ? "Education" : "Education"}
            </button>
            <button onClick={handleYouth} style={{background: buttonFour}}>
              {youthOnly ? "Youth" : "Youth"}
            </button>
        </div>
        
        <div className='AddCharitypage'>
  Click here to add a Charity!
  <button className='addcharbutton' onClick={handleAddCharity}>Add Charity</button>
  {/* <button onClick={openModal}>Add Charity</button> */}
</div>
</div>
      <div className="charities">
        {filteredList.map((charity) => (
          <Charity key={charity._id} charity={charity} />
        ))}
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Add Charity Modal"
      >
        <AddCharity closeModal={closeModal} />
      </Modal>
    </div>
  );
}

