import { Navigation } from "./Navigation";

export const AppHeader = ({ img }) => {
  return (
    <>
      <div className="app-header">
        <h1 className="logo">טבען-לי</h1>
        <Navigation />
      </div>
      <div style={{width:'100%', height:'25rem', zIndex:0, overflow:'hidden'}} >
        <img src={img} alt="" style={{width:'110%', height:'100%', objectFit:'cover', transform:'rotateZ(-5deg) translateY(-4rem) translateX(0rem)' }} />
      </div>
    </>
  );
};
