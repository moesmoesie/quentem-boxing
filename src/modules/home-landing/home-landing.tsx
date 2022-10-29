import HomeLandingType from "./home-landing.type";

const HomeLanding: React.FC<HomeLandingType> = (props) => {
  return (
    <section>
      <h1>{props.title}</h1>
    </section>
  );
};

export default HomeLanding;
