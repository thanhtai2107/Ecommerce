import { Helmet } from "react-helmet";
function Meta(props) {
  const { title } = props;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </>
  );
}

export default Meta;
