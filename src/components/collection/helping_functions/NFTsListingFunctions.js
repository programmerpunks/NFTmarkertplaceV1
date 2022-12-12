export default function get_NFTs_Filtered(SelectedBtn, NFTs) {
  let filtered_NFTs = [];
  if (SelectedBtn.SelectedBtn === "All") {
    filtered_NFTs = NFTs;
    return NFTs;
  } else {
    for (let index = 0; index < NFTs.length; index++) {
      if (NFTs[index]["category"] === SelectedBtn.SelectedBtn) {
        filtered_NFTs.push(NFTs[index]);
      }
    }
    return filtered_NFTs;
  }
}
