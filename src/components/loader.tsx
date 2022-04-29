import { StyledLoader } from './styles/loader-styles';

function Loader() {
  return (
    <StyledLoader viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
    </StyledLoader>
  );
}

export default Loader;
