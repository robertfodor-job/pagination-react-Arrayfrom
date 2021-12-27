const paginate = followers => {
  const itemsPerPage = 9;
  const page = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    console.log(start);
    return followers.slice(start, start + itemsPerPage);
  });
  console.log(newFollowers);
  return newFollowers;
};

export default paginate;
