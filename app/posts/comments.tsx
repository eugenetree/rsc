export const Comments = async () => {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1"
  ).then((response) => response.json());

  return <div>{JSON.stringify(comments)}</div>;
};
