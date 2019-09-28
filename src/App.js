import React , {useState} from 'react';
import './components/Components.css';
import TeamMember from './components/TeamMember';
import RoundButton from './components/RoundButton';
import iconSearch from './components/details/icon/iconSearch.png';
import member1 from './components/details/img/member1.png';
import member2 from './components/details/img/member2.png';
import member3 from './components/details/img/member3.png';
import SearchField from './components/SearchField';
import SideBar from './components/SideBar';
import TextField from './components/TextField'
import TitleField from './components/TitleField'
import RoundCornerButton from './components/RoundCornerButton'
import Content from './components/Content'
import Layout from './components/Layout';
import Modal from './components/Modal';
import RatioField from './components/RatioField';
import SelectionField from './components/SelectionField';
import ProjectList from './components/ProjectList';
import MenuIcon from './components/MenuIcon';
import SchemaTable from './components/SchemaTable';

function App() {

  let [size , setSize] = useState("200")
  let [open , setOpen] = useState(false)

  return (
    <div>

    <h1 style={{margin:"0 0 0 15%"}}>Our team</h1>

    <div className="team-member-list">
      <TeamMember name="tanamet" role="CEO" image={member1} />
      <TeamMember name="ekkarat" role="COO" image={member2} />
      <TeamMember name="isoon" role="CTO" image={member3} />
      <TeamMember name="pk" role="Invester" image={member1} />
    </div>

    <div  style={{width:"200px" , padding:"20px"}}>
      <RoundButton >Generate</RoundButton>
      <RoundCornerButton>Create</RoundCornerButton>
    </div>

    <div style={{width:"200px" , padding:"20px"}}>
     <SearchField icon={iconSearch}/>
    </div>

    <TitleField title="What size of your dick">
      <TextField placeholder="enter size of your dick" />
    </TitleField>
    <TitleField title="Application name">
      <TextField placeholder="enter application si i here ...." />
    </TitleField>

    <Modal onClose={()=>setOpen(false)} show={open}>test</Modal>
    <Layout>
      <SideBar shadow width={size+"px"}>
        <RoundButton onClick={()=>setOpen(true)} >show modal</RoundButton>
      </SideBar>
      <Content>
        <RoundButton onClick={()=>{setSize(size==="200" ? "0" : "200")}} >toggle sidebar</RoundButton>
      </Content>
    </Layout>

    <RatioField title="import socket.io" />
    <RatioField title="import kuy yai mak" />
    <SelectionField title="String" />
    <SelectionField title="Number" active />

      <ProjectList items={[{title:"hello" } , {title:"test"}]} onSelect={(id,item)=> console.log(id,item)} onMore={(id,item)=> console.log(id,item)} />

      <MenuIcon image={iconSearch} name="test" />

      <SchemaTable onClickAdd={()=>console.log("make it fuck")} items={[["id" , "id" , <button>delete</button>],["user" , "string" , <button>delete</button>],["name" , "string" , <button>delete</button>]]} />

    </div>
    
  );
}

export default App;
