import { useState } from "react";

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
    <div>
      <img src={profileImage} className="user profilw" alt="user profilw" />
      <h4>{name}</h4>
      <p>{date}</p>
      <button onClick={() => setShare(true)}>Share</button>

      {share && (
        <div>
          <button>F</button>
          <button>T</button>
          <button>P</button>
        </div>
      )}
    </div>
  );
};
