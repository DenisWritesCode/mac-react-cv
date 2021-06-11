export default function RenderWork({ seeWork, work }) {
    console.log(work);
  return (
    <div>
      {!seeWork &&
        // TODO: Iterate over Work and list out everything.
        work.map((job) => {
          return (
            <section key={job.index}>
              <p>Job Title: {job.jobTitle}</p>
              <p>Organisation: {job.organisation}</p>
              <p>Start date: {job.startDate}</p>
              <p>Stop Date: {job.stopDate}</p>
              <p>Currently Work Here: {job.workHere}</p>
              <p>Job Description: {job.jobDescription}</p>
            </section>
          );
        })}
    </div>
  );
}
