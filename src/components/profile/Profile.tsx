import { useState } from "react";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import { Tooltip } from "../tooltip/Tooltip";

export const Profile = ({
  profileImage,
  name,
  date,
}: {
  profileImage: string;
  name: string;
  date: string;
}) => {
  const [share, setShare] = useState(false);
  return (
    <>
      <div
        className={` ${
          share ? " max-md:bg-[#48556A]" : " bg-white "
        }  pt-4 px-8 pb-4 rounded-b-xl h-20`}
      >
        <div className="grid grid-cols-5 grid-rows-1 gap-2 place-items-center md:place-items-start">
          <>
            <div className={`${!share ? " block" : " max-md:hidden "}`}>
              <img
                src={profileImage}
                className="rounded-full w-12 "
                alt="user profile"
              />
            </div>

            <div
              className={`col-span-3 ${!share ? " block" : " max-md:hidden "}`}
            >
              <h4 className="text-sm text-[#48556A] font-[Manrope]">{name}</h4>
              <p className="text-xs text-[#9DAEC2] font-[Manrope]">{date}</p>
            </div>
          </>

          <>
            <h4
              className={`hidden ${
                share ? " max-md:block" : "  "
              } text-[#9DAEC2] text-sm font-[Manrope]`}
            >
              SHARE
            </h4>

            <div
              className={`col-span-3 hidden  ${share ? " max-md:block" : " "}`}
            >
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
          </>

          <div className="col-start-5 relative">
            <div className="absolute z-50 -top-22 -left-20 ">
              <Tooltip share={share} />
            </div>

            <button
              className={` ${
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
