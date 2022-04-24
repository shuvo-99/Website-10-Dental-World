import { useEffect, useState } from "react";

const HomeReviewInfo = () => {
  const [reviewdatas, setreviewdata] = useState([]);

  useEffect(() => {
    fetch("reviewdata.json")
      .then((res) => res.json())
      .then((data) => setreviewdata(data.slice(0, 3)));
  }, []);

  return [reviewdatas, setreviewdata];
};

export default HomeReviewInfo;
