import API from "../axios";

const getNFTCollections = async (setNFTs, setLoading) => {
  try {
    const res = await API.get(`mockData/data.json`);
    if (res) {
      setNFTs(res.data.NFTCollectionsDate);
    }
  } catch (e) {
    console.log(e);
    setNFTs(null);
  } finally {
    setLoading(true);
  }
};

export default getNFTCollections;
