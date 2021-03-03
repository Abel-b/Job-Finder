import React, { useRef, useState } from "react";
import { jobData } from "./data";
import Buttons from "./components/Buttons";
import Deletes from "./components/Deletes";

export const JobsEdit = () => {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <>
      <div className="jobs">
        {jobData.map((data, j) => {
          return (
            <div key={j}>
              <JobEdit
                key={j}
                id={data._id}
                title={data.title}
                employer={data.employer}
                city={data.city}
                requirements={data.requirements}
                tasks={data.tasks}
                text={textSwitch}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const JobsForm = props => {
  const[jobs, setJobs] = useState(props.jobs)
  const form = useRef(null)

  const submit = e => {
    e.preventDefault()
    const data = new FormData(form.current)
    fetch('/api', {method: 'POST', body: data})
      .then(res=>res.json())
      .then(json=>setJobs(json.jobs))
  }
}

const JobEdit = ({ id, title, employer, city, requirements, tasks }) => {
  if (!title) return <div />;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Employer</th>
            <th>City</th>
            <th>Requirements</th>
            <th>Tasks</th>
          </tr>
          <tr>
            <td>
              {/* <input value={title} onChange={(e) => this.onChangeTitle(jobData, j, e)}/> */}
            </td>
            <td>
              <input text={employer} />
            </td>
            <td>
              <input value={city} />
            </td>
            <td>
              <textarea value={requirements} />
            </td>
            <td>
              <textarea value={tasks} />
            </td>
            <td>
              <button >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
