import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Grid
      height="300"
      width="300"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{ justifyContent: 'center', marginTop: '60px' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
