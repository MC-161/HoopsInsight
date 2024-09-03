import internalErr from "@/assets/404.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const InternalServerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="md:mr-20 max-w-screen-md mx-4 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="max-w-xs md:max-w-md h-auto"
            src={internalErr}
            alt="404 Not Found"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 ">
          <p className="text-primary-main font-bold text-3xl md:text-4xl text-center md:text-left w-96">
            OOOPS! PAGE NOT FOUND
          </p>
          <p className="text-primary-main font-medium text-xl md:text-2xl text-center md:text-left">
            Error 404 - Page Not Found
          </p>
          <p className="text-primary-main font-light text-base md:text-2xl text-center md:text-left">
            Sorry, the page you requested cannot be found. Please go back to the
            homepage.
          </p>
          <div className="pt-6 w-full">
            <div className="pt-10">
              <div className="rounded-md bg-gradient-to-r from-primary-gradient_purple to-primary-gradient_yellow p-0.5">
                <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                  <Button
                    onClick={() => navigate("/")}
                    className="text-lg font-manrope font-bold text-primary-main w-full bg-transparent hover:bg-gradient-to-r from-primary-gradient_purple via-primary-gradient_blue to-primary-gradient_yellow"
                  >
                    Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalServerPage;
