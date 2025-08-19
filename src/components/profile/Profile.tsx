import { useRef, useState } from "react";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import { Tooltip } from "../tooltip/Tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Profile = ({
  profileImage,
  name,
  date,
}: {
  profileImage: string;
  name: string;
  date: string;
}) => {
  const cardContentRef = useRef<HTMLDivElement>(null);
  const [share, setShare] = useState(false);
  const container = useRef(null);

  const mm = gsap.matchMedia();

  useGSAP(() => {
    if (cardContentRef.current) {
      gsap.from(cardContentRef.current.children, {
        opacity: 0,
        y: -200,
        duration: 1,

        ease: "power3.out",
      });
    }
  }, []);

  useGSAP(() => {
    const q = gsap.utils.selector(container);
    const profileShow = q('[data-id="profile"]');
    const shareShow = q('[data-id="share"]');

    /* 640px */
    mm.add("(max-width: 768px)", () => {
      if (share) {
        gsap.to(shareShow, {
          opacity: 1,
          display: "block",
          duration: 0.4,

          ease: "power3.out",
        });

        gsap.to(profileShow, {
          opacity: 0,
          display: "none",
          duration: 0.2,
          ease: "power2.in",
        });

        gsap.to(cardContentRef.current, {
          backgroundColor: "#48556A",
          duration: 0.4,
        });
      } else {
        gsap.to(profileShow, {
          opacity: 1,
          display: "block",
          duration: 0.4,

          ease: "power3.out",
        });

        gsap.to(shareShow, {
          opacity: 0,
          display: "none",
          duration: 0.2,
          ease: "power2.in",
        });

        gsap.to(cardContentRef.current, {
          backgroundColor: "#fff",
          duration: 0.4,
        });
      }
    });
  }, [share]);

  return (
    <>
      <div ref={cardContentRef} className={` pt-4 px-8 pb-4 rounded-b-xl h-20`}>
        <div
          ref={container}
          className="grid grid-cols-5 grid-rows-1 gap-2 place-items-center md:place-items-start"
        >
          <div className="w-full">
            <img
              data-id="profile"
              src={profileImage}
              className="rounded-full w-12"
              alt="user profile"
            />
            <h4
              data-id="share"
              className={`text-[#9DAEC2] text-sm font-[Manrope] md:hidden`}
            >
              SHARE
            </h4>
          </div>

          <div className={`col-span-3 w-full `}>
            <h4
              data-id="profile"
              className="text-sm  text-[#48556A] font-[Manrope]"
            >
              {name}
            </h4>
            <p
              data-id="profile"
              className="text-xs  text-[#9DAEC2] font-[Manrope]"
            >
              {date}
            </p>

            <div
              className="flex flex-row items-center justify-center"
              data-id="share"
            >
              <button className=" md:hidden rounded-full ml-4  h-8">
                <img src={facebook} className="w-5 h-5" alt="facebook" />
              </button>
              <button className=" md:hidden rounded-full ml-4  h-8">
                <img src={twitter} className="w-5 h-5" alt="twiter" />
              </button>
              <button className=" md:hidden rounded-full ml-4  h-8">
                <img src={pinterest} className="w-5 h-5" alt="pinterest" />
              </button>
            </div>
          </div>

          <div className="col-start-5 relative">
            <div className="absolute z-50 -top-22 -left-20 max-sm:hidden ">
              <Tooltip share={share} />
            </div>

            <button
              className={`${
                share ? "bg-[#6E8098]" : "bg-white "
              }  rounded-full  h-8 w-8 flex flex-row justify-center items-center`}
              onClick={() => setShare(!share)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  className={`w-6 h-6 ${
                    share ? "stroke-white" : "stroke-gray-500"
                  }`}
                  fill={`${share ? "#ffffff" : "#6a7282"}`}
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
