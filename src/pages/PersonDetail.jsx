import { useParams, useLocation, useNavigate } from "react-router-dom"

const PersonDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state:person } = useLocation();
    console.log(person)
    
  return (
    <div className="container text-center">
        <h3>{person.first_name} {person.last_name}</h3>
        <img src={person.avatar} alt="img" className="rounded" />
        <p>{person.email}</p>
        <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">Home</button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">Go Back</button>
      </div>
    </div>
  )
}

export default PersonDetail
