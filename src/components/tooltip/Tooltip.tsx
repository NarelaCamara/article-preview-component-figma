import { useGSAP } from "@gsap/react";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import { useRef } from "react";
import gsap from "gsap";

export const Tooltip = ({ share }: { share: boolean }) => {
  const tooltip = useRef(null);

  useGSAP(() => {
    gsap.from(tooltip.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, [share]);

  return (
    <div ref={tooltip} className={`hidden ${share ? " md:block " : "  "}`}>
      <div
        className={`px-[38px] py-[16px]  bg-[#48556A] rounded-xl min-w-[248px]`}
      >
        <div className="grid grid-cols-4 grid-rows-1 gap-1  place-items-center ">
          <h4 className={`text-[#9DAEC2] text-sm font-[Manrope]`}>SHARE</h4>
          <div className="col-span-3">
            <button className="rounded-full ml-4  h-8">
              <img src={facebook} className="w-5 h-5" alt="facebook" />
            </button>
            <button className="rounded-full ml-4  h-8">
              <img src={twitter} className="w-5 h-5" alt="twiter" />
            </button>
            <button className="rounded-full ml-4  h-8">
              <img src={pinterest} className="w-5 h-5" alt="pinterest" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[100%] right-[56%] w-0 h-0 
    border-l-[12px] border-l-transparent 
    border-r-[12px] border-r-transparent 
    border-t-[12px] border-t-[#48556A]"
      ></div>
    </div>
  );
};
