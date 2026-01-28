import TeamCard from "./TeamCard";

function TeamSection() {
  return (
    <section className="team-section container">
      <h2 className="team-title">Our Team</h2>
      <p className="team-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna.
      </p>

      <div className="team-row">
        <TeamCard img="/2-1.png" name="Rala Emaia" role="Senior Director" />
        <TeamCard img="/2-2.png" name="Jhon Smith" role="Senior Director" />
        <TeamCard img="/2-3.png" name="Rala Emaia" role="Senior Director" />
      </div>
    </section>
  );
}

export default TeamSection;
