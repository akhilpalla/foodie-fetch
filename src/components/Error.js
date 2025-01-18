import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOps!!!!</h1>
      <h2>Some Went Wrong!!!!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
