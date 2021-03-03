import React, {useState} from "react";
import { jobData } from "./data";
import Buttons from "./components/Buttons";

export const Jobs = () => {
    const [textSwitch, setTextSwitch] = useState(true);
  return (
    <>
      <div className="jobs">
        {jobData.map((data, key) => {
          return (
            <div key={key}>
              <Job
                key={key}
                id={data._id}
                title={data.title}
                employer={data.employer}
                city={data.city}
                requirements={data.requirements}
                tasks={data.tasks}
                text = {textSwitch}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

function showHide() {
  var show = document.getElementById("info");
  if (show.style.display == "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
}

const Job = ({ id, title, employer, city, requirements, tasks }) => {
  if (!title) return <div />;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Employer</th>
            <th>City</th>
          </tr>
          <tr>
            <td>
              <h3>{title}</h3>
            </td>
            <td>
              <h3>{employer}</h3>
            </td>
            <td>
              <h3>{city}</h3>
            </td>
            <td>
              <Buttons req ={requirements} task = {tasks}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

