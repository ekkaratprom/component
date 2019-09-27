import React from 'react';
import './components/Components.css';
import TeamMember from './components/TeamMember';
import RoundButton from './components/RoundButton';
import iconSearch from './components/details/icon/iconSearch.png';
import member1 from './components/details/img/member1.png';
import member2 from './components/details/img/member2.png';
import member3 from './components/details/img/member3.png';
import SearchField from './components/SearchField';
import SideBar from './components/SideBar';



function App() {
  return (
  <div>

    {/* <h1 style={{margin:"0 0 0 15%"}}>Our team</h1>

    <div className="team-member-list">
      <TeamMember name="tanamet" role="CEO" image={member1} />
      <TeamMember name="ekkarat" role="COO" image={member2} />
      <TeamMember name="isoon" role="CTO" image={member3} />
      <TeamMember name="pk" role="Invester" image={member1} />
    </div>

    <div  style={{width:"200px" , padding:"20px"}}>
      <RoundButton >Generate</RoundButton>
    </div>

    <div style={{width:"200px" , padding:"20px"}}>
     <SearchField icon={iconSearch}/>
    </div> */}

    
    <SideBar/>
    


 
  </div>
    
    
      
    
  );
}

export default App;
