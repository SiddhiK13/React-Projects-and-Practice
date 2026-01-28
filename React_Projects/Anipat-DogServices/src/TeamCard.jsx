function TeamCard({ img, name, role }) {
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
      <div className="team-card">
        <div className="team-img">
          <img src={img} alt={name} />
        </div>

        <div className="team-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
