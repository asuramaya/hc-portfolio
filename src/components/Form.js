import "./Form.css";

export default function Form(resumeData) {
  return (
    <>
      <div className="Form">
        {resumeData.data.main.email}

        <br />
        {resumeData.data.main.phone}

        <br />
        {resumeData.data.main.address.city +
          ", " +
          resumeData.data.main.address.state +
          " " +
          resumeData.data.main.address.zip}
      </div>

    </>
  );
}

