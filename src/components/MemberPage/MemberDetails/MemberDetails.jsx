import { useParams } from "react-router-dom";

const MemberDetails = () => {
  const { memberId } = useParams();
  return (
    <div className="text-2xl text-center px-5 py-3">Member : {memberId}</div>
  );
};

export default MemberDetails