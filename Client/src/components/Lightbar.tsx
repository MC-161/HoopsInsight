import PropTypes from 'prop-types';

const LightBar = ({ length = 'w-96', colors = ['from-violet-500', 'via-green-400', 'to-cyan-500'] }) => {
  // Create a gradient string based on the colors array
  const gradient = `bg-gradient-to-r ${colors.join(' ')}`;

  return (
    <div className="w-full flex justify-center pt-6">
      <div
        className={`h-4 ${length} ${gradient} shadow-xl shadow-teal-400 rounded-sm filter blur-[1px]`}
      ></div>
    </div>
  );
};

// Define prop types and default props for better validation
LightBar.propTypes = {
  length: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default LightBar;
