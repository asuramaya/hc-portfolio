import { data, map } from "jquery";
import "./Experience.css";
export default function Experience(props) {
  return (
    <>
      <div>{props.data.resume.work.map(mapWork)}</div>
    </>
  );
}

//map props.data.resume.work to a list of divs
//each div should have a company, title, years, and description

function mapWork(w) {
  console.log(w.description);
  return (
    <div style={{ flexDirection: "row" }}>
      <div className="experience">
        <span>
          <h1>
            {w.company}
            <br />
            {w.title}
            <br />
          </h1>
          <h1> {w.years}</h1>
        </span>
        <h2>{w.description}</h2>
      </div>
    </div>
  );
}
