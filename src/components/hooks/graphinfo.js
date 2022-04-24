import { useEffect, useState } from "react";

const GraphInfo = () => {
  const [graphdatas, setgraphdata] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setgraphdata(data));
  }, []);

  return [graphdatas, setgraphdata];
};

export default GraphInfo;
