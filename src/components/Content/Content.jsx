import React, { useEffect, useState } from 'react';
import './Content.css';
import TravelList from '../TravelList/TravelList.jsx';

function Content() {

    const [travel, setTravel] = useState([]);

    const [Loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const url = "https://course-api.com/react-tours-project";

    const fetchData = () => {
        fetch(url)
          .then((res) => {
            if(!res.ok) {
                setLoading(false);
              throw Error("Data error while fetching....");
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setTravel(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(`Error message: ${err}`)
          })
      }
    
      useEffect(() => {
        fetchData();
      }, []);

      console.log(travel);

    const Delete = (id) => {
        
        const deleteTravel = travel.filter((travels) => {
                return travels.id !== id;
        });
        setTravel(deleteTravel);

        if(deleteTravel.length === 0){
            setRefresh(true);
        }else{
            setRefresh(false);
        }
    };

  return (
    <div className='travelAll'>
        {Loading && <div>Loading...</div>}
        {travel.length > 0 && <h1 className='travelh1'>Our Tours</h1>}
        {travel.length === 0 && !Loading && <h1 className='travelh1'>No Tours Left</h1>}
        {!travel && !Loading  && <div>Nema dostupnih putovanja</div>}
        {travel && (<TravelList travel={travel} Delete={Delete} /> )}
       

        {refresh && <div><button className='refresh' onClick={() => fetchData()}>Refresh</button></div>}
        
    </div>
  );
};

export default Content;