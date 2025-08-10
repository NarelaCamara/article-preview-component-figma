import { Profile } from "../profile/Profile";

export const Card = ({
  cover,
  title,
  description,
  profileImage,
  name,
  date,
}: {
  cover: string;
  title: string;
  description: string;
  profileImage: string;
  name: string;
  date: string;
}) => {
  return (
    <div className="sm:max-w-[327px] md:max-w-[608px]  lg:max-w-[730px]   flex flex-col md:flex-row bg-white rounded-xl ">
      <img
        src={cover}
        className="rounded-t-xl md:min-w-[229px] md:max-w-[283px]"
        alt="cover"
      />
      <div className="flex flex-col">
        <div className="p-8 bg-white">
          <h1 className="text-xl text-[#48556A] pb-6 font-[Manrope]">
            {title}
          </h1>
          <p className="text-[#6E8098] text-sm font-[Manrope]">{description}</p>
        </div>

        <Profile profileImage={profileImage} name={name} date={date} />
      </div>
    </div>
  );
};
