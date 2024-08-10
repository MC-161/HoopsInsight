import loader from "@/assets/loader.svg"

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="bg-black fixed inset-0 z-50 flex items-center justify-center">
      <object className="h-screen relative" type="image/svg+xml" data={loader}></object>
      {message && <p className="text-white mt-4 text-lg absolute bottom-3">{message}</p>}
    </div>
  );
}
 
export default Loader;

