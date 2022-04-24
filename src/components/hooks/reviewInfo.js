import { useEffect, useState } from "react";

const ReviewInfo = () => {
  const [reviewdatas, setreviewdata] = useState([]);

  useEffect(() => {
    fetch("reviewdata.json")
      .then((res) => res.json())
      .then((data) => setreviewdata(data));
  }, []);

  return [reviewdatas, setreviewdata];
};

export default ReviewInfo;
