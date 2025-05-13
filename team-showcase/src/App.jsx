import React from 'react';
import TeamMemberCard from './Components/TeamMemberCard'

function App() {

  const team = [
    {name:'John doe',title:'Frontend Developer'},
    {name:'Ligma',title:'Backend Developer'},
  ];
  return (
    <div>
      <h1>Our team</h1>
      {team.map((member,index)=>(
        <TeamMemberCard key={index} name={member.name} title={member.title}/>
      )
      )}
    </div>

  );
}

export default App;
