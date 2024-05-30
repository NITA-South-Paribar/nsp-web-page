import { useParams } from "react-router-dom";

const MemberDetails = () => {
  const { memberId } = useParams();
  return (
    <div className="text-4xl w-[50%] h-[480px] text-center mt-[20%] ml-[25%] py-3">Member : {memberId}</div>
  );
};

export default MemberDetails