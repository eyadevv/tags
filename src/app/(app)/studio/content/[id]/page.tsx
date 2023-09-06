const page = async ({ params }) => {
  return <div>{JSON.stringify(params.id)}</div>;
};
export default page;
