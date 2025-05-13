import react from 'react';


const TeamMemberCard = ({name,title})=>{
    return(
        <div>
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    )
}

export default TeamMemberCard;