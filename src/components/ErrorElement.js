import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error has ocurred </h1>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
      <h2>{err.data}</h2>
    </div>
  );
};
export default Error;
