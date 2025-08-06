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
    <div>
      <img src={cover} className="cover" alt="cover" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Profile profileImage={profileImage} name={name} date={date} />
    </div>
  );
};
