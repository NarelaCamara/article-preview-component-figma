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
    <div className="w-[327px] flex flex-col bg-white rounded-xl ">
      <img src={cover} className="rounded-t-xl" alt="cover" />
      <div className="p-8">
        <h1 className="text-xl text-[#48556A] pb-6 font-[Manrope]">{title}</h1>
        <p className="text-[#6E8098] text-sm font-[Manrope]">{description}</p>
      </div>

      <Profile profileImage={profileImage} name={name} date={date} />
    </div>
  );
};
