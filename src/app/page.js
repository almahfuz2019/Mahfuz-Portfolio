import BasicInfo from "./Components/Common/BasicInfo";
import AboutMe from "./Components/Common/AboutMe";
export default function page() {
  return (
    <div>
      <div className="lg:hidden block">
        <BasicInfo />
      </div>
      <div className="hidden lg:block">
        <AboutMe />
      </div>
    </div>
  );
}
